import React from 'react';
import { Knob, Arc, Value } from 'rc-knob';
import { colors, type } from '../constants/theme';
import { makeStyles } from '@material-ui/styles';

const GestaltKnob = ({ size = 100, width = 10, max = 100, min = 0, label }) => {
  const useStyles = makeStyles({
    knob: {
      borderRadius: `${size / 2}px`,
      boxShadow: colors.boxShadow,
      '&:hover': {
        opacity: '0.8',
      },
      '&:focus': {
        opacity: '0.8',
      },
    },
    arc: {
      boxShadow: colors.boxShadow,
    },
    container: {
      position: 'relative',
    },
    value: {
      font: type.h3,
      fill: colors.text,
    },
    label: {
      font: type.h3,
      color: colors.text,
      position: 'absolute',
      top: `${size / 2 - size / 6}px`,
      left:
        label && label.size > 0
          ? `${size / 2 - (size / 14) * label.length}px`
          : `${size / 2 - size / 5}px`,
    },
  });
  const classes = useStyles();
  if (label) {
    return (
      <div className={classes.container}>
        <Knob
          size={size}
          angleOffset={0}
          angleRange={359}
          min={min}
          max={max}
          className={classes.knob}
        >
          <Arc
            className={classes.arc}
            arcWidth={width}
            color={colors.text}
            radius={size / 2}
            background={colors.tertiaryBackground}
          />
        </Knob>
        {label && <span className={classes.label}>{label}</span>}
      </div>
    );
  }
  return (
    <Knob
      size={size}
      angleOffset={0}
      angleRange={359}
      min={min}
      max={max}
      className={classes.knob}
    >
      <Arc
        className={classes.arc}
        arcWidth={width}
        color={colors.text}
        radius={size / 2}
        background={colors.tertiaryBackground}
      />
      <Value marginBottom={size / 2 - size / 10} className={classes.value} />
    </Knob>
  );
};

export default GestaltKnob;
