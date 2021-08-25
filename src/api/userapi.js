// import axios from "config";

// export const user = (credentials) =>
//  console.log('cre',credentials);
//   axios.GET("https://jsonplaceholder.typicode.com/users", credentials, {
    
    
    
//   });
import axios from "axios"

export const userapi=axios.get(`http://jsonplaceholder.typicode.com/users`)

export const imgapi=axios.get(`https://jsonplaceholder.typicode.com/photos`)