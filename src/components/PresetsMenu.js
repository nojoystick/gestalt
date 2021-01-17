import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import PresetButton from './PresetButton';
import { colors, type } from '../constants/theme';
import { IconSet, PresetButtons } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { UtilActions } from '../redux';
import Icon from './Icon';

const useStyles = makeStyles({
  container: {
    backgroundColor: colors.tertiaryBackground,
    display: 'flex',
    width: 'fit-content',
    minWidth: '100%',
    padding: '10px 0px',
    alignSelf: 'center',
    boxSizing: 'border-box',
    transition: 'height 1s',
    overflow: 'scroll',
  },
  buttonTile: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    position: 'relative',
    font: type.h4,
    color: colors.text,
    width: '135px',
    minHeight: '25px',
    backgroundColor: 'transparent',
    border: 'none',
    transition: 'opacity 0.5s',
    cursor: 'pointer',
    display: 'flex',
    alignContent: 'start',
    outline: 'none',
    '&:hover': {
      opacity: '0.6',
    },
  },
  icon: {
    position: 'absolute',
    right: '0px',
    top: '5px',
  },
  input: {
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: `3px solid ${colors.text}`,
    font: type.h4,
    margin: '0px',
    padding: '0px',
    maxWidth: '135px',
    outline: 'none',
  },
});

const PresetsMenu = ({ customStyles }) => {
  const [isHovered, setIsHovered] = useState(-1);
  const [isEditing, setIsEditing] = useState(-1);
  const presetNames = useSelector((state) => state.presetNames);
  const dispatch = useDispatch();
  const classes = useStyles();

  const updateName = (e, index) => {
    dispatch(UtilActions.setPresetName(e.target.value, index));
    setIsEditing(-1);
  };

  useEffect(() => {
    const _onKeyDown = (e) => {
      if (e.ctrlKey || e.key === 'Enter') {
        dispatch(UtilActions.setPresetName(e.target.value, isEditing));
        setIsEditing(-1);
      }
    };

    if (isEditing) {
      document.addEventListener('keydown', _onKeyDown);
    } else {
      document.removeEventListener('keydown', _onKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', _onKeyDown);
    };
  }, [dispatch, isEditing]);

  return (
    <div className={`${classes.container} ${customStyles}`}>
      {PresetButtons.map((button, index) => {
        return (
          <div className={classes.buttonTile}>
            <PresetButton {...button} index={index} key={index} />
            {isEditing === index ? (
              <input
                className={classes.input}
                defaultValue={presetNames[index]}
                onBlur={(e) => updateName(e, index)}
                maxLength={9}
                autoFocus='autofocus'
              ></input>
            ) : (
              <button
                className={classes.title}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(-1)}
                onFocus={() => setIsHovered(index)}
                onBlur={() => setIsHovered(-1)}
                onClick={() => setIsEditing(index)}
              >
                {presetNames[index]}
                {isHovered === index && (
                  <Icon
                    className={classes.icon}
                    path={IconSet.PENCIL}
                    width={16}
                    height={16}
                  />
                )}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PresetsMenu;
