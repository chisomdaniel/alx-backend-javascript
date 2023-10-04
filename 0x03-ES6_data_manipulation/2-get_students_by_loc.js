export default function getStudentByLocation (objList, city) {
    newList = objList.filter((obj)=>{
        if (obj.city === city) {
            return True;
        } else {
            return False;
        }
    })
}