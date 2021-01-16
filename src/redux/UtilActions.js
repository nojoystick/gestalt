const UtilActions = {
  setDimensions: (width, height) => {
    return {
      type: 'SET_DIMENSIONS',
      payload: {
        width: width,
        height: height,
      },
    };
  },
};

export default UtilActions;
