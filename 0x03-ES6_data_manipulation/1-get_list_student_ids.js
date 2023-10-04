export default function getListStudentIds(objList) {
    if (typeof(objList) !== "object") {
        return []
    }

    let newList = objList.map((obj)=> {
        return obj.id
    })

    return newList
}