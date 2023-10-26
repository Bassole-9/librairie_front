let user = document.querySelector("form");
user.addEventListener("submit", async (e) => {
  e.preventDefault();
  let email = document.querySelector(".email").value;
  let motDePasse = document.querySelector(".motDePasse").value;

  const body = {
    email: email,
    motDePasse: motDePasse,
  };
  try {
    const response = await fetch("https://projet-back-0t2h.onrender.com/api/users/login", {
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
      sessionStorage.setItem("session", JSON.stringify(data.message))
      window.location.href = "./page1.html"
  } catch (error) { 
    console.log("Error: " + error.message);
  }
});
