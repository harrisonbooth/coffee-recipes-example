use coffee_recipes;

db.recipes.deleteMany({});

db.recipes.insertMany([
  {
    name: "Aeropress",
    time: "2:00",
    description: "Bloom for 30s. Pour rest. Steep for 1:30. Press."
  },
  {
    name: "Kalita",
    time: "3:00 - 3:30",
    description: "Bloom 50g for 30s. Pulse spiral pour 50g for 15s with 15s pauses to 325g water."
  }
]);
