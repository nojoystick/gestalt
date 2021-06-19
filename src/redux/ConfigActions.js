const ConfigActions = {
  setDeviceConnected: (bool) => {
    return {
      type: 'SET_DEVICE_CONNECTED',
      payload: bool,
    };
  },
  setDimensions: (width, height) => {
    return {
      type: 'SET_DIMENSIONS',
      payload: {
        width: width,
        height: height,
      },
    };
  },
  setKeyboardInput: (bool) => {
    return {
      type: 'SET_KEYBOARD_INPUT',
      payload: bool,
    };
  },
  setModalVisible: (bool) => {
    return {
      type: 'SET_MODAL_VISIBLE',
      payload: bool,
    };
  },
  setNotification: (content) => {
    return {
      type: 'SET_NOTIFICATION',
      payload: content,
    };
  },
  setPreset: (index) => {
    return {
      type: 'SET_SELECTED_PRESET',
      payload: index,
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
  setScanningForDevice: (bool) => {
    return {
      type: 'SET_SCANNING',
      payload: bool,
    };
  },
  setShowHelp: (bool) => {
    return {
      type: 'SET_SHOW_HELP',
      payload: bool,
    };
  },
};

export default ConfigActions;
