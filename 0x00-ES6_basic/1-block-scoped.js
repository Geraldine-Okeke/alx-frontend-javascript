export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  let updatedTask = task;
  let updatedTask2 = task2;

  if (trueOrFalse) {
    updatedTask = true;
    updatedTask2 = false;
  }

  return [updatedTask, updatedTask2];
}
