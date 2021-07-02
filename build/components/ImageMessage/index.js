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
import PropTypes from 'prop-types';
import AvatarContainer from '../Common/AvatarContainer';
var userContainer = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
});
var adminContainer = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
});
var textBlockAdmin = css({
    background: '#184D47',
    color: 'white',
    cursor: 'pointer',
    borderRadius: 16,
    ':hover': {
        filter: 'brightness(0.95)',
    },
});
var textBlockUser = css({
    background: '#e5e9ee',
    color: '#232c41',
    borderRadius: 16,
    cursor: 'pointer',
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
    marginBottom: 6,
    whiteSpace: 'pre-line',
});
var msgTimeClass = css({
    fontSize: '0.7rem',
    marginBottom: 10,
    marginTop: 3,
    color: '#c0cbd0',
});
var flexImageContainer = css({
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '250px',
    '@media(max-width: 600px)': {
        maxWidth: '85%',
    },
});
var flexImageContainerDiv = css({
    height: '200px',
    flexGrow: 1,
    cursor: 'pointer',
    margin: '5px 5px 5px 0',
    display: 'flex',
    ':last-child': {
        flexGrow: 10,
    },
});
var flexImageContainerElement = css({
    maxHeight: '100%',
    minWidth: '100%',
    objectFit: 'cover',
    verticalAlign: 'bottom',
    borderRadius: 5,
});
var imageViewerStyle = css({
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
var imagePreview = css({
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
var closeButton = css({
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
var arrowLeft = css({
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
var arrowRight = css({
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
var closeOnClickStyle = css({
    background: 'transparent',
    height: '100%',
    width: '100%',
    position: 'fixed',
    zIndex: 1,
});
var ImageMessage = function (_a) {
    var style = _a.style, className = _a.className, userType = _a.userType, text = _a.text, images = _a.images, msgTime = _a.msgTime, repliedBy = _a.repliedBy, showRepliedBy = _a.showRepliedBy, imagesWidth = _a.imagesWidth, showPreview = _a.showPreview, consumer = _a.consumer, elementStyle = _a.elementStyle, elementClassName = _a.elementClassName, avatar = _a.avatar, rest = __rest(_a, ["style", "className", "userType", "text", "images", "msgTime", "repliedBy", "showRepliedBy", "imagesWidth", "showPreview", "consumer", "elementStyle", "elementClassName", "avatar"]);
    var _b = React.useState(-1), currentImage = _b[0], setCurrentImage = _b[1];
    var _c = React.useState(false), isShown = _c[0], setIsShown = _c[1];
    return (React.createElement("div", __assign({ style: __assign({}, style), className: "" + (consumer === 'user'
            ? userType === 'user'
                ? adminContainer
                : userContainer
            : userType === 'user'
                ? userContainer
                : adminContainer) + className }, rest),
        !!text && (React.createElement(AvatarContainer, { avatar: avatar, userType: userType, consumer: consumer },
            React.createElement("div", { className: globalTextBlock + " " + (consumer === 'user'
                    ? userType === 'user'
                        ? textBlockAdmin
                        : textBlockUser
                    : userType === 'user'
                        ? textBlockUser
                        : textBlockAdmin) + " " + elementClassName, style: elementStyle }, text))),
        React.createElement(AvatarContainer, { avatar: avatar, userType: userType, consumer: consumer },
            React.createElement("div", { className: "" + flexImageContainer }, !!images &&
                images.length > 0 &&
                images.map(function (imageItem, i) { return (React.createElement("div", { className: "" + flexImageContainerDiv, key: i, onClick: function () {
                        if (showPreview) {
                            setCurrentImage(i);
                            setIsShown(true);
                        }
                    } },
                    React.createElement("img", { className: "" + flexImageContainerElement, src: imageItem, key: i, width: '250px' }))); }))),
        (showRepliedBy || !!msgTime) && (React.createElement("p", { className: "" + msgTimeClass, style: avatar
                ? consumer === 'user'
                    ? userType === 'user'
                        ? { marginRight: '30px' }
                        : { marginLeft: '30px' }
                    : userType === 'user'
                        ? { marginLeft: '30px' }
                        : { marginRight: '30px' }
                : {} },
            !!msgTime && React.createElement(React.Fragment, null,
                msgTime,
                " \u00A0 "),
            ' ',
            showRepliedBy && React.createElement(React.Fragment, null,
                "\u2022 \u00A0 ",
                repliedBy))),
        isShown && currentImage >= 0 && (React.createElement("div", { className: "" + imageViewerStyle, style: { background: "rgba(0, 0, 0, 0.8)" } },
            React.createElement("img", { className: "" + imagePreview, src: (!!images && images[currentImage]) ||
                    'https://i.ibb.co/rkCBGSG/Artboard-1.png', alt: 'image-preview' }),
            React.createElement("svg", { className: "" + closeButton, onClick: function () {
                    setIsShown(false);
                    setCurrentImage(-1);
                }, viewBox: '0 0 512 512' },
                React.createElement("path", { d: 'm416 512h-320c-53.023438 0-96-42.976562-96-96v-320c0-53.023438 42.976562-96 96-96h320c53.023438 0 96 42.976562 96 96v320c0 53.023438-42.976562 96-96 96zm0 0', fill: 'rgba(255,255,255,0.5)' }),
                React.createElement("g", { fill: 'rgba(255,255,255,0.9)' },
                    React.createElement("path", { d: 'm342.734375 312.574219-143.308594-143.308594c-6.257812-6.257813-16.386719-6.257813-22.625 0l-7.535156 7.535156c-6.257813 6.253907-6.257813 16.382813 0 22.625l143.308594 143.308594c6.257812 6.257813 16.386719 6.257813 22.625 0l7.535156-7.535156c6.257813-6.253907 6.257813-16.382813 0-22.625zm0 0' }),
                    React.createElement("path", { d: 'm312.574219 169.265625-143.308594 143.308594c-6.257813 6.257812-6.257813 16.386719 0 22.625l7.535156 7.535156c6.253907 6.257813 16.382813 6.257813 22.625 0l143.308594-143.308594c6.257813-6.257812 6.257813-16.386719 0-22.625l-7.535156-7.535156c-6.253907-6.257813-16.382813-6.257813-22.625 0zm0 0' }))),
            React.createElement("svg", { "aria-hidden": 'true', focusable: 'false', onClick: function () {
                    if (currentImage > 0) {
                        setCurrentImage(currentImage - 1);
                    }
                }, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512', className: "" + arrowLeft },
                React.createElement("g", null,
                    React.createElement("path", { fill: 'rgba(255,255,255,0.5)', d: 'M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zM288 372.6c0 10.14-14.07 15.21-22.29 8L131.82 264a10.38 10.38 0 0 1 0-16.08l133.89-116.57c8.22-7.16 22.29-2.09 22.29 8.05z' }),
                    React.createElement("path", { fill: 'rgba(255,255,255,0.9)', d: 'M288 372.6c0 10.14-14.07 15.21-22.29 8L131.82 264a10.38 10.38 0 0 1 0-16.08l133.89-116.57c8.22-7.16 22.29-2.09 22.29 8.05z' }))),
            React.createElement("svg", { "aria-hidden": 'true', focusable: 'false', onClick: function () {
                    var _a;
                    var max = ((_a = images) === null || _a === void 0 ? void 0 : _a.length) || 0;
                    if (currentImage < max - 1) {
                        setCurrentImage(currentImage + 1);
                    }
                }, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512', className: "" + arrowRight },
                React.createElement("g", null,
                    React.createElement("path", { fill: 'rgba(255,255,255,0.5)', d: 'M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-83.82 232L182.29 380.65c-8.22 7.16-22.29 2.09-22.29-8V139.4c0-10.14 14.06-15.21 22.29-8.05L316.18 248a10.38 10.38 0 0 1 0 16z' }),
                    React.createElement("path", { fill: 'rgba(255,255,255,0.9)', d: 'M316.18 264L182.29 380.65c-8.22 7.16-22.29 2.09-22.29-8V139.4c0-10.14 14.07-15.21 22.29-8.05L316.18 248a10.38 10.38 0 0 1 0 16z' }))),
            React.createElement("div", { onClick: function () {
                    if (true) {
                        setIsShown(false);
                        setCurrentImage(-1);
                    }
                }, className: "" + closeOnClickStyle })))));
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
};
ImageMessage.defaultProps = {
    style: {},
    className: '',
    text: '',
    showRepliedBy: false,
    showPreview: false,
    avatar: '',
};
export default ImageMessage;
//# sourceMappingURL=index.js.map