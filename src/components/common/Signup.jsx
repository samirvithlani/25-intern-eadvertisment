import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { data, useNavigate } from "react-router-dom";

export const Signup = () => {
  const { register, handleSubmit } = useForm();
  //navigation...
  const navigate = useNavigate();

  const submitHandler = async(data) => {
    console.log(data);
    data.roleId = "67bd39d90d07b9633d60535d"

    const res = await axios.post("/user",data)
    //res.status
    if(res.status === 201){
      alert("User created successfully")
      navigate("/login")
    }
    else{
      alert("User not created")
    }

  };

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>First Name</label>
          <input type="text" {...register("firstName")} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" {...register("lastName")} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...register("email")} />
        </div>
        <div>
          <label>password</label>
          <input type="text" {...register("password")} />
        </div>
        <div>
          <label>AGE</label>
          <input type="text" {...register("age")} />
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
