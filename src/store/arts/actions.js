import { API_URL } from "../../components/_utils/constants";

export const ART_REQUEST = 'ART::REQUEST';
export const ART_SUCCESS = 'ART::SUCCESS';
export const ART_FAILURE = 'ART::FAILURE';

export const artRequest = () => ({
type: ART_REQUEST,
});

export const artSuccess = (art) => ({
   type: ART_SUCCESS,
   art,
});

export const artFailure = (error) => ({
   type: ART_FAILURE,
   error,
});


export const getArt = () => async (dispatch) => {
   dispatch(artRequest());

   try {
      const response = await fetch(API_URL);

      if (!response.ok) {
         throw new Error("request failed with status " + response.status);
       };

      const data = await response.json();

      dispatch(artSuccess(data));
   } catch (err) {
      dispatch(artFailure(err.message));
   }
}
