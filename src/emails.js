const d1 = new Date(2020, 11, 24, 10, 33);
const d2 = new Date(2020, 11, 25, 10, 33);
const d3 = new Date(2020, 11, 26, 10, 33);
const d4 = new Date(2020, 11, 27, 10, 33);
const d5 = new Date(2020, 12, 15, 10, 33);
const d6 = new Date(2020, 12, 16, 10, 33);
const d7 = new Date(2020, 12, 24, 10, 33);
const d8 = new Date(2020, 12, 26, 10, 33);
const d9 = new Date(2021, 1, 27, 10, 33);
const d10 = new Date(2021, 1, 27, 11, 33);

const emails = [
  {
    id: 1,
    data: {
      from: "Bob",
      to: "Joe",
      subject: "Hi",
      date: d1,
      replies: 2,
      attachment: true,
      message: "Hi Bob. How are you?",
      time: "12:45",
    },
  },

  {
    id: 2,
    data: {
      from: "Yoko",
      to: "email@email.com",
      subject: "Email are great",
      date: d3,
      replies: 0,
      attachment: true,
      message: "Emails are so cool.",
      time: "12:45",
    },
  },
  {
    id: 3,
    data: {
      from: "ttt@ttt.com",
      to: "abc@gmail.com",
      subject: "We Like Gmail",
      date: d4,
      replies: 2,
      attachment: false,
      message: "Gmail is very convenient!",
      time: "12:45",
    },
  },
  {
    id: 4,
    data: {
      from: "bbb@ggg.com",
      to: "fff.rrr@com",
      subject: "[ HR-888 ] Notice of official announcement",
      date: d5,
      replies: 3,
      attachment: true,
      message:
        "This is a notice of an important official announcement. Thanks for reading",
      time: "12:45",
    },
  },
  {
    id: 5,
    data: {
      from: "ttt@ttt.com",
      to: "www.@ww.com",
      subject: "Install this great new update",
      date: d6,
      replies: 0,
      attachment: false,
      message: "Install update abc and you will be so happy.",
      time: "12:45",
    },
  },
  {
    id: 6,
    data: {
      from: "zzz.zzz@com",
      to: "yyy.yyy.com",
      subject: "Meeting",
      date: d7,
      replies: 1,
      attachment: false,
      message: "Please not the meeting has been canceled.",
      time: "12:45",
    },
  },
  {
    id: 7,
    data: {
      from: "qqq@qqq.com",
      to: "vvv@vvv.com",
      subject: "Office party",
      date: d8,
      replies: 0,
      attachment: true,
      message: "Please bring the following items(attached) to the party.",
      time: "12:45",
    },
  },
  {
    id: 8,
    data: {
      from: "ddd@ddd.com",
      to: "fff@fff.com",
      subject: "Work from home",
      date: d9,
      replies: 0,
      attachment: false,
      message: "All employees should work from home until further notice.",
      time: "12:45",
    },
  },
  {
    id: 9,
    data: {
      from: "eee@eee.com",
      to: "hhh@hhh.com",
      subject:
        "Long title to show ellepsis works very long blah blah blaah super long title very looooooooooong",
      date: d10,
      replies: 0,
      attachment: false,
      message: "Please start working on abc projects for def company. ",
      time: "12:45",
    },
  },
  {
    id: 10,
    data: {
      from: "Bill",
      to: "Jane",
      subject: "I love you! ",
      date: d2,
      replies: 0,
      attachment: false,
      message: "I love you!",
      time: "12:45",
    },
  },
];

export default emails;
