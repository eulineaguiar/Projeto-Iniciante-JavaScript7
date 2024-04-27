calculateTime = () => {
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    var dayNames = ["DOM", "SEG", "TER", "QUA", "QUI","SEX", "SÁB"];
  
    hour = hour % 12;
    hour = hour ? hour : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
  
    document.querySelector("#day").textContent = dayNames[dayNumber];
    document.querySelector("#hour").textContent = hour;
    document.querySelector("#minute").textContent = minute;
    document.querySelector("#ampm").textContent = ampm;
  
    setTimeout(calculateTime, 200);
  }
  
  window.addEventListener('load', calculateTime)