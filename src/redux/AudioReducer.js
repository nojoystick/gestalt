import { CoreAudioService, MIDIService, EffectsService } from '../services';
import { Breakpoints } from '../constants';

const defaultState = {
  width: window.innerWidth,
  height: window.innerHeight,
  isMobile: window.innerWidth <= Breakpoints.MOBILE,
  isTablet:
    window.innerWidth > Breakpoints.MOBILE &&
    window.innerWidth <= Breakpoints.TABLET,
  isDesktop: window.innerWidth > Breakpoints.TABLET,
  selectedPreset: 0,
  presetNames: [],
};

const AudioReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INITIALIZE_AUDIO':
      return { ...state, coreAudio: new CoreAudioService() };
    case 'INITIALIZE_EFFECTS':
      return { ...state, coreAudio: new EffectsService() };
    case 'INITIALIZE_MIDI':
      return { ...state, coreAudio: new MIDIService() };
    case 'SET_DIMENSIONS':
      return {
        ...state,
        width: action.payload.width,
        height: action.payload.height,
        isMobile: action.payload.width <= Breakpoints.MOBILE,
        isTablet:
          action.payload.width > Breakpoints.MOBILE &&
          action.payload.width <= Breakpoints.TABLET,
        isDesktop: action.payload.width > Breakpoints.TABLET,
      };
    case 'SET_PRESET_NAME':
      console.log('set preset name', action.payload.index);
      state.presetNames[action.payload.index] = action.payload.name;
      return { ...state };
    case 'SET_SELECTED_PRESET':
      return { ...state, selectedPreset: action.payload };
    default:
      return { ...state };
  }
};

export default AudioReducer;
