document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("studentForm");

  // Handle form submission
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const sport = document.getElementById("sport").value;

      let students = JSON.parse(localStorage.getItem("students")) || [];
      students.push({ name, sport });
      localStorage.setItem("students", JSON.stringify(students));

      alert("Student added successfully!");
      form.reset();
    });
  }

  // Display students in table
  const table = document.getElementById("studentTable");
  if (table) {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.forEach(student => {
      const row = table.insertRow();
      row.insertCell(0).textContent = student.name;
      row.insertCell(1).textContent = student.sport;
    });
  }
});
