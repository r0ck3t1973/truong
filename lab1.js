// Bài 1
console.log("Ngày Thứ nhất của kì thử nghiệm");

let name = "trường";

const age = 19;
let address = "Nam Định";
let isStudent = true;

console.log("Ten:",name);
console.log("Tuổi:", age);
console.log("Địa chỉ:", address);
console.log("Sinh viên:", isStudent);

// Bài 2
let tuoi = 21;

console.log("Thuc thi lan 1:",tuoi);

tuoi = 22;

console.log("Thuc thi lan 2:",tuoi);

//  Bài 3 – Tính toán với biến Khai báo:

//const a = 10; const b = 5; In ra:

//Tổng: 15 Hiệu: 5 Tích: 50 Thương: 2 

const a = 10;

const b = 5;

console.log("Tong:", a+b);
console.log("Hieu:", a-b);
console.log("Tich:", a*b);
console.log("Thuong:", a/b);

//Bài 4 – Hàm chào hỏi Tạo hàm:

//sayHello(name); Yêu cầu hàm in ra:

//Xin chào An Khi gọi:

//sayHello("An"); Thử gọi hàm với ít nhất 3 tên khác nhau.

function test01(name){
    console.log("Xin Chao:" + name);
}

test01("Trường");
test01("An");
test01("Tuấn Em");

//Bài 5 – Hàm tính tổng Tạo hàm:

//sum(a, b); Yêu cầu:

//Nhận vào 2 số. Trả về tổng của 2 số. Ví dụ:

//const result = sum(10, 20);

//console.log(result); Kết quả: 30 

function test02(so1,so2){
    return so1 + so2;
}

const result = test02(10,20);

console.log("Ket qua:" + result);

//Bài 6 – Hàm tính tiền Tạo hàm:

//calculateTotal(price, quantity); Yêu cầu:

//Tiền = giá × số lượng Ví dụ:

//const total = calculateTotal(50000, 3);

//console.log(total); Kết quả: 150000

function test03(price,quantity){
    return price * quantity;
}

const total = test03(50000,3);

console.log("Tien:" + total);

// Bai 7

const math = 9;

const english = 9;

const hoa = 9;

function tongket(math,english,hoa){
    return (math + english + hoa) / 3;
}

const avt = tongket(9,9,9);

console.log("Diem Trung Binh La:" + avt);

// Bai Tong Hop

function test04(name,age,className){
    return "Ten: " + name , "Tuoi:" +age , "Lop:" + className;
}

test04("Truong");
test04("19");
test04("WD21302");






