
// types
export type Event = {
    name: string
    description: string
    date: string
    time: string
    location:string
    link?: string
    image_id?:string
  }

export type EventInfo = {
    name: string
    date: string
    time: string
}

  export type Place = {
    name: string
    description: string
    location:string
    category:string
    method:string
    link?: string
    image_id?:string
  }

export type Prayer = {
  name: string
  athan: string
  iqama: string
  icon: React.ReactNode
  isLastItem?: boolean
}

export type ButtonProps = {
    icon: React.ReactNode;
    type: string;
    link:string
    text?: string;
    lastItem?: boolean;
}
export type IconButtonProps = {
  icon: React.ReactNode;
  link:string
  text: string;

}

export type Reminder = {
    id: string
    english: string
    arabic: string
    reference: string
  
  }

// API Response Types
export interface PrayerTiming {
  fajr: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  day: number;
  _parent_id: string;
}

export interface NextPrayerResponse {
  nextPrayer: {
    name: string;
    time: string;
    ampm: string;
  };
  elapsedTime: number;
}

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

// Validation Functions
export function validatePrayerTiming(data: any): data is PrayerTiming {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof data.fajr === 'string' &&
    typeof data.dhuhr === 'string' &&
    typeof data.asr === 'string' &&
    typeof data.maghrib === 'string' &&
    typeof data.isha === 'string' &&
    typeof data.day === 'number'
  );
}

export function validateNextPrayerResponse(data: any): data is NextPrayerResponse {
  return (
    typeof data === 'object' &&
    data !== null &&
    data.nextPrayer &&
    typeof data.nextPrayer.name === 'string' &&
    typeof data.nextPrayer.time === 'string' &&
    typeof data.nextPrayer.ampm === 'string' &&
    typeof data.elapsedTime === 'number'
  );
}

