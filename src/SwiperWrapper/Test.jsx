// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Test() {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);



//   const options = {
//     method: 'GET',
//     url: 'https://amazon-products-api.p.rapidapi.com/',
//     headers: {
//       'X-RapidAPI-Key': 'ce8ce51dcdmshbf7c3060234b5fcp1a1696jsn56337ece5dd2',
//       'X-RapidAPI-Host': 'amazon-products-api.p.rapidapi.com'
//     }
//   };
  
  
//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true); 
//       setError(null);
//       try {
//         const response = await axios.request(options);
//         console.log(response.data);
//         setData(response.data)
//       } catch (error) {
//         console.error(error);
//       }finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <div> 
//       {isLoading && <p>Loading data...</p>} 
//       {error && <p>Error: {error.message}</p>} 
//       {/* {data ? <div id={data.asin}>
//         {data.product_title}
//       </div> : "null"}  */}
//        {data && !isLoading && <p>No data found.</p>} 
//     </div>
//   );
// }


import React from 'react'
import styled from '@emotion/styled'
const Input = styled.input`
  padding: 2px;
  font-size: 10px;
  border: 1px solid grey, 
`;

export default function Test() {
  return (
    <Input className=''>Test</Input>
  )
}
