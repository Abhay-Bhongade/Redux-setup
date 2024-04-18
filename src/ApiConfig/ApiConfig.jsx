const API = "http://16.171.47.172:5000/api"

const getTokenFromLocalStorage = ()=>{
    let token = localStorage.getItem("token");
    return token || "";
}
const userRole = localStorage.getItem("role");

const config = {
    headers:{
        Authorization : `Bearer ${getTokenFromLocalStorage}`,
        "Content-Type":"application/json"
    }
}

const config2 = {
    Authorization :`Bearer ${getTokenFromLocalStorage}`,
    "Content-Type":"multipart/form-data"
}

const config3 = {
    "Content-Type":"application/json"
}


const API_URLS = {
    admin:`${API}/admin`,
    recruiter:`${API}/recruiter`,
    inspector:`${API}/inspector`,
    qa_coordinator:`${API}/qa_coordinator`,
    manager:`${API}/manager`,
    accountant:`${API}/accountant`,
}


export {userRole,API_URLS,config,config2,config3,API};