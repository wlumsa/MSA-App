import { supabase } from "@/lib/supabase";

//get the next prayer time here

export async function getNextPrayerTime() {
 
    const today = new Date();
    //get the current month and day
    const monthName = today.toLocaleString('default', { month: 'long' });
    const day = today.getDate()  ;

    const { data: monthData, error: monthError } = await supabase
      .from('prayer_timings_month')
      .select('id')
      .eq('month', monthName)
      .single();
  
    if (monthError) {
      console.error('Error fetching month:', monthError);
      return null;
    }

    //get the current time
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes()

    const currentTimeString = `${currentHour}:${currentMinute}`
    console.log(currentTimeString)

    const { data: dayData, error: dayError } = await supabase
      .from('prayer_timings_month_days')
      .select('*')
      .eq('_parent_id', monthData.id)
      .eq('day', day)
      .single();
  
    if (dayError) {
      console.error('Error fetching day:', dayError);
      return null;
    }
    let nextPrayer = dayData.prayer_times[0];
    console.log("next prayer time is: ", nextPrayer)
    for (let i = 0; i < dayData.prayer_times.length; i++) {
        const prayerTime = dayData.prayer_times[i];
        const prayerTimeString = prayerTime.time;
        if (prayerTimeString > currentTimeString) {
            nextPrayer = prayerTime;
            console.log("next prayer time is: ", nextPrayer)
        }
    }

    //acc for the next day



  
    return nextPrayer ;
}
  

export async function getPrayerTimingsForDay(index: number) {
 
    const today = new Date();
    //get the current month and day
    const monthName = today.toLocaleString('default', { month: 'long' });
    const day = today.getDate() + index ;

    const { data: monthData, error: monthError } = await supabase
      .from('prayer_timings_month')
      .select('id')
      .eq('month', monthName)
      .single();
  
    if (monthError) {
      console.error('Error fetching month:', monthError);
      return null;
    }
  

    const { data: dayData, error: dayError } = await supabase
      .from('prayer_timings_month_days')
      .select('*')
      .eq('_parent_id', monthData.id)
      .eq('day', day)
      .single();
  
    if (dayError) {
      console.error('Error fetching day:', dayError);
      return null;
    }
  
    return dayData;
  }
  

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


 