import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../constants/theme';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  parent: {
    position: 'relative',
    background: colors.tertiaryBackground,
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    boxShadow: colors.boxShadow,
  },
  scanContainer: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
  },
  rotate1: {
    animation: `$rotate 1.75s infinite`,
    animationTimingFunction: 'cubic-bezier(.17,.67,.89,.33)',
  },
  rotate2: {
    animation: `$rotate 1.5s infinite`,
    animationTimingFunction: 'cubic-bezier(.51,.55,.36,.87)',
  },
  scanBulb: {
    position: 'absolute',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    zIndex: -1,
  },
  bulb1: {
    width: '5px',
    height: '5px',
    background: colors.d50,
    top: '0px',
    left: '12.5px',
  },
  bulb2: {
    background: colors.c50,
    top: '10px',
    left: '20px',
  },
  light: {
    position: 'absolute',
    top: '5px',
    left: '5px',
    width: '20px',
    height: '20px',
    borderRadius: '10px',
    zIndex: 1,
  },
  redLight: {
    backgroundColor: colors.e50,
  },
  greenLight: {
    backgroundColor: colors.a80,
  },
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(720deg)',
    },
  },
});

const IndicatorLight = ({ isScanning, isActive }) => {
  const classes = useStyles();
  return (
    <span className={classes.parent}>
      {isScanning && (
        <>
          <span className={`${classes.scanContainer} ${classes.rotate1}`}>
            <span className={`${classes.scanBulb} ${classes.bulb1}`} />
          </span>
          <span className={`${classes.scanContainer} ${classes.rotate2}`}>
            <span className={`${classes.scanBulb} ${classes.bulb2}`} />
          </span>
        </>
      )}
      <span
        className={`${classes.light} ${
          isActive ? classes.greenLight : classes.redLight
        }`}
      />
    </span>
  );
};

export default IndicatorLight;
