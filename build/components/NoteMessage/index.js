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
var noteContainer = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});
var noteColor = css({
    background: '#feefc3',
    padding: '10px 30px',
    borderRadius: 16,
    textAlign: 'center',
    width: 'fit-content',
    marginBottom: 5,
    marginTop: 20,
    maxWidth: '50%',
    ':hover': {
        filter: 'brightness(0.98)',
    },
});
var noteInfo = css({
    textAlign: 'right',
    margin: '0px 0px 5px',
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    color: '#9e9067',
});
var NoteMessage = function (_a) {
    var style = _a.style, className = _a.className, note = _a.note, msgTime = _a.msgTime, takenBy = _a.takenBy, rest = __rest(_a, ["style", "className", "note", "msgTime", "takenBy"]);
    return (React.createElement("div", __assign({ style: __assign({}, style), className: noteContainer + " " + className }, rest),
        React.createElement("div", { className: "" + noteColor }, note),
        React.createElement("p", { className: "" + noteInfo },
            !!msgTime && React.createElement("span", null, msgTime),
            !!takenBy && React.createElement("span", null,
                " \u2022 ",
                takenBy))));
};
NoteMessage.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    note: PropTypes.string,
    type: PropTypes.oneOf(['user', 'admin', 'bot']),
    msgTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    takenBy: PropTypes.string,
};
NoteMessage.defaultProps = {
    style: {},
    className: '',
    note: '',
};
export default NoteMessage;
//# sourceMappingURL=index.js.map