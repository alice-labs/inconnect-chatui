import * as React from 'react';
import {css} from 'glamor';
import PropTypes from 'prop-types';
import FailedIcon from "../Common/FailedIcon";
import PendingIcon from "../Common/PendingIcon";
import SuccessIcon from "../Common/SuccessIcon";

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
  background: 'white',
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
  position: 'relative',
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
  position: 'relative',
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
  fontWeight: 600,
  fontSize: '1rem',
  textTransform: 'capitalize',
  margin: 0,
  color: '#184D47',
});

const postTimeStyle = css({
  fontSize: '0.7rem',
  margin: '5px 0 0 0',
  color: '#91999d',
  textTransform: 'capitalize',
  display: 'flex',
  alignItems: 'center',
});

const postContentStyle = css({
  marginTop: 20,
  paddingBottom: 30,
  borderBottom: '0.5px solid #DFE8F0',
  marginBottom: 10,
});

const replyContentText = css({
  marginTop: 5,
  marginBottom: 5,
  wordBreak: 'break-word',
});

const replyContentNote = css({
  background: '#feefc3',
  padding: '10px 15px',
  marginTop: 10,
  width: 'fit-content',
  borderRadius: '0.88rem',
  transform: 'translateX(-5px)',
  color: '#333',
  marginBottom: 5,
});

const replyContentImage = css({
  borderRadius: 5,
  width: '20rem',
  marginTop: 10,
  marginBottom: 5,
});

const linkStyle = css({
  textDecoration: 'none',
  color: '#184D47',
  ':hover': {
    textDecoration: 'underline',
  },
});

const flexWrapContainer = css({
  display: 'flex',
  flexWrap: 'wrap',
});

const imageHolder = css({
  width: 'calc(50% - 20px)',
  borderRadius: 10,
  margin: 10,
  '@media(max-width: 400px)': {
    maxWidth: '100%',
  },
});

const inputEditClassLocal = css({
  background: 'white',
  border: '1px solid #ccc',
  marginTop: '10px',
  width: '100%',
  borderRadius: 5,
  padding: 10,
  fontSize: '12px',
  resize: 'vertical',
  ':focus': {
    border: '1px solid #ccc',
    outline: 'none',
  },
});

const editButtonStyle = css({
  fontSize: '0.75rem',
  fontWeight: 'bold',
  color: '#444444',
  cursor: 'pointer',
  textTransform: 'uppercase',
  ':hover': {
    color: '#035B4C',
  },
});
const editButtonCancelStyle = css({
  fontSize: '0.7rem',
  fontWeight: 'bold',
  color: '#1594F5',
  cursor: 'pointer',
  textDecoration: 'underline',
  textTransform: 'uppercase',
  ':hover': {
    color: '#444',
  },
});

const highLighted = css({
  background: 'rgba(0, 123, 101, 0.19)',
  borderRadius: '3px',
  fontSize: '0.7rem',
  padding: '5px 10px',
  color: '#184d47',
  textTransform: 'uppercase',
  position: 'absolute',
  right: '16px',
  top: '8px',
});

const moreButton = css({
  background: '#f2f2f2',
  borderRadius: 20,
  marginLeft: 10,
  cursor: 'pointer',
  padding: 5,
  ':hover': {
    background: '#dcdcdc',
  },
});

const moreButtonContainer = css({
  background: 'white',
  borderRadius: 5,
  boxShadow: '0px 0px 8px #90909066',
  marginTop: 5,
  position: 'absolute',
  zIndex: 999,
  width: 100,
});

const moreButtonElement = css({
  padding: '5px 10px',
  margin: 3,
  cursor: 'pointer',
  fontSize: 12,
  textAlign: 'left',
  textTransform: 'uppercase',
  ':hover': {
    background: '#E9E9E9',
  },
});

interface replyProps {
  id: null | number;
  name: string;
  avatar: any;
  time: string;
  contentType: string;
  content: any;
  image?: any;
  source: string;
  link?: string;
  isHighlighted?: boolean;
  messageType?: string;
  status?: string;
  msgStatus?: 'failed' | 'pending' | 'sent';
  showMsgStatus?: boolean;
  repliedBy?: string;
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
  contentItem?: any;
  commentBg?: string;
  showAction?: boolean;
  handleDelete?: (reply: replyProps) => void;
  handleHide?: (reply: replyProps) => void;
  handleEdit?: (reply: replyProps) => void;
  closeOnActionClick?: boolean;
  moreButtonHeightWidth?: number;
  handleCommentDelete?: (comment: any) => void;
  handleCommentHide?: (comment: any) => void;
  showCommentAction?: boolean;
  editInputStyle?: any;
  editInputClass?: string;
  handleReplyEdit?: (reply: replyProps, text: string, resetCallback: () => void) => void;
  handleReplyCancel?: (reply: replyProps) => void;

