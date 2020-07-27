import * as React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';

const feedContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: 30,
});

const feedPostContainer = css({
  minWidth: 500,
  maxWidth: 600,
  padding: 20,
  borderRadius: 10,
  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease 0s',
  ':hover': {
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.15)',
    transform: 'translateY(-3x)',
  },
});

const postInfoContainer = css({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
});

const replyInfoContainer = css({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
    paddingBottom: 5,
    marginBottom: 10,
    ':not(:last-child)': {
        borderBottom: '0.5px solid #DFE8F0',
    }
});

const avatarStyle = css({
  clipPath: 'circle(45% at 50% 50%)',
  background: 'red',
  width: 50,
  height: 50,
  backgroundSize: 'cover!important',
  flex: 1,
});
const avatarSmallStyle = css({
  clipPath: 'circle(40% at 50% 50%)',
  background: 'red',
  width: 40,
  height: 40,
  backgroundSize: 'cover!important',
  flex: 1,
});

const postNameStyle = css({
  fontWeight: 'bold',
  fontSize: '1rem',
  textTransform: 'capitalize',
  margin: '0px 0px 5px 0px',
  color: '#213240',
});
const postTimeStyle = css({
  fontSize: '0.7rem',
  margin: 0,
  color: '#c0cbd0',
});

const postContentStyle = css({
  marginTop: 20,
  paddingBottom: 30,
  borderBottom: '0.5px solid #DFE8F0',
  marginBottom: 10,
});

const replyContentText = css({
  marginTop: 5,
});

interface replyProps {
  id: null | number;
  name: string;
  avatar: string | null | undefined;
  time: string;
  contentType: string;
  content: any;
}
interface Props {
  style?: object;
  className?: string;
  postAvatar?: string;
  postName?: string;
  postTime?: string;
  content?: any;
  contentType?: string;
  replyContent: replyProps[];
  [key: string]: any;
}

const FeedPost: React.FC<Props> = ({
  style,
  className,
  note,
  msgTime,
  takenBy,
  postAvatar,
  postName,
  postTime,
  content,
  contentType,
  replyContent,
  ...rest
}) => {
  const getContents = () => {
    switch (contentType) {
      case 'text':
        return content;
      default:
        return 'No contentType matched';
    }
  };

  const getReplyContent = (reply: replyProps) => {
    switch (reply.contentType) {
      case 'text':
        return <p className={`${replyContentText}`}>{reply.content}</p>;
      default:
        return 'No contentType matched';
    }
  };

  return (
    <div
      style={{ ...style }}
      className={`${feedContainer} ${className}`}
      {...rest}
    >
      <div className={`${feedPostContainer}`}>
        <div className={`${postInfoContainer}`}>
          <img
            className={`${avatarStyle}`}
            style={{ background: `url('${ postAvatar}')` }}
          />
          <div style={{ marginLeft: 10, flex: 10 }}>
            <p className={`${postNameStyle}`}>{postName}</p>
            <p className={`${postTimeStyle}`}>{postTime}</p>
          </div>
        </div>
        <div className={`${postContentStyle}`}>{getContents()}</div>

        {replyContent.map((reply: replyProps, i: number) => (
          <div className={`${replyInfoContainer}`} key={i}>
            <img
              className={`${avatarSmallStyle}`}
              style={{ background: `url('${ reply.avatar}')` }}
            />
            <div style={{ marginLeft: 10, flex: 10 }}>
              <p className={`${postNameStyle}`}>{reply.name}</p>
              <p className={`${postTimeStyle}`}>{reply.time}</p>
              {getReplyContent(reply)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

FeedPost.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  postAvatar: PropTypes.string,
  postName: PropTypes.string,
  postTime: PropTypes.string,
  content: PropTypes.any,
  contentType: PropTypes.string,
  replyContent: PropTypes.any,
};

FeedPost.defaultProps = {
  style: {},
  className: '',
  contentType: 'text',
  replyContent: [],
};

export default FeedPost;
