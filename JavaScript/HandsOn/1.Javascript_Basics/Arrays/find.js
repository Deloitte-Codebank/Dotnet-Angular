let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

let user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "Bob" }
let employees = [
    { id: 1, name: 'Tim', salary: 1200 },
    { id: 2, name: 'John', salary: 15000 },
    { id: 3, name: 'Suren', salary: 20000 },
    { id: 4, name: 'Tony', salary: 13000 },
]
let employee = employees.find(i => i.id > 2)
if (employee != null)
    console.log(employee.name);
else
    console.log('Invalid Id')