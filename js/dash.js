let btnDeco = document.querySelector("#deco")
const infoUser = JSON.parse(localStorage.getItem('session'))


function deconnexion() {
    /* const yy = confirm("voulez-vous vous deconnecter ");
    
    if (yy = true) { */
        localStorage.clear('session')
        window.location.href = '../index.html'
    /* }else{
        window.location.href = '../dash.html'; 
    } */
}

btnDeco.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("hello");
    deconnexion();
})

