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
        filter: 'brightness(0.95)'
    },
});
var textBlockUser = css({
    background: '#e5e9ee',
    color: '#232c41',
    borderRadius: 16,
    cursor: 'pointer',
    ':hover': {
        filter: 'brightness(0.95)'
    },
});
var globalTextBlock = css({
    maxWidth: '60%',
    wordWrap: 'break-word',
    padding: '8px 16px 8px',
    fontSize: '0.88rem',
    width: 'fit-content',
    marginBottom: 2,
});
var msgTimeClass = css({
    fontSize: '0.7rem',
    marginBottom: 10,
    marginTop: 3,
    color: '#c0cbd0',
});
var TextMessage = function (_a) {
    var style = _a.style, className = _a.className, userType = _a.userType, consumer = _a.consumer, text = _a.text, msgTime = _a.msgTime, repliedBy = _a.repliedBy, elementStyle = _a.elementStyle, elementClassName = _a.elementClassName, showInfo = _a.showInfo, showRepliedBy = _a.showRepliedBy, rest = __rest(_a, ["style", "className", "userType", "consumer", "text", "msgTime", "repliedBy", "elementStyle", "elementClassName", "showInfo", "showRepliedBy"]);
    return (React.createElement("div", __assign({ style: __assign({}, style), className: "" + (consumer === 'user'
            ? userType === 'user'
                ? adminContainer
                : userContainer
            : userType === 'user'
                ? userContainer
                : adminContainer) + className }, rest),
        React.createElement("div", { style: elementStyle, className: globalTextBlock + " " + (consumer === 'user'
                ? userType === 'user'
                    ? textBlockAdmin
                    : textBlockUser
                : userType === 'user'
                    ? textBlockUser
                    : textBlockAdmin) + " " + elementClassName }, text),
        showInfo && (showRepliedBy || !!msgTime) && (React.createElement("p", { className: "" + msgTimeClass },
            !!msgTime && React.createElement(React.Fragment, null,
                msgTime,
                " \u00A0 "),
            ' ',
            userType === 'admin' && showRepliedBy && React.createElement(React.Fragment, null,
                "\u2022 \u00A0 ",
                repliedBy)))));
};
TextMessage.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    text: PropTypes.string,
    userType: PropTypes.oneOf(['user', 'admin', 'bot']),
    msgTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    repliedBy: PropTypes.string,
    showRepliedBy: PropTypes.bool,
    consumer: PropTypes.oneOf(['user', 'admin', 'bot']),
    elementStyle: PropTypes.object,
    elementClassName: PropTypes.string,
    showInfo: PropTypes.bool,
};
TextMessage.defaultProps = {
    style: {},
    className: '',
    text: '',
    showRepliedBy: false,
    showInfo: true,
};
export default TextMessage;
//# sourceMappingURL=index.js.map