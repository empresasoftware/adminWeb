 //const IP_SERVER = 'http://localhost:5000';
const IP_SERVER = 'https://easysc.herokuapp.com';


const SERVERS = {
    AUTH: IP_SERVER,
    ESCORT: IP_SERVER,
    CLIENTE: IP_SERVER

};



export const SERVICES_AUTH = {
    LOGIN: SERVERS.AUTH + '/api/auth/signin/',
    REGISTER: SERVERS.AUTH + '/api/auth/signup/',
    GET_USER: SERVERS.AUTH + '/api/client/user/',

}

export const SERVICES_SCORTS = {
    GET_SCORTS: SERVERS.ESCORT+'/api/escorts/all/',
    GET_FOTO: SERVERS.ESCORT+'/api/escorts/'
}

export const SERVICES_CLIENTE = {
    CREATE_CLIENTE: SERVERS.CLIENTE+'/api/auth/cliente/signup/',
    
}
