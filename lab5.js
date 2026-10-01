document.getElementById("addForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;

    axios.post("http://localhost:3000/bang",{
        "name": name,
        "price": Number(price)
    }).then((result)=>{
        console.log("them thanh cong", result.data);
        alert("Them Thanh Cong");
        
        location.replace("index.html");
    })
    .catch((error) =>{
        console.log("loi");
        alert("Them That Bai");
    })
});