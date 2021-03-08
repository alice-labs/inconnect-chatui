import * as React from 'react';
import { css } from 'glamor';
import Carousel from 'nuka-carousel';
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
  background: '#C8E1DD',
  color: '#0B1D2B',
  cursor: 'pointer',
  borderRadius: 16,
  marginBottom: 10,
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

const galleryItemContainer = css({
  width: 220,
  background: 'white',
  boxShadow: '0px 0px 8px #416b7557',
  borderRadius: 10,
  marginRight: 20,
  marginLeft: 5,
  marginTop: 5,
});

const galleryItemCover = css({
  display: 'flex',
  justifyContent: 'center',
  background: '#e8f0f3',
});

const galleryItemTitle = css({
  fontSize: '0.9rem',
  margin: '10px 15px 0 15px',
  color: '#222222',
  textAlign: 'center',
  fontWeight: 500,
});
const galleryItemSubtitle = css({
  fontSize: '0.8rem',
  margin: '5px 15px 0 15px',
  textAlign: 'center',
  fontWeight: 400,
  color: '#7A7A7A',
});

const galleryItemButtons = css({
  paddingTop: 5,
  marginBottom: 5,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
});
const galleryItemButtonElement = css({
  borderBottom: '0.5px solid #E3E3E3',
  borderLeft: 'none',
  borderRight: 'none',
  borderTop: 'none',
  padding: 10,
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in',
  width: '100%',
  background: 'white',
  color: '#222222',
  fontSize: '0.68rem',
  textDecoration: 'none',
  textAlign: 'center',
  fontFamily: 'inherit',
  flex: 1,
  alignItems: 'center',
  ':hover': {
    background: '#f2f9ff',
  },
  ':disabled': {
    background: '#f7f8f9',
    cursor: 'not-allowed',
    borderTop: '0.5px solid #E3E3E3',
    borderBottom: '0.5px solid #E3E3E3',
  },
  ':first-child': {
    borderTop: '0.5px solid #E3E3E3',
  },
  ':last-child': {
    borderBottom: 'none',
  },
});

interface buttonDataProps {
  id?: number;
  title?: string;
  methodType?: 'url' | 'function';
  url?: string;
  action?: any;
  isDisabled?: boolean;
  style?: object;
  className?: string;
  [key: string]: any;
}
interface galleryProps {
  id: number;
  title: string | null;
  subtitle: string | null;
  image: string | null;
  buttons?: buttonDataProps[];
}

interface Props {
  style?: object;
  className?: string;
  text?: string;
  galleryData: galleryProps[];
  msgTime?: string | number;
  repliedBy?: string;
  showRepliedBy?: boolean;
  consumer?: 'user' | 'admin' | 'bot';
  elementStyle?: object;
  elementClassName?: string;
  avatar?: string | React.ReactNode;
  hasTitle?: boolean;
  cellSpacing?: number;
  carouselWidth?: string;
  carouselHeight?: string;
  slideToShow?: number;
  galleryItemClassName?: string;
  msgStatus?: 'failed' | 'pending' | 'sent';
  showMsgStatus?: boolean;
  [key: string]: any;
}

