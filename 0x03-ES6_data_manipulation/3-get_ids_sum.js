export default function (objList) {
  const initial = 0;

  objList.reduce((accumulator, current) => accumulator + current, initial);
}
