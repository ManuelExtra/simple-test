const functions = require("./function");

// test('Adds 2 + 2 to equal 4', () => {
//     expect(functions.add(2,2)).toBe(4)
// })

// notToBe
test("Adds 2 + 2 to NOT equal 4", () => {
  expect(functions.add(2, 2)).not.toBe(4);
});

// toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual
test("User should be Brad Traversy object", () => {
  expect(functions.createUser()).toEqual({
    firstname: "Brad",
    lastname: "Traversy",
  });
});

// Less than and greater than
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;

  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

// Arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// Working with async data
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual('Leanne Graham1')
//         })
// })

// Async await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
})

const nameCheck = () => console.log('Checking Name...');

describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is Jeff', () => {
        const user = 'Jeff'
        expect(user).toBe('Jeff');
    })
})