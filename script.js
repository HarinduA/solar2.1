document.addEventListener("DOMContentLoaded", () => {
  const sun = document.getElementById("sun");
  const planets = document.querySelectorAll(".container > div");

  // Event listener for clicking the sun
  sun.addEventListener("click", () => {
      planets.forEach(planet => {
          if (planet !== sun) {
              planet.classList.add("active"); // Apply active class to other planets
          }
      });
  });

  // Event listener for pressing the Esc key
  document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
          planets.forEach(planet => {
              planet.classList.remove("active"); // Remove active class from planets
          });
      }
  });
});
