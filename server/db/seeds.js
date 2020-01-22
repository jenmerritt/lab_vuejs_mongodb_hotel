use hotel;
db.dropDatabase();

db.guests.insertMany([
  {
    name: "Harry Potter",
    email: "harry.potter@hogwarts.com",
    status: true
  },
  {
    name: "Ron Weasley",
    email: "ron.weasley@hogwarts.com",
    status: false
  },
  {
    name: "Hermione Grainger",
    email: "hermione.grainger@hogwarts.com",
    status: true
  }
]);
