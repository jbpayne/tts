// Define data store
var appData = {
  name: 'Gmail',
  mailboxes: [
    {
      inbox: [
        {
          id: 1,
          from: "Indeed <alert@indeed.com>",
          replyto: "Indeed <do-not-reply@indeed.com>",
          to: "superCoolDude@gmail.com",
          date: "May 1, 2019, 4:52 AM",
          subject: "Front End Developer at CGI Veterans Jobs and 16 more web developer jobs for you!",
          body: "16 new web developer jobs\nFront-End Web Developer\nFINALSITE - Connecticut\nExperience with Responsive Web Design. We’re looking for a FrontEnd Web Developer with a passion for building great digital experiences that are functionally...\nEasily apply"
        },
        {
          id: 2,
          from: "Jodran Mor <jodran@mor.com>",
          replyto: "Jodran Mor <jodran@mor.com>",
          to: "superCoolDude@gmail.com",
          date: "May 3, 2019, 4:52 PM",
          subject: "Hi!",
          body: "How are you?"
        },
        {
          id: 3,
          from: "Indeed <alert@indeed.com>",
          replyto: "Indeed <do-not-reply@indeed.com>",
          to: "superCoolDude@gmail.com",
          date: "May 5, 2019, 1:02 PM",
          subject: "12 more web developer jobs for you!",
          body: "12 new web developer jobs\nFront-End Web Developer\nFINALSITE - Connecticut\nExperience with Responsive Web Design. We’re looking for a FrontEnd Web Developer with a passion for building great digital experiences that are functionally...\nEasily apply"
        },
        {
          id: 4,
          from: "Mamadou Wann <mamadou@wann.com>",
          replyto: "mamadou@wann.com",
          to: "superCoolDude@gmail.com",
          date: "May 7, 2019, 10:01 AM",
          subject: "Hello!",
          body: "How are you?"
        },
        {
          id: 5,
          from: "Indeed <alert@indeed.com>",
          replyto: "Indeed <do-not-reply@indeed.com>",
          to: "superCoolDude@gmail.com",
          date: "May 9, 2019, 8:52 AM",
          subject: "23 more web developer jobs for you!",
          body: "23 new web developer jobs\nFront-End Web Developer\nFINALSITE - Connecticut\nExperience with Responsive Web Design. We’re looking for a FrontEnd Web Developer with a passion for building great digital experiences that are functionally...\nEasily apply"
        },
      ]
    },
    {
      starred: [
        {
          id: "*1",
          from: "Indeed <alert@indeed.com>",
          replyto: "Indeed <do-not-reply@indeed.com>",
          to: "superCoolDude@gmail.com",
          date: "May 15, 2019, 4:52 AM",
          subject: "Front End Developer at CGI Veterans Jobs and 16 more web developer jobs for you!",
          body: "16 new web developer jobs\nFront-End Web Developer\nFINALSITE - Connecticut\nExperience with Responsive Web Design. We’re looking for a FrontEnd Web Developer with a passion for building great digital experiences that are functionally...\nEasily apply"
        },
      ]
    },
    {
      sent: [
        {
          id: "s1",
          from: "Mamadou Wann <mamadou@wann.com>",
          replyto: "mamadou@wann.com",
          to: "superCoolDude@gmail.com",
          date: "May 15, 2019, 4:52 AM",
          subject: "Hello!",
          body: "How are you?"
        },
        {
          id: "s2",
          from: "Jodran Mor <jodran@mor.com>",
          replyto: "Jodran Mor <jodran@mor.com>",
          to: "superCoolDude@gmail.com",
          date: "May 1, 2019, 4:52 AM",
          subject: "Hi!",
          body: "How are you?"
        },
        {
          id: "s3",
          from: "superCoolDude@gmail.com",
          replyto: "superCoolDude@gmail.com",
          to: "superCoolDude@gmail.com",
          date: "May 14, 2019, 11:11 AM",
          subject: "Test",
          body: "Does my email work?"
        },
      ]
    },
  ],
  contacts: [
    {
      id: 1,
      firstName: "Mamadou",
      lastName: "Wann",
      address: "mamadou@wann.com"
    },
    {
      id: 2,
      firstName: "Jodran",
      lastName: "Mor",
      address: "jodran@mor.com"
    },
    {
      id: 3,
      firstName: "Indeed",
      lastName: null,
      address: "alert@indeed.com"
    },
  ]

}

// Shorten console.log

const log = (x) => {console.log(x)};

// Get a list of inbox names

log("\nNames in inbox:\n");
for (email of appData.mailboxes[0].inbox) {
  log(email.from.split('<')[0])
}

// Get a list of emails

log("\nEmails by subject:\n");
for (email of appData.mailboxes[0].inbox) {
  log(`From: ${email.from.split('<')[0]}\nSubject: ${email.subject}\n`);
}

// Get the text of the second email in the visible list

log("\nThe second email is:\n");
log(appData.mailboxes[0].inbox[1]);

// Mark an email as sent

log("\nNow that email is sent:\n");
let newArrayLength = appData.mailboxes[2].sent.push(appData.mailboxes[0].inbox[1]);
appData.mailboxes[2].sent[newArrayLength-1].id = `s${+(appData.mailboxes[2].sent[newArrayLength-2].id.split("s")[1]) + 1}`;
log(appData.mailboxes[2])

// Add a draft email to the drafts mailbox

log("\nAdd email to drafts:\n");
appData.mailboxes.push({drafts: [appData.mailboxes[0].inbox[1]]});
appData.mailboxes[3].drafts[0].id = "d1";
log(appData.mailboxes[3]);