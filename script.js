// Question 1:
// You are given an object book with the properties title, author, and yearPublished. Perform the following 
// operations:
// 1.	Access the author property and print it.
// 2.	Modify the yearPublished property to 2022.
// 3.	Add a new property genre to the book object with the value “Fiction”.
// 4.	Delete the title property from the book object.

var book=
{
    "title": "ADKP",
    "author": "Ravi mantri",
    "yearpublished": "2022",
}
console.log(book);
console.log(book[`author`]);
book[`yearpublished`]="2023";
console.log(book);
book[`gener`]= "human values and emotions";
console.log(book);
delete book [`title`];
console.log(book);
console.log(`-----------------------------------------------------------------------------------------------------------------`)
// Question 2:
// You are given an object employee with the properties name, age, position, and salary. Perform the following operations:
// 1.	Access the position property and print it.
// 2.	Modify the salary property to 50000.
// 3.	Add a new property department to the employee object with the value “HR”.
// 4.	Delete the age property from the employee object.

var employee =
{
     "name": "vanitha",
     "age": "22",
     "position":"Team Lead",
     "salary":"45000"
}
 console.log(employee);
 console.log(employee[`position`]);
employee[`salary`]=50000;
console.log(employee);
employee[`department`]="manager";
console.log(employee);
delete employee[`age`];
console.log(employee);
console.log(`-----------------------------------------------------------------------------------------------------------`)
// Question 3:
// You are given an object product with the properties id, name, price, and category. Perform the following operations:
// 1.	Access the price property and print it.
// 2.	Modify the category property to “Electronics”.
// 3.	Add a new property inStock to the product object with the value true.
// 4.	Delete the id property from the product object.

var product =
{
 "id": "707",
 "name": "Dot&Key",
 "price": "399",
 "category": "sunscreen"
}
console.log(product);
console.log(product[`price`]);
product[`category`]="electronics";
console.log(product);
product[`instock`]="True";
console.log(product);
delete product[`id`];
console.log(product);
console.log(`-------------------------------------------------------------------------------------------------------------`)
// Question 4:
// You are given an object car with the properties make, model, year, and color. Perform the following operations:
// 1.	Access the make property and print it.
// 2.	Modify the color property to “Black”.
// 3.	Add a new property engineType to the car object with the value “V6”.
// 4.	Delete the year property from the car object.

var car =
{
    "make":"metal",
    "model":"Mahindra XUV700",
    "year": "2021",
    "color": "Deep Forest"
}
console.log(car);
console.log(car[`make`]);
car[`color`]="black";
console.log(car);
car[`EngineType`]="Dieselengine";
console.log(car);
delete car[`year`];
console.log(car);
console.log(`------------------------------------------------------------------------------------------------------------------`)
// Question 5:
// You are given an object student with the properties name, age, grade, and school. Perform the following operations:
// 1.	Access the school property and print it.
// 2.	Modify the grade property to 95.
// 3.	Add a new property hobbies to the student object with the value ["reading", "sports"].
// 4.	Delete the age property from the student object.
 
var student =
{
    "Name": "Manvika",
    "Age": "19",
    "Grade": "90%",
    "School": "Gayatri Vidya Parishad"
}
console.log(student);
console.log(student[`School`]);
student[`Grade`]="95%";
console.log(student);
student[`hobbies`]="playing Batminton";
console.log(student);
delete student[`Age`];
console.log(student);
console.log(`---------------------------------------------------------------------------------------------------`)
// Question 6:
// You are given an object user with the following structure:
var user = {
  username: "john_doe",
  profile: {
    firstName: "John",
    lastName: "Doe",
    age: 28,
    address: {
      street: "456 Elm St",
      city: "Gotham",
      zip: "54321"
    }
  },
  preferences: {
    theme: "dark",
    notifications: true
  }
}
// Perform the following operations:
// 1.	Access the city property from the address object and print it.
// 2.	Modify the theme property in the preferences object to “light”.
// 3.	Add a new property phone to the profile object with the value “555-9876”.
// 4.	Delete the zip property from the address object.
 
 console.log(user);
 console.log(user.profile.address.city);
 user.preferences[`theme`]="light";
 console.log(user);
 user.profile[`phone`]="9693888273";
 console.log(user);
 delete user.profile.address[`zip`];
 console.log(user);
console.log(`--------------------------------------------------------------------------------------------------------`)

// Question 7:
// You are given an object company with the following structure:
var company = {
  name: "Tech Solutions",
  employees: [
    {
      name: "Alice",
      position: "Developer",
      contact: {
        email: "alice@tech.com",
        phone: "555-2345"
      }
    },
    {
      name: "Bob",
      position: "Manager",
      contact: {
        email: "bob@tech.com",
        phone: "555-6789"
      }
    }
  ],
  location: "New York"
};
// Perform the following operations:
// 1.	Access the email of the second employee (Bob) and print it.
// 2.	Modify the phone number of Alice to “555-1111”.
// 3.	Add a new property department with the value “Engineering” to the first employee (Alice).
// 4.	Delete the location property from the company object.

console.log(company.employees['1'].contact.email);
company.employees[`0`].contact.phone=['6736736'];
console.log(company);
company.employees[`0`].department=['Engineering'];
console.log(company);
delete company.location;
console.log(company);



