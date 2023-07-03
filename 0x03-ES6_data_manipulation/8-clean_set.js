/* eslint-disable */
function cleanSet(set, startString) {
  const valuesArray = Array.from(set);
  const filteredValues = valuesArray.filter(value => value.startsWith(startString));
  const cleanedValues = filteredValues.map(value => value.slice(startString.length));
  return cleanedValues.join("-");
}

export default cleanSet;

