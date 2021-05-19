import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initState = {
  images: [],
  searchTerm: '',
  errorMsg: '',
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

  const deleteImage = (id) => {
    dispatch({
      type: 'DELETEIMAGE',
      payload: id,
    });
  };

  const updateSearchTerm = (term) => {
    dispatch({
      type: 'FILTERIMAGES',
      payload: term,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        images: state.images,
        searchTerm: state.searchTerm,
        errorMsg: state.errorMsg,
        getImages,
        addImage,
        deleteImage,
        updateSearchTerm,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
