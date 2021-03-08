import * as React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import FailedIcon from "../Common/FailedIcon";
import PendingIcon from "../Common/PendingIcon";
import SuccessIcon from "../Common/SuccessIcon";

const noteContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const noteColor = css({
  background: '#FFEFB7',
  padding: '10px 30px',
  borderRadius: 5,
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
  display: 'flex',
  alignItems: 'center',
});

interface Props {
  style?: object;
  className?: string;
  note?: string;
  msgTime?: string | number;
  takenBy?: string;
  msgStatus?: 'failed' | 'pending' | 'sent';
  showMsgStatus?: boolean;
  [key: string]: any;
}

const NoteMessage: React.FC<Props> = ({
  style,
  className,
  note,
  msgTime,
  takenBy,
  msgStatus,
  showMsgStatus,
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
        {!!showMsgStatus &&
        <>&nbsp;{
          msgStatus === 'failed' ? <FailedIcon/> : msgStatus === 'pending' ? <PendingIcon /> : <SuccessIcon/>}
        </>
        }
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
  msgStatus: PropTypes.oneOf(['failed', 'pending', 'sent']),
  showMsgStatus: PropTypes.bool,
};

NoteMessage.defaultProps = {
  style: {},
  className: '',
  note: '',
  showMsgStatus: false,
};

export default NoteMessage;
