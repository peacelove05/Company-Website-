
const activityForm = document.getElementById('activity-form');
const activityInput = document.getElementById('activity');
const monthYearLabel = document.getElementById('month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const calendarGrid = document.querySelector('.calendar-grid');
const calendarDays = document.querySelector('.calendar-days');

let currentDate = new Date();
let activities = {};  


const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


