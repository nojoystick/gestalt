import React from 'react';
import { Donut } from 'react-dial-knob';
import { colors, type } from '../constants/theme';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import './Knob.css';

const GestaltKnob = ({
  size = 100,
  padding = 0,
  max = 100,
  min = 0,
  backgroundColor = colors.secondaryBackground,
  label,
  name,
  value,
  setValue,
  style,
  absPositioning,
}) => {
  const mapLengthToLabelPosition = {
    0: {
      left: size / 3,
      top: size - 15 - size / 1.9,
    },
    1: {
      left: size / 2.5,
      top: size - 15 - size / 1.9,
    },
    2: {
      left: size / 2,
      top: size - 15 - size / 1.9,
    },
    3: {
      left: size / 2.7,
      top: size - 15 - size / 2.3,
    },
    4: {
      left: size / 3.2,
      top: size - 15 - size / 2.3,
    },
    5: {
      left: size / 3.6,
      top: size - 15 - size / 2.3,
    },
    6: {
      left: size - 23 - size / 2,
      top: size - 15 - size / 2.3,
    },
    7: {
      left: size - 28 - size / 2,
      top: size - 15 - size / 2.3,
    },
  };

  const useStyles = makeStyles({
    container: {
      position: absPositioning ? 'absolute' : 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: padding,
    },
    value: {
      font: type.h3,
      fill: colors.text,
    },
    label: {
      font: label && label.length > 1 ? type.h5 : type.h3,
      color: colors.text,
      position: 'absolute',
      top:
        mapLengthToLabelPosition[label && label.length ? label.length : '0']
          .top,
      left:
        mapLengthToLabelPosition[label && label.length ? label.length : '0']
          .left,
    },
    name: {
      marginTop: '5px',
      font: type.body,
      userSelect: 'none',
    },
  });

  const DonutTheme = {
    donutColor: colors.text,
    bgrColor: colors.tertiaryBackground,
    centerColor: backgroundColor,
    centerFocusedColor: backgroundColor,
    donutThickness: 7,
  };
  const KnobStyle = {
    borderRadius: `${size / 2}px`,
    boxShadow: colors.boxShadow,
    '&:hover': {
      opacity: '0.8',
    },
    '&:focus': {
      opacity: '0.8',
    },
  };
  const classes = useStyles();
  const dispatch = useDispatch();

  if (label) {
    return (
      <div style={style} className={`${classes.container} knob-no-value`}>
        <Donut
          diameter={size}
          min={min}
          max={max}
          step={1}
          value={value}
          onValueChange={setValue}
          theme={DonutTheme}
          knobStyle={KnobStyle}
        >
          {label && <span className={classes.label}>{label}</span>}
        </Donut>
        <span className={classes.name}>{name}</span>
      </div>
    );
  }
  return (
    <div className={`${classes.container}`} style={style}>
      <Donut
        diameter={size}
        min={min}
        max={max}
        step={1}
        value={value}
        onValueChange={setValue}
        className={classes.knob}
        theme={DonutTheme}
        knobStyle={KnobStyle}
      />
      <span className={classes.name}>{name}</span>
    </div>
  );
};

export default GestaltKnob;
