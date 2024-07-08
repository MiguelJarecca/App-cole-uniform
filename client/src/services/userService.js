import axios from "axios"

const BASE_URL_USER = `${import.meta.env.VITE_API_BASE_URL}/users`

const config = () => {
    return {
        headers: {
            "Authorization": sessionStorage.getItem('token'),
            "Content-type": "application/json",
        }
    }
}

//COMUNICACION CON EL BACKEND

//Creamos un usuario
export const save = async ({name, lastname, email, password}) => {
    try {
        const response = await axios.post(BASE_URL_USER,{
            name,
            lastname,
            email,
            password,
        },config());
        
    } catch (error) {
        console.error(error);
    }
}

//Traemos todos los usuarios
export const findAll = async () => {
    try {
        const response = await axios.get(BASE_URL_USER);
        return response;
    } catch (error) {
        console.log(error);
    }
}

//Actualizamos un usuario
export const update = async ({id, name, lastname, email}) => {
    try {
        const response = await axios.put(`${BASE_URL_USER}/${id}`,{
            name,
            lastname,
            email,
        });
    } catch (error) {
        console.log(error);
    }
}

//Eliminar un usuario
export const remove = async (id) => {
    console.log("controlll ", id);
    try {
        const response = await axios.delete(`${BASE_URL_USER}/${id}`);
    } catch (error) {
        console.log(error);
    }
}