import React, { useContext, useEffect } from 'react';
import Image from './Image';
import '../styles/ImagesMasonry.css';
import { GlobalContext } from '../context/GlobalState';
import Masonry from 'react-masonry-css';
import axios from 'axios';

const ImagesMasonry = () => {
  const { images, getImages } = useContext(GlobalContext);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3001/api/images');
    const imgs = response.data;
    getImages(imgs);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const renderImages = (imgs) => {
    return imgs.map((img) => (
      <Image key={img.id} url={img.url} label={img.label} />
    ));
  };

  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.length ? renderImages(images) : <p>loading</p>}
    </Masonry>
  );
};

export default ImagesMasonry;
