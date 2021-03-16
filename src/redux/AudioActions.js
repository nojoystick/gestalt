const AudioActions = {
  addEffect: (payload) => {
    return {
      type: 'ADD_EFFECT',
      payload: payload,
    }
  },
  noteOn: (event) => {
    return {
      type: 'ADD_NOTE',
      payload: event,
    };
  },
  noteOff: (event) => {
    return {
      type: 'REMOVE_NOTE',
      payload: event,
    };
  },
  pitchBend: (event) => {
    return {
      type: 'PITCH_BEND',
      payload: event,
    };
  },
  removeEffect: (payload) => {
    return { 
      type: 'REMOVE_EFFECT',
      payload: payload
    }
  },
  setTempo: (payload) => {
    return {
      type: 'SET_TEMPO',
      payload: payload,
    }
  },
  setVolume: (payload) => {
    return {
      type: 'SET_VOLUME',
      payload: payload,
    }
  },
  toggleEffect: (payload) => {
    return {
      type: 'TOGGLE_EFFECT',
      payload: payload,
    }
  },
  togglePedal: (event) => {
    return {
      type: 'TOGGLE_PEDAL',
      payload: event,
    };
  },
  updateEffectParam: ({indexOfEffect, indexOfParam, type, value}) => {
    return {
      type: 'UPDATE_EFFECT_PARAM',
      indexOfEffect: indexOfEffect,
      indexOfParam: indexOfParam,
      typeOfParam: type,
      value: value,
    }
  }
};

export default AudioActions;
