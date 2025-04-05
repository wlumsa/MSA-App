

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
