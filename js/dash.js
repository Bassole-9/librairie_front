let btnDeco = document.querySelector("#deco")


function deconnexion() {
    /* const yy = confirm("voulez-vous vous deconnecter ");
    
    if (yy = true) { */
        sessionStorage.clear('session')
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

