import * as React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import AvatarContainer from '../Common/AvatarContainer';
import FailedIcon from "../Common/FailedIcon";
import PendingIcon from "../Common/PendingIcon";
import SuccessIcon from "../Common/SuccessIcon";

const userContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});
const adminContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
});

const textBlockAdmin = css({
  background: '#e5e9ee',
  border: '1px solid transparent',
  color: '#232c41',
  cursor: 'pointer',
  borderRadius: 5,
  ':hover': {
    filter: 'brightness(0.95)',
  },
});
const textBlockUser = css({
  background: 'white',
  border: '1px solid #e5e9ee',
  color: '#232c41',
  borderRadius: 5,
  cursor: 'pointer',
  ':hover': {
    filter: 'brightness(0.95)',
  },
});

const globalTextBlock = css({
  maxWidth: '60%',
  wordWrap: 'break-word',
  padding: '8px 16px 8px',
  fontSize: '0.88rem',
  width: 'fit-content',
  whiteSpace: 'pre-line',
  marginBottom: 2,
});

const msgTimeClass = css({
  fontSize: '0.7rem',
  marginBottom: 10,
  marginTop: 3,
  color: '#c0cbd0',
  display: 'flex',
  alignItems: 'center',
});

interface Props {
  style?: object;
  className?: string;
  userType?: 'user' | 'admin' | 'bot';
  text?: string;
  consumer?: 'user' | 'admin' | 'bot';
  msgTime?: string | number;
  repliedBy?: string;
  showRepliedBy?: boolean;
  elementStyle?: object;
  elementClassName?: string;
  showInfo?: boolean;
  avatar?: string | React.ReactNode;
  msgStatus?: 'failed' | 'pending' | 'sent';
  showMsgStatus?: boolean;
  [key: string]: any;
}

const TextMessage: React.FC<Props> = ({
  style,
  className,
  userType,
  consumer,
  text,
  msgTime,
  repliedBy,
  elementStyle,
  elementClassName,
  showInfo,
  showRepliedBy,
  avatar,
  showMsgStatus,
  msgStatus,
  ...rest
}) => {
  return (
    <div
      style={{ ...style }}
      className={`${
        consumer === 'user'
          ? userType === 'user'
            ? adminContainer
            : userContainer
          : userType === 'user'
          ? userContainer
          : adminContainer
      }${className}`}
      {...rest}
    >
      <AvatarContainer avatar={avatar} userType={userType} consumer={consumer}>
        <div
          style={elementStyle}
          className={`${globalTextBlock} ${
            consumer === 'user'
              ? userType === 'user'
                ? textBlockAdmin
                : textBlockUser
              : userType === 'user'
              ? textBlockUser
              : textBlockAdmin
          } ${elementClassName}`}
        >
          {text}
        </div>
      </AvatarContainer>
      {showInfo && (showRepliedBy || !!msgTime) && (
        <p
          className={`${msgTimeClass}`}
          style={
            avatar
              ? consumer === 'user'
                ? userType === 'user'
                  ? { marginRight: '30px' }
                  : { marginLeft: '30px' }
                : userType === 'user'
                ? { marginLeft: '30px' }
                : { marginRight: '30px' }
              : {}
          }
        >
          {!!msgTime && <>{msgTime} &nbsp;</>}
          {showRepliedBy && <>| &nbsp;{repliedBy} &nbsp;</>}
          {!!showMsgStatus &&
          <>| &nbsp; {
            msgStatus === 'failed' ? <FailedIcon/> : msgStatus === 'pending' ? <PendingIcon /> : <SuccessIcon/>}
          </>
          }
        </p>
      )}
    </div>
  );
};

TextMessage.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  text: PropTypes.string,
  userType: PropTypes.oneOf(['user', 'admin', 'bot']),
  msgTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  repliedBy: PropTypes.string,
  showRepliedBy: PropTypes.bool,
  consumer: PropTypes.oneOf(['user', 'admin', 'bot']),
  elementStyle: PropTypes.object,
  elementClassName: PropTypes.string,
  showInfo: PropTypes.bool,
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

TextMessage.defaultProps = {
  style: {},
  className: '',
  text: '',
  showRepliedBy: false,
  showInfo: true,
  avatar: '',
};

export default TextMessage;
