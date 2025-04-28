
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

