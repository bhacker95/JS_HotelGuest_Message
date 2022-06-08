// Import Modules
const prompt = require("prompt-sync")();


// Sample Data
let guests = [
    {
      "id": 1,
      "firstName": "Candy",
      "lastName": "Pace",
      "reservation": {
        "roomNumber": 529,
        "startTimestamp": 1486654792,
        "endTimestamp": 1486852373
      }
    },
    {
      "id": 2,
      "firstName": "Morgan",
      "lastName": "Porter",
      "reservation": {
        "roomNumber": 385,
        "startTimestamp": 1486612719,
        "endTimestamp": 1486694720
      }
    },
    {
      "id": 3,
      "firstName": "Bridgett",
      "lastName": "Richard",
      "reservation": {
        "roomNumber": 141,
        "startTimestamp": 1486520344,
        "endTimestamp": 1486769616
      }
    },
    {
      "id": 4,
      "firstName": "Melisa",
      "lastName": "Preston",
      "reservation": {
        "roomNumber": 417,
        "startTimestamp": 1486614763,
        "endTimestamp": 1486832543
      }
    },
    {
      "id": 5,
      "firstName": "Latoya",
      "lastName": "Herrera",
      "reservation": {
        "roomNumber": 194,
        "startTimestamp": 1486605110,
        "endTimestamp": 1486785126
      }
    },
    {
      "id": 6,
      "firstName": "Hewitt",
      "lastName": "Hopper",
      "reservation": {
        "roomNumber": 349,
        "startTimestamp": 1486660637,
        "endTimestamp": 1486788273
      }
    }
  ];

let companies = [
    {
      "id": 1,
      "company": "Hotel California",
      "city": "Santa Barbara",
      "timezone": "US/Pacific"
    },
    {
      "id": 2,
      "company": "The Grand Budapest Hotel",
      "city": "Republic of Zubrowka",
      "timezone": "US/Central"
    },
    {
      "id": 3,
      "company": "The Heartbreak Hotel",
      "city": "Graceland",
      "timezone": "US/Central"
    },
    {
      "id": 4,
      "company": "The Prancing Pony",
      "city": "Bree",
      "timezone": "US/Central"
    },
    {
      "id": 5,
      "company": "The Fawlty Towers",
      "city": "Torquay",
      "timezone": "US/Eastern"
    }
  ];
  

let message = "";
  // Declare function for message template output
function messageTemplate(firstNameInput, lastNameInput, companyInput) {
  // Check if credentials match
    let nameCheck = guests.find(guest => guest.lastName === lastNameInput);
    let companyCheck = companies.find(co => co.company === companyInput);
  // Input verification
    if (nameCheck.firstName == firstNameInput && nameCheck.lastName == lastNameInput) {
      if (companyCheck.company == companyInput) {
  // Initialize greeting
        let timeGreeting = "";
  // Format time for company timezone
        let greetTimeZone = companyInput.timezone;
        let localTime = new Date().toLocaleTimeString('en-US', {timeZone: greetTimeZone});
  // Add 12 to hours if time is PM
        if (localTime.includes("PM")) {
          localTime = parseInt(localTime.split(':')[0], 10) + 12;
        }
        else {
          localTime = parseInt(localTime.split(':')[0], 10);
        }
  // Customize greeting based on time
        if (localTime >= 5 && localTime < 12) {
          timeGreeting = "Good morning";
        }
        else if (localTime >= 12 && localTime < 17) {
          timeGreeting = "Good afternoon";
        }
        else if (17 <= localTime <= 23 || 0 <= localTime < 5) {
          timeGreeting = "Good evening";
        }
  // Find Index for Guest in Array for Room Number      
      let roomIndex = guests.findIndex(guest => guest.firstName == firstNameInput && guest.lastName == lastNameInput);
      let room = guests[roomIndex].reservation['roomNumber'];
      message = timeGreeting + " " + firstNameInput + ", and welcome to " + companyInput + "! Room " + room.toString() + "is now ready for you. Enjoy your say, and let us know if you need anything.";
      console.log(message);
      }
       else {
         console.log('Incorrect Company Input');
      }
    }
    else {
      console.log('Incorrect Input');
    }
  }

// messageTemplate("Candy","Pace","Hotel California");

// Use Prompt-Sync Module from above to Have User Input Data
let firstName = "";
let lastName = "";
let company = "";


function userInput() {
  firstName = prompt("What is the guest's first name?");
  console.log("Hi " + firstName);
}

userInput();