  [key: string]: any;
}

const FeedPost: React.FC<Props> = (
  {
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
    contentItem,
    commentBg,
    showAction,
    handleDelete,
    handleEdit,
    handleHide,
    closeOnActionClick,
    moreButtonHeightWidth,
    handleCommentDelete,
    handleCommentHide,
    showCommentAction,
    editInputStyle,
    editInputClass,
    handleReplyCancel,
    handleReplyEdit,
    status,
    ...rest
  }) => {
  const statustoExcludeAction = ['note', 'hide', 'remove'];

  const getContents = () => {
    switch (contentType) {
      case 'text':
        return content;
      case 'video':
        return (
          <>
            <p>{content}</p>
            {!!contentItem && (
              <video controls style={{width: '100%', maxWidth: 650}}>
                <source src={contentItem} type='video/mp4'/>
                Your browser does not support HTML video.
              </video>
            )}
          </>
        );
      case 'image':
        return (
          <>
            <p>{content}</p>
            <div className={`${flexWrapContainer}`}>
              {!!contentItem &&
              contentItem.map((elem: string, index: number) => (
                <img
                  src={elem}
                  className={`${imageHolder}`}
                  alt={index + ''}
                  key={index}
                  width={'fit-content'}
                />
              ))}
            </div>
          </>
        );
      default:
        return 'No contentType matched';
    }
  };

  const getReplyContent = (reply: replyProps) => {
    switch (reply.contentType) {
      case 'text':
        return (
          <p
            className={`${replyContentText}`}
            style={
              reply.status === 'remove'
                ? {textDecoration: 'line-through'}
                : {}
            }
          >
            {reply.content}
          </p>
        );
      case 'note':
        return <div className={`${replyContentNote}`}>{reply.content}</div>;
      case 'image':
        return (
          <>
            <p
              className={`${replyContentText}`}
              style={
                reply.status === 'remove'
                  ? {textDecoration: 'line-through'}
                  : {}
              }
            >
              {reply.content}
            </p>
            <img
              className={`${replyContentImage}`}
              src={reply.image}
              alt={'image-note'}
            />
          </>
        );
      default:
        return 'No contentType matched';
    }
  };

  const [showPopover, setShowPopover] = React.useState<any>(null);
  const [editReply, setEditReply] = React.useState<any>(null);
  const [editText, setEditText] = React.useState<any>('');
  return (
    <div
      style={{...style}}
      className={`${feedContainer} ${className}`}
      {...rest}
    >
      <div className={`${feedPostContainer}`}>
        <div className={`${postInfoContainer}`}>
          <img src={postAvatar} className={`${avatarStyle}`}/>
          <div style={{marginLeft: 10, flex: 10}}>
            {!!pageLink ? (
              <a
                href={pageLink}
                className={`${linkStyle}`}
                target='_blank'
                rel='noreferrer noopener'
              >
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
          <img src={commentData.avatar} className={`${avatarSmallStyle}`}/>
          <div
            style={{
              marginLeft: 10,
              flex: 10,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                maxWidth: '70%',
                marginBottom: 8,
                opacity: commentData.status === 'hide' ? 0.5 : 1,
              }}
            >
              <div
                style={{
                  background:
                    contentType !== 'note' ? commentBg : 'transparent',
                  padding: '10px 30px 10px 20px',
                  borderRadius: 5,
                }}
              >
                {!!commentData.link ? (
                  <a
                    href={commentData.link}
                    className={`${linkStyle}`}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <p className={`${postNameStyle}`}>{commentData.name}</p>
                  </a>
                ) : (
                  <p className={`${postNameStyle}`}>{commentData.name}</p>
                )}
                {commentData.isHighlighted && (
                  <span className={`${highLighted}`}>Highlighted</span>
                )}
                {getReplyContent(commentData)}
              </div>
              <p className={`${postTimeStyle}`}>
                {commentData.time}
                {!!commentData.showMsgStatus &&
                <>&nbsp; | &nbsp;
                  {commentData.msgStatus === 'failed' ? <FailedIcon/> : commentData.msgStatus === 'pending' ?
                    <PendingIcon/> : <SuccessIcon/>}
                </>}
              </p>
            </div>

            {showCommentAction && !statustoExcludeAction.includes(`${commentData.status}`) && contentType !== 'note' && (
              <div style={{position: 'relative'}}>
                <div
                  className={`${moreButton}`}
                  style={{
                    height: moreButtonHeightWidth,
                    width: moreButtonHeightWidth,
                  }}
                  onClick={() => {
                    if (commentData.id + '-comment' === showPopover) {
                      setShowPopover(null);
                    } else {
                      setShowPopover(commentData.id + '-comment');
                    }
                  }}
                >
                  <svg
                    data-icon='more'
                    viewBox='0 0 16 16'
                    className='ub-w_16px ub-h_16px ub-box-szg_border-box'
                    style={{fill: 'rgb(102, 120, 138)'}}
                  >
                    <path
                      d='M2 6.03a2 2 0 100 4 2 2 0 100-4zM14 6.03a2 2 0 100 4 2 2 0 100-4zM8 6.03a2 2 0 100 4 2 2 0 100-4z'
                      fillRule='evenodd'
                    />
                  </svg>
                </div>
                {showPopover === commentData.id + '-comment' && (
                  <div className={`${moreButtonContainer}`}>
                    <div
                      onClick={() => {
                        if (!!handleCommentHide) {
                          handleCommentHide(commentData);
                          if (closeOnActionClick) {
                            setShowPopover(null);
                          }
                        }
                      }}
                      className={`${moreButtonElement}`}
                    >
                      Hide
                    </div>
                    <div
                      onClick={() => {
                        if (!!handleCommentDelete) {
                          handleCommentDelete(commentData);
                          if (closeOnActionClick) {
                            setShowPopover(null);
                          }
                        }
                      }}
                      className={`${moreButtonElement}`}
                    >
                      Delete
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {replyContent.map((reply: replyProps, i: number) => (
          <div className={`${replyInfoContainer}`} key={i}>
            <img src={reply.avatar} className={`${avatarSmallStyle}`}/>
            <div
              style={{
                marginLeft: 10,
                flex: 10,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  maxWidth: '70%',
                  marginBottom: 8,
                  opacity: reply.status === 'hide' ? 0.5 : 1,
                  cursor: reply.status === 'hide' ? 'not-allowed' : 'default',
                  width: !!editReply ? '100%' : 'auto',
                }}
              >
                <div
                  style={
                    reply.contentType === 'note'
                      ? {
                        background:
                          reply.contentType !== 'note'
                            ? commentBg
                            : 'transparent',
                        padding: '10px 30px 10px 5px',
                        borderRadius: 5,
                      }
                      : {
                        background:
                          reply.contentType !== 'note'
                            ? commentBg
                            : 'transparent',
                        padding: '10px 30px 10px 20px',
                        borderRadius: 5,
                      }
                  }
                >
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
                  {!!reply.isHighlighted && (
                    <span className={`${highLighted}`}>Highlighted</span>
                  )}
                  {!!editReply && editReply.id === reply.id ? (
                    <div>
                      <textarea
                        rows={3}
                        placeholder='Type here...'
                        value={editText}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                          setEditText(e.target.value)
                        }
                        style={editInputStyle}
                        className={`${inputEditClassLocal} ${editInputClass}`}
                      />
                    </div>
                  ) : (
                    getReplyContent(reply)
                  )}
                </div>
                <p
                  className={`${postTimeStyle}`}
                  style={
                    reply.contentType === 'note'
                      ? {margin: '-10px 0 0 10px'}
                      : {}
                  }
                >
                  {!!editReply && editReply.id === reply.id && (
                    <>
                      <span
                        className={`${editButtonStyle}`}
                        onClick={() => !!handleReplyEdit && handleReplyEdit(reply, editText, () => {
                          setEditReply(null);
                          setEditText('');
                        })}
                      >
                        Reply
                      </span>
                      &nbsp; | &nbsp;
                      <span
                        className={`${editButtonCancelStyle}`}
                        onClick={() => {
                          setEditText('');
                          setEditReply(null);
                          !!handleReplyCancel && handleReplyCancel(reply)
                        }}
                      >
                        Cancel
                      </span>
                      &nbsp;|
                    </>
                  )}
                  &nbsp;{reply.time}
                  {!!reply.messageType && <span>&nbsp; | {reply.messageType}</span>}
                  {!!reply.repliedBy && reply.source !== 'customer' && <span>&nbsp; | {reply.repliedBy}</span>}
                  {!!reply.status && reply.status === 'edited' && (
                    <span> &nbsp; | {reply.status}</span>
                  )}
                  {!!reply.showMsgStatus &&
                  <>&nbsp;| &nbsp;
                    {reply.msgStatus === 'failed' ? <FailedIcon/> : reply.msgStatus === 'pending' ?
                      <PendingIcon/> : <SuccessIcon/>}
                  </>}
                </p>
              </div>
              {showAction && !statustoExcludeAction.includes(`${reply.status}`) && reply.contentType !== 'note' && (
                <div style={{position: 'relative'}}>
                  <div
                    className={`${moreButton}`}
                    style={{
                      height: moreButtonHeightWidth,
                      width: moreButtonHeightWidth,
                    }}
                    onClick={() => {
                      if (reply.id === showPopover) {
                        setShowPopover(null);
                      } else {
                        setShowPopover(reply.id);
                      }
                    }}
                  >
                    <svg
                      data-icon='more'
                      viewBox='0 0 16 16'
                      style={{fill: 'rgb(102, 120, 138)'}}
                    >
                      <path
                        d='M2 6.03a2 2 0 100 4 2 2 0 100-4zM14 6.03a2 2 0 100 4 2 2 0 100-4zM8 6.03a2 2 0 100 4 2 2 0 100-4z'
                        fillRule='evenodd'
                      />
                    </svg>
                  </div>
                  {showPopover === reply.id && (
                    <div className={`${moreButtonContainer}`}>
                      {reply.source !== 'customer' && (
                        <div
                          onClick={() => {
                            if (!!handleEdit) {
                              handleEdit(reply);
                              setEditReply(reply);
                             if(typeof reply.content === 'string') {
                               setEditText(reply.content);
                             }else {
                               //react Node
                               setEditText(reply.content?.props?.children || '')
                             }
                              if (closeOnActionClick) {
                                setShowPopover(null);
                              }
                            }
                          }}
                          className={`${moreButtonElement}`}
                        >
                          Edit
                        </div>
                      )}
                      <div
                        onClick={() => {
                          if (!!handleDelete) {
                            handleDelete(reply);
                            if (closeOnActionClick) {
                              setShowPopover(null);
                            }
                          }
                        }}
                        className={`${moreButtonElement}`}
                      >
                        Delete
                      </div>
                      <div
                        onClick={() => {
                          if (!!handleHide) {
                            handleHide(reply);
                            if (closeOnActionClick) {
                              setShowPopover(null);
                            }
                          }
                        }}
                        className={`${moreButtonElement}`}
                      >
                        Hide
                      </div>
                    </div>
                  )}
                </div>
              )}
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
  contentItem: PropTypes.any,
  commentBg: PropTypes.string,
  showAction: PropTypes.bool,
  handleDelete: PropTypes.func,
  handleHide: PropTypes.func,
  handleEdit: PropTypes.func,
  closeOnActionClick: PropTypes.bool,
  moreButtonHeightWidth: PropTypes.number,
  handleCommentDelete: PropTypes.func,
  handleCommentHide: PropTypes.func,
  showCommentAction: PropTypes.bool,
  editInputStyle: PropTypes.object,
  editInputClass: PropTypes.string,
  handleReplyCancel: PropTypes.func,
  handleReplyEdit: PropTypes.func,
};

FeedPost.defaultProps = {
  style: {},
  className: '',
  contentType: 'text',
  replyContent: [],
  commentBg: '#f2f2f2',
  showAction: false,
  closeOnActionClick: true,
  status: 'add',
  moreButtonHeightWidth: 15,
  showCommentAction: false,
  handleDelete: () => {
    console.log('delete button clicked');
  },
  handleHide: () => {
    console.log('hide button clicked');
  },
  handleEdit: () => {
    console.log('edit button clicked');
  },
  handleCommentDelete: () => {
    console.log('Comment Delete button clicked');
  },
  handleCommentHide: () => {
    console.log('Comment Hide button clicked');
  },
  handleReplyEdit: (reply, text, resetCallback) => {
    console.log(reply, text, 'Reply Edit button clicked');
    resetCallback();
  },
  handleReplyCancel: () => {
    console.log('Reply Edit Cancel button clicked');
  }
};

export default FeedPost;
