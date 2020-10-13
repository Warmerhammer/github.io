class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = parseFloat(length).toFixed(2);
    this.price = parseFloat(price).toFixed(2);
    // console.log(this.title);
    this.cost();
    this.Summary();
  }

  cost() {
    const dividend = (this.length / this.price).toFixed(2);
    // console.log(`Length => ${this.length}`);
    // console.log(`You get ${this.dividend} minutes per dollar`);
    return dividend;
  }

  Summary() {
    const currentTitle = this.title;
    console.log(`Current title is ${currentTitle}`);
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Render {
  constructor(renderHookId, shouldRender = true) {
    // console.log('Called');
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

  render() {}

  createRootElement(tag, attributes) {
    const rootElement = document.createElement(tag);
    // console.log(this.hookId);
    // console.log(rootElement);
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class CourseItem extends Render {
  constructor(course, renderHookId) {
    super(renderHookId, false);
    this.course = course;
    // console.log(this.course.title);
    this.render();
  }

  render() {
    const dividend = (this.course.length / this.course.price).toFixed(
      2
    );

    const courseEl = this.createRootElement('li');
    courseEl.id = 'course-item';
    courseEl.className = 'course';
    courseEl.innerHTML = `
    <div> 
    <h2>${this.course.title}</h2>
    <p> Course Length: ${this.course.length} <br/>
    Course price:\$${this.course.price} </br>
    LengthPrice: ${dividend}`;
    if (
      this.course.numofExercises &&
      this.course.numofExercises > 0
    ) {
      courseEl.append(
        `Number of Exercises: ${this.course.numofExercises}`
      );
    }
    `</p>
    </div>
    `;
  }
}

class CourseList extends Render {
  constructor(renderHookId) {
    super(renderHookId, false);
    this.render();
    this.fetchCourses();
  }

  fetchCourses() {
    this.Courses = [
      new Course('JavaScript', '60:00', '-9.99'),
      new Course('HTML & CSS', '120:00', '-10.99'),
      new PracticalCourse('React', '90:00', '14.99', '5'),
      new TheoreticalCourse(
        'JS The Weird Parts',
        '3:00',
        '4.99',
        'value'
      ),
    ];
    this.renderCourses();
  }

  // log = [];
  // set negNum(val) {
  //   this.items = val;
  //   console.log(val);
  // }

  log = [];
  set current(val) {
    this.log = val;
  }

  get updatedNum() {
    const num = Math.abs(this.log[this.log.length - 1]);
    return num;
  }

  renderCourses() {
    const positivePrice = (neg) => {
      const updatePrice = [...this.log];
      updatePrice.push(neg);
      this.current = updatePrice;
      console.log(this.log);
    };

    for (const course of this.Courses) {
      let i = 0;
      if (course.price && parseFloat(course.price) <= 0) {
        const negPrice = parseFloat(course.price);
        console.log(negPrice);
        positivePrice(negPrice);
        alert(
          `You entered a price(${course.price}) for ${course.title} that is less than zero. We have updated the price to a positive number.`
        );
        course.price = this.updatedNum;
        console.log(this.updatedNum);
      }
      new CourseItem(course, 'course-list');
    }
  }

  render() {
    this.createRootElement('ul', [
      new ElementAttribute('id', 'course-list'),
    ]);
    if (this.courses && this.courses.length > 0) {
      this.renderCourses();
    }
  }
}

class PracticalCourse extends Course {
  constructor(title, length, price, num) {
    super(title, length, price);
    this.numofExercises = num;
    console.log(num);
  }
}

class TheoreticalCourse extends Course {
  constructor(title, length, price, val) {
    super(title, length, price);
    this.publish = val;
    // console.log(this.publish);
  }
}

class Syllabus extends Render {
  constructor() {
    super();
  }

  render() {
    new CourseList('app');
  }
}

class App {
  static init() {
    const course = new Syllabus();
    // console.log(course);
    // const courseList = new CourseList();
    // this.courseItem = courseList.Courses;
    // console.log(this.courseItem);
  }
}

App.init();
