console.group("Task 1");

const student = {
  firstName: "Terry",
  lastName: "Clinton",
  isMale: "Boy",
  email: "john0@gmail.com",
  address: "90 Bedford St, Manhattan",
  outputAdress() {
    return this.address;
  },
  changeIsMale(otherIsMale) {
    this.isMale = otherIsMale;
  },
};

console.log(student.outputAdress());
student.changeIsMale("Girl");

console.groupEnd();

console.group("Task 2");

const department = {
  titleFaculty: "Факультет прикладних наук",
  facultyPartners: "Epam, Sigma, SoftSereve",
  link: "https://apps.ucu.edu.ua/",
  trainingProgram: "Компьютерные науки",
  email: "mscs@ucu.edu.ua",
  getFaculty(newTitle) {
    this.titleFaculty = newTitle;
  },
};

department.getFaculty("Faculty of Applied Sciences");

// const getFaculty = "titleFaculty";
// department[getFaculty] = "Faculty of Applied Sciences";

console.groupEnd();

console.group("Task 3");

function Books(author, title, yearOfPublishing, publishingHouse) {
  this.author = author;
  this.title = title;
  this.yearOfPublishing = yearOfPublishing;
  this.publishingHouse = publishingHouse;
}

const booksProto = {};

booksProto.calcBookAge = function () {
  return 2022 - this.yearOfPublishing;
};

Books.prototype = booksProto;

const book1 = new Books(
  "Charles Dickens",
  "A Christmas Carol. In Prose. Being a Ghost Story of Christmas",
  1843,
  "Chapman & Hall"
);

console.log(book1.calcBookAge());

console.groupEnd();
