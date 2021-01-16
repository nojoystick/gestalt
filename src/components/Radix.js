import React from 'react';
import { useSelector } from 'react-redux';
import PanelHeader from './PanelHeader';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../constants/theme';

const TITLES = {
  title: 'radix',
  subtitle: 'oscillators',
};

const useStyles = makeStyles({
  panel: {
    border: `3px solid ${colors.text}`,
    boxShadow: colors.boxShadow,
    margin: (state) =>
      state.isDesktop ? '-50px 0px 0px 0px' : '20px 0px 0px 0px',
    width: (state) =>
      state.isTablet ? '500px' : state.isMobile ? 'calc(100% - 65px)' : '300px',
    height: (state) => (state.isTablet ? '300px' : '600px'),
    padding: '10px',
    backgroundColor: colors.secondaryBackground,
    flexShrink: 0,
  },
});

const Radix = ({ contents }) => {
  const isMobile = useSelector((state) => state.isMobile);
  const isTablet = useSelector((state) => state.isTablet);
  const isDesktop = useSelector((state) => state.isDesktop);
  const classes = useStyles({
    isMobile: isMobile,
    isTablet: isTablet,
    isDesktop: isDesktop,
  });

  return (
    <div className={classes.panel}>
      <PanelHeader {...TITLES} isLarge />
      {contents}
    </div>
  );
};

export default Radix;
