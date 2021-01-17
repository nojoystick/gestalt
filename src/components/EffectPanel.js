import React, { useState } from 'react';
import PanelHeader from './PanelHeader';
import TabSelector from './TabSelector';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../constants/theme';

const useStyles = makeStyles({
  panel: {
    position: 'relative',
    border: `3px solid ${colors.text}`,
    boxShadow: colors.boxShadow,
    width: '200px',
    height: '250px',
    padding: '11px',
    backgroundColor: colors.secondaryBackground,
    margin: '10px',
    flexShrink: 0,
  },
  tabs: {
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    width: '100%',
  },
});

const EffectPanel = ({
  title = 'gestalt',
  subtitle = 'synthesizer',
  contents,
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const classes = useStyles();
  return (
    <div className={classes.panel}>
      <PanelHeader title={title} subtitle={subtitle} />
      {contents}
      <span className={classes.tabs}>
        <TabSelector
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          numTabs={2}
        />
      </span>
    </div>
  );
};

export default EffectPanel;
