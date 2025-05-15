// 1 masala

function addStudent(array, student) {
  return array.concat([student]);
}

const data1 = [
  { id: 1, name: "Ali", grade: 85 },
  { id: 2, name: "Zarina", grade: 90 },
];
const newStudent1 = { id: 3, name: "Kamola", grade: 88 };
const result1 = addStudent(data1, newStudent1);
console.log(result1);

// 2 masala

function addTasks(array, priority) {
  return array.concat([
    { id: array.length + 1, task: "Task 3", priority },
    { id: array.length + 2, task: "Task 4", priority },
  ]);
}

const data2 = [
  { id: 1, task: "Email yozish", priority: "high" },
  { id: 2, task: "Xarid qilish", priority: "low" },
];
const result2 = addTasks(data2, "medium");
console.log(result2);

// 3 masala

function addProduct(array, product) {
  return array.concat([{ id: array.length + 1, ...product }]);
}

const data3 = [
  { id: 1, name: "Telefon", price: 500 },
  { id: 2, name: "Noutbuk", price: 1000 },
];
const newProduct3 = { name: "Planshet", price: 300 };
const result3 = addProduct(data3, newProduct3);
console.log(result3);

// 4 masala

function addAge(array, currentYear) {
  return array.map((item) => {
    return { ...item, age: currentYear - item.birthYear };
  });
}

const data4 = [
  { name: "Zilola", birthYear: 1995 },
  { name: "Jasur", birthYear: 2000 },
];
const result4 = addAge(data4, 2025);
console.log(result4);

// 5 masala

function addBook(array, book) {
  return [...array, book];
}

const data5 = [
  { id: 1, title: "OвЂtgan kunlar", author: "Abdulla Qodiriy" },
  { id: 2, title: "Mehrobdan chayon", author: "Abdulla Qodiriy" },
];
const newBook5 = { id: 3, title: "Navoiy", author: "AybeРє" };
const result5 = addBook(data5, newBook5);
console.log(result5);

// 6 masala

function addEvents(array, date) {
  return array.concat([
    { id: array.length + 1, event: "Event 3", date },
    { id: array.length + 2, event: "Event 4", date },
  ]);
}

const data6 = [
  { id: 1, event: "YigвЂilish", date: "2025-01-01" },
  { id: 2, event: "Seminar", date: "2025-01-02" },
];
const result6 = addEvents(data6, "2025-01-03");
console.log(result6);

// 7 masala

function addEmployee(array, employee) {
  return [...array, employee];
}

const data7 = [
  { id: 1, name: "Oybek", department: "IT" },
  { id: 2, name: "Nargiza", department: "HR" },
];
const newEmployee7 = { id: 3, name: "Shaxzod", department: "Marketing" };
const result7 = addEmployee(data7, newEmployee7);
console.log(result7);

// 8 masala

function addReview(array, review) {
  return [...array, review];
}

const data8 = [
  { id: 1, product: "Telefon", comment: "Ajoyib!" },
  { id: 2, product: "Telefon", comment: "Yaxshi" },
];
const newReview8 = { id: 3, product: "Telefon", comment: "ZoвЂr!" };
const result8 = addReview(data8, newReview8);
console.log(result8);

// 9 masala

function filterByPrice(array, minPrice) {
  return array.filter((item) => item.price > minPrice);
}

const data9 = [
  { id: 1, name: "Telefon", price: 500 },
  { id: 2, name: "Noutbuk", price: 1000 },
  { id: 3, name: "Planshet", price: 300 },
];
const result9 = filterByPrice(data9, 600);
console.log(result9);

// 10 masala

function findByCity(array, city) {
  return array.find((item) => item.city === city);
}

const data10 = [
  { id: 1, name: "Dilnoza", city: "Toshkent" },
  { id: 2, name: "Olim", city: "Samarqand" },
  { id: 3, name: "Madina", city: "Toshkent" },
];
const result10 = findByCity(data10, "Toshkent");
console.log(result10);

// 11 masala

function checkOverdue(array, currentDate) {
  return array.some((item) => new Date(item.dueDate) < new Date(currentDate));
}

const data11 = [
  { id: 1, task: "Email yozish", dueDate: "2025-01-01" },
  { id: 2, task: "Xarid qilish", dueDate: "2025-01-10" },
];
const result11 = checkOverdue(data11, "2025-01-05");
console.log(result11);

// 12 masala

function filterByAge(array, minAge) {
  return array.filter((item) => item.age > minAge);
}

const data12 = [
  { name: "Jasur", age: 25 },
  { name: "Zilola", age: 17 },
  { name: "Botir", age: 30 },
];
const result12 = filterByAge(data12, 18);
console.log(result12);


// 13 masala

function filterByPriority(array, priority) {
  return array.filter((item) => item.priority === priority);
}

const data13 = [
  { id: 1, task: "Email yozish", priority: "high" },
  { id: 2, task: "Xarid qilish", priority: "low" },
  { id: 3, task: "Hisobot tayyorlash", priority: "high" },
];
const result13 = filterByPriority(data13, "high");
console.log(result13);

// 14 masala

function filterByGrade(array, minGrade) {
  return array.filter((item) => item.grade > minGrade);
}

const data14 = [
  { id: 1, name: "Ali", grade: 85 },
  { id: 2, name: "Zarina", grade: 90 },
  { id: 3, name: "Kamola", grade: 75 },
];
const result14 = filterByGrade(data14, 80);
console.log(result14);

// 15 masala

function findMostExpensive(array) {
  return array.reduce((prev, current) => {
    return prev.price > current.price ? prev : current;
  });
}

const data15 = [
  { id: 1, name: "Telefon", price: 500 },
  { id: 2, name: "Noutbuk", price: 1000 },
  { id: 3, name: "Planshet", price: 300 },
];
const result15 = findMostExpensive(data15);
console.log(result15);

