import * as React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import AvatarContainer from '../Common/AvatarContainer';

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
  background: '#184D47',
  color: 'white',
  cursor: 'pointer',
  borderRadius: 16,
  marginBottom: 10,
  ':hover': {
    filter: 'brightness(0.95)',
  },
});
const buttonBlockAdmin = css({
  color: '#232c41',
  borderRadius: 16,
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
  background: '#184D47',
  boxShadow: '0px 0px 0px 1px #d2d2d2',
  font: '400 13.3333px Arial',
  flex: 1,
  ':hover': {
    filter: 'brightness(0.95)',
    boxShadow: '0px 0px 7px 1px #d2d2d2',
  },
  borderRadius: 50,
  textDecoration: 'none',
  cursor: 'pointer',
  border: 'none',
  color: 'white',
  fontSize: '0.88rem',
  whiteSpace: 'nowrap',
  ':disabled': {
    cursor: 'not-allowed',
    background: '#c0cbd0',
    color: '#7c8386',
  },
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
  fontSize: '0.8rem',
  marginBottom: 5,
  marginTop: 3,
  color: '#c0cbd0',
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
  text?: string;
  buttonData?: buttonDataProps[];
  msgTime?: string | number;
  repliedBy?: string;
  showRepliedBy?: boolean;
  consumer?: 'user' | 'admin' | 'bot';
  elementStyle?: object;
  elementClassName?: string;
  avatar?: string | React.ReactNode;
  [key: string]: any;
}

const QuickReplyMessage: React.FC<Props> = ({
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
  ...rest
}) => {
  return (
    <div
      style={{ ...style }}
      className={`${
        consumer === 'user' ? userContainer : adminContainer
      }${className}`}
      {...rest}
    >
      <AvatarContainer avatar={avatar} userType='bot' consumer={consumer}>
        <div
          className={`${globalTextBlock} ${textBlockAdmin} ${elementClassName}`}
          style={elementStyle}
        >
          {text}
        </div>
      </AvatarContainer>
      {!!buttonData && buttonData.length > 0 && (
        <div className={`${globalTextBlock} ${buttonBlockAdmin}`}>
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
        <p className={`${msgTimeClass}`}>
          {!!msgTime && <>{msgTime} &nbsp; </>}{' '}
          {showRepliedBy && <>• &nbsp; {repliedBy}</>}
        </p>
      )}
    </div>
  );
};

QuickReplyMessage.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  text: PropTypes.string,
  msgTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  repliedBy: PropTypes.string,
  showRepliedBy: PropTypes.bool,
  buttonData: PropTypes.any,
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

QuickReplyMessage.defaultProps = {
  style: {},
  className: '',
  text: '',
  showRepliedBy: false,
  avatar: '',
};

export default QuickReplyMessage;
