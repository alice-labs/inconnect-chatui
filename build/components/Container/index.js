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
import * as React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';
var flex = css({
    display: 'flex',
    flexDirection: 'column',
});
var ChatContainer = function (_a) {
    var style = _a.style, className = _a.className, children = _a.children, id = _a.id;
    return (React.createElement("div", { style: __assign({}, style), className: flex + " " + className, id: id }, children));
};
ChatContainer.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node,
    id: PropTypes.string,
};
ChatContainer.defaultProps = {
    style: {},
    className: '',
};
export default ChatContainer;
//# sourceMappingURL=index.js.map