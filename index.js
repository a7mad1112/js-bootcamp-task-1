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