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
    marginBottom: 10,
    ':hover': {
        background: '#143f3a',
    },
});
var buttonBlockAdmin = css({
    background: '#e5e9ee',
    color: '#232c41',
    borderRadius: 16,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: '200px',
    marginTop: 6,
    flexWrap: 'wrap',
    ':hover': {
        background: '#e1e5ea',
    },
});
var btnElement = css({
    textAlign: 'center',
    width: '100%',
    margin: 3,
    padding: '5px 10px',
    background: 'white',
    boxShadow: '0px 0px 0px 1px #d2d2d2',
    font: '400 13.3333px Arial',
    flex: 1,
    ':hover': {
        background: 'white',
        boxShadow: '0px 0px 7px 1px #d2d2d2',
    },
    borderRadius: 5,
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
    color: 'black',
    fontSize: '0.88rem',
    whiteSpace: 'nowrap',
    ':disabled': {
        cursor: 'not-allowed',
        background: '#eff3f8'
    }
});
var aLinkWidthFix = css({
    width: '96%!important',
    whiteSpace: 'no-wrap',
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
    marginBottom: 5,
    marginTop: 3,
    color: '#c0cbd0',
});
;
var QuickReplyMessage = function (_a) {
    var style = _a.style, className = _a.className, text = _a.text, buttonData = _a.buttonData, msgTime = _a.msgTime, repliedBy = _a.repliedBy, showRepliedBy = _a.showRepliedBy, rest = __rest(_a, ["style", "className", "text", "buttonData", "msgTime", "repliedBy", "showRepliedBy"]);
    return (React.createElement("div", __assign({ style: __assign({}, style), className: "" + adminContainer + className }, rest),
        React.createElement("div", { className: globalTextBlock + " " + textBlockAdmin }, text),
        !!buttonData && buttonData.length > 0 && React.createElement("div", { className: globalTextBlock + " " + buttonBlockAdmin }, buttonData.map(function (_a, i) {
            var title = _a.title, methodType = _a.methodType, url = _a.url, action = _a.action, className = _a.className, style = _a.style, isDisabled = _a.isDisabled, rest = __rest(_a, ["title", "methodType", "url", "action", "className", "style", "isDisabled"]);
            return methodType === 'url' && !!!isDisabled ? React.createElement("a", __assign({ href: url, className: btnElement + " " + aLinkWidthFix + " " + className, style: style, target: '_blank', key: i }, rest), title) : React.createElement("button", __assign({ disabled: isDisabled, className: btnElement + " " + className, style: style, onClick: action, key: i }, rest), title);
        })),
        (showRepliedBy || !!msgTime) && (React.createElement("p", { className: "" + msgTimeClass },
            !!msgTime && React.createElement(React.Fragment, null,
                msgTime,
                " \u00A0 "),
            ' ',
            showRepliedBy && React.createElement(React.Fragment, null,
                "\u2022 \u00A0 ",
                repliedBy)))));
};
QuickReplyMessage.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    text: PropTypes.string,
    msgTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    repliedBy: PropTypes.string,
    showRepliedBy: PropTypes.bool,
    buttonData: PropTypes.any
};
QuickReplyMessage.defaultProps = {
    style: {},
    className: '',
    text: '',
    showRepliedBy: false,
};
export default QuickReplyMessage;
//# sourceMappingURL=index.js.map