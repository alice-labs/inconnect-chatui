import * as React from 'react';
import {css} from 'glamor';
import PropTypes from 'prop-types';
import AvatarContainer from '../Common/AvatarContainer';
import FailedIcon from "../Common/FailedIcon";
import PendingIcon from "../Common/PendingIcon";
import SuccessIcon from "../Common/SuccessIcon";

const adminContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
});
const userContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const textBlockAdmin = css({
  background: '#e5e9ee',
  border: '1px solid transparent',
  color: '#232c41',
  cursor: 'pointer',
  borderRadius: 5,
  marginBottom: 10,
  ':hover': {
    filter: 'brightness(0.95)',
  },
});
const textBlockUser = css({
  background: 'white',
  border: '1px solid #e5e9ee',
  color: '#232c41',
  borderRadius: 5,
  marginBottom: 10,
  ':hover': {
    filter: 'brightness(0.95)',
  },
});
const buttonBlockAdmin = css({
  color: '#232c41',
  borderRadius: 5,
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  minWidth: '200px',
  marginTop: 3,
  flexWrap: 'wrap',
  padding: 0,
});
const btnElement = css({
  textAlign: 'center',
  width: '100%',
  margin: 3,
  padding: '5px 10px',
  background: '#e5e9ee',
  boxShadow: '0px 0px 0px 1px #d2d2d2',
  font: '400 13.3333px Arial',
  flex: 1,
  ':hover': {
    filter: 'brightness(0.95)',
    boxShadow: '0px 0px 7px 1px #d2d2d2',
  },
  borderRadius: 5,
  textDecoration: 'none',
  cursor: 'pointer',
  border: 'none',
  color: '#232c41',
  fontSize: '0.88rem',
  whiteSpace: 'nowrap',
  ':disabled': {
    cursor: 'not-allowed',
    background: '#c0cbd0',
    color: '#7c8386',
  },
  ':focus': {
    outline: 'none',
  }
});
const aLinkWidthFix = css({
  width: '96% !important',
  whiteSpace: 'no-wrap',
});

const globalTextBlock = css({
  maxWidth: '60%',
  wordWrap: 'break-word',
  padding: '8px 16px 8px',
  fontSize: '1rem',
  width: 'fit-content',
  marginBottom: 2,
});

const msgTimeClass = css({
  fontSize: '0.7rem',
  marginBottom: 5,
  marginTop: 3,
  color: '#c0cbd0',
  display: 'flex',
  alignItems: 'center',
});

interface buttonDataProps {
  title: string;
  methodType?: 'url' | 'function';
  url?: string;
  action?: any;
  isDisabled?: boolean;
  className?: string;
  style?: object;

  [key: string]: any;
}

interface Props {
  style?: object;
  className?: string;
  text?: string | React.ReactNode;
  buttonData?: buttonDataProps[];
  msgTime?: string | number;
  repliedBy?: string;
  showRepliedBy?: boolean;
  consumer?: 'user' | 'admin' | 'bot';
  elementStyle?: object;
  elementClassName?: string;
  avatar?: string | React.ReactNode;
  msgStatus?: 'failed' | 'pending' | 'sent';
  showMsgStatus?: boolean;

  [key: string]: any;
}

const QuickReplyMessage: React.FC<Props> = (
  {
    style,
    className,
    text,
    buttonData,
    msgTime,
    repliedBy,
    showRepliedBy,
    consumer,
    elementClassName,
    elementStyle,
    avatar,
    msgStatus,
    showMsgStatus,
    ...rest
  }) => {
  return (
    <div
      style={{...style}}
      className={`${
        consumer === 'user' ? userContainer : adminContainer
      }${className}`}
      {...rest}
    >
      <AvatarContainer avatar={avatar} userType='bot' consumer={consumer}>
        <div
          className={`${globalTextBlock} ${consumer === 'user' ? textBlockUser : textBlockAdmin} ${elementClassName}`}
          style={elementStyle}
        >
          {text}
        </div>
      </AvatarContainer>
      {!!buttonData && buttonData.length > 0 && (
        <div
          className={`${globalTextBlock} ${buttonBlockAdmin}`}
          style={
            avatar
              ? consumer === 'user'
              ? {marginLeft: '30px'}
              : {marginRight: '30px'}
              : {}
          }
        >
          {buttonData.map(
            (
              {
                title,
                methodType,
                url,
                action,
                className,
                style,
                isDisabled,
                ...rest
              }: buttonDataProps,
              i: number
            ) =>
              methodType === 'url' && !!!isDisabled ? (
                <a
                  href={url}
                  className={`${btnElement} ${aLinkWidthFix} ${className}`}
                  style={style}
                  target='_blank'
                  key={i}
                  {...rest}
                >
                  {title}
                </a>
              ) : (
                <button
                  disabled={isDisabled}
                  className={`${btnElement} ${className}`}
                  style={style}
                  onClick={action}
                  key={i}
                  {...rest}
                >
                  {title}
                </button>
              )
          )}
        </div>
      )}
      {(showRepliedBy || !!msgTime) && (
        <p
          className={`${msgTimeClass}`}
          style={
            avatar
              ? consumer === 'user'
              ? {marginLeft: '30px'}
              : {marginRight: '30px'}
              : {}
          }
        >
          {!!msgTime && <>{msgTime} &nbsp;</>}
          {showRepliedBy && <>| &nbsp;{repliedBy} &nbsp;</>}
          {!!showMsgStatus &&
          <>| &nbsp; {
            msgStatus === 'failed' ? <FailedIcon/> : msgStatus === 'pending' ? <PendingIcon/> : <SuccessIcon/>}
          </>
          }
        </p>
      )}
    </div>
  );
};

QuickReplyMessage.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  text: PropTypes.any,
  msgTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  repliedBy: PropTypes.string,
  showRepliedBy: PropTypes.bool,
  buttonData: PropTypes.any,
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  msgStatus: PropTypes.oneOf(['failed', 'pending', 'sent']),
  showMsgStatus: PropTypes.bool,
};

QuickReplyMessage.defaultProps = {
  style: {},
  className: '',
  text: '',
  showRepliedBy: false,
  avatar: '',
  showMsgStatus: false,
};

export default QuickReplyMessage;
