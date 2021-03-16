import React from 'react';
import { useSelector } from 'react-redux';
import EffectPanel from './EffectPanel';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../constants/theme';

const useStyles = makeStyles({
  board: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: (state) => (state.isMobile ? 'nowrap' : 'wrap'),
    justifyContent: (state) => (state.isMobile ? 'start' : 'center'),
    margin: (state) => (state.isTablet ? '10px 10px 40px 10px' : '10px'),
    maxWidth: (state) => (state.isMobile ? 'calc(100% - 80px)' : 'unset'),
    overflow: 'auto',
    padding: (state) => (state.isMobile ? '20px' : '0px'),
    backgroundColor: (state) =>
      state.isMobile ? colors.tertiaryBackground : 'unset',
    boxShadow: (state) => (state.isMobile ? colors.boxShadowDark : 'unset'),
  },
});

const Board = () => {
  const isMobile = useSelector((state) => state.config.isMobile);
  const isTablet = useSelector((state) => state.config.isTablet);
  const effects = useSelector((state) => state.audio.effects);
  const classes = useStyles({ isMobile: isMobile, isTablet: isTablet });

  return (
    <div className={classes.board}>
      {effects && effects.map((effect, index) => {
        return <EffectPanel key={index} {...effect} index={index} />;
      })}
      {(!effects || effects.length < 8) && <EffectPanel isAddButton />}
    </div>
  );
};

export default Board;
