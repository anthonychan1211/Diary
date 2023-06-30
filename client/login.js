const submitButton = document.querySelector(".submit-button");

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const form = document.querySelector(".form");
  const username = form.username.value;
  const password = form.password.value;
  console.log(username, password);
  try {
    const res = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (res.status === 200) {
      alert("Login succesfully");
      window.location.replace("/client/index.html");
    }
  } catch (error) {
    console.log(error);
  }
});
