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
  padding: '10px 30px',
  borderRadius: 16,
  textAlign: 'center',
  width: 'fit-content',
  marginBottom: 5,
  marginTop: 20,
  maxWidth: '50%',
  ':hover': {
    filter: 'brightness(0.98)',
  },
});

const noteInfo = css({
  textAlign: 'right',
  margin: '0px 0px 5px',
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

const NoteMessage: React.FC<Props> = ({
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
      <div className={`${noteColor}`}>{note}</div>
      <p className={`${noteInfo}`}>
        {!!msgTime && <span>{msgTime}</span>}
        {!!takenBy && <span> • {takenBy}</span>}
      </p>
    </div>
  );
};

NoteMessage.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  note: PropTypes.string,
  type: PropTypes.oneOf(['user', 'admin', 'bot']),
  msgTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  takenBy: PropTypes.string,
};

NoteMessage.defaultProps = {
  style: {},
  className: '',
  note: '',
};

export default NoteMessage;
