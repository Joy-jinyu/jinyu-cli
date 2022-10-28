const APIHOST: any = {
    local: 'http://localhost:8888/',
    uat: 'http://192.168.0.198:8888'
};

let HOST_NAME = '';
const NODE_ENV =
    typeof process !== 'undefined' ? process.env.NODE_ENV : window.LOCAL_ENV;
HOST_NAME = APIHOST[NODE_ENV.toLocaleLowerCase()];
export default HOST_NAME;
