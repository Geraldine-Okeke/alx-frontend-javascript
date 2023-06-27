export default function iterateThroughObject(reportWithIterator) {
  const { allEmployees } = reportWithIterator;

  const employeeNames = Object.values(allEmployees)
    .flatMap((employees) => employees)
    .join(" | ");

  return employeeNames;
}
