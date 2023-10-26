let user = document.querySelector("form");
user.addEventListener("submit", async (e) => {
  e.preventDefault();
  let nom = document.querySelector(".nom").value;
  let prenom = document.querySelector(".prenom").value;
  let email = document.querySelector(".email").value;
  let motDePasse = document.querySelector(".motDePasse").value;

  const body = {
    nom: nom,
    prenom: prenom,
    email: email,
    motDePasse: motDePasse,
  };
  try {
    const response = await fetch("https://projet-back-0t2h.onrender.com/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const message = "Error with Status Code: " + response.status;
      throw new Error(message);
    }

    const data = await response.json();

    console.log(data);

    if(data.statut == true)
      window.location.href = "./connexion.html"
  } catch (error) { 
    console.log("Error: " + error.message);
  }
});
