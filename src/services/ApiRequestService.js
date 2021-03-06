import axios from 'axios'

const API_KEY = "f489b4cf26033b9b2d5b3b8efe4b6cc9"
const API_VERSION = "3";
const apiRequest = axios.create({
    baseURL: 'https://api.themoviedb.org'
})

export default {
    getPopularMovies() {
        return apiRequest.get(`/${API_VERSION}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    },
    getItemDetails(id,type='movie') {
        return apiRequest.get(`/${API_VERSION}/${type}/${id}?api_key=${API_KEY}&language=en-US&page=1`)
    },
    searchByType(search, page, type = 'multi') {
        return apiRequest.get(`/${API_VERSION}/search/${type}?api_key=${API_KEY}&language=en-US&query=${search}&page=${page}&include_adult=false`)
    },
    getPopularDataByType(type = 'multi', page = 1) {
        return apiRequest.get(`/${API_VERSION}/${type}/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
    }
}