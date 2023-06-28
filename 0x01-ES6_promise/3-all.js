import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [userResponse] = results;
      console.log(`${userResponse.body.firstName} ${userResponse.body.lastName}`);
      // Use the photoResponse variable if needed
    })
    .catch((error) => {
      console.log('Signup system offline');
      // Handle the error or rethrow it if necessary
      throw error;
    });
}

export default handleProfileSignup;
