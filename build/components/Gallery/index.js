var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { css } from 'glamor';
import Carousel from 'nuka-carousel';
import PropTypes from 'prop-types';
import AvatarContainer from '../Common/AvatarContainer';
var adminContainer = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
});
var userContainer = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
});
var textBlockAdmin = css({
    background: '#C8E1DD',
    color: '#0B1D2B',
    cursor: 'pointer',
    borderRadius: 16,
    marginBottom: 10,
    ':hover': {
        filter: 'brightness(0.95)',
    },
});
var globalTextBlock = css({
    maxWidth: '60%',
    wordWrap: 'break-word',
    padding: '8px 16px 8px',
    fontSize: '1rem',
    width: 'fit-content',
    marginBottom: 2,
});
var msgTimeClass = css({
    fontSize: '0.7rem',
    marginBottom: 5,
    marginTop: 3,
    color: '#c0cbd0',
});
var galleryItemContainer = css({
    width: 220,
    background: 'white',
    boxShadow: '0px 0px 10px #9cbec757',
    borderRadius: 10,
    marginRight: 20,
});
var galleryItemCover = css({
    display: 'flex',
    justifyContent: 'center',
    background: '#e8f0f3',
});
var galleryItemTitle = css({
    fontSize: '1rem',
    margin: '10px 15px 0 15px',
    color: '#222222',
    textAlign: 'center',
    fontWeight: 500,
});
var galleryItemSubtitle = css({
    fontSize: '0.88rem',
    margin: '5px 15px 0 15px',
    textAlign: 'center',
    fontWeight: 400,
    color: '#7A7A7A',
});
var galleryItemButtons = css({
    paddingTop: 5,
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    height: 122,
});
var galleryItemButtonElement = css({
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
    fontSize: '0.88rem',
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
var GalleryMessage = function (_a) {
    var style = _a.style, className = _a.className, text = _a.text, buttonData = _a.buttonData, msgTime = _a.msgTime, repliedBy = _a.repliedBy, showRepliedBy = _a.showRepliedBy, consumer = _a.consumer, elementClassName = _a.elementClassName, elementStyle = _a.elementStyle, avatar = _a.avatar, hasTitle = _a.hasTitle, cellSpacing = _a.cellSpacing, galleryData = _a.galleryData, carouselHeight = _a.carouselHeight, carouselWidth = _a.carouselWidth, slideToShow = _a.slideToShow, rest = __rest(_a, ["style", "className", "text", "buttonData", "msgTime", "repliedBy", "showRepliedBy", "consumer", "elementClassName", "elementStyle", "avatar", "hasTitle", "cellSpacing", "galleryData", "carouselHeight", "carouselWidth", "slideToShow"]);
    return (React.createElement("div", __assign({ style: __assign({}, style), className: "" + (consumer === 'user' ? userContainer : adminContainer) + className }, rest),
        hasTitle && (React.createElement(AvatarContainer, { avatar: avatar, userType: 'bot', consumer: consumer },
            React.createElement("div", { className: globalTextBlock + " " + textBlockAdmin + " " + elementClassName, style: elementStyle }, text))),
        React.createElement(Carousel, { slidesToShow: slideToShow, slideWidth: '220px', width: carouselWidth, height: carouselHeight, style: consumer === 'user'
                ? { marginLeft: 35, paddingLeft: 30, paddingRight: 30 }
                : { marginRight: 35, paddingLeft: 30, paddingRight: 30 }, cellSpacing: cellSpacing, initialSlideHeight: 412, defaultControlsConfig: {
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
            } }, galleryData.map(function (gallery, index) {
            var _a, _b;
            return (React.createElement("div", { className: "" + galleryItemContainer, key: index },
                React.createElement("div", { className: "" + galleryItemCover },
                    React.createElement("img", { src: gallery.image ||
                            'https://drohnenspital.com/wp-content/uploads/2020/10/M2-JS02-1.jpg', style: { overflow: 'hidden', borderRadius: '10px 10px 0 0' }, height: '200px' })),
                React.createElement("p", { className: "" + galleryItemTitle }, ((_a = gallery) === null || _a === void 0 ? void 0 : _a.title) || 'Not Available'),
                React.createElement("p", { className: "" + galleryItemSubtitle }, ((_b = gallery) === null || _b === void 0 ? void 0 : _b.subtitle) || 'Not Available'),
                React.createElement("div", { className: "" + galleryItemButtons }, !!gallery.buttons &&
                    gallery.buttons.map(function (galleryButton, index) {
                        return galleryButton.methodType === 'url' &&
                            !!!galleryButton.isDisabled ? (React.createElement("a", { key: index, className: galleryItemButtonElement + " " + galleryButton.className, style: __assign({ width: '91%' }, galleryButton.style), href: galleryButton.url, target: '_blank' }, galleryButton.title)) : (React.createElement("button", { key: index, className: galleryItemButtonElement + " " + galleryButton.className, style: galleryButton.style, onClick: galleryButton.action, disabled: galleryButton.isDisabled }, galleryButton.title));
                    }))));
        })),
        (showRepliedBy || !!msgTime) && (React.createElement("p", { className: "" + msgTimeClass, style: avatar
                ? consumer === 'user'
                    ? { marginLeft: '70px' }
                    : { marginRight: '70px' }
                : {} },
            !!msgTime && React.createElement(React.Fragment, null,
                msgTime,
                " \u00A0 "),
            ' ',
            showRepliedBy && React.createElement(React.Fragment, null,
                "\u2022 \u00A0 ",
                repliedBy)))));
};
GalleryMessage.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    text: PropTypes.string,
    msgTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    repliedBy: PropTypes.string,
    showRepliedBy: PropTypes.bool,
    buttonData: PropTypes.any,
    avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    hasTitle: PropTypes.bool,
    cellSpacing: PropTypes.number,
    carouselWidth: PropTypes.string,
    carouselHeight: PropTypes.string,
    slideToShow: PropTypes.number,
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
    carouselWidth: '520px',
    carouselHeight: '415px',
    slideToShow: 2,
};
export default GalleryMessage;
//# sourceMappingURL=index.js.map