export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const newList = [...array];
  for (const item of newList) {
    newList[i] = appendString + item;
    i += 1;
  }

  return newList;
}
