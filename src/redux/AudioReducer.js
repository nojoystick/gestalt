import { CoreAudioService, EffectsService } from '../services';
import { Effect } from '../services';

const defaultState = {
  effects: [],
  volume: 50,
  tempo: 120
};

const AudioReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_EFFECT':
      return { ...state, effects: [ ...state.effects, new Effect(action.payload)]};
    case 'INITIALIZE_AUDIO':
      return { ...state, coreAudio: new CoreAudioService() };
    case 'INITIALIZE_EFFECTS':
      return { ...state, coreAudio: new EffectsService() };
    case 'ADD_NOTE':
      return { ...state };
    case 'REMOVE_NOTE':
      return { ...state };
    case 'REMOVE_EFFECT':
      const _updatedEffects = state.effects.slice();
      _updatedEffects.splice(action.payload, 1);
      return { ...state, effects: _updatedEffects };
    case 'PITCH_BEND':
      return { ...state };
    case 'TOGGLE_PEDAL':
      return { ...state };
    case 'TOGGLE_EFFECT':
      const updatedEffects = state.effects.slice();
      updatedEffects[action.payload].isActive = !updatedEffects[action.payload].isActive;
      return { ...state, effects: updatedEffects }
    case 'SET_VOLUME': 
      return { ...state, volume: action.payload };
    case 'SET_TEMPO': 
      return { ...state, tempo: action.payload };
    case 'UPDATE_EFFECT_PARAM':
      const effectsToUpdate = state.effects.slice();
      if(effectsToUpdate[action.indexOfEffect] && 
        effectsToUpdate[action.indexOfEffect].params[action.typeOfParam] && 
        effectsToUpdate[action.indexOfEffect].params[action.typeOfParam][action.indexOfParam]){
          effectsToUpdate[action.indexOfEffect].params[action.typeOfParam][action.indexOfParam].value = action.value;
      }
      return { ...state, effects: effectsToUpdate };
    default:
      return { ...state };
  }
};

export default AudioReducer;
