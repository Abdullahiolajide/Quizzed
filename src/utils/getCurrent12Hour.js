export default function getCurrentTime12Hour() {
    const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const day = days[now.getDay() - 1]
  
    hours = hours % 12;
    hours = hours ? hours : 12; 
  
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const currentTime = day +', ' + hours + ':' + formattedMinutes + ' ' + ampm;
  
    return currentTime;
  }