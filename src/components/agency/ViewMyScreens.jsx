import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CustLoder } from '../common/CustLoder'

export const ViewMyScreens = () => {

    const [screens, setscreens] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const getAllMyScreens = async() => {

        setisLoading(true)    
        const res = await axios.get("/hording/getHordingsbyuserid/"+localStorage.getItem("id"))
        console.log(res.data) //api response...
        setscreens(res.data.data)
        setisLoading(false)

    }

    useEffect(() => {
        
        getAllMyScreens()
        
    }, [])
    

  return (
    <div style={{textAlign:"center"}}>
        {
            isLoading && <CustLoder/>
        }
        MY SCREENS
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>hoardingDimension</th>
                    <th>IMAGE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                   screens?.map((sc)=>{
                    return<tr>
                        <td>{sc.hoardingDimension}</td>
                        <td>
                            <img  style ={{height:100,width:100}}src={sc?.hordingURL}></img>
                        </td>
                        <td>
                            <Link to ={`/agency/updateScreen/${sc._id}`} className ="btn btn-info">UPDATE</Link>
                            </td>
                    </tr>
                   }) 
                }
            </tbody>
        </table>
    </div>
  )
}
