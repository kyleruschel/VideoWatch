import axios from 'axios';

export const KEY = `AIzaSyDXVpxLJ48sM3fzXn1C4FvFGsDW2tTohpM`;

export default axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3`,
});