import { uploadPhoto, createUser } from "./utils.js";

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoResponse, userResponse] = results;
      console.log(`${userResponse.body.firstName} ${userResponse.body.lastName}`);
    })
    .catch((error) => {
      console.log("Signup system offline");
    });
}

export default handleProfileSignup;
