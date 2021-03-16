import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useSelector, useDispatch } from 'react-redux';
import { colors, type } from '../constants/theme';
import { ConfigActions } from '../redux';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    backgroundColor: colors.text40,
    top: '0px',
    left: '0px',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '9999',
    transition: 'opacity 0.5s',
    opacity: (state) => (state.shouldShow ? '1.0' : '0.0'),
    overflow: 'hidden',
  },
  modal: {
    minWidth: '350px',
    maxWidth: '80%',
    maxHeight: '90%',
    backgroundColor: colors.tertiaryBackground,
    boxShadow: colors.boxShadowDark,
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    font: type.h3,
    color: colors.text,
  },
  body: {
    font: type.bodySemibold,
    color: colors.text,
  },
  button: {
    font: type.h5,
    backgroundColor: colors.b40,
    border: `2px solid ${colors.text}`,
    boxShadow: colors.boxShadowLight,
    float: 'right',
    padding: '10px',
    minWidth: '100px',
    cursor: 'pointer',
  },
});

const ModalContainer = () => {
  const [shouldShow, setShouldShow] = useState(false);
  const notification = useSelector((state) => state.config.notification);
  const modalVisible = useSelector((state) => state.config.modalVisible);
  const classes = useStyles({ shouldShow: shouldShow });

  useEffect(() => {
    setShouldShow(true);
  }, []);

  useEffect(() => {
    if (!modalVisible) {
      setShouldShow(false);
    }
  }, [modalVisible]);

  return <div className={classes.container}>{notification && <Modal />}</div>;
};

const Modal = () => {
  const notification = useSelector((state) => state.config.notification);
  const classes = useStyles({ shouldShow: notification });
  const dispatch = useDispatch();

  const handleHideModal = () => {
    dispatch(ConfigActions.setModalVisible(false));
    setTimeout(() => dispatch(ConfigActions.setNotification()), 500);
  };

  return (
    <div className={classes.modal}>
      <span>
        <h3 className={classes.title}>{notification && notification.title}</h3>
        {notification && typeof notification.body !== 'object' && <p className={classes.body}>{notification.body}</p>}
      </span>
      {notification && typeof notification.body === 'object' && notification.body}
      <span>
        <button className={classes.button} onClick={handleHideModal}>
          {notification && notification.buttonText ? notification.buttonText : 'ok'}
        </button>
      </span>
    </div>
  );
};

export default ModalContainer;
