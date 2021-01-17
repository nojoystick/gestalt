const AudioActions = {
  setPreset: (index) => {
    return {
      type: 'SET_SELECTED_PRESET',
      payload: index,
    };
  },
};

export default AudioActions;
