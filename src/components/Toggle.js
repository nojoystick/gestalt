import React from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../constants/theme';

const StyledSwitch = withStyles((theme) => ({
  root: {
    width: 50,
    height: 28,
    padding: 0,
    marginRight: '0px',
    borderRadius: '20%',
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(20px)',
      color: colors.tertiaryBackground,
      '& + $track': {
        backgroundColor: colors.quarternaryBackground,
        opacity: 1,
        border: 'none',
      },
    },
  },
  thumb: {
    width: 20,
    height: 20,
    margin: '1px 0px 0px 2px',
    borderRadius: '20%',
    color: colors.tertiaryBackground,
    border: `2px solid ${colors.text}`,
  },
  track: {
    borderRadius: '20%',
    backgroundColor: colors.tertiaryBackground,
    opacity: 1,
    transition: theme.transitions.create(['background-color']),
  },
  checked: {},
  focusVisible: {},
}))(Switch);

const GestaltToggle = ({ isActive, onChange }) => {
  return <StyledSwitch checked={isActive} onChange={onChange} name='checked' />;
};

export default GestaltToggle;
