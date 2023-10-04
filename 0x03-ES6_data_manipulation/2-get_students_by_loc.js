export default function getStudentByLocation(objList, city) {
  objList.filter((obj) => {
    if (obj.city === city) {
      return true;
    }
    return false;
  });
}
