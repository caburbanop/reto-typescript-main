/* _____________ Aqui va tu codigo _____________ */

type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/* _____________ Casos de prueba  _____________ */

import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
  Expect<Equal<Expected3, MyOmit<Todo1, 'description' | 'completed'>>>,
];

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Todo1 {
  readonly title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}

interface Expected3 {
  readonly title: string;
}
