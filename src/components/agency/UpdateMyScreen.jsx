import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'

export const UpdateMyScreen = () => {
    const id = useParams().id;

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [areas, setAreas] = useState([]);
  
    useEffect(() => {
      getAllStates();
    }, []);
  
    const getAllStates = async () => {
      const res = await axios.get("/state/getallstates");
      setStates(res.data.data);
    };
  
    const getCityByStateId = async (id) => {
      const res = await axios.get("/city/getcitybystate/" + id);
      setCities(res.data.data);
    };
  
    const getAreaByCityId = async (id) => {
      const res = await axios.get("/area/getareabycity/" + id);
      setAreas(res.data.data);
    };
  
    const { register, handleSubmit } = useForm({
        defaultValues:async()=>{
            const res = await axios.get("/hording/getHordingById/"+id)
            return res.data.data
        }
    });
  
    const submitHandler = async (data) => {
      data.userId = localStorage.getItem("id");
      //console.log(data);
      delete data._id; //put _id -->
      console.log(data);
      const res = await axios.put("/hording/updatehording/"+id, data);
        console.log(res.data);
    };
  
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4 shadow">
            <h2 className="text-center mb-4">UPDATE Screen</h2>
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="mb-3">
                <label className="form-label">Hoarding Dimension</label>
                <input type="text" className="form-control" {...register("hoardingDimension")} />
              </div>
              <div className="mb-3">
                <label className="form-label">Hoarding Type</label>
                <select className="form-select" {...register("hoardingType")}>
                  <option value="Unipole">Unipole</option>
                  <option value="Billboard">Billboard</option>
                  <option value="Gantry">Gantry</option>
                  <option value="Digital">Digital</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Hourly Rate</label>
                <input type="number" className="form-control" {...register("hourlyRate")} />
              </div>
              <div className="mb-3">
                <label className="form-label">Hoarding URL</label>
                <input type="text" className="form-control" {...register("hordingURL")} />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Latitude</label>
                  <input type="text" className="form-control" {...register("latitude")} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Longitude</label>
                  <input type="text" className="form-control" {...register("longitude")} />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Select State</label>
                <select
                  className="form-select"
                  {...register("stateId")}
                  onChange={(event) => getCityByStateId(event.target.value)}
                >
                  <option>SELECT STATE</option>
                  {states?.map((state) => (
                    <option key={state._id} value={state._id}>{state.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Select City</label>
                <select
                  className="form-select"
                  {...register("cityId")}
                  onChange={(event) => getAreaByCityId(event.target.value)}
                >
                  <option>SELECT CITY</option>
                  {cities?.map((city) => (
                    <option key={city._id} value={city._id}>{city.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Select Area</label>
                <select className="form-select" {...register("areaId")}>
                  <option>SELECT AREA</option>
                  {areas?.map((area) => (
                    <option key={area._id} value={area._id}>{area.name}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
