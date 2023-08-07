const users = require("./users.js");
// Task 1: Find the person with the most skills in the users object and print their name
/*
const findPersonMostSkills = (users) => {
  const names = Object.keys(users);
  // because the name is a key, we can store the key and the objects in array
  let maxPerson = [names[0], users[names[0]]];
  for (const key in users) {
    const userSkillsLength = users[key].skills.length;
    const maxPersonSkillsLength = maxPerson[1].skills.length;
    if (userSkillsLength > maxPersonSkillsLength) {
      maxPerson = [key, users[key]];
    }
  }
  return maxPerson;
};

const mostSkilledPerson = findPersonMostSkills(users);
console.log(`The person with the most skills is: ${mostSkilledPerson[0]}`);
*/


// Task 2: Count the number of logged-in users and users with points greater than or equal to 50, then print both counts.
/*
const loggedUsersCount = Object.keys(users).reduce((acc, curr) => users[curr].isLoggedIn && users[curr].points >= 50 ? acc + 1 : acc, 0)
console.log("Logged Person Count: " + loggedUsersCount)
*/


// Task 3: Find and print the names of people who are MERN stack developers from the users object.
// M => MongoDB
// E => Express
// R => React
// N => Node
/*
function findMernDevelopers(users) {
  const skillsRequired = ["MongoDB", "Express", "React", "Node"];
  const mernDevelopers = [];
  for (const key in users) {
    const { skills } = users[key];
    // check if all required skills exist:
    const check = skillsRequired.every((skillRequired) =>
      skills.includes(skillRequired)
    );
    if (check) {
      mernDevelopers.push(key);
    }
  }
  return mernDevelopers;
}

console.log("MERN stack developers:", findMernDevelopers(users));
*/

// Task 4: Return the users that are MERN Stack developers using High Order Function -> Filter().
/*
const skillsRequired = ["MongoDB", "Express", "React", "Node"];
const filteredUsers = Object.keys(users).filter(name => skillsRequired.every(skillRequired => users[name].skills.includes(skillRequired)));

console.log("MERN stack developers:", filteredUsers);
*/

// Task 5:  Add your name as a user in the users object, including your email, skills, age, login status,
// and points. Print the updated users object with your name added.

/*
const ahmed = {
  email: "ahmalawneh79@gmail.com",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "React",
    "Pug.js",
    "Json/Ajax",
    "MUI",
    "SASS",
    "Redux",
    "Recoil",
    "React testing RTL",
    "Jest",
    "typeScript",
    "storyBook",
    "ui/ux",
    "figma",
    "Node",
    "PostgresSql",
  ],
  age: 20,
  isLoggedIn: false,
  points: 40,
};

users.ahmed = ahmed;
console.log(users);
*/

// Task 6: Get all the keys or properties of the users object and print them.
/*
Object.keys(users).forEach((name) => {
  console.log(name);
});
*/

// Task 7: Get all the values of the users object and print them.
// print users
Object.keys(users).forEach((name, i) => {
  console.log(`\n\nUser ${i}: `);
  console.log(users[name]);
});

