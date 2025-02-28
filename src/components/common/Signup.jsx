import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export const Signup = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = async(data) => {
    //console.log(data)
    //const res = await axios.post("http://localhost:3000/user")

  //before sending data.. role bind
    data.roleId = "67bd39d90d07b9633d60535d"
    const res = await axios.post("/user",data)
    console.log(res) //axiosobjec
    console.log(res.data) //api response...
    //tost..
    //"100" == 100 -->true
    //"100" === 100 -->false
    if(res.status===201){
      //user added..
      //naviget
    }
    else{
      //user not added..
      //login..
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>USER SIGNUP...</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>FirstName</label>
          <input type="text" {...register("firstName")}></input>
        </div>
        <div>
          <label>email</label>
          <input type="text" {...register("email")}></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...register("password")}></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
