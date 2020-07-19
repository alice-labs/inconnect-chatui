import * as React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';

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
  background: '#184D47',
  color: 'white',
  cursor: 'pointer',
  borderRadius: 5,
  ':hover': {
    background: '#143f3a',
  },
});
const textBlockUser = css({
  background: '#e5e9ee',
  color: '#232c41',
  borderRadius: 5,
  cursor: 'pointer',
  ':hover': {
    background: '#e1e5ea',
  },
});

const globalTextBlock = css({
  maxWidth: '65%',
  wordWrap: 'break-word',
  padding: '6px 12px 7px',
  fontSize: '1rem',
  width: 'fit-content',
  marginBottom: 2,
});

const msgTimeClass = css({
  fontSize: '0.8rem',
  marginBottom: 10,
  marginTop: 3,
  color: '#c0cbd0',
});

interface Props {
  style?: object;
  className?: string;
  type?: 'user' | 'admin' | 'bot';
  text?: string;
  msgTime?: string | number;
  repliedBy?: string;
  showRepliedBy?: boolean;
  [key: string]: any;
}

const TextMessage: React.FC<Props> = ({
  style,
  className,
  type,
  text,
  msgTime,
  repliedBy,
  showRepliedBy,
  ...rest
}) => {
  return (
    <div
      style={{ ...style }}
      className={`${
        type === 'user' ? userContainer : adminContainer
      }${className}`}
      {...rest}
    >
      <div
        className={`${globalTextBlock} ${
          type === 'user' ? textBlockUser : textBlockAdmin
        }`}
      >
        {text}
      </div>
      {(showRepliedBy || !!msgTime) && (
        <p className={`${msgTimeClass}`}>
          {!!msgTime && <>{msgTime} &nbsp; </>}{' '}
          {type === 'admin' && showRepliedBy && <>• &nbsp; {repliedBy}</>}
        </p>
      )}
    </div>
  );
};

TextMessage.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(['user', 'admin', 'bot']),
  msgTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  repliedBy: PropTypes.string,
  showRepliedBy: PropTypes.bool,
};

TextMessage.defaultProps = {
  style: {},
  className: '',
  text: '',
  showRepliedBy: false,
};

export default TextMessage;
