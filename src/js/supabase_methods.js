import { supabaseClient } from "./supabase_client.js"

export async function fetchConcertsData() {
    const { data, error } = await supabaseClient
        .from('concert_cards')
        .select('*')

    if (error) {
        console.error('Error fetching concerts:', error.message)
        return []
    }

    return data || []
}

export async function fetchConcertBySlug(slug)
{
    const {data, error} = await supabaseClient
    .from('concert_cards')
    .select('*')
    .eq('concert_slug', slug)
    .single()

    return data
}
