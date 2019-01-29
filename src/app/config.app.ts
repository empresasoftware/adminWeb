// const IP_SERVER = 'http://localhost:5000';
const IP_SERVER = 'https://easysc.herokuapp.com';


const SERVERS = {
    AUTH: IP_SERVER,

};



export const SERVICES_AUTH = {
    LOGIN: SERVERS.AUTH + '/api/auth/signin/',
    REGISTER: SERVERS.AUTH + '/api/auth/signup/',

}

