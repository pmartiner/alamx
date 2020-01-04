import axios from 'axios';
const URL_WS = 'http://localhost:8080/http://localhost:9696';

const options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
}
axios.interceptors.response.use(response => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, 
    error => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
});
const api = {
    login: info => {
        const url = `${URL_WS}/login`;
        const encodedURI = window.encodeURI(url);
        const opt = {
            url: encodedURI,
            method: 'POST',
            data: {
                login: {
                    correo: info.correo,
                    contrasena: info.contrasena
                }
            },
            ...options
        }

        return axios(opt)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
    },
    getAllProductos: () => {
        const url = `${URL_WS}/findAllProducts`;
        const encodedURI = window.encodeURI(url);
        const opt = {
            url: encodedURI,
            method: 'GET',
            ...options
        }

        return axios(opt)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
    },
    registerUser: info => {
        const url = `${URL_WS}/createUsuario`;
        const encodedURI = window.encodeURI(url);
        const opt = {
            url: encodedURI,
            method: 'POST',
            data: {
                createUsuario: {
                    nombres: info.nombres,
                    apellidos: info.apellidos,
                    telefono: info.telefono,
                    correo: info.correo,
                    contrasena: info.contrasena,
                    calle: info.calle,
                    num_ext: info.num_ext,
                    num_in: info.num_in,
                    colonia: info.colonia,
                    municipio: info.municipio,
                    cp: info.cp,
                    ciudad: info.ciudad,
                    estado: info.estado
                }
            },
            ...options
        }

        return axios(opt)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
    },
    newSale: async info => {
        const url = `${URL_WS}/nuevaVenta`;
        const encodedURI = window.encodeURI(url);
        const opt = {
            url: encodedURI,
            method: 'POST',
            data: {
                nuevaVenta: {
                    id_producto: info.id_producto,
                    id_usuario: info.id_usuario,
                    tarjeta: info.tarjeta,
                    costo_total: info.costo_total,
                    cantidad: info.cantidad,
                    fecha_entrega: info.fecha_entrega
                }
            },
            ...options
        }

        const res = await axios(opt)
        if(res.status === 200)
            return res.data;
        return res;
    },
    ordersByUser: idUser => {
        const url = `${URL_WS}/pedidosByUsuario/${idUser}`;
        const encodedURI = window.encodeURI(url);
        const opt = {
            url: encodedURI,
            method: 'GET',
            ...options
        }

        return axios(opt)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
    }
}

export default api;