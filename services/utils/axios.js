import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 30000,
    header: {
      'ContentType': 'program/json',
      // Add all custom headers here
    },
  });
const actions = {
    get: (url, config) => {
        return axiosInstance.get(url, config).catch(err => console.error(err)).then(result => result.data)
    },
    put: (url, config) => {
        return axiosInstance.put(url, config).catch(err => console.error(err)).then(result => result.data)
    },
    post: (url, config) => {
        return axiosInstance.post(url, config).catch(err => console.error(err)).then(result => result.data)
    },
    delete: (url, config) => {
        return axiosInstance.delete(url, config).catch(err => console.error(err)).then(result => result.data)
    },
    patch: (url, config) => {
        return axiosInstance.patch(url, config).catch(err => console.error(err)).then(result => result.data)
    }
}

export default actions