import axios from "axios";
import React, { useState } from "react";

export const Twitter = () => {
  const [isLoading, setisLoading] = useState(false);
  const getMyTwitterData = async () => {
    const obj = {
      userId: "67d1d9ef341a73f4101273e8",
      //userId:localStorage.getItem("id")
    };
    setisLoading(true);
    try {
      const res = await axios.post("/twitter/scrape", obj, { timeout: 9000000 });
      console.log(res.data);
      if (res.status === 200) {
        console.log(res.data);
        setisLoading(false);
      }
      
    } catch (err) {
      console.log(err);
      setisLoading(false);
    }
  };
  return (
    <div>
      <h1>Twitter</h1>
      {isLoading && <h1>Loading...</h1>}
      <button onClick={getMyTwitterData}>Get My Twitter Data</button>
    </div>
  );
};
