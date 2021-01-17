import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../constants/theme';
import Icon from './Icon';
import { IconSet } from '../constants';

const useStyles = makeStyles({
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab: {
    width: '14px',
    height: '14px',
    borderRadius: '10px',
    border: 'none',
    outline: 'none',
    backgroundColor: colors.quinternaryBackground,
    margin: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.5s',
    '&:hover': {
      backgroundColor: colors.text,
    },
  },
  selected: {
    backgroundColor: colors.text,
  },
  plus: {
    backgroundColor: 'transparent',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    '&:hover': {
      color: colors.text,
    },
  },
});

const TabSelector = ({
  selectedTab,
  setSelectedTab,
  numTabs,
  setNumTabs,
  addPlus,
  maxNumTabs,
}) => {
  const [plusFocused, setPlusFocused] = useState(false);
  const classes = useStyles();

  const addTab = () => {
    numTabs <= maxNumTabs && setNumTabs((t) => ++t);
  };

  return (
    <span className={classes.tabs}>
      {[...Array(numTabs)].map((x, i) => {
        return (
          <button
            className={`${classes.tab} ${
              selectedTab === i && classes.selected
            }`}
            key={i}
            onClick={() => setSelectedTab(i)}
          ></button>
        );
      })}
      {addPlus && numTabs < maxNumTabs && (
        <button
          className={classes.plus}
          onClick={addTab}
          onMouseEnter={() => setPlusFocused(true)}
          onMouseLeave={() => setPlusFocused(false)}
          onFocus={() => setPlusFocused(true)}
          onBlur={() => setPlusFocused(false)}
        >
          <Icon
            className={classes.icon}
            {...IconSet.PLUS}
            stroke={plusFocused ? colors.text : colors.quinternaryBackground}
            width={14}
            height={14}
            strokeWidth={10}
          />
        </button>
      )}
    </span>
  );
};

export default TabSelector;
