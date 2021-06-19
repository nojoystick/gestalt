import { CoreAudioService } from '../services';
import { Volume, Frequency } from '../constants';
import { Effect } from '../services';

const defaultState = {
  effects: [],
  volume: 0,
  tempo: 0,
  activeNotes: {},
  coreAudio: {},
};

const AudioReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_EFFECT':
      return {
        ...state,
        effects: [...state.effects, new Effect(action.payload)],
      };
    case 'INITIALIZE_EFFECTS':
      return { ...state };
    case 'ADD_NOTE':
      const noteGainNode = buildGainNode(
        action.payload.rawVelocity,
        CoreAudioService.context.currentTime
      );
      noteGainNode.connect(CoreAudioService.preampGainNode);

      const oscillatorNode = CoreAudioService.context.createOscillator();
      oscillatorNode.connect(noteGainNode);
      // oscillatorNode.type = 'SINE';
      oscillatorNode.frequency.setValueAtTime(
        Frequency[action.payload.note.number],
        CoreAudioService.context.currentTime
      );
      oscillatorNode.start(CoreAudioService.context.currentTime);

      return {
        ...state,
        activeNotes: {
          ...state.activeNotes,
          [action.payload.note.number]: oscillatorNode,
        },
      };
    case 'CLEAR_AUDIO_BUFFER':
      return clearAudioBuffer(state);
    case 'REMOVE_NOTE':
      try {
        const osc = state.activeNotes[action.payload.note.number];
        osc.stop(CoreAudioService.context.currentTime);
        const activeNotes = state.activeNotes;
        delete activeNotes[action.payload.note.number];
        return {
          ...state,
          activeNotes: activeNotes,
        };
      } catch (e) {
        return clearAudioBuffer(state);
      }
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
      updatedEffects[action.payload].isActive = !updatedEffects[action.payload]
        .isActive;
      return { ...state, effects: updatedEffects };
    case 'SET_AUDIO_STATE':
      return {
        ...state,
        coreAudio: {
          status: action.payload,
          isActive: action.payload === 'running',
        },
      };
    case 'SET_VOLUME':
      console.log('set volume', action.payload);
      const vol =
        action.scale === 'MIDI' ? Volume[action.payload] : action.payload;

      CoreAudioService.masterGainNode.gain.setValueAtTime(
        vol,
        CoreAudioService.context.currentTime
      );

      return { ...state, volume: action.payload };
    case 'SET_TEMPO':
      return { ...state, tempo: action.payload };
    case 'UPDATE_EFFECT_PARAM':
      const effectsToUpdate = state.effects.slice();
      if (
        effectsToUpdate[action.indexOfEffect] &&
        effectsToUpdate[action.indexOfEffect].params[action.typeOfParam] &&
        effectsToUpdate[action.indexOfEffect].params[action.typeOfParam][
          action.indexOfParam
        ]
      ) {
        effectsToUpdate[action.indexOfEffect].params[action.typeOfParam][
          action.indexOfParam
        ].value = action.value;
      }
      return { ...state, effects: effectsToUpdate };
    default:
      return { ...state };
  }
};

const buildGainNode = (volume, startTime) => {
  const node = CoreAudioService.context.createGain();
  node.gain.setValueCurveAtTime(expCurve(0, volume), startTime, 0.015);
  return node;
};

/**
 * Custom curve, linearValueAtTime can't be cancelled midway through
 * @param {*} start
 * @param {*} end
 */
const expCurve = (start, end) => {
  var count = 10;
  var t = 0;
  var curve = new Float32Array(count + 1);
  start = Math.max(start, 0.0000001);
  end = Math.max(end, 0.0000001);
  for (var i = 0; i <= count; ++i) {
    curve[i] = start * Math.pow(end / start, t);
    t += 1 / count;
  }
  return curve;
};

const clearAudioBuffer = (state) => {
  Object.values(state.activeNotes).forEach((osc) => {
    osc.stop(CoreAudioService.context.currentTime);
  });
  return {
    ...state,
    activeNotes: {},
  };
};

export default AudioReducer;
