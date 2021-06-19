import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon, Knob, IndicatorLight, Settings } from './';
import { IconSet } from '../constants';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../constants/theme';
import { AudioActions } from '../redux';

const useStyles = makeStyles({
  panel: {
    border: `3px solid ${colors.text}`,
    boxShadow: colors.boxShadow,
    width: (state) => (state.isMobile ? '100%' : '320px'),
    height: '155px',
    backgroundColor: colors.secondaryBackground,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: (state) => `${state.isMobile ? '20px' : '0px'} 20px 0px 20px`,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    height: '80%',
    width: '35px',
    marginLeft: '5px',
    justifyContent: 'space-around',
  },
});

const Master = () => {
  const isMobile = useSelector((state) => state.config.isMobile);
  const isScanning = useSelector((state) => state.config.scanningForDevice);
  const deviceConnected = useSelector((state) => state.config.deviceConnected);
  const audioStatus = useSelector((state) => state.audio.coreAudio.status);
  const audioActive = useSelector((state) => state.audio.coreAudio.isActive);
  const classes = useStyles({ isMobile: isMobile });
  const dispatch = useDispatch();

  const midiTooltipMessages = [
    `connected to device ${deviceConnected}`,
    `no midi device connected`,
  ];
  const audioTooltipMessages = [
    `audio context is ${audioStatus}`,
    `audio context is ${audioStatus}`,
  ];

  let vol,
    tempo = 0;

  const setVolume = (val) => {
    vol = val;
    dispatch(AudioActions.setVolume(val));
  };

  const setTempo = (val) => {
    tempo = val;
    dispatch(AudioActions.setTempo(val));
  };

  const config = [
    {
      label: (
        <Icon {...IconSet.SPEAKER} width={40} height={40} fill={colors.text} />
      ),
      name: 'volume',
      value: vol,
      setValue: setVolume,
      min: 0,
      max: 127,
    },
    {
      name: 'tempo',
      value: tempo,
      setValue: setTempo,
      min: 6,
      max: 300,
    },
  ];

  return (
    <div className={classes.panel}>
      {config.map((el, index) => {
        return <Knob {...el} key={index} />;
      })}
      <div className={classes.column}>
        <Settings />
        <IndicatorLight
          isActive={deviceConnected}
          isScanning={isScanning}
          label={'MIDI'}
          tooltipMessages={midiTooltipMessages}
        />
        <IndicatorLight
          isActive={audioActive}
          isScanning={false}
          label={'audio'}
          tooltipMessages={audioTooltipMessages}
        />
      </div>
    </div>
  );
};

export default Master;