// 16 masala

function checkCategory(array, category) {
  return array.some((item) => item.category === category);
}

const data16 = [
  { id: 1, title: "OвЂtgan kunlar", category: "Roman" },
  { id: 2, title: "Matematika", category: "Darslik" },
];
const result16 = checkCategory(data16, "Roman");
console.log(result16);

// 17 masala

function increasePrice(array, percentage) {
  return array.map((item) => {
    return {
      ...item,
      price: item.price + (item.price * percentage) / 100,
    };
  });
}

const data17 = [
  { id: 1, name: "Telefon", price: 500 },
  { id: 2, name: "Noutbuk", price: 1000 },
];
const result17 = increasePrice(data17, 10);
console.log(result17);

// 18 masala

function updateTaskStatus(array, id) {
  return array.map((item) => {
    if (item.id === id) {
      return { ...item, status: "completed" };
    }
    return item;
  });
}

const data18 = [
  { id: 1, task: "Email yozish", status: "pending" },
  { id: 2, task: "Xarid qilish", status: "pending" },
];
const result18 = updateTaskStatus(data18, 1);
console.log(result18);

// 19 masala

function updateGrade(array, id, newGrade) {
  return array.map((student) =>
    student.id === id ? { ...student, grade: newGrade } : student
  );
}

const data19 = [
  { id: 1, name: "Ali", grade: 85 },
  { id: 2, name: "Zarina", grade: 90 },
];
const result19 = updateGrade(data19, 1, 88);
console.log(result19);

// 20 masala

function markAllCompleted(array) {
  return array.map((item) => ({ ...item, status: "completed" }));
}

const data20 = [
  { id: 1, task: "Email yozish", status: "pending" },
  { id: 2, task: "Xarid qilish", status: "pending" },
];
const result20 = markAllCompleted(data20);
console.log(result20);

// 21 masala
function increaseSalary(array, department) {
  return array.map((item) => {
    if (item.department === department) {
      return { ...item, salary: item.salary * 1.1 };
    }
    return item;
  });
}

const data21 = [
  { id: 1, name: "Oybek", department: "IT", salary: 1000 },
  { id: 2, name: "Nargiza", department: "HR", salary: 800 },
];
const result21 = increaseSalary(data21, "IT");
console.log(result21);

// 22 masala

function updateBookAvailability(array, id) {
  return array.map((book) =>
    book.id === id ? { ...book, available: !book.available } : book
  );
}

const data22 = [
  { id: 1, title: "OвЂtgan kunlar", available: true },
  { id: 2, title: "Matematika", available: false },
];
const result22 = updateBookAvailability(data22, 1);
console.log(result22);

// 23 masala

function updateEventDate(array, newDate) {
  return array.map((event) => ({ ...event, date: newDate }));
}

const data23 = [
  { id: 1, event: "YigвЂilish", date: "2025-01-01" },
  { id: 2, event: "Seminar", date: "2025-01-02" },
];
const result23 = updateEventDate(data23, "2025-01-03");
console.log(result23);

// 24 masala

function deleteByGrade(array, minGrade) {
  return array.filter((student) => student.grade >= minGrade);
}

const data24 = [
  { id: 1, name: "Ali", grade: 85 },
  { id: 2, name: "Zarina", grade: 90 },
  { id: 3, name: "Kamola", grade: 75 },
];
const result24 = deleteByGrade(data24, 80);
console.log(result24);

// 25 masala

function deleteByCategory(array, category) {
  return array.filter((item) => item.category !== category);
}

const data25 = [
  { id: 1, name: "Telefon", category: "Elektronika" },
  { id: 2, name: "Kostyum", category: "Kiyim" },
  { id: 3, name: "Noutbuk", category: "Elektronika" },
];
const result25 = deleteByCategory(data25, "Elektronika");
console.log(result25);

// 26 masala

function deleteByPriority(array, priority) {
  return array.filter((item) => item.priority !== priority);
}

const data26 = [
  { id: 1, task: "Email yozish", priority: "high" },
  { id: 2, task: "Xarid qilish", priority: "low" },
  { id: 3, task: "Hisobot tayyorlash", priority: "high" },
];
const result26 = deleteByPriority(data26, "low");
console.log(result26);

// 17 masala

function deleteByCity(array, city) {
  return array.filter((item) => item.city !== city);
}

const data27 = [
  { id: 1, name: "Dilnoza", city: "Toshkent" },
  { id: 2, name: "Olim", city: "Samarqand" },
  { id: 3, name: "Madina", city: "Toshkent" },
];
const result27 = deleteByCity(data27, "Toshkent");
console.log(result27);

// 28 masala

function deleteByAuthor(array, author) {
  return array.filter((item) => item.author !== author);
}

const data28 = [
  { id: 1, title: "OвЂtgan kunlar", author: "Abdulla Qodiriy" },
  { id: 2, title: "Navoiy", author: "Aybek" },
];
const result28 = deleteByAuthor(data28, "Abdulla Qodiriy");
console.log(result28);

// 9 masala

function deleteBeforeDate(array, date) {
  return array.filter((item) => new Date(item.date) >= new Date(date));
}

const data29 = [
  { id: 1, event: "YigвЂilish", date: "2024-12-01" },
  { id: 2, event: "Seminar", date: "2025-01-01" },
];
const result29 = deleteBeforeDate(data29, "2025-01-01");
console.log(result29);

// 30 masala

function deleteById(array, id) {
  return array.filter((item) => item.id !== id);
}

const data30 = [
  { id: 1, name: "Oybek", department: "IT" },
  { id: 2, name: "Nargiza", department: "HR" },
];
const result30 = deleteById(data30, 1);
console.log(result30);
