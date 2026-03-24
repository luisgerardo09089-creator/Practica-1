const exerciseForm = document.getElementById('exercise-form');
const exerciseList = document.getElementById('exercise-list');

exerciseForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const exerciseName = document.getElementById('exercise-name').value;
  const exerciseDuration = document.getElementById('exercise-duration').value;
  const exerciseItem = document.createElement('li');
  exerciseItem.textContent = `${exerciseName} - ${exerciseDuration} min`;
  exerciseList.appendChild(exerciseItem);
  exerciseForm.reset();
});