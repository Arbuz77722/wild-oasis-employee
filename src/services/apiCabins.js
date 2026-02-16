import supabase, { supabaseUrl } from './supabase';

export async function createEditCabin(newCabin, id) {
  const imageName = `${Date.now()}_${Math.floor(Math.random() * 1000)}-${
    newCabin.image.name
  }`.replaceAll('/', '');

  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from('cabins');

  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  if (id) query = query.upsert({ ...newCabin, image: imagePath, id }).select();

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error('Cabins could not be created');
  }

  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.log(storageError);
    throw new Error('Cabins could not be uploaded and cabin was not created');
  }
  return data;
}

export async function getCabins({ filter, sortBy }) {
  let query = supabase.from('cabins').select('*');

  if (filter) {
    query = query[filter.method || 'eq'](filter.field, filter.value);
  }

  if (sortBy && sortBy.field) {
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === 'asc',
    });
  }

  let { data, error } = await query;
  if (error) {
    console.log(error);
    throw new Error('Cabins could not be loaded');
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);
  if (error) {
    console.log(error);
    throw new Error('Cabins could not be deleted');
  }
  return data;
}
