const prod = {
    API_URL: 'https://myapp.herokuapp.com'
}

const dev = {
    API_URL: 'http://127.0.0.1:8000/'
}


const config = process.env.NODE_ENV === 'development' ? dev : prod;
export default config