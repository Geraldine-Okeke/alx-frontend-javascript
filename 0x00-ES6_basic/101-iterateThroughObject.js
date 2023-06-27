export default function iterateThroughObject(reportWithIterator) {
  const { allEmployees } = reportWithIterator;
  const employeeNames = [];

  for (const department in allEmployees) {
    const employees = allEmployees[department];
    employeeNames.push(...employees);
  }

  return employeeNames.join(" | ");
}
