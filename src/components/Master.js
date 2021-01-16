import React from 'react';
import { useSelector } from 'react-redux';
import { Icon, Knob } from './';
import { IconSet } from '../constants';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../constants/theme';

const useStyles = makeStyles({
  panel: {
    border: `3px solid ${colors.text}`,
    boxShadow: colors.boxShadow,
    width: (state) => (state.isMobile ? '100%' : '320px'),
    height: '140px',
    backgroundColor: colors.secondaryBackground,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: (state) => `${state.isMobile ? '20px' : '0px'} 20px 0px 20px`,
  },
});

const Master = () => {
  const isMobile = useSelector((state) => state.isMobile);
  const classes = useStyles({ isMobile: isMobile });
  return (
    <div className={classes.panel}>
      <Knob
        label={
          <Icon
            {...IconSet.SPEAKER}
            width={40}
            height={40}
            fill={colors.text}
          />
        }
      />
      <Knob min={6} max={300} />
    </div>
  );
};

export default Master;
