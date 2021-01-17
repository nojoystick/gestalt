import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSizeListener } from './hooks';
import { Header, Board, Radix, MenuButton, PresetsMenu } from './components';
import { makeStyles } from '@material-ui/styles';
import { colors } from './constants/theme';

const useStyles = makeStyles({
  body: {
    position: 'relative',
    backgroundColor: colors.background,
    height: '100%',
    padding: (state) => (state.isMobile ? '10px' : '30px 30px 0px 30px'),
    overflowY: 'hidden',
  },
  parent: {
    display: 'flex',
    flexDirection: (state) => (!state.isDesktop ? 'column' : 'row'),
    alignItems: (state) => (!state.isDesktop ? 'center' : 'unset'),
  },
  button: {
    position: 'absolute',
    bottom: (state) => (state.menuVisible ? '200px' : '-6px'),
    left: '120px',
    transition: 'bottom 1s',
  },
  menu: {
    border: `3px solid ${colors.text}`,
    position: 'absolute',
    bottom: '-30px',
    left: '0px',
    height: (state) => (state.menuVisible ? '230px' : '0px'),
    maxWidth: '100%',
    overflowX: 'scroll',
  },
});

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const isDesktop = useSelector((state) => state.isDesktop);
  const isMobile = useSelector((state) => state.isMobile);
  const classes = useStyles({
    isDesktop: isDesktop,
    isMobile: isMobile,
    menuVisible: menuVisible,
  });
  useSizeListener();

  const toggleMenuVisible = () => {
    setMenuVisible((v) => !v);
  };

  return (
    <div className={classes.body}>
      <div>
        <Header />
        <div className={classes.parent}>
          <Radix />
          <Board />
        </div>
        <MenuButton
          customStyle={classes.button}
          isActive={menuVisible}
          onClick={toggleMenuVisible}
        />
      </div>
      <PresetsMenu customStyles={classes.menu} />
    </div>
  );
}

export default App;
