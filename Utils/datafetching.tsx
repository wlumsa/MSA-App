import { supabase } from "@/lib/supabase";

/*
 Fetches halal directory from the database.
 */
 export const getHalalDirectory = async () => {
    const { data, error } = await supabase.from("halal_directory").select("*");
  
    if (error) {
      console.error("Error fetching halal directory:", error);
      return [];
    }
  
    return data || [];
  };

//get the next prayer time here


//get events here


//get ayah here





