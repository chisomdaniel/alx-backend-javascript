import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfieSignup(firstName, lastName, fileName) {
    let p1 = signUpUser();
    let p2 = uploadPhoto();

    let value = Promise.all([p1, p2]).then((result)=>{
        console.log(result)
    });
}

handleProfieSignup("Bob", "Dylan", "daniel.png");