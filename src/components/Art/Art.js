import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArt } from "../../store/arts/actions";
import { REQUEST_STATUS } from "../_utils/constants";

export const Art = () => {

 const art = useSelector(state => state.art.art);
 const artStatus = useSelector(state => state.art.request.status);
 const artError = useSelector(state => state.art.request.error);

 const dispatch = useDispatch();
   // const getArt = async () => {
   //    try {
   //       setLoading(true);
   //       const response = await fetch(API_URL);
   //       const data = await response.json();
   //       setArt(data);
   //    } catch (err) {
   //       setError(err.message);
   //    } finally {
   //       setLoading(false);
   //    }
   // }

   useEffect(() => {
      dispatch(getArt());
   }, [])

   if (artStatus === REQUEST_STATUS.PENDING) {
      return <h2>Loading data...</h2>
   }

   if (artError === REQUEST_STATUS.FAILURE) {
      return <h2>ERROR: {artError}</h2>
   }

   return (
      <div>
         <h2>Art name: { art.objectName }</h2>
         <img src={ art.primaryImageSmall } />
      </div>
   )
}