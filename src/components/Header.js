import React from 'react';
import { useSelector } from 'react-redux';
import Master from './Master';
import { makeStyles } from '@material-ui/styles';
import { colors, type } from '../constants/theme';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: (state) => (state.isMobile ? 'center' : 'space-between'),
  },
  title: {
    font: type.h1,
    color: colors.text,
    margin: '20px',
  },
});

const Header = () => {
  const isMobile = useSelector((state) => state.isMobile);
  const classes = useStyles({ isMobile: isMobile });

  return (
    <div className={classes.header}>
      <h1 className={classes.title}>gestalt</h1>
      <Master />
    </div>
  );
};

export default Header;
