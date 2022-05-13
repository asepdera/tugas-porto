import axios from 'axios'
//get csrf cookie dari server
const getCookie = () => {
    axios.get('http://localhost:8000/sanctum/csrf-cookie').then(() => {})
}

export default getCookie