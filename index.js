const users = require("./users.js");
// Task 1: Find the person with the most skills in the users object and print their name
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