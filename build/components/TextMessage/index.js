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
        background: '#143f3a',
    },
});
var textBlockUser = css({
    background: '#e5e9ee',
    color: '#232c41',
    borderRadius: 16,
    cursor: 'pointer',
    ':hover': {
        background: '#e1e5ea',
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
    fontSize: '0.8rem',
    marginBottom: 10,
    marginTop: 3,
    color: '#c0cbd0',
});
var TextMessage = function (_a) {
    var style = _a.style, className = _a.className, userType = _a.userType, text = _a.text, msgTime = _a.msgTime, repliedBy = _a.repliedBy, showRepliedBy = _a.showRepliedBy, rest = __rest(_a, ["style", "className", "userType", "text", "msgTime", "repliedBy", "showRepliedBy"]);
    return (React.createElement("div", __assign({ style: __assign({}, style), className: "" + (userType === 'user' ? userContainer : adminContainer) + className }, rest),
        React.createElement("div", { className: globalTextBlock + " " + (userType === 'user' ? textBlockUser : textBlockAdmin) }, text),
        (showRepliedBy || !!msgTime) && (React.createElement("p", { className: "" + msgTimeClass },
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
};
TextMessage.defaultProps = {
    style: {},
    className: '',
    text: '',
    showRepliedBy: false,
};
export default TextMessage;
//# sourceMappingURL=index.js.map