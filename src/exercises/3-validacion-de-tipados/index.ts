interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    type: 'user',
    name: 'Alvaro Castillo',
    age: 25,
    occupation: 'Ingeniero de Software',
  },
  {
    type: 'admin',
    name: 'Javier Castillo',
    age: 32,
    role: 'Estudiante',
  },
  {
    type: 'user',
    name: 'Maria Isabel Hernandez',
    age: 23,
    occupation: 'Abogada',
  },
  {
    type: 'admin',
    name: 'Jorge Perez',
    age: 64,
    role: 'Contador',
  },
];

function isAdmin(person: Person): person is Admin {
  return person.type === 'admin';
}

export function logPerson(person: Person) {
  let additionalInformation: string;
  if (isAdmin(person)) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
