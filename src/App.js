import React from 'react';
import { useSelector } from 'react-redux';
import { useSizeListener } from './hooks';
import { Header, Board, Radix } from './components';
import { makeStyles } from '@material-ui/styles';
import { colors } from './constants/theme';

const useStyles = makeStyles({
  body: {
    backgroundColor: colors.background,
    height: '100%',
    padding: (state) => (state.isMobile ? '10px' : '30px 30px 0px 30px'),
  },
  parent: {
    display: 'flex',
    flexDirection: (state) => (!state.isDesktop ? 'column' : 'row'),
    alignItems: (state) => (!state.isDesktop ? 'center' : 'unset'),
  },
});

function App() {
  const isDesktop = useSelector((state) => state.isDesktop);
  const isMobile = useSelector((state) => state.isMobile);
  const classes = useStyles({ isDesktop: isDesktop, isMobile: isMobile });
  useSizeListener();
  return (
    <div className={classes.body}>
      <Header />
      <div className={classes.parent}>
        <Radix />
        <Board />
      </div>
    </div>
  );
}

export default App;
