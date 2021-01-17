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
  setPresetName: (name, index) => {
    return {
      type: 'SET_PRESET_NAME',
      payload: {
        name: name,
        index: index,
      },
    };
  },
};

export default UtilActions;
