// 25. Bai 1:
const ten = "Nguyen Van Truong";

const age = 19;

const major = "Lap Trinh Web";

const info = `
   Xin Chao ${ten}.
   Tuoi ${age}.
   Nganh Hoc ${major}
`;

console.log(info);

// 26. Bai 2:

const student = {

id: 1,

name: "Nguyễn Văn An",

age: 20,

major: "Lập trình Web",

};

const info_1 = `
    Ma So ${student.id}.
    Ho va Ten ${student.name}.
    Tuoi ${student.age}.
    Nganh Hoc ${student.major}
`;

console.log(info_1);

// 28. Bai 3

const add = (a, b) => {
    return a + b;
};

console.log(add(5, 3));

// 29. Bai 4

const square = (n) => {
    return n*n;
}

console.log(square(5));

const sum = (x,y) =>{
    return x + y;
}
console.log(sum(10,20));

const hello = (name) => `Xin chao ${name}`;
console.log(hello("An"));

// 9. Bai 5 
const number = [1,2,4,6,8];

const newNumber = number.map(function(number){
    return number * 2;
});

console.log("bang moi",newNumber);

// 30.Bai 6

const students = [
    {
    id : 1,   
    name : "Nguyen Van Cuong"
    },
    { 
    id : 2,   
    name : "Nguyen Van Binh"
    },
    {
    id : 3,   
    name : "Pham Xuan Tien"
    }
];

const nameStudents = students.map(student =>
        student.name
    );

    console.log("Danh sach ten",nameStudents);

// Bai 32.Bai 8

const products = [ 
    { id: 1, name: "iPhone 15", price: 20000000, },
    { id: 2, name: "MacBook Air", price: 25000000, }, 
    { id: 3, name: "AirPods", price: 5000000, }
];
const disphayProducts = products.map(products => `
           Id : ${products.id}, 
           Name : ${products.name};
    `);
console.log("Danh sach san pham",disphayProducts);

// Bai Tong Hop

const sp = [ 
    { id: 1, name: "Áo thun", price: 150000, category: "Thời trang", },
    { id: 2, name: "Quần jean", price: 350000, category: "Thời trang", },
    { id: 3, name: "Giày sneaker", price: 800000, category: "Giày", }, 
];

const html = sp.map(sp =>`
    <tr class="hover:bg-gray-50">
        <td class="px-4 py-2 border border-gray-300">${sp.id}</td>
        <td class="px-4 py-2 border border-gray-300">${sp.name}</td>
        <td class="px-4 py-2 border border-gray-300">${sp.price}</td>
        <td class="px-4 py-2 border border-gray-300">${sp.category}</td>
    </tr>
`).join("");
document.getElementById("lab3").innerHTML = html;
