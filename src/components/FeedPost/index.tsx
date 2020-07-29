import * as React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';

const feedContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: 30,
  background: 'white',
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

const commentInfoContainer = css({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
  paddingBottom: 5,
  marginBottom: 10,
  ':not(:last-child)': {
    borderBottom: '0.5px solid #DFE8F0',
  },
});
const replyInfoContainer = css({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: 'calc(100% - 50px)',
  paddingBottom: 5,
  marginBottom: 10,
  marginLeft: 50,
  ':not(:last-child)': {
    borderBottom: '0.5px solid #DFE8F0',
  },
});

const avatarStyle = css({
  width: 50,
  height: 50,
  borderRadius: 50,
  border: '1px solid rgba(0,0,0,0.08)',
});
const avatarSmallStyle = css({
  width: 40,
  height: 40,
    borderRadius: 40,
  border: '1px solid rgba(0,0,0,0.08)',
});

const postNameStyle = css({
  fontWeight: 'bold',
  fontSize: '1rem',
  textTransform: 'capitalize',
  margin: 0,
  color: '#184D47',
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

const replyContentNote = css({
  background: '#feefc3',
  padding: '10px 15px',
  marginTop: 10,
  width: 'fit-content',
  borderRadius: '0.88rem',
  transform: 'translateX(-5px)',
  color: '#333',
});

const replyContentImage = css({
    borderRadius: 5,
    width: '50%',
    marginTop: 10,
});

const linkStyle = css({
  textDecoration: 'none',
  color: '#184D47',
  ':hover': {
    textDecoration: 'underline',
  },
});

interface replyProps {
  id: null | number;
  name: string;
  avatar: any;
  time: string;
  contentType: string;
  content: any;
  source: string;
  link?: string;
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
  pageLink: string;
  commentData: replyProps;
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
  pageLink,
  commentData,
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
      case 'note':
        return <div className={`${replyContentNote}`}>{reply.content}</div>;
        case 'image':
            return <img className={`${replyContentImage}`} src={reply.content} alt={'image-note'} />;
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
          <img src={postAvatar} className={`${avatarStyle}`} />
          <div style={{ marginLeft: 10, flex: 10 }}>
            {!!pageLink ? (
              <a
                href={pageLink}
                className={`${linkStyle}`}
                target='_blank'
                rel='noreferrer noopener'
              >
                {' '}
                <p className={`${postNameStyle}`}>{postName}</p>
              </a>
            ) : (
              <p className={`${postNameStyle}`}>{postName}</p>
            )}
            <p className={`${postTimeStyle}`}>{postTime}</p>
          </div>
        </div>

        <div className={`${postContentStyle}`}>{getContents()}</div>
        <div className={`${commentInfoContainer}`} key={'reply-comment'}>
          <img src={commentData.avatar} className={`${avatarSmallStyle}`} />
          <div style={{ marginLeft: 10, flex: 10 }}>
            {!!commentData.link ? (
              <a
                href={pageLink}
                className={`${linkStyle}`}
                target='_blank'
                rel='noreferrer noopener'
              >
                <p className={`${postNameStyle}`}>{commentData.name}</p>
              </a>
            ) : (
              <p className={`${postNameStyle}`}>{commentData.name}</p>
            )}
            <p className={`${postTimeStyle}`}>{commentData.time}</p>
            {getReplyContent(commentData)}
          </div>
        </div>

        {replyContent.map((reply: replyProps, i: number) => (
          <div className={`${replyInfoContainer}`} key={i}>
            <img src={reply.avatar} className={`${avatarSmallStyle}`} />
            <div style={{ marginLeft: 10, flex: 10 }}>
              {!!reply.link ? (
                <a
                  href={reply.link}
                  className={`${linkStyle}`}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <p className={`${postNameStyle}`}>{reply.name}</p>
                </a>
              ) : (
                <p className={`${postNameStyle}`}>{reply.name}</p>
              )}
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
