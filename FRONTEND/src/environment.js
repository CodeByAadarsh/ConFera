let IS_PROD = true;
const server = IS_PROD ?
    "https://conferabackend-ctr0.onrender.com" :

    "http://localhost:8000"


export default server;