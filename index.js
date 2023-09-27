const element1 = document.getElementById("main")
element1.remove();

const newHeader = document.createElement("h1")

// For some reason this code was getting in the way 
// const element2 = document.getElementById("body")
// element2.innerHTML = newHeader

newHeader.setAttribute("id","victory")

newHeader.innerHTML = "RKM is the champion";