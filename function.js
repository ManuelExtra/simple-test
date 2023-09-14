const axios = require('axios')

beforeAll(() => initDatabase())
afterAll(() => closeDatabase())

const initDatabase = () => console.log('Database initialized...')
const closeDatabase = () => console.log('Database closed...')

const functions = {
  add: (num1, num2) => num1 + num2 + 1,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = {
      firstname: "Brad",
    };
    user["lastname"] = "Traversy";
    return user;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((error) => "error"),
};

module.exports = functions;
