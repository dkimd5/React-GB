import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCountry } from "../../store/profile/actions";

export const Profile = () => {

   const country = useSelector(state => state.profile.country);
   console.log(country);
   const dispatch = useDispatch();

   const handleChange = () => {
      dispatch(changeCountry);
   };

   return (
      <>
         <h1>User country: { country }</h1>
         {/* <input type='checkbox' onChange={ handleChange } /> */ }
      </>
   )
}