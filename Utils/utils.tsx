

// function to get id number of ayah/hadith based on date
export default function getReminderId() {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1; // 1..12 to avoid 0 in January
    const year = today.getFullYear();
    const idNumber = ((date * month * year) % 98) + 1; // 1..98 stable range
    console.log("id", idNumber);
    return idNumber.toString();
}

//convert time to minutes
export function timeToMinutes(timeString:string, ampm:string) {
    const [hours, minutes] = timeString.split(':').map(Number);

    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
      return -1;
    }
    if(ampm == "PM") {
        return 720 + hours * 60 + minutes
    }

    return hours * 60 + minutes;
  }
