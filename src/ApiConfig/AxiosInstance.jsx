import axios from "axios";

const AxiosInstance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    timeout:1000,
})

AxiosInstance.interceptors.request.use(
    function(config){
        console.log("config",config);
        if(config.method === "post"){
            if(config.data instanceof FormData){
                config.headers["Content-Type"] = "multipart/form-data"
            }else if(config.data instanceof Object){
                config.headers["Content-Type"] = "application/json"
            }
        }
        return config
    },
    function(error){
return Promise.reject(error);
    }
)

AxiosInstance.interceptors.response.use(
    function(response){
        console.log("response",response);
return response
    },

    function(error){
return Promise.reject(error);
    }
)


export default AxiosInstance