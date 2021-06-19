import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AudioActions } from '../redux';

/**
 * Listens for keyboard events and sends simulated note on / off messages
 * For testing without a MIDI controller connected.
 */

// just allow up to the Z key
const MAX_KEY_CODE = 90;

export default function useTestHarness() {
  const keyboardInput = useSelector((state) => state.config.keyboardInput);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleNoteOn = (e) => {
      if (!e.repeat && e.keyCode <= MAX_KEY_CODE) {
        dispatch(AudioActions.noteOn(generatePayload(e, true)));
      }
    };
    const handleNoteOff = (e) => {
      if (!e.repeat && e.keyCode <= MAX_KEY_CODE) {
        dispatch(AudioActions.noteOff(generatePayload(e, false)));
      }
    };
    const handleLoseFocus = (e) => {
      if (document.hidden) {
        dispatch(AudioActions.clearAudioBuffer());
      }
    };
    if (keyboardInput) {
      window.addEventListener('keydown', handleNoteOn);
      window.addEventListener('keyup', handleNoteOff);
      window.addEventListener('visibilitychange', handleLoseFocus);
    } else {
      window.removeEventListener('keydown', handleNoteOn);
      window.removeEventListener('keyup', handleNoteOff);
      window.removeEventListener('visibilitychange', handleLoseFocus);
    }
    return () => {
      window.removeEventListener('keydown', handleNoteOn);
      window.removeEventListener('keyup', handleNoteOff);
      window.removeEventListener('visibilitychange', handleLoseFocus);
    };
  }, [dispatch, keyboardInput]);
}

const generatePayload = (event, isNoteOn) => {
  const velo = 70 + 57 * Math.random();
  return {
    channel: 10,
    data: [153, event.keyCode, velo],
    note: { number: event.keyCode, name: null, octave: null },
    rawVelocity: velo,
    target: null,
    timestamp: 0,
    type: isNoteOn ? 'noteon' : 'noteoff',
    velocity: 0.5511811023622047,
  };
};
