import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../constants/theme';
import { IconSet } from '../constants';
import Icon from './Icon';

const useStyles = makeStyles({
  button: {
    width: '120px',
    height: '40px',
    borderWidth: '3px 3px 0px 3px',
    borderColor: colors.text,
    backgroundColor: colors.secondaryBackground,
    transition: 'opacity 1s',
    padding: '0px',
    margin: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.6',
    },
  },
  icon: {
    transform: (state) => (state.isActive ? 'rotate(180deg)' : 'rotate(0deg)'),
    transition: 'transform 0.5s',
  },
});

const MenuButton = ({ customStyle, isActive, onClick }) => {
  const classes = useStyles({ isActive: isActive });
  return (
    <button className={`${classes.button} ${customStyle}`} onClick={onClick}>
      <Icon
        className={classes.icon}
        {...IconSet.ARROW}
        stroke={colors.text}
        width={30}
        height={15}
      />
    </button>
  );
};

export default MenuButton;
