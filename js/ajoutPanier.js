let produit = document.querySelector(".btn")
const countPanier = JSON.parse(localStorage.getItem("panier"));
console.log(countPanier.length);
const count = document.querySelector(".count")
console.log(count);
count.textContent = countPanier === null ? 0 : countPanier.length;




produit.addEventListener("click",(e)=>{
    
    let panier = localStorage.getItem("panier")
    let enfant = e.target
    let parent = enfant.closest(".car")
    let titre = document.querySelector(".cahier").textContent
    let prix = document.querySelector(".prix").textContent

    let article = {
        titre : titre,
        prix : prix
    }

if(panier === null){
    panier = []
    panier.push(article)
    localStorage.setItem("panier",JSON.stringify(panier))
    window.location.reload()
}else{
    panier = JSON.parse(panier)
    panier.push(article)
    localStorage.setItem("panier", JSON.stringify(panier))
    window.location.reload()
    console.log(panier);
}





})