import React, { useState, useContext, useEffect } from 'react';
import Image from './Image';
import DeleteModal from './DeleteModal';
import '../styles/ImagesMasonry.css';
import { GlobalContext } from '../context/GlobalState';
import Masonry from 'react-masonry-css';
import axios from 'axios';

const ImagesMasonry = () => {
  const { images, getImages, deleteImage } = useContext(GlobalContext);
  const [showDelModal, setShowDelModal] = useState(false);
  const [id, setId] = useState('');
  const handleCloseDelModal = () => setShowDelModal(false);
  const handleShowDelModal = () => setShowDelModal(true);

  const onSelectImage = (id) => {
    setId(id);
    handleShowDelModal();
    console.log(id);
  };

  const onConfirmDelete = async () => {
    await axios.delete(`http://localhost:3001/api/images/${id}`);
    deleteImage(id);
    handleCloseDelModal();
  };

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
      <Image
        key={img.id}
        url={img.url}
        label={img.label}
        handleShowDelModal={() => onSelectImage(img.id)}
      />
    ));
  };

  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.length ? renderImages(images) : <p>loading</p>}
      </Masonry>
      <DeleteModal
        handleCloseDelModal={onConfirmDelete}
        showDelModal={showDelModal}
      />
    </>
  );
};

export default ImagesMasonry;
