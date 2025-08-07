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

// https://tmqwruamuhsgfgevkdui.supabase.co/storage/v1/object/public/concert-card-images/iriesouljahn1