import React from 'react';
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
    height: '150px',
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
    justifyContent: 'space-around'
  }
});

const Master = () => {
  const isMobile = useSelector((state) => state.config.isMobile);
  const isScanning = useSelector((state) => state.config.scanningForDevice);
  const deviceConnected = useSelector((state) => state.config.deviceConnected);
  const volume = useSelector(state => state.audio.volume);
  const tempo = useSelector(state => state.audio.tempo);
  const classes = useStyles({ isMobile: isMobile });
  const dispatch = useDispatch();

  const setVolume = (val) => {
    dispatch(AudioActions.setVolume(val));
  }

  const setTempo = (val) => {
    dispatch(AudioActions.setTempo(val));
  }

  const config = [
    {
      label: <Icon
          {...IconSet.SPEAKER}
          width={40}
          height={40}
          fill={colors.text}
        />,
      name: 'volume',
      value: volume,
      setValue: setVolume,
      min: 0,
      max: 100,
    },
    {
      name: 'tempo',
      value: tempo,
      setValue: setTempo,
      min: 6,
      max: 300
    },
  ];

  return (
    <div className={classes.panel}>
      {config.map((el, index) => {
        return <Knob {...el} key={index}/>
      })}
      <div className={classes.column}>
        <IndicatorLight isActive={deviceConnected} isScanning={isScanning} />
        <Settings />
      </div>

    </div>
  );
};

export default Master;
