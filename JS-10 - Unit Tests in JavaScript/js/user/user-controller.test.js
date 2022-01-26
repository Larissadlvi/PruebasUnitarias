const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

//Parte 2, ejercicio 1 
test('Revisar que un usuario no esté en la lista de usuarios', () => {
  let user = new User(5678, "Germán", "german@gmail.com");
  let user2 = new User(2345, "Jazmín", "jaazminrm@gmail.com");
  userController.add(user);
  expect(userController.users).toContain(user);
  expect(userController.users).not.toContain(user2);
})

//Parte 2, ejercicio 2
test('remove user to userController', () => {    
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user);    
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

test('Encontrar usuario por email correctamente', () => {
  let user = new User(8976, "Denise", "denise1@gmail.com");
  userController.add(user);
  const foundUser = userController.findByEmail("denise1@gmail.com");
  expect(user.email === foundUser)
})