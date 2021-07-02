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
  fontSize: '1rem',
  width: 'fit-content',
  marginBottom: 6,
});

const msgTimeClass = css({
  fontSize: '0.7rem',
  marginBottom: 10,
  marginTop: 3,
  color: '#c0cbd0',
  display: 'flex',
  alignItems: 'center',
});
const flexImageContainer = css({
  display: 'flex',
  flexWrap: 'wrap',
  maxWidth: '250px',
  '@media(max-width: 600px)': {
    maxWidth: '85%',
  },
});

const flexImageContainerDiv = css({
  height: '200px',
  flexGrow: 1,
  cursor: 'pointer',
  margin: '5px 5px 5px 0',
  display: 'flex',
  ':last-child': {
    flexGrow: 10,
  },
});

const flexImageContainerElement = css({
  maxHeight: '100%',
  minWidth: '100%',
  objectFit: 'cover',
  verticalAlign: 'bottom',
  borderRadius: 5,
});

const imageViewerStyle = css({
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  left: '0px',
  padding: 10,
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 2001,
  flexDirection: 'column',
});

const imagePreview = css({
  width: 'auto',
  height: '70vh',
  marginTop: '-10vh',
  borderRadius: 5,
  zIndex: 999,
  '@media(max-width: 600px)': {
    width: '65%',
    height: 'auto',
  },
});

const closeButton = css({
  height: 30,
  width: 30,
  position: 'absolute',
  top: 30,
  right: 40,
  cursor: 'pointer',
  transform: 'scale(1.0)',
  transition: 'all 0.2s ease-in',
  zIndex: 999,
  ':hover': {
    transform: 'scale(1.2)',
  },
});

const arrowLeft = css({
  height: 30,
  width: 30,
  position: 'absolute',
  left: 30,
  top: '48%',
  cursor: 'pointer',
  transform: 'scale(1.0)',
  transition: 'all 0.1s ease-in',
  zIndex: 999,
  ':hover': {
    transform: 'scale(1.1)',
  },
});
const arrowRight = css({
  height: 30,
  width: 30,
  position: 'absolute',
  right: 30,
  top: '48%',
  cursor: 'pointer',
  transform: 'scale(1.0)',
  transition: 'all 0.1s ease-in',
  zIndex: 999,
  ':hover': {
    transform: 'scale(1.1)',
  },
});

const closeOnClickStyle = css({
  background: 'transparent',
  height: '100%',
  width: '100%',
  position: 'fixed',
  zIndex: 1,
});

interface Props {
  style?: object;
  className?: string;
  userType?: 'user' | 'admin' | 'bot';
  text?: string;
  images?: string[];
  msgTime?: string | number;
  repliedBy?: string;
  showRepliedBy?: boolean;
  imagesWidth?: number | string;
  showPreview?: boolean;
  consumer?: 'user' | 'admin' | 'bot';
  elementStyle?: object;
  elementClassName?: string;
  avatar?: string | React.ReactNode;
  msgStatus?: 'failed' | 'pending' | 'sent';
  showMsgStatus?: boolean;
  [key: string]: any;
}

