import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { ConfigActions } from '../redux';
import { colors } from '../constants/theme';

const useStyles = makeStyles({
  button: {
    width: '135px',
    height: '135px',
    border: (state) => `3px solid ${state.borderColor}`,
    backgroundColor: (state) => state.fillColor,
    margin: '10px',
    flexShrink: 0,
    outline: 'none',
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.8',
    },
  },
  active: {
    border: (state) => `5px solid ${state.borderColor}`,
    backgroundColor: (state) => state.activeColor,
    boxShadow: colors.boxShadowDark,
  },
});

const PresetButton = ({ borderColor, fillColor, activeColor, index }) => {
  const selectedPreset = useSelector((state) => state.config.selectedPreset);
  const dispatch = useDispatch();
  const classes = useStyles({
    borderColor: borderColor,
    fillColor: fillColor,
    activeColor: activeColor,
  });

  const loadPreset = () => {
    dispatch(ConfigActions.setPreset(index));
  };

  return (
    <button
      className={`${classes.button} ${
        index === selectedPreset && classes.active
      }`}
      onClick={loadPreset}
    />
  );
};

export default PresetButton;
