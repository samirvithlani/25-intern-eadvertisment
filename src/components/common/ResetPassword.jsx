import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

export const ResetPassword = () => {
    const token = useParams().token
    const {register,handleSubmit} = useForm()
    const submitHandler = async(data)=>{
        //resetpasseord api..
        const obj = {
            token:token,
            password:data.password
        }
        const res = await axios.post("/user/resetpassword",obj)
        console.log(res.data)
            

    }
  return (
    <div>
        <h1>RESET PASSWOERD COMPONENT</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NEW PASSWORD</label>
                <input type='text' {...register("password")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