const GalleryMessage: React.FC<Props> = ({
  style,
  className,
  text,
  msgTime,
  repliedBy,
  showRepliedBy,
  consumer,
  elementClassName,
  elementStyle,
  avatar,
  hasTitle,
  cellSpacing,
  galleryData,
  carouselHeight,
  carouselWidth,
  slideToShow,
  galleryItemClassName,
  msgStatus,
  showMsgStatus,
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
      {hasTitle && (
        <AvatarContainer avatar={avatar} userType='bot' consumer={consumer}>
          <div
            className={`${globalTextBlock} ${textBlockAdmin} ${elementClassName}`}
            style={elementStyle}
          >
            {text}
          </div>
        </AvatarContainer>
      )}
      <Carousel
        slidesToShow={slideToShow}
        slideWidth='220px'
        width={carouselWidth}
        height={carouselHeight}
        style={
          consumer === 'user'
            ? hasTitle
              ? { marginLeft: 35, paddingLeft: 30, paddingRight: 30 }
              : { marginLeft: 5, paddingLeft: 30, paddingRight: 30 }
            : hasTitle
            ? { marginRight: 35, paddingLeft: 30, paddingRight: 30 }
            : { marginRight: 5, paddingLeft: 30, paddingRight: 30 }
        }
        cellSpacing={cellSpacing}
        initialSlideHeight={412}
        defaultControlsConfig={{
          containerClassName: 'inconnect-chat-ui__gallery',
          pagingDotsStyle: { display: 'none' },
          nextButtonText: '›',
          prevButtonText: '‹',
          nextButtonStyle: {
            borderRadius: 5,
            background: 'transparent',
            color: 'gray',
            fontSize: '70px',
            position: 'absolute',
            right: -20,
            top: -40,
          },
          prevButtonStyle: {
            borderRadius: 5,
            background: 'transparent',
            color: 'gray',
            fontSize: '70px',
            position: 'absolute',
            left: -20,
            top: -40,
          },
        }}
      >
        {galleryData.map((gallery: galleryProps, index: number) => (
          <div className={`${galleryItemContainer}`} key={index}>
            <div className={`${galleryItemCover} ${galleryItemClassName}`}>
              <img
                src={
                  gallery.image ||
                  'https://drohnenspital.com/wp-content/uploads/2020/10/M2-JS02-1.jpg'
                }
                style={{
                  overflow: 'hidden',
                  borderRadius: '10px 10px 0 0',
                  height: `calc(${carouselHeight} * .4)`,
                }}
              />
            </div>
            <p className={`${galleryItemTitle}`}>
              {gallery?.title || 'Not Available'}
            </p>
            <p className={`${galleryItemSubtitle}`}>
              {gallery?.subtitle || 'Not Available'}
            </p>
            <div
              className={`${galleryItemButtons}`}
              style={{ height: `calc(${carouselHeight} * .3)` }}
            >
              {!!gallery.buttons &&
                gallery.buttons.map(
                  (galleryButton: buttonDataProps, index: number) =>
                    galleryButton.methodType === 'url' &&
                    !!!galleryButton.isDisabled ? (
                      <a
                        key={index}
                        className={`${galleryItemButtonElement} ${galleryButton.className}`}
                        style={{ width: '91%', ...galleryButton.style }}
                        href={galleryButton.url}
                        target={'_blank'}
                      >
                        {galleryButton.title}
                      </a>
                    ) : (
                      <button
                        key={index}
                        className={`${galleryItemButtonElement} ${galleryButton.className}`}
                        style={galleryButton.style}
                        onClick={galleryButton.action}
                        disabled={galleryButton.isDisabled}
                      >
                        {galleryButton.title}
                      </button>
                    )
                )}
            </div>
          </div>
        ))}
      </Carousel>
      {(showRepliedBy || !!msgTime) && (
        <p
          className={`${msgTimeClass}`}
          style={
            avatar
              ? consumer === 'user'
                ? { marginLeft: '70px', marginTop: '-40px' }
                : { marginRight: '35px', marginTop: '-40px' }
              : {}
          }
        >
          {!!msgTime && <>{msgTime} &nbsp; </>}{' '}
          {showRepliedBy && <>• &nbsp; {repliedBy}</>}
          {!!showMsgStatus &&
          <>{
            msgStatus === 'failed' ? <FailedIcon/> : msgStatus === 'pending' ? <PendingIcon /> : <SuccessIcon/>}
          </>
          }
        </p>
      )}
    </div>
  );
};

GalleryMessage.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  text: PropTypes.string,
  msgTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  repliedBy: PropTypes.string,
  showRepliedBy: PropTypes.bool,
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  hasTitle: PropTypes.bool,
  cellSpacing: PropTypes.number,
  carouselWidth: PropTypes.string,
  carouselHeight: PropTypes.string,
  slideToShow: PropTypes.number,
  galleryItemClassName: PropTypes.string,
  msgStatus: PropTypes.oneOf(['failed', 'pending', 'sent']),
  showMsgStatus: PropTypes.bool,
};

GalleryMessage.defaultProps = {
  style: {},
  className: '',
  text: '',
  showRepliedBy: false,
  avatar: '',
  hasTitle: false,
  galleryData: [],
  cellSpacing: 25,
  carouselWidth: '525px',
  carouselHeight: '390px',
  slideToShow: 2,
  showMsgStatus: false,
};

export default GalleryMessage;
