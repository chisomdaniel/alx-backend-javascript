export default function(objList) {
    let initial = 0;
    
    objList.reduce((accumulator, current)=>{
        return accumulator + current;
    }, initial)
}