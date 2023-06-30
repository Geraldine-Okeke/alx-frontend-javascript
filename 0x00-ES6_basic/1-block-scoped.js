export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  let updatedTask = task;
  let updatedTask2 = task2;

  if (trueOrFalse) {
    updatedTask = false;
    updatedTask2 = true;
  }

  return [updatedTask, updatedTask2];
}
