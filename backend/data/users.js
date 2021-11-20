import bcrypt from "bcrypt";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },

  {
    name: "John Ripper",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];
