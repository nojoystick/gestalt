import React from 'react';
import { Knob } from './';
import { makeStyles } from '@material-ui/styles';
import { AudioActions } from '../redux';

const numParamsToSize = {
  1: {
      size: 100,
      padding: 10
  },
  2: {
      size: 100,
      padding: 0,
  },
  3: {
      size: 75,
      padding: 10,
  },
  4: {
      size: 75,
      padding: 10
  },
}

const PanelBody = ({params, index, tabIndex}) => {
  const useStyles = makeStyles({
    parent: {
      display: 'flex',
      flexDirection: params && params.knobs && params.knobs.length === 2 ? 'column' : 'row',
      flexWrap: params && params.knobs && params.knobs.length === 2 ? 'nowrap' : 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      height: '200px',
      width: '200px',
      position: 'relative',
    },
    leftAlign: {
      position: 'absolute !important',
      top: '10px',
      left: '0px'
    },
    rightAlign: {
      position: 'absolute !important',
      bottom: '10px',
      right: '0px',
    }
  })
  const classes = useStyles();
  return (
    <>
      {tabIndex === 0 && 
        <div className={classes.parent}>
            {params && params.knobs && params.knobs.map((param, i) => {
              let className;
              if(params.knobs.length === 2) {
                className = i === 0 ? classes.leftAlign : classes.rightAlign;
              }
              return <Knob 
                className={className}
                {...param}
                {...param.config} 
                name={param.hideLabel ? "" : param.name} 
                label={param.hideLabel ? param.name : ""} 
                {...numParamsToSize[params.knobs.length]} 
                key={i} 
                setValue={AudioActions.updateEffectParam} 
                setValueParams={{indexOfEffect: index, indexOfParam: i, type: 'knobs'}}
                isDispatch 
            />
            })}
        </div>
      }
    </>
  );
};

export default PanelBody;