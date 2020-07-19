import * as React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';

const noteContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const noteColor = css({
  background: '#feefc3',
  padding: '10px 15px',
  borderRadius: 5,
  textAlign: 'center',
  width: '50%',
  marginBottom: '10px',
});

const noteInfo = css({
  textAlign: 'right',
  margin: '10px 0px 5px',
  fontSize: '0.7rem',
  textTransform: 'uppercase',
  color: '#9e9067',
});

interface Props {
  style?: object;
  className?: string;
  note?: string;
  msgTime?: string | number;
  takenBy?: string;
  [key: string]: any;
}

const TextMessage: React.FC<Props> = ({
  style,
  className,
  note,
  msgTime,
  takenBy,
  ...rest
}) => {
  return (
    <div
      style={{ ...style }}
      className={`${noteContainer} ${className}`}
      {...rest}
    >
      <div className={`${noteColor}`}>
        {note}
        <p className={`${noteInfo}`}>Note by: {!!takenBy? takenBy : 'Unknown Admin'}{!!msgTime && <span> • {msgTime}</span>}</p>
      </div>
    </div>
  );
};

TextMessage.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  note: PropTypes.string,
  type: PropTypes.oneOf(['user', 'admin', 'bot']),
  msgTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  takenBy: PropTypes.string,
};

TextMessage.defaultProps = {
  style: {},
  className: '',
  note: '',
};

export default TextMessage;
