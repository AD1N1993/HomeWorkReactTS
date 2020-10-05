import axios from "axios"

const instance = axios.create({
    baseURL:"https://neko-cafe-back.herokuapp.com/"
})

export const hwApi = {
   sendValue (value:boolean) {
       return instance.post("auth/test",{success: value})
   }
}