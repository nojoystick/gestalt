import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PanelHeader from './PanelHeader';
import TabSelector from './TabSelector';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../constants/theme';

const TITLES = {
  title: 'radix',
  subtitle: 'oscillators',
};

const useStyles = makeStyles({
  panel: {
    position: 'relative',
    border: `3px solid ${colors.text}`,
    boxShadow: colors.boxShadow,
    margin: (state) =>
      state.isDesktop ? '-50px 0px 0px 0px' : '20px 0px 0px 0px',
    width: (state) =>
      state.isTablet ? '500px' : state.isMobile ? 'calc(100% - 65px)' : '300px',
    height: (state) => (state.isTablet ? '300px' : '580px'),
    padding: '10px',
    backgroundColor: colors.secondaryBackground,
    flexShrink: 0,
  },
  tabs: {
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    width: '100%',
  },
});

const Radix = ({ contents }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [numTabs, setNumTabs] = useState(2);
  const isMobile = useSelector((state) => state.config.isMobile);
  const isTablet = useSelector((state) => state.config.isTablet);
  const isDesktop = useSelector((state) => state.config.isDesktop);
  const classes = useStyles({
    isMobile: isMobile,
    isTablet: isTablet,
    isDesktop: isDesktop,
  });

  return (
    <div className={classes.panel}>
      <PanelHeader {...TITLES} isLarge />
      {contents}
      <span className={classes.tabs}>
        <TabSelector
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          numTabs={numTabs}
          setNumTabs={setNumTabs}
          addPlus
          maxNumTabs={5}
        />
      </span>
    </div>
  );
};

export default Radix;
