import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const HordingList = () => {
    const columns =[
        {field:"_id",headerName:"ID",width:90},
        {field:"hoardingDimension",headerName:"Hoarding Dimension",width:150},
        {field:"hoardingType",headerName:"Hoarding Type",width:150},
        {field:"Availablity_Status",headerName:"Availablity Status",width:150},
        {field:"hourlyRate",headerName:"Hourly Rate",width:150},
    ]
    const [hordings, sethordings] = useState([])

    const getAllHordings = async()=>{

        const res = await axios.get("/hording/all")
        sethordings(res.data.data)


    }
    useEffect(() => {
      
    
      getAllHordings()
    }, [])
    

//   const columns = [
//     {
//       field: "id",
//       headerName: "ID",
//       width: 90,
//     },
//     {
//       field: "name",
//       headerName: "Name",
//       width: 150,
//     },
//     {
//       field: "city",
//       headerName: "City",
//       width: 150,
//     },
//     {
//       field: "location",
//       headerName: "Location",
//       width: 150,
//     },
//     {
//       field: "size",
//       headerName: "Size",
//       width: 150,
//     },
//     {
//       field: "price",
//       headerName: "Price",
//       width: 150,
//     },

//     {
//       field: "status",
//       headerName: "Status",
//       width: 150,
//     },
//   ];

//   //why karachi??
//   const rows = [
//     {
//       id: 1,
//       name: "Hording 1",
//       city: "Ahmedabad",
//       location: "Near Airport",
//       size: "10x20",
//       price: "10000",
//       status: "Available",
//     },
//     {
//       id: 2,
//       name: "Hording 22",
//       city: "Ahmedabad",
//       location: "Paldi",
//       size: "10x20",
//       price: "10000",
//       status: "Available",
//     },
//     {
//       id: 3,
//       name: "Hording 3",
//       city: "Ahmedabad",
//       location: "Bopal",
//       size: "10x20",
//       price: "10000",
//       status: "Available",
//     },
//     {
//       id: 4,
//       name: "Hording 4",
//       city: "Ahmedabad",
//       location: "Near Airport",
//       size: "10x20",
//       price: "10000",
//       status: "Available",
//     },
//     {
//       id: 5,
//       name: "Hording 5",
//       city: "Ahmedabad",
//       location: "Near Airport",
//       size: "10x20",
//       price: "10000",
//       status: "Available",
//     },
//   ];

  return (
    <div style={{ textAlign: "center" }}>
      <DataGrid
        rows={hordings}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row) => row._id}
      ></DataGrid>
    </div>
  );
};
