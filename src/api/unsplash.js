import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID R07Tc58wNtshJWGopGxYfvf7fVx8TYoL-UppHWXR-qA',
  },
});
