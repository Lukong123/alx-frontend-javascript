import { signUpUser, uploadPhoto } from './5-photo-reject';
export default function handleProfileSignup() {
  return Promise.all([(), createUser()])
    .then((value) => {
      const { body } = value[0];
      const { firstName } = value[1];
      const { lastName } = value[1];
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
