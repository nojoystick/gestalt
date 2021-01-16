import React from 'react';
import PanelHeader from './PanelHeader';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../constants/theme';

const useStyles = makeStyles({
  panel: {
    border: `3px solid ${colors.text}`,
    boxShadow: colors.boxShadow,
    width: '200px',
    height: '250px',
    padding: '11px',
    backgroundColor: colors.secondaryBackground,
    margin: '10px',
    flexShrink: 0,
  },
});

const EffectPanel = ({
  title = 'gestalt',
  subtitle = 'synthesizer',
  contents,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.panel}>
      <PanelHeader title={title} subtitle={subtitle} />
      {contents}
    </div>
  );
};

export default EffectPanel;
