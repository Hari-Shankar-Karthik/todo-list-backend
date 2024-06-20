const mongoose = require("mongoose");
const Todo = require("./Todo");

mongoose
  .connect("mongodb://localhost:27017/todos")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

const seedTodos = [
  {
    task: "solve graph questions on leetcode",
    isCompleted: false,
  },
  {
    task: "make the cricket scorecard using react",
    isCompleted: false,
  },
  {
    task: "make to-do list using react",
    isCompleted: true,
  },
  {
    task: "solve wine fraud project in ai-ml",
    isCompleted: false,
  },
];

const seedDB = async () => {
  await Todo.deleteMany({});
  await Todo.insertMany(seedTodos);
  console.log("DB Seeded");
};

seedDB()
  .then(() => {
    mongoose.connection.close();
    console.log("Mongoose connection closed");
  })
  .catch((err) => {
    console.log("Error seeding DB", err);
  });
