import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID WIVVqcLvo8E233S42YiMiNZKp1ABA_RzrA2Z9PG5VUs'
    }
});