let alarm = [];

let newAlarmHour = document.getElementById("hours").value;
let newAlarmMin = document.getElementById("minutes").value;

let newAlarm = {
  hour: newAlarmHour,
  minute: newAlarmMin,
};

alarm.push(newAlarm);

// yahan se space

let alarmNewCard = document.getElementById("setnew-alarm");
// set new alarm open card
function setNewAlarm() {
  alarmNewCard.style.display = "flex";
}

function setHours() {
  document.getElementById("set-time").style.display = "flex";
  document.getElementById("set-minute").style.display = "none";
}

function setMinutes() {
  document.getElementById("set-time").style.display = "none";
  document.getElementById("set-minute").style.display = "flex";
}

// it is cancel button of u want to discard new alarm or if you want to set new alarm then press ok button and new alarm will be set
function okButton() {
  alarmNewCard.style.display = "none";
}
function cancelButton() {
  alarmNewCard.style.display = "none";
}

// it is toggleSnooze on/off button on card
let toggle_snooze = document.getElementById("toggle-snooze");
let isToggle = true;
function toggleSnooze() {
  if (isToggle) {
    toggle_snooze.style.justifyContent = "right";
    toggle_snooze.style.background = "rgb(2, 101, 2)";
    document.getElementById("slider-snooze").style.background = "white";
    isToggle = false;
  } else {
    toggle_snooze.style.justifyContent = "left";
    isToggle = true;
    toggle_snooze.style.background = "rgba(155, 201, 155, 0.806)";
    document.getElementById("slider-snooze").style.background =
      "rgb(165, 162, 162)";
  }
}
