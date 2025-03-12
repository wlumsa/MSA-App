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





