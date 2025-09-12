import { supabase } from "@/lib/supabase";
import { timeToMinutes } from "./utils";
import {
  PrayerTiming,
  NextPrayerResponse,
  validatePrayerTiming,
  validateNextPrayerResponse,
} from "./types";

//get the next prayer time here

export async function getNextPrayerTime(): Promise<NextPrayerResponse | null> {
  try {
    const today = new Date();
    //get the current month and day
    const monthName = today.toLocaleString("default", { month: "long" });
    const day = today.getDate();

    const { data: monthData, error: monthError } = await supabase
      .from("prayer_timings_month")
      .select("id")
      .eq("month", monthName)
      .single();

    if (monthError) {
      console.error("Error fetching month:", monthError);
      throw new Error("Failed to fetch prayer month data");
    }

    //get the current time
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    const currentTimeString = `${currentHour}:${currentMinute}`;
    console.log(currentTimeString);

    const { data: dayData, error: dayError } = await supabase
      .from("prayer_timings_month_days")
      .select("*")
      .eq("_parent_id", monthData.id)
      .eq("day", day)
      .single();

    if (dayError) {
      console.error("Error fetching day:", dayError);
      throw new Error("Failed to fetch prayer day data");
    }
    console.log(dayData);

    // Validate the response
    if (!validatePrayerTiming(dayData)) {
      throw new Error("Invalid prayer timing data received");
    }

    //convert to array
    const prayerTimes = [
      { name: "Fajr", time: dayData.fajr, ampm: "AM" },
      { name: "Dhuhr", time: dayData.dhuhr, ampm: "PM" },
      { name: "Asr", time: dayData.asr, ampm: "PM" },
      { name: "Maghrib", time: dayData.maghrib, ampm: "PM" },
      { name: "Isha", time: dayData.isha, ampm: "PM" },
    ];

    let nextPrayer = null;
    let elapsedTime = 0;
    const currentTimeMins = timeToMinutes(
      currentTimeString,
      parseInt(currentTimeString.substring(0, 1)) >= 12 ? "PM" : "AM"
    );
    console.log("next prayer time is: ", nextPrayer);

    for (let i = 0; i < prayerTimes.length; i++) {
      const prayerTimeMins = timeToMinutes(
        prayerTimes[i].time,
        prayerTimes[i].ampm
      );
      elapsedTime = prayerTimeMins - currentTimeMins;
      if (prayerTimeMins > currentTimeMins) {
        nextPrayer = prayerTimes[i];
        console.log("next prayer time is: ", nextPrayer);
        const result = { nextPrayer, elapsedTime };

        // Validate the result
        if (!validateNextPrayerResponse(result)) {
          throw new Error("Invalid next prayer response");
        }

        return result;
      }
    }

    //get fajr time for next day
    if (nextPrayer == null) {
      const { data: nextDayData, error: nextDayError } = await supabase
        .from("prayer_timings_month_days")
        .select("*")
        .eq("_parent_id", monthData.id)
        .eq("day", day + 1)
        .single();
      if (nextDayError) {
        console.error("Error fetching next day:", nextDayError);
        throw new Error("Failed to fetch next day prayer data");
      }
      console.log(nextDayData);

      // Validate next day data
      if (!validatePrayerTiming(nextDayData)) {
        throw new Error("Invalid next day prayer timing data");
      }

      nextPrayer = { name: "Fajr", time: nextDayData.fajr, ampm: "AM" };
      const nextPrayerTimeMins = timeToMinutes(
        nextPrayer.time,
        nextPrayer.ampm
      );
      elapsedTime = nextPrayerTimeMins - currentTimeMins;
      console.log("next prayer time is: ", nextPrayer);

      const result = { nextPrayer, elapsedTime };

      // Validate the result
      if (!validateNextPrayerResponse(result)) {
        throw new Error("Invalid next prayer response");
      }

      return result;
    }

    return null;
  } catch (error) {
    console.error("Error in getNextPrayerTime:", error);
    throw error; // Re-throw to let React Query handle it
  }
}

export async function getPrayerTimingsForDay(
  index: number
): Promise<PrayerTiming | null> {
  try {
    const today = new Date();
    //get the current month and day
    const monthName = today.toLocaleString("default", { month: "long" });
    const day = today.getDate() + index;

    console.log(`Fetching prayer times for ${monthName} ${day}...`);

    const { data: monthData, error: monthError } = await supabase
      .from("prayer_timings_month")
      .select("id")
      .eq("month", monthName)
      .single();

    if (monthError) {
      console.error("Error fetching month:", monthError);
      throw new Error("Failed to fetch prayer month data");
    }

    const { data: dayData, error: dayError } = await supabase
      .from("prayer_timings_month_days")
      .select("*")
      .eq("_parent_id", monthData.id)
      .eq("day", day)
      .single();

    if (dayError) {
      console.error("Error fetching day:", dayError);
      throw new Error("Failed to fetch prayer day data");
    }

    // Validate the response
    if (!validatePrayerTiming(dayData)) {
      throw new Error("Invalid prayer timing data received");
    }

    console.log("Prayer times fetched successfully");
    return dayData;
  } catch (error) {
    console.error("Error in getPrayerTimingsForDay:", error);
    throw error; // Re-throw to let React Query handle it
  }
}

//get events here

export const fetchEvents = async () => {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false });
  console.log(data);
  if (error) {
    throw error;
  }
  return data;
};
export const fetchTodaysEvents = async () => {
  const today = new Date();
  const startOfDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  ).toISOString();
  const datepart = startOfDay.split("T")[0];
  const noon = datepart + "T12:00:00.000Z";
  console.log(startOfDay);

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("status", "published")
    .eq("date", noon)
    .order("created_at", { ascending: false });

  console.log(data);
  if (error) {
    throw error;
  }
  return data;
};

export async function getImageByID(id: string) {
  const { data, error } = await supabase
    .from("media")
    .select("filename")
    .eq("id", id)
    .single();
  if (error || !data?.filename) {
    console.error("Error fetching image:", error);
    return "";
  }

  const path = `media/${data.filename}`;
  const { data: storageData } = supabase.storage
    .from(process.env.EXPO_PUBLIC_S3_BUCKET || "default_bucket")
    .getPublicUrl(path);
  const publicUrl = storageData.publicUrl;

  return publicUrl;
}

//get ayah here
export async function getDailyReminder(id: string) {
  // Try exact id first
  const { data, error } = await supabase
    .from("daily_reminders")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) {
    throw error;
  }
  if (data) return data;

  // Fallback 1: if table has an `index` numeric column mapped 1..98
  const asNumber = Number(id);
  if (!Number.isNaN(asNumber)) {
    const { data: byIndex } = await supabase
      .from("daily_reminders")
      .select("*")
      .eq("index", asNumber)
      .maybeSingle();
    if (byIndex) return byIndex;
  }

  // Fallback 2: return a random published row to avoid empty UI
  const { data: anyRow } = await supabase
    .from("daily_reminders")
    .select("*")
    .limit(1)
    .maybeSingle();
  return anyRow ?? null;
}

export async function fetchHalalDirectory() {
  const { data, error } = await supabase.from("halal_directory").select("*");
  if (error) {
    throw error;
  }
  console.log(data);
  return data;
}
