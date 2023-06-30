const submitButton = document.querySelector(".submit-button");

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const form = document.querySelector(".form");
  const username = form.username.value;
  const password = form.password.value;

  try {
    const res = await fetch("http://localhost:3000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        pass_word: password,
      }),
    });
    if (res.status === 201) {
      alert("Register succesfully");
      window.location.replace("/client/login.html");
    }
  } catch (error) {
    console.log(error);
  }
});
