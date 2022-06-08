# JS_HotelGuest_Message
## How to Run this Program
### Requirements:
1. Javascript
2. Node.js
3. NPM Package Installer
If you do not have the node package "Prompt-Sync" installed, run the following code in the console:
`npm install prompt-sync`
### Running the Program
1. From the console in the home folder, run the following code:
`node main.js`
From here you will be able to enter the guest's personal information. Keep in mind that **Data You Enter Is Case Sensitive!**
If the guest's information can be found in the data, a greeting will be displayed for the guest, with their room number and the company they are staying at.
## Design Decisions
I decided to create a function (*messageTemplate*) that takes a first name (*firstName*), last name (*lastName*), and guest's company of choice (*company*) as arguments.
The user inputs the arguments in response to the prompts are given from a function (*userInput*). This function starts when the file is run in the console.
These inputs are plugged into our original function and if the data matches up properly, a copy of the message will be returned for the user. If not, a log will inform the user and return them to the prompts.
## Language Used and Why
I decided to use JavaScript for this program because of its fluidness and compatibility with many web browsers.
## Process for Verifying Correctness
As I created this program, I frequently tested its functionality by bugtesting each feature as it was completed. I tried many cases at each point, including entering multiple correct cases and others that could throw an error.
## Stretch Goals
I had a few different things that I had wanted to accomplish with this project that I sadly did not get time to finish. They are as such:
- Reading data from different JSON files rather than copying and pasting the data into the main JavaScript file.
- Allowing the user to customize the message template for the greeting they want to send.
- Creating an HTML User Interface to allow more program accessibility.