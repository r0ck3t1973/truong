axios.get("http://localhost:3000/students").then((res) => {
  console.log("Dữ liệu của tôi:", res.data);

  document.getElementById("list").innerHTML = res.data
    .map(
      (item) => `
        <tr class="hover:bg-gray-50">
          <td class="px-4 py-2 border border-gray-300">${item.id}</td>
          <td class="px-4 py-2 border border-gray-300">${item.name}</td>
          <td class="px-4 py-2 border border-gray-300">${item.age}</td>
          <td class="px-4 py-2 border border-gray-300">
            <div class="flex items-center justify-center gap-2">
              <a
                href="#"
                class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
              >
                Edit
              </a>

              <button
                class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      `
    )
    .join("");
});

axios.get("http://localhost:3000/products").then((sp) =>{
  console.log("Danh sach san pham:", sp.data);
    document.getElementById("test").innerHTML = sp.data
    .map(
      (product) =>`
         <tr class="hover:bg-gray-50">
          <td class="px-4 py-2 border border-gray-300">${product.id}</td>
          <td class="px-4 py-2 border border-gray-300">${product.name}</td>
          <td class="px-4 py-2 border border-gray-300">${product.price}</td>
          
          </tr>
      `
    )
    .join("");
});
    function loadProducts(){
axios.get("http://localhost:3000/newProduct").then((result) =>{
  console.log("Bang San Phan Moi",result.data);
  document.getElementById("warehouse").innerHTML = result.data
  .map(
    (check,index) =>`
      <tr class="hover:bg-gray-50">
          <td class="px-4 py-2 border border-gray-300">${index+1}</td>
          <td class="px-4 py-2 border border-gray-300">${check.id}</td>
          <td class="px-4 py-2 border border-gray-300">${check.name}</td>
          <td class="px-4 py-2 border border-gray-300">${check.price}</td>
          <td class="px-4 py-2 border border-gray-300">${check.quantity}</td>
          <td class="px-4 py-2 border border-gray-300">${check.category}</td>
          <td class="px-4 py-2 border border-gray-300">
            <div class="flex items-center justify-center gap-2">
              <button class="bg-blue-500 hover:bg-blue-600 px-3 py-1 text-white rounded" onclick="editNewProducts(${check.id})">
               Edit
              </button>

              <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded" onclick="deleteNewProducts(${check.id})">
                Delete
              </button>
            </div>
          </td>
        </tr>
    `
  ).join("");
});
}

function deleteNewProducts(id){
   axios.delete(`http://localhost:3000/newProduct/${id}`).then(() =>{
       alert("xóa thành công");

       loadProducts();
   });
}
loadProducts();

function editNewProducts(id){
  axios.get(`http://localhost:3000/newProduct/${id}`).then((result) =>{
     const product = result.data;

     const name = prompt("Nhập Tên Mới: ",product.name);
     const price = prompt("Nhập Giá Mới: ",product.price);
     const quantity = prompt("Nhập Số Lương Mới: ",product.quantity);
     const category = prompt("Nhập Thể Loại Mới: ",product.category);

     axios.patch(`http://localhost:3000/newProduct/${id}`,{
      name: name,
      price: Number(price),
      quantity: Number(quantity),
      category: category
     }).then(() =>{
      alert("Cập Nhật Thành Công");

      loadProducts();
     });
  });
}


