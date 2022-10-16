interface Course {
  courseName: string,
  courseStart: Date,
  courseEnd: Date
}

const courses : Course[] = [
  {
    courseName: "Introduktion till Webbutveckling",
    courseStart: new Date("2022-09-05 01:00:00"),
    courseEnd: new Date("2022-10-09 23:59:59"),
  },
  {
    courseName: "Webbutveckling - HTML & CSS",
    courseStart: new Date("2022-10-10 01:00:00"),
    courseEnd: new Date("2022-11-06 23:59:59"),
  },
  {
    courseName: "Webbutveckling - JavaScript",
    courseStart: new Date("2022-11-07 01:00:00"),
    courseEnd: new Date("2022-12-04 23:59:59"),
  },
  {
    courseName: "Arbetsmetodik och Agila projektmetoder",
    courseStart: new Date("2022-12-05 01:00:00"),
    courseEnd: new Date("2023-01-08 23:59:59"),
  },
  {
    courseName: "Avancerad webbutveckling - JavaScript Backend",
    courseStart: new Date("2023-01-09 01:00:00"),
    courseEnd: new Date("2023-02-12 23:59:59"),
  },
  {
    courseName: "Interaktionsdesign och användbarhet",
    courseStart: new Date("2023-02-13 01:00:00"),
    courseEnd: new Date("2023-03-12 23:59:59"),
  },
  {
    courseName: "Avancerad webbutveckling - JavaScript Full Stack",
    courseStart: new Date("2023-03-13 01:00:00"),
    courseEnd: new Date("2023-05-21 23:59:59"),
  },
  {
    courseName: "Systemutveckling Java",
    courseStart: new Date("2023-08-21 01:00:00"),
    courseEnd: new Date("2023-09-17 23:59:59"),
  },
  {
    courseName: "Systemarkitektur",
    courseStart: new Date("2023-09-18 01:00:00"),
    courseEnd: new Date("2023-10-22 23:59:59"),
  },
  {
    courseName: "Backendutveckling och systemintegration",
    courseStart: new Date("2023-10-23 01:00:00"),
    courseEnd: new Date("2023-12-31 23:59:59"),
  },
  {
    courseName: "LIA",
    courseStart: new Date("2024-02-05 01:00:00"),
    courseEnd: new Date("2024-05-26 23:59:59"),
  },
  {
    courseName: "Examensarbete",
    courseStart: new Date("2023-05-22 01:00:00"),
    courseEnd: new Date("2024-06-06 23:59:59"),
  },
];

export default courses;