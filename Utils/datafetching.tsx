import { supabase } from "@/lib/supabase";

//get the next prayer time here


//get events here

export const fetchEvents = async () => {
    const { data, error } = await supabase.from('events').select('*').eq("status", "published").order('created_at', {ascending: false})
    console.log(data)
    if (error) {
        throw error
    }
    return data
    }
export const fetchTodaysEvents = async () => {
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate()).toISOString();
    const datepart = startOfDay.split('T')[0]
    const noon = datepart + 'T12:00:00.000Z'
        console.log(startOfDay)

    const { data, error } = await supabase.from('events').select('*').eq("status", "published").eq("date" , noon ).order('created_at', {ascending: false})

    console.log(data)
    if (error) {
        throw error
    }
    return data
    }

    export async function getImageByID(id: string) {
        const { data, error } = await supabase.from("media").select("filename").eq("id", id).single();
        if (error || !data?.filename) {
            console.error("Error fetching image:", error);
            return "";
        }
    
        const path = `media/${data.filename}`;
        const { data: storageData } = supabase.storage.from(process.env.EXPO_PUBLIC_S3_BUCKET || "default_bucket").getPublicUrl(path);
        const publicUrl = storageData.publicUrl;
        
        return publicUrl;
    }
    
      
//get ayah here
export async function getDailyReminder(id:string) {
    const { data, error } = await supabase.from('daily_reminders').select('*').eq('id', id).single()
    if (error) {
        throw error
    }
    return data
}


export async function fetchHalalDirectory() {
    const { data, error } = await supabase.from('halal_directory').select('*')
    if (error) {
        throw error
    }
    console.log(data)
    return data
}


 