// let num = 45;
// let username = "Alice";
// let admin = true;
// let hasAccess = null;

// localStorage.setItem("number", num);
// localStorage.setItem("username", username);
// localStorage.setItem("isAdmin", admin);
// localStorage.setItem("access", hasAccess);

// const friends = ["Greg", "Bob", "Joe"];

// localStorage.setItem("userFriends", friends);

// const userData = {
//   id: 9384726,
//   city: "Tokio",
// };

// const result = JSON.stringify(userData);

// localStorage.setItem("userdata", result);

// const userData = localStorage.getItem("userdata");

// const result = JSON.parse(userData);
// console.log(result);
// console.log(result.city);
// console.log(result.id);

// const result = localStorage.getItem("userData");
// console.log(result);

// const numbers = [4, 2, 5, 7, 4, 3];

// localStorage.setItem("ListOfNumbers", numbers);

// const list = localStorage.getItem("ListOfNumbers");
// console.log(list);

// const userData = [
//   4,
//   "hello",
//   { name: "Alice", age: 24 },
//   { name: "Gerg", age: 25 },
//   { name: "Mikl", age: 89 },
// ];

// localStorage.setItem("userData", JSON.stringify(userData));

// const getUserData = localStorage.getItem("userData");
const getUserData = JSON.parse(localStorage.getItem("userData"));

console.log(getUserData);
