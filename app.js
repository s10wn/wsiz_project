const form = document.getElementById("userForm");
const dataContainer = document.getElementById("data");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const age = parseInt(document.getElementById("age").value.trim());

  if (age >= 18) {
    const user = { firstName, lastName, age };

    addUsers(user);

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    alert("Please fill out all fields and ensure age is 18 or older.");
  }
});

const addUsers = (user) => {
  const userArticle = document.createElement("article");
  userArticle.classList.add("user");

  const firstNameElement = document.createElement("h2");
  firstNameElement.textContent = user.firstName;
  userArticle.appendChild(firstNameElement);

  const lastNameElement = document.createElement("h2");
  lastNameElement.textContent = user.lastName;
  userArticle.appendChild(lastNameElement);

  const ageElement = document.createElement("h2");
  ageElement.textContent = user.age;
  userArticle.appendChild(ageElement);

  dataContainer.appendChild(userArticle);
};

const users = JSON.parse(localStorage.getItem("users")) || [];
users.map((user) => addUsers(user));
