import * as React from 'react';
import {css} from 'glamor';
import PropTypes from 'prop-types';
import FailedIcon from "../Common/FailedIcon";
import PendingIcon from "../Common/PendingIcon";
import SuccessIcon from "../Common/SuccessIcon";

const noteContainer = css({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: '0.75rem',
  padding: '20px 10px 5px',
  ':before': {
    content: ' ',
    flex: 1,
    borderBottom: '1px solid #DFE1E6',
    marginRight: '0.25em',
  },
  ':after': {
    content: ' ',
    flex: 1,
    borderBottom: '1px solid #DFE1E6',
    marginLeft: '0.25em',
  }
});

const noteContentContainer = css({
  textTransform: 'uppercase',
  fontSize: '12px',
  padding: '10px 20px',
  borderRadius: 5,
  fontWeight: 500,
})

const intentNote = css({
  background: '#FFEFB7',
  color: '#172B4D'
})
const intentSuccess = css({
  background: '#9CF3CF',
  color: '#172B4D'
})
const intentInfo = css({
  background: '#B6F0F9',
  color: '#172B4D'
})
const intentLime = css({
  background: '#D6EFC7',
  color: '#172B4D'
})
const intentDanger = css({
  background: '#DE350B',
  color: '#FFFFFF'
})

// const noteColor = css({
//   background: '#FFEFB7',
//   padding: '10px 30px',
//   borderRadius: 5,
//   textAlign: 'center',
//   width: 'fit-content',
//   marginBottom: 5,
//   marginTop: 20,
//   maxWidth: '50%',
//   ':hover': {
//     filter: 'brightness(0.98)',
//   },
// });

const noteInfo = css({
  textAlign: 'center',
  margin: '0px 0px 5px',
  fontSize: '0.7rem',
  textTransform: 'uppercase',
  color: '#a8a9ae',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

interface Props {
  style?: object;
  className?: string;
  text?: string | React.ReactNode;
  msgTime?: string | number;
  takenBy?: string;
  msgStatus?: 'failed' | 'pending' | 'sent';
  showMsgStatus?: boolean;
  intent?: 'notes' | 'success' | 'info' | 'lime' | 'danger';
  note?: string | React.ReactNode;
  noteContainerClassName?: string;
  noteContainerStyle?: object;

  [key: string]: any;
}

const NoteMessage: React.FC<Props> = (
  {
    style,
    className,
    note,
    msgTime,
    takenBy,
    msgStatus,
    showMsgStatus,
    intent,
    noteContainerClassName,
    noteContainerStyle,
    ...rest
  }) => {
  return (
    <div>
      <div
        style={{...style}}
        className={`${noteContainer} ${className}`}
        {...rest}
      >
        <div
          className={`
              ${noteContentContainer} 
              ${!!noteContainerClassName && noteContainerClassName} 
              ${intent === 'notes' ? intentNote : intent === 'success' ? intentSuccess : intent === 'info' ? intentInfo : intent === 'lime' ? intentLime : intent === 'danger' ? intentDanger : ''}`}
          style={!!noteContainerStyle ? noteContainerStyle : {}}
        >{note}</div>
      </div>
      <p className={`${noteInfo}`}>
        {!!msgTime && <span>{msgTime}</span>}
        {!!takenBy && <span>&nbsp; |&nbsp; {takenBy}&nbsp;</span>}
        {!!showMsgStatus &&
        <>&nbsp; | &nbsp;{
          msgStatus === 'failed' ? <FailedIcon/> : msgStatus === 'pending' ? <PendingIcon/> : <SuccessIcon/>}
        </>
        }
      </p>
    </div>
  );
};

NoteMessage.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  note: PropTypes.any,
  type: PropTypes.oneOf(['user', 'admin', 'bot']),
  msgTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  takenBy: PropTypes.string,
  msgStatus: PropTypes.oneOf(['failed', 'pending', 'sent']),
  showMsgStatus: PropTypes.bool,
  intent: PropTypes.oneOf(['notes', 'success', 'info', 'lime', 'danger']),
  noteContainerClassName: PropTypes.string,
  noteContainerStyle: PropTypes.object,
};

NoteMessage.defaultProps = {
  style: {},
  className: '',
  note: '',
  showMsgStatus: false,
  intent: 'notes'
};

export default NoteMessage;
