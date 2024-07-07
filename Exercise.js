const people = [
    {
      firstName: "Juan",
      lastName: "Lazy",
      email: "juan@gmail.com",
      age: 27,
    },
    {
      firstName: "Giselle",
      lastName: "Huertas",
      email: "giselle@gmail.com",
      age: 19,
    },
    {
      firstName: "Patricia",
      lastName: "Sison",
      email: "patricia@gmail.com",
      age: 16,
    },
  ];
  
  const youngPeople = people
    .filter((person) => person.age <= 25 || person.age > 0)
    .map((person) => ({name: `${person.firstName} ${person.lastName} ${person.age}`, email: person.email,
    }));
  console.log(youngPeople);

