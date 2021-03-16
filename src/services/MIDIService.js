import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import WebMidi from 'webmidi';
import { ConfigActions, AudioActions } from '../redux';

const NOTIFICATION_MESSAGE = {
  title: 'hey there',
  body:
    "unfortunately, the MIDI drivers for gestalt aren't supported in your browser. sorry about that! give it a shot in Chrome, Edge, or Opera. ✨",
};

const useMidiService = () => {
  const [scanFlag, setScanFlag] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    try{
      WebMidi.enable(() => {
        dispatch(ConfigActions.setScanningForDevice(true));
        // Reacting when a new device becomes available
        // The listeners are actually always listening
        // But the animation only plays when there's no connected device
        // Lets' keep that our little secret ;-)
        WebMidi.addListener('connected', function (e) {
          dispatch(ConfigActions.setDeviceConnected(true));
          dispatch(ConfigActions.setScanningForDevice(false));
          setTimeout(() => setScanFlag((s) => !s), 500);
        });
        WebMidi.addListener('disconnected', function (e) {
          if (WebMidi.inputs.length === 0) {
            dispatch(ConfigActions.setDeviceConnected(false));
            dispatch(ConfigActions.setScanningForDevice(true));
            setTimeout(() => setScanFlag((s) => !s), 500);
          }
        });
        WebMidi.inputs.forEach((input) => {
          input.addListener('noteon', 'all', (event) => {
            console.log('note was played', event);
            dispatch(AudioActions.noteOn(event));
          });
          input.addListener('noteoff', 'all', (event) => {
            console.log('note was released', event);
            dispatch(AudioActions.noteOff(event));
          });
          input.addListener('pitchbend', 'all', (event) => {
            dispatch(AudioActions.pitchBend(event));
          });
          input.addListener('controlchange', 'all', (event) => {
            console.log('controlChange', event);
            switch (event.value) {
              case 64:
                dispatch(AudioActions.togglePedal(event));
                break;
              default:
                return null;
            }
          });
        });
      });
    } catch(e) {
      dispatch(ConfigActions.setNotification(NOTIFICATION_MESSAGE));
      setTimeout(() => dispatch(ConfigActions.setModalVisible(true), 3000));
    }
  }, [scanFlag, dispatch]);
};

export default useMidiService;
