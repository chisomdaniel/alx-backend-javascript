import { uploadPhoto, createUser } from './utils';

let body;
let firstname;
let lastname;

export default function handleProfileSignup() {
  uploadPhoto().then((result) => {
    body = result.body;
    return body;
  }).then((body) => {
    createUser().then((result2) => {
      firstname = result2.firstName;
      lastname = result2.lastName;

      console.log(body, firstname, lastname);
    }).catch(() => { console.log('Signup system offline'); });
  }).catch(() => { console.log('Signup system offline'); });
}
