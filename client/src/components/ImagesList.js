import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import axios from 'axios';

const ImagesList = () => {
  const { images, getImages } = useContext(GlobalContext);
  const fetchData = async () => {
    const response = await axios.get('http://localhost:3001/api/images');
    const imgs = response.data;
    getImages(imgs);
  };
  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      {images.length ? (
        images.map((img) => <p key={img.id}>{img.label}</p>)
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default ImagesList;
