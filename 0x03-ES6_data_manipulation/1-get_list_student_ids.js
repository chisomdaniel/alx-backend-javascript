export default function getListStudentIds(objList) {
  if (typeof (objList) !== 'object') {
    return [];
  }

  const newList = objList.map((obj) => obj.id);

  return newList;
}
