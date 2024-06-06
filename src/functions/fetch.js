import api from "./api";

const fetchGet = async (location) =>{
    try{
        const response = await api.get(`get/${location}/`);
        return response.data;
    }catch(err){
        console.error(err);
    }
}

const fetchPut = async (location, data) =>{
    try{
        return await api.put(`put/${location}/`, data);
    }catch(err){
        console.error(err);
        return err;
    }
}

const fetchPost = async (location, data) =>{
    try{
        const response = await api.post(`post/${location}/`, data);
        return response.data;
    }catch(err){
        console.error(err);
    }
}

export {fetchGet, fetchPut, fetchPost};