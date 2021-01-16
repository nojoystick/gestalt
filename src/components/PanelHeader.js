import React from 'react';
import Toggle from './Toggle';
import { makeStyles } from '@material-ui/styles';
import { colors, type } from '../constants/theme';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
  },
  title: {
    font: (state) => (state.isLarge ? type.h2 : type.h4),
    color: colors.text,
    margin: '0px',
  },
  subtitle: {
    font: (state) => (state.isLarge ? type.subh4 : type.subh5),
    margin: (state) => `0px 0px 0px ${state.isLarge ? '20px' : '15px'}`,
    color: colors.text,
  },
  titles: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const PanelHeader = ({
  title = 'gestalt',
  subtitle = 'synthesizer',
  isLarge,
}) => {
  const classes = useStyles({ isLarge: isLarge });
  return (
    <div className={classes.header}>
      <div className={classes.titles}>
        <h4 className={classes.title}>{title}</h4>
        <h5 className={classes.subtitle}>{subtitle}</h5>
      </div>
      <Toggle />
    </div>
  );
};

export default PanelHeader;
