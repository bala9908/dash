// // src/data/scheduleData.js
// const scheduleData = [
//   {
//     day: 'Mon',
//     date: 25,
//     times: ['11:00', '11:00', '11:00'],
//     clickedTime: null
//   },
//   {
//     day: 'Tue',
//     date: 26,
//     times: ['8:00', '9:00', '10:00'],
//     clickedTime: '9:00'
//   },
//   {
//     day: 'Wed',
//     date: 27,
//     times: ['12:00', '----', '1:00'],
//     clickedTime: null
//   },
//   {
//     day: 'Thu',
//     date: 28,
//     times: ['10:00', '11:00', '----'],
//     clickedTime: '11:00'
//   },
//   {
//     day: 'Fri',
//     date: 29,
//     times: ['----', '14:00', '16:00'],
//     clickedTime: '14:00'
//   },
//   {
//     day: 'Sat',
//     date: 30,
//     times: ['12:00', '14:00', '15:00'],
//     clickedTime: '12:00'
//   },
//   {
//     day: 'Sun',
//     date: 31,
//     times: ['9:00', '10:00', '11:00'],
//     clickedTime: '9:00'
//   }
// ];

// export default scheduleData;



// dateData.js

const dateData = [
  {
    day: "Mon",
    date: 25,
    times: ["10:00", "11:00", "12:00"],
    appointments: [false, false, false], // true = appointment exists
    isDisabled: false,
    isClicked:false
  },
  {
    day: "Tue",
    date: 26,
    times: ["8:00", "9:00", "10:00"],
    appointments: [false, true, false],
    isDisabled: false
  },
  {
    day: "Wed",
    date: 27,
    times: ["12:00", "----", "13:00"],
    appointments: [false, false, true],
    isDisabled: false
  },
  {
    day: "Thu",
    date: 28,
    times: ["10:00", "11:00", "----"],
    appointments: [false, true, false],
    isDisabled: false
    
  },
  {
    day: "Fri",
    date: 29,
    times: ["----", "14:00", "16:00"],
    appointments: [false, false, false],
    isDisabled: false
    
  },
  {
    day: "Sat",
    date: 30,
    times: ["12:00", "14:00", "15:00"],
    appointments: [true, false,false],
    isDisabled: false
    
  },
  {
    day: "Sun",
    date: 31,
    times: ["9:00", "10:00", "11:00"],
    appointments: [true, false, false],
    isDisabled: true
  },
];

export default dateData;
