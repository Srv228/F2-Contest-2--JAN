let employees = []
let id = 0

function addEmployee() {
  let name = document.getElementById("name").value;
  let profession = document.getElementById("profession").value;
  let age = document.getElementById("age").value;
  if (name && profession && age) {
    let employee = { id: ++id, name: name, profession: profession, age: age };
    employees.push(employee);
    document.getElementById("employeeForm").reset();
    document.getElementById("error").innerHTML = "";
    document.getElementById("success").innerHTML = " Success : Employee Added!";
    updateEmployeeList();
  } else {
    document.getElementById("error").innerHTML = " Error : Please Make sure All the fields are filled before adding in an employee !";
    document.getElementById("success").innerHTML = "";
  }
}

function updateEmployeeList() {
  let employeeList = document.getElementById("employeeList");
  employeeList.innerHTML = "";
  for (let employee of employees) {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${employee.id}</td>
      <td>Name : ${employee.name}</td>
      <td>Profession : ${employee.profession}</td>
      <td>Age : ${employee.age}</td>
      <td><button style="border-radius: 30px;" onclick="deleteEmployee(${employee.id})">Delete</button></td>
    `;
    employeeList.appendChild(row);
  }
}

function deleteEmployee(id) {
  employees = employees.filter(employee => employee.id !== id);
  updateEmployeeList();
}
