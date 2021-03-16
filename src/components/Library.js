import React from 'react';
import { useDispatch } from 'react-redux';
import { AudioActions, ConfigActions } from '../redux';
import { LibraryOptions } from '../constants';
import { makeStyles } from '@material-ui/styles';
import { type } from '../constants/theme';

const useStyles = makeStyles({
    parent: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      overflow: 'scroll'
    },
    noFootprintButton: {
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
      padding: '0px',
      margin: '0px',
      cursor: 'pointer',
    },
    img: {
      height: '250px',
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      padding: '20px'
    },
    description: {
      font: type.bodyS,
      fontStyle: 'italic',
      margin: '15px 0px',
      textAlign: 'center',
    },
})

const Library = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectEffect = (el) => {
    dispatch(AudioActions.addEffect(el));
    dispatch(ConfigActions.setModalVisible(false));
    setTimeout(() => dispatch(ConfigActions.setNotification()), 500);
  }
  return (
    <div className={classes.parent}>
      {LibraryOptions.map((el, index) => {
        return (
          <div className={classes.column} key={index}>
            <button className={classes.noFootprintButton} onClick={() => selectEffect(el)}>
              <img className={classes.img} src={el.previewImage} alt={el.title} />
            </button>
            <span className={classes.description}>{el.description}</span>
          </div>
        )
      })}
    </div>
  )
};

export default Library;