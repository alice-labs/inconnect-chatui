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
var AvatarContainer = function (_a) {
    var userType = _a.userType, consumer = _a.consumer, avatar = _a.avatar, children = _a.children;
    return avatar ? (React.createElement("div", { style: {
            width: '100%',
            display: 'flex',
            flexDirection: consumer === 'user'
                ? userType === 'user'
                    ? 'row-reverse'
                    : 'row'
                : userType === 'user'
                    ? 'row'
                    : 'row-reverse',
        } },
        typeof avatar === 'string' ? (React.createElement("img", { style: consumer === 'user'
                ? userType === 'user'
                    ? {
                        width: '25px',
                        height: '25px',
                        borderRadius: '50px',
                        objectFit: 'cover',
                        marginLeft: '5px',
                    }
                    : {
                        width: '25px',
                        height: '25px',
                        borderRadius: '50px',
                        objectFit: 'cover',
                        marginRight: '5px',
                    }
                : userType === 'user'
                    ? {
                        width: '25px',
                        height: '25px',
                        borderRadius: '50px',
                        objectFit: 'cover',
                        marginRight: '5px',
                    }
                    : {
                        width: '25px',
                        height: '25px',
                        borderRadius: '50px',
                        objectFit: 'cover',
                        marginLeft: '5px',
                    }, src: avatar, alt: 'Avatar' })) : (React.createElement("span", { style: __assign({ width: '25px', height: '25px' }, (consumer === 'user'
                ? userType === 'user'
                    ? { marginLeft: '5px' }
                    : { marginRight: '5px' }
                : userType === 'user'
                    ? { marginRight: '5px' }
                    : { marginLeft: '5px' })) }, avatar)),
        children)) : (React.createElement(React.Fragment, null, children));
};
export default AvatarContainer;
//# sourceMappingURL=AvatarContainer.js.map