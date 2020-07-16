import * as React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';

const flex = css({
  display: 'flex',
  flexDirection: 'column',
});

interface Props {
  style?: object;
  className?: string;
  children?: any;
  id?: string;
}

const ChatContainer: React.FC<Props> = ({ style, className, children,id}) => {
  return (
    <div style={{ ...style }} className={`${flex} ${className}`} id={id}>
      {...children}
    </div>
  );
};

ChatContainer.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node,
    id: PropTypes.string,
};


ChatContainer.defaultProps = {
  style: {},
  className: '',
};

export default ChatContainer;
