import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const AddScreen = () => {
  const [states, setstates] = useState([]);
  const [cities, setcities] = useState([]);
  const [areas, setareas] = useState([]);
  const getAllStates = async () => {
    const res = await axios.get("/state/getallstates");
    console.log(res.data);
    setstates(res.data.data);
  };

  const getCityByStateId = async (id) => {
    //api...
    const res = await axios.get("city/getcitybystate/" + id);
    console.log("city response...", res.data);
    setcities(res.data.data);
  };

  const getAreaByCityId = async (id) => {
    //alert(id)
    const res = await axios.get("/area/getareabycity/" + id);
    setareas(res.data.data);
  };

  useEffect(() => {
    getAllStates();
  }, []);

  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {

    const userId = localStorage.getItem("id")
    data.userId = userId;
    const res = await axios.post("/hording/add",data)
    console.log(res.data)

  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>ADD SCREEN</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>hoardingDimension</label>
          <input type="text" {...register("hoardingDimension")}></input>
        </div>
        <div>
          <label>hoardingType</label>
          <select {...register("hoardingType")}>
            <option value="Unipole">Unipole</option>
            <option value="Billboard">Billboard</option>
            <option value="Gantry">Gantry</option>
            <option value="Digital">Digital</option>
          </select>
        </div>
        <div>
          <label>hourlyRate</label>
          <input type="number" {...register("hourlyRate")}></input>
        </div>
        <div>
          <label>hordingURL</label>
          <input type="hordingURL" {...register("hordingURL")}></input>
        </div>
        <div>
          <label>latitude</label>
          <input type="text" {...register("latitude")}></input>
        </div>
        <div>
          <label>longitude</label>
          <input type="text" {...register("longitude")}></input>
        </div>
        <div>
          <label>SELECT STATE</label>
          <select
            {...register("stateId")}
            onChange={(event) => {
              getCityByStateId(event.target.value);
            }}
          >
            <option>SELECT STATE</option>
            {states?.map((state) => {
              return <option value={state._id}>{state.name}</option>;
            })}
          </select>
        </div>
        <div>
          <label>SELCT CITY</label>
          <select
            {...register("cityId")}
            onChange={(event) => {
              getAreaByCityId(event.target.value);
            }}
          >
            <option>SELECT CITY</option>
            {cities?.map((city) => {
              return <option value={city._id}>{city.name}</option>;
            })}
          </select>
        </div>
        <div>
          <label>SELECT AREA</label>
          <select {...register("areaId")}>
            <option>SELECT AREA</option>
            {areas?.map((area) => {
              return <option value={area._id}>{area.name}</option>;
            })}
          </select>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
