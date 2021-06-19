import React from 'react';
import { Knob, Toggle } from './';
import { makeStyles } from '@material-ui/styles';
import { AudioActions } from '../redux';

const PanelBody = ({ params, index, tabIndex }) => {
  const useStyles = makeStyles({
    parent: {
      position: 'relative',
      height: '200px',
      width: '200px',
    },
  });
  const classes = useStyles();
  return (
    <>
      {tabIndex === 0 && (
        <div className={classes.parent}>
          {params &&
            params.knobs &&
            params.knobs.map((param, i) => {
              const style = {
                position: 'absolute !important',
                top: param.top,
                left: param.left,
                width: `${param.size}px`,
              };
              return (
                <Knob
                  style={style}
                  {...param}
                  {...param.config}
                  name={param.hideLabel ? '' : param.name}
                  label={param.hideLabel ? param.name : ''}
                  key={i}
                  setValue={AudioActions.updateEffectParam}
                  setValueParams={{
                    indexOfEffect: index,
                    indexOfParam: i,
                    type: 'knobs',
                  }}
                  isDispatch
                  absPositioning
                />
              );
            })}
          {params &&
            params.switches &&
            params.switches.map((param, i) => {
              return (
                <Toggle
                  className={classes.switch}
                  isActive={param.value}
                  {...param}
                  {...param.config}
                  name={param.hideLabel ? '' : param.name}
                  label={param.hideLabel ? param.name : ''}
                  key={i}
                  onChange={AudioActions.updateEffectParam}
                  changeParam={{
                    indexOfEffect: index,
                    indexOfParam: i,
                    type: 'switches',
                  }}
                  isDispatch
                />
              );
            })}
        </div>
      )}
    </>
  );
};

export default PanelBody;
