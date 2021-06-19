import React, { useState } from 'react';
import { PanelBody, PanelHeader } from './';
import TabSelector from './TabSelector';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../constants/theme';
import { Icon, Library } from './';
import { IconSet } from '../constants';
import { useDispatch } from 'react-redux';
import { ConfigActions } from '../redux';

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
  plusContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  plus: {
    backgroundColor: 'transparent',
    width: '50%',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    '&:hover': {
      color: colors.text,
    },
  },
});

const EffectPanel = ({
  title = 'gestalt',
  subtitle = 'synthesizer',
  params,
  index,
  isActive,
  isAddButton,
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [plusFocused, setPlusFocused] = useState(false);
  const dispatch = useDispatch();

  const classes = useStyles();

  const addTab = () => {
    dispatch(
      ConfigActions.setNotification({
        title: 'library',
        body: <Library />,
        buttonText: 'cancel',
      })
    );
    setTimeout(() => dispatch(ConfigActions.setModalVisible(true), 3000));
  };

  return (
    <div className={classes.panel}>
      {isAddButton ? (
        <span className={classes.plusContainer}>
          <button
            className={classes.plus}
            onClick={addTab}
            onMouseEnter={() => setPlusFocused(true)}
            onMouseLeave={() => setPlusFocused(false)}
            onFocus={() => setPlusFocused(true)}
            onBlur={() => setPlusFocused(false)}
          >
            <Icon
              {...IconSet.PLUS}
              stroke={plusFocused ? colors.text : colors.quinternaryBackground}
              strokeWidth={2}
            />
          </button>
        </span>
      ) : (
        <>
          <PanelHeader
            title={title}
            subtitle={subtitle}
            isActive={isActive}
            index={index}
          />
          <PanelBody params={params} tabIndex={selectedTab} index={index} />
          <span className={classes.tabs}>
            <TabSelector
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              numTabs={2}
            />
          </span>
        </>
      )}
    </div>
  );
};

export default EffectPanel;
