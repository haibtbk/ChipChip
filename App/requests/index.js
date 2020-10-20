import { create } from 'apisauce';
	
const request = create({
  baseURL: 'https://5f8fbbd8693e730016d7b634.mockapi.io/:endpoint',
});

function login(username, password) {
  console.log(`Request: ${username} ${password}`);
  return request
    .post('/sign_in')
    .then(response => {
      console.log('Request response', response);
      return {
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token,
      };
    })
    .catch(err => {
      console.log(err);
    });
}

export default {
  login,
};