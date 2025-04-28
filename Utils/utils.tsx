

// function to get id number of ayah/hadith based on date
export default function getReminderId() {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const id = (date * month * year) % 98  ;
    console.log("id", id);
    return id.toString();
}

//convert time to minutes
export function timeToMinutes(timeString:string, ampm:string) {
    const [hours, minutes] = timeString.split(':').map(Number);
  
    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
      return "Invalid time format";
    }
    if(ampm == "PM") {
        return 720 + hours * 60 + minutes
    }
  
    return hours * 60 + minutes;
  }