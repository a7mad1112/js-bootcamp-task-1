# js-bootcamp-task-1
This project involves working with a users object containing information about different users. Your goal is to complete the following tasks using JavaScript.

## Tasks
```
const users = require("./users.js");
```

### Task 1: Find the person with the most skills
```
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
```

### Task 2: Count the number of logged-in users and users with points greater than or equal to 50, then print both counts
```
const loggedUsersCount = Object.keys(users).reduce((acc, curr) => users[curr].isLoggedIn && users[curr].points >= 50 ? acc + 1 : acc, 0)
console.log("Logged Person Count: " + loggedUsersCount)
```

### Task 3: Find and print the names of people who are MERN stack developers from the users object.
M => MongoDB
E => Express
R => React
N => Node
```
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
```

### Task 4: Return the users that are MERN Stack developers using High Order Function -> Filter()
```
const skillsRequired = ["MongoDB", "Express", "React", "Node"];
const filteredUsers = Object.keys(users).filter(name => skillsRequired.every(skillRequired => users[name].skills.includes(skillRequired)));
console.log("MERN stack developers:", filteredUsers);
```

### Task 5:  Add your name as a user in the users object, including your email, skills, age, login status, and points. Print the updated users object with your name added.
```
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
```

### Task 6: Get all the keys or properties of the users object and print them.
```
Object.keys(users).forEach((name) => {
  console.log(name);
});
```

### Task 7: Get all the values of the users object and print them.
```
Object.keys(users).forEach((name, i) => {
  console.log(`\n\nUser ${i}: `);
  console.log(users[name]);
});
```

## Project Enhancement
Because we are working with nested objects, the sol is long and complex, so we can do one another sol.
We can copy users object and make array contain each objects.
This will be easier because the arrays easier to deal with.

```
const arrayUsers = Object.keys(users).map((name) => ({ name, ...users[name] }));
```

### Task 1: Find the person with the most skills in the users object and print their name
```
const findPersonMostSkills = function(users){
  return users.reduce((acc, curr) => curr.skills?.length > acc.skills?.length ? curr : acc, users[0])
}
const mostSkilledPerson = findPersonMostSkills(arrayUsers);
console.log(`The person with the most skills is: `, mostSkilledPerson);
```

### Task 2: Count the number of logged-in users and users with points greater than or equal to 50, then print both counts.
```
const loggedUsersCount = arrayUsers.reduce((acc, curr) => curr.isLoggedIn && curr.points >= 50 ? acc + 1 : acc, 0)
console.log("Logged Person Count: " + loggedUsersCount)
```

### Task 3 and 4: Return the users that are MERN Stack developers using High Order Function -> Filter().
```
const findMernDevelopers = (arrayUsers) => {
  const skillsRequired = ["MongoDB", "Express", "React", "Node"];
  return arrayUsers.filter(user => skillsRequired.every(skillRequired => user.skills.includes(skillRequired)))
};
console.log("MERN stack developers:", findMernDevelopers(arrayUsers));
```

### Task 5:  Add your name as a user in the users object, including your email, skills, age, login status,
// and points. Print the updated users object with your name added.
```
const ahmed = {
  name: "Ahmed Alawneh",
  email: "ahmalawneh79@gmail.com",
  skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "Pug.js", "Json/Ajax", "MUI", "SASS", "Redux", "Recoil", "React testing RTL", "Jest", "typeScript", "storyBook", "ui/ux", "figma", "Node", "PostgresSql"],
  age: 20,
  isLoggedIn: false,
  points: 40,
};
arrayUsers.push(ahmed);
console.log(arrayUsers);
```

### Task 6: Get all the keys or properties of the users object and print them.
now users become array so we cannot do that, but we can get keys of any user object
```
Object.keys(arrayUsers[0]).forEach((name) => {
  console.log(name);
});
```

### Task 7: Get all the values of the users object and print them.
now users become array so we cannot do that, but we can get values of any user object
```
Object.keys(arrayUsers[0]).forEach((name, i) => {
  console.log(`\n\n${name} key: `);
  console.log("Value: ", arrayUsers[0][name]);
});
```

## Usage
- Copy and paste the provided users object into your JavaScript code.
- Replace the comments in each task's code block with your actual JavaScript code to complete the tasks.

If you prefer to clone the repository and run the tasks using npm:
- Clone the repository: git clone git@github.com:a7mad1112/js-bootcamp-task-1.git
Navigate to the project directory: cd js-bootcamp-task-1
Run the tasks: use the follow command 'npm run dev'

## Users Object
```
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
```

