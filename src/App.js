import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSizeListener, useBrowserChecker, useDelayedUnmount } from './hooks';
import {
  Modal,
  Header,
  Board,
  Radix,
  MenuButton,
  PresetsMenu,
} from './components';
import { makeStyles } from '@material-ui/styles';
import { colors } from './constants/theme';
import { useMidiService } from './services';

const useStyles = makeStyles({
  body: {
    position: 'fixed',
    backgroundColor: (state) =>
      state.fadeIn ? colors.background : colors.text,
    height: '100%',
    width: '100%',
    overflowY: 'hidden',
    opacity: (state) => (state.fadeIn ? '1.0' : '0.0'),
    transition: 'opacity 2s; background-color 5s',
  },
  scrollable: {
    height: (state) =>
      state.isMobile ? 'calc(100% - 20px)' : 'calc(100% - 30px)',
    width: (state) =>
      state.isMobile ? 'calc(100% - 20px)' : 'calc(100% - 60px)',
    padding: (state) => (state.isMobile ? '10px' : '30px 30px 0px 30px'),
    overflow: 'scroll',
  },
  parent: {
    display: 'flex',
    flexDirection: (state) => (!state.isDesktop ? 'column' : 'row'),
    alignItems: (state) => (!state.isDesktop ? 'center' : 'unset'),
  },
  button: {
    position: 'absolute',
    bottom: (state) => (state.menuVisible ? '220px' : '0px'),
    left: '120px',
    transition: 'bottom 1s, background-color 1s',
    cursor: 'pointer',
    backgroundColor: (state) =>
      state.menuVisible
        ? colors.tertiaryBackground
        : colors.secondaryBackground,
  },
  menu: {
    border: `3px solid ${colors.text}`,
    position: 'absolute',
    bottom: '-30px',
    left: '0px',
    height: (state) => (state.menuVisible ? '250px' : '0px'),
    maxWidth: '100%',
    overflowX: 'scroll',
  },
});

function App() {
  const [fadeIn, setFadeIn] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const modalVisible = useSelector((state) => state.config.modalVisible);
  const isDesktop = useSelector((state) => state.config.isDesktop);
  const isMobile = useSelector((state) => state.config.isMobile);
  const classes = useStyles({
    isDesktop: isDesktop,
    isMobile: isMobile,
    menuVisible: menuVisible,
    modalVisible: modalVisible,
    fadeIn: fadeIn,
  });
  useSizeListener();
  useBrowserChecker();
  useMidiService();
  const renderModal = useDelayedUnmount(modalVisible, 1000);

  const toggleMenuVisible = () => {
    setMenuVisible((v) => !v);
  };

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={classes.body}>
      {renderModal && <Modal />}
      <div className={classes.scrollable}>
        <div>
          <Header />
          <div className={classes.parent}>
            <Radix />
            <Board />
          </div>
        </div>
        <MenuButton
          customStyle={classes.button}
          isActive={menuVisible}
          onClick={toggleMenuVisible}
        />
        <PresetsMenu customStyles={classes.menu} />
      </div>
    </div>
  );
}

export default App;
