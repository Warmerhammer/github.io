class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = 'Max';

  constructor() {
    super();
    this.age = 30;
  }

  greet() {
    console.log(
      'Hi, I am ' +
        this.name +
        ' and I am ' +
        this.age +
        ' years old.'
    );
  }
}

// function Person() {
//   this.age = 30;
//   this.name = 'Max';
//   this.greet = function () {
//     console.log(
//       'Hi, I am ' +
//         this.name +
//         ' and I am ' +
//         this.age +
//         ' years old.'
//     );
//   };
// }

// // Person.prototype = {
// //   printAge() {
// //     console.log(this.age);
// //   },
// // };

// Person.prototype.printAge = function () {
//   console.log(this.age);
// }

// console.dir(Person);

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p.__proto__);
// console.log(p.toString());
// const p2 = new p.__proto__.constructor();
// console.dir(Object.prototype);

// const p = new Person();
// const p2 = new Person();

// console.log(p.prototype === p2.prototype);

const course = {
  title: 'JavaScript - The Complete Guide',
  rating: 5,
};

// console.log(Object.getPrototypeOf(course));

Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course, {})
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: 'Max',
      writeable: true,
    },
  }
);

Object.defineProperty(student, 'progress', {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writeable: false,
});

console.log(student);
course.printRating();
