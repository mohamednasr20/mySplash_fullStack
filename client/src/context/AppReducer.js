const AppReducer = (state, action) => {
  switch (action.type) {
    case 'GETIMAGES':
      return {
        ...state,
        images: action.payload,
      };

    case 'ADDIMAGE':
      return {
        ...state,
        images: [...state.images, action.payload],
      };

    case 'DELETEIMAGE':
      return {
        ...state,
        images: state.images.filter((img) => img.id !== action.payload),
      };

    default:
      return state;
  }
};

export default AppReducer;
