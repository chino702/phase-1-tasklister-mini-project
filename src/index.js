document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  const tasks = document.querySelector('#tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const input = document.querySelector('#new-task-description');
    const task = document.createElement('li');
    task.innerText = input.value;
    tasks.appendChild(task);

    input.value = ''; // Clear input field
  });
});
