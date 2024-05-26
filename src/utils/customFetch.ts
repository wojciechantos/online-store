import axios from 'axios';

const productionUrl = 'https://strapi-store-server.onrender.com/api';

const customFetch = axios.create({
	baseURL: productionUrl,
});

export default customFetch;