const ImageMessage: React.FC<Props> = ({
  style,
  className,
  userType,
  text,
  images,
  msgTime,
  repliedBy,
  showRepliedBy,
  imagesWidth,
  showPreview,
  consumer,
  elementStyle,
  elementClassName,
  avatar,
  msgStatus,
  showMsgStatus,
  ...rest
}) => {
  const [currentImage, setCurrentImage] = React.useState<number>(-1);
  const [isShown, setIsShown] = React.useState<boolean>(false);
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
      {!!text && (
        <AvatarContainer
          avatar={avatar}
          userType={userType}
          consumer={consumer}
        >
          <div
            className={`${globalTextBlock} ${
              consumer === 'user'
                ? userType === 'user'
                  ? textBlockAdmin
                  : textBlockUser
                : userType === 'user'
                ? textBlockUser
                : textBlockAdmin
            } ${elementClassName}`}
            style={elementStyle}
          >
            {text}
          </div>
        </AvatarContainer>
      )}
      <AvatarContainer avatar={avatar} userType={userType} consumer={consumer}>
        <div className={`${flexImageContainer}`}>
          {!!images &&
            images.length > 0 &&
            images.map((imageItem: string, i: number) => (
              <div
                className={`${flexImageContainerDiv}`}
                key={i}
                onClick={() => {
                  if (showPreview) {
                    setCurrentImage(i);
                    setIsShown(true);
                  }
                }}
              >
                <img
                  className={`${flexImageContainerElement}`}
                  src={imageItem}
                  key={i}
                  width={'250px'}
                />
              </div>
            ))}
        </div>
      </AvatarContainer>
      {(showRepliedBy || !!msgTime) && (
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
      {isShown && currentImage >= 0 && (
        <div
          className={`${imageViewerStyle}`}
          style={{ background: `rgba(0, 0, 0, 0.8)` }}
        >
          <img
            className={`${imagePreview}`}
            src={
              (!!images && images[currentImage]) ||
              'https://i.ibb.co/rkCBGSG/Artboard-1.png'
            }
            alt='image-preview'
          />
          <svg
            className={`${closeButton}`}
            onClick={() => {
              setIsShown(false);
              setCurrentImage(-1);
            }}
            viewBox='0 0 512 512'
          >
            <path
              d='m416 512h-320c-53.023438 0-96-42.976562-96-96v-320c0-53.023438 42.976562-96 96-96h320c53.023438 0 96 42.976562 96 96v320c0 53.023438-42.976562 96-96 96zm0 0'
              fill='rgba(255,255,255,0.5)'
            />
            <g fill='rgba(255,255,255,0.9)'>
              <path d='m342.734375 312.574219-143.308594-143.308594c-6.257812-6.257813-16.386719-6.257813-22.625 0l-7.535156 7.535156c-6.257813 6.253907-6.257813 16.382813 0 22.625l143.308594 143.308594c6.257812 6.257813 16.386719 6.257813 22.625 0l7.535156-7.535156c6.257813-6.253907 6.257813-16.382813 0-22.625zm0 0' />
              <path d='m312.574219 169.265625-143.308594 143.308594c-6.257813 6.257812-6.257813 16.386719 0 22.625l7.535156 7.535156c6.253907 6.257813 16.382813 6.257813 22.625 0l143.308594-143.308594c6.257813-6.257812 6.257813-16.386719 0-22.625l-7.535156-7.535156c-6.253907-6.257813-16.382813-6.257813-22.625 0zm0 0' />
            </g>
          </svg>

          <svg
            aria-hidden='true'
            focusable='false'
            onClick={() => {
              if (currentImage > 0) {
                setCurrentImage(currentImage - 1);
              }
            }}
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            className={`${arrowLeft}`}
          >
            <g>
              <path
                fill='rgba(255,255,255,0.5)'
                d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zM288 372.6c0 10.14-14.07 15.21-22.29 8L131.82 264a10.38 10.38 0 0 1 0-16.08l133.89-116.57c8.22-7.16 22.29-2.09 22.29 8.05z'
              />
              <path
                fill='rgba(255,255,255,0.9)'
                d='M288 372.6c0 10.14-14.07 15.21-22.29 8L131.82 264a10.38 10.38 0 0 1 0-16.08l133.89-116.57c8.22-7.16 22.29-2.09 22.29 8.05z'
              />
            </g>
          </svg>

          <svg
            aria-hidden='true'
            focusable='false'
            onClick={() => {
              const max = images?.length || 0;
              if (currentImage < max - 1) {
                setCurrentImage(currentImage + 1);
              }
            }}
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            className={`${arrowRight}`}
          >
            <g>
              <path
                fill='rgba(255,255,255,0.5)'
                d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-83.82 232L182.29 380.65c-8.22 7.16-22.29 2.09-22.29-8V139.4c0-10.14 14.06-15.21 22.29-8.05L316.18 248a10.38 10.38 0 0 1 0 16z'
              />
              <path
                fill='rgba(255,255,255,0.9)'
                d='M316.18 264L182.29 380.65c-8.22 7.16-22.29 2.09-22.29-8V139.4c0-10.14 14.07-15.21 22.29-8.05L316.18 248a10.38 10.38 0 0 1 0 16z'
              />
            </g>
          </svg>
          <div
            onClick={() => {
              if (true) {
                setIsShown(false);
                setCurrentImage(-1);
              }
            }}
            className={`${closeOnClickStyle}`}
          />
        </div>
      )}
    </div>
  );
};

ImageMessage.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.array,
  imagesWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  userType: PropTypes.oneOf(['user', 'admin', 'bot']),
  msgTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  repliedBy: PropTypes.string,
  showRepliedBy: PropTypes.bool,
  showPreview: PropTypes.bool,
  consumer: PropTypes.oneOf(['user', 'admin', 'bot']),
  elementStyle: PropTypes.object,
  elementClassName: PropTypes.string,
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  msgStatus: PropTypes.oneOf(['failed', 'pending', 'sent']),
  showMsgStatus: PropTypes.bool,
};

ImageMessage.defaultProps = {
  style: {},
  className: '',
  text: '',
  showRepliedBy: false,
  showPreview: false,
  avatar: '',
  showMsgStatus: false,
};

export default ImageMessage;
