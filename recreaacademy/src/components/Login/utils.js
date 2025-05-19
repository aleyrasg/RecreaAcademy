import supabase  from '../../services/supabaseClient'

export const signOut = async () => {
    const { error } = await supabase.auth.signOut()
}

export const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
        },
    })
    console.log(data)
};

export const getUser = async () => {
    const response = await supabase.auth.getSession();

    const user = {
        email: response?.data?.session?.user?.email ?? '',
        name: response?.data?.session?.user?.user_metadata?.name ?? '',
    }
    return user;
};
