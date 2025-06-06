import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const updateRecord = async (table, data, where) => {
  await supabase.from(table).update(data).match(where);
};

export const getTable = async (table, select = null) => {
  const { data } = await supabase.from(table).select(select);
  return data;
};

export const getRecord = async (table, id, value, select = null) => {
  const { data } = await supabase.from(table).select(select).eq(id, value);
  return data?.[0];
};

export const login = async (correo, contrasena) => {
  const { data } = await supabase.from('usuarios').select('id_usuario').match({correo ,contrasena}).not('isGoogleAcount', 'is', true);
  return data?.[0];
};

export const createRecord = async (table, data) => {
  return await supabase.from(table).insert(data);
};
