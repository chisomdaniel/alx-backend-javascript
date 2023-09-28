export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const item of array) {
    array[i] = appendString + item;
    i += 1;
  }

  return array;
}
