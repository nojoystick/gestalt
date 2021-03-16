import React from 'react';
import { Icon, Toggle } from './';
import { IconSet } from '../constants';
import { makeStyles } from '@material-ui/styles';
import { colors, type } from '../constants/theme';
import { useSelector } from 'react-redux';
import { ConfigActions } from '../redux';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css';
import 'tippy.js/animations/scale.css';

const useStyles = makeStyles({
    gear: {
        width: '40px',
        height: '40px',
        transition: 'opacity 0.5s',
        cursor: 'pointer',
        '&:hover': {
            opacity: '0.8'
        }
    },
    tooltipParent: {
      padding: '5px',
      boxShadow: colors.boxShadow,
      borderRadius: '4px',
      border: `2px solid ${colors.text}`,
      backgroundColor: `${colors.background} !important`,
    },
    tooltipContent: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    label: {
      font: type.h5,
      paddingRight: '15px' 
    }
})

const Settings = () => {
  const classes = useStyles();
  return (
      <Tippy 
        className={classes.tooltipParent}
        content={<SettingsPanel />}       
        theme={"light"}  
        animation={"scale"}
        interactive={true}
      >
        <span>
        <Icon className={classes.gear} path={IconSet.SETTINGS} fill={colors.text} />
        </span>
      </Tippy>
  )
}

const SettingsPanel = () => {
    const classes = useStyles();
    const showHelp = useSelector(state => state.config.showHelp);
    return (
      <div className={classes.tooltipContent}>
        <table>
          <tbody>
            <tr>
              <td className={classes.label}>
                show help 
              </td>
              <td>
                <Toggle isActive={showHelp} onChange={ConfigActions.setShowHelp} isDispatch/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default Settings;