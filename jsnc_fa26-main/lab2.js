// mang

const students1 = "Nguyen Van A";
const students2 = "Nguyen Van C";
const students3 = "Nguyen Van D";

const students = ["Nguyen Van A", "Nguyen Van C", "Nguyen Van D"];

const ids = [1,2.3,4,5];
const actives = [true, false, 42, "truong01"];
console.log("Ban Dau:", students);

students[0] = "truong01";

console.log("Luc sau:", students);

console.log("do dai mang:", students.length);

// Bai 1:

const names = ["Lan","An","Binh","Hoa","Nam"];

console.log("In mang:",names);

console.log("phan tu dau tien",names[0]);

console.log("phan tu cuoi cung:",names[4]);

console.log("so luong pphan tu:",names.length);

names.unshift("Truong");

console.log(names);

names.shift();

console.log(names);

// Bai 2:

const ten = ["Lan","An","Binh","Hoa","Nam"];

for( let i = 0; i<ten ; i++){
    console.log(ten);
}

// arry ojbect
 const student = [ 
    { id: 1, name: "Nguyễn Văn An", age: 20, },
     { id: 2, name: "Trần Văn Bình", age: 21, },
      { id: 3, name: "Lê Văn Nam", age: 20, } 
    ];

    console.log(student);

    console.log("Sinh vien dau tien:",student[0].name);

    console.log("Tuoi sinh vien thu 2:",student[1].age);

    for(let i= 0; i<student ; i++){
        console.log(student[1].age);
    }

// bai 5:
const myStudent = [ 
    { id: 1, name: "Nguyễn Văn An", age: 20, },
     { id: 2, name: "Trần Văn Bình", age: 21, },
      { id: 3, name: "Lê Văn Nam", age: 20, } 
    ];
let html = document.getElementById("students")
let content = "";

for(let i =0; i<myStudent.length; i++){
    content = content +`
     <div>
     <h3>Ten sinh vienn : ${myStudent[i].name}</h3>
     <p>Id sinh vien : ${myStudent[i].id}</p>
     </div>
    `;
}
html.innerHTML = content;
html.innerHTML = "<h1>Hien thi danh sach </h1>" + content;
console.log(html);

// Bai tap tong hop:

const product = [
{
id: 1,
name: "iPhone 15",
price: 20000000
},
{
id: 2,
name: "Samsung Galaxy S24",
price: 18000000
},
{
id: 3,
name: "Xiaomi 14",
price: 12000000
}
];

let HTML = document.getElementById("products");
let demo = "";

function tinhtong(product){
    let tongtien = 0;

for(let i= 0; i< product.length; i++){
    demo = demo +`
      <div>
      <h2>Ten san pham: ${product[i].name}</h2>
      <p> - Gia: ${product[i].price}</p>
      </div>
    `;
    tongtien += product[i].price;
 }
 return tongtien;
}

let tong = tinhtong(product);
HTML.innerHTML = demo;
HTML.innerHTML = "<h1 style='color: green;'>Hien8 thi danh sach san san pham</h1>" + demo + `+ demo + <h2>Tong tien : ${tong}</h2>`;
console.log(HTML);
console.log(tong);
