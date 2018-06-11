import axios from 'axios';

// This utility will add the authed users JWT Token to request header.
// Protected routes on the server require this JWT Token for access.

const setAuthToken = token => {
  if(token) {
    axios.defaults.headers.common['Authorization'] = token;
    console.log('TOKEN SET', token)
  } else {
    // Delete Auth Header
    delete axios.defaults.headers.common['Authorization'];
  }
}

export default setAuthToken;
