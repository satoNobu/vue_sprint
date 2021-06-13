import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://firestore.googleapis.com/v1/projects/sprint-563bf/databases/(default)/documents'
});

export default instance;