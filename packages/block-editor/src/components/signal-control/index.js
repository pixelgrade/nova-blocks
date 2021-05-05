import classnames from 'classnames';
import { Button, Icon } from "@wordpress/components";

const defaultLabels = [
  'None',
  'Low',
  'Medium',
  'High'
];

const SignalControl = ( props ) => {

  const { label, signal } = props;
  const onChange = props.onChange || (() => {});
  const labels = props.labels || defaultLabels;

  const valueLabel = labels[ signal ];

  const iconClassName = classnames(
    `nb-signal-icon`,
    {
      [ `nb-signal-icon--none` ]: signal === 0,
      [ `nb-signal-icon--low` ]: signal === 1,
      [ `nb-signal-icon--medium` ]: signal === 2,
      [ `nb-signal-icon--high` ]: signal === 3,
    }
  );

  return (
    <div className={ 'components-base-control components-nb-signal-control' }>
      <div className="components-base-control__field">
        <div className="components-base-control__label">{ label }</div>
        <div className="components-nb-signal-control__root">
          <div className="nb-signal">
            <div className={ iconClassName }>
              <div className="nb-signal-icon__bar" />
              <div className="nb-signal-icon__bar" />
              <div className="nb-signal-icon__bar" />
            </div>
            <div className="nb-signal__text">
              <div className="nb-signal-icon-label">Level</div>
              <div className="nb-signal__value-label">{ valueLabel }</div>
            </div>
            <div className="nb-signal__controls">
              <Button
                isLarge
                isSecondary
                disabled={ signal === 0 }
                onClick={ () => {
                  onChange( signal - 1 );
                } }>
                <Icon icon={ 'minus' } />
              </Button>
              <Button
                isLarge
                isSecondary
                disabled={ signal === 3 }
                onClick={ () => {
                  onChange( signal + 1 );
                } }>
                <Icon icon={ 'plus' } />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignalControl;
