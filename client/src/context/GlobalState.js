import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initState = {
  images: [],
};

export const GlobalContext = createContext(initState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  const getImages = (images) => {
    dispatch({
      type: 'GETIMAGES',
      payload: images,
    });
  };

  const addImage = (image) => {
    dispatch({
      type: 'ADDIMAGE',
      payload: image,
    });
  };

  const deletImage = (id) => {
    dispatch({
      type: 'DELETEIMAGE',
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        images: state.images,
        getImages,
        addImage,
        deletImage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
