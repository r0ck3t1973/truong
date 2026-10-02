function loadBang(){
   axios.get("http://localhost:3000/bang").then((res) => {
    console.log("Lay du lieu",res.data);
    
   document.getElementById("ice").innerHTML = res.data
   .map(
      (bang) => `
         <tr>
            <td class="px-4 py-2 border border-gray-300">${bang.id}</td>
            <td class="px-4 py-2 border border-gray-300">${bang.name}</td>
            <td class="px-4 py-2 border border-gray-300">${bang.price}</td>
            <td class="px-4 py-2 border border-gray-300">${bang.quantity}</td>
            <td class="px-4 py-2 border border-gray-300">${bang.quantity > 0 ?"Còn Hàng":"Hết Hàng"}</td>
            <td class="px-4 py-2 border border-gray-300">
              <div class="flex items-center justify-center gap-2">
                <button class="bg-blue-600 hover:bg-blue-500 px-3 py-1 text-white rounded" >
                   Edit
                </button>
                <button class="bg-red-600 hover:bg-red-500 px-3 py-1 text-white rounded" onclick="deleteBang(${bang.id})">
                   Detele
                </button>
                <button class="bg-gray-600 hover:bg-gray-500 px-3 py-1 text-white rounded" >
                   Add
                </button>
              </div>
            </td>
         </tr>
      `
   ).join("");
   });
}

function deleteBang(id){
   axios.delete(`http://localhost:3000/bang/${id}`).then(()=>{
      alert("Xoa Thanh Cong");
   })
   .catch(() => {
      alert("Loi!");
   })
}
loadBang();