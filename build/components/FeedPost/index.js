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
var feedContainer = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 30,
});
var feedPostContainer = css({
    minWidth: 500,
    maxWidth: 600,
    padding: 20,
    borderRadius: 10,
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease 0s',
    background: 'white',
    ':hover': {
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.15)',
        transform: 'translateY(-3x)',
    },
});
var postInfoContainer = css({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
});
var commentInfoContainer = css({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    paddingBottom: 5,
    marginBottom: 10,
    ':not(:last-child)': {
        borderBottom: '0.5px solid #DFE8F0',
    },
});
var replyInfoContainer = css({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 'calc(100% - 50px)',
    paddingBottom: 5,
    marginBottom: 10,
    marginLeft: 50,
    ':not(:last-child)': {
        borderBottom: '0.5px solid #DFE8F0',
    },
});
var avatarStyle = css({
    width: 50,
    height: 50,
    borderRadius: 50,
    border: '1px solid rgba(0,0,0,0.08)',
});
var avatarSmallStyle = css({
    width: 40,
    height: 40,
    borderRadius: 40,
    border: '1px solid rgba(0,0,0,0.08)',
});
var postNameStyle = css({
    fontWeight: 600,
    fontSize: '1rem',
    textTransform: 'capitalize',
    margin: 0,
    color: '#184D47',
});
var postTimeStyle = css({
    fontSize: '0.7rem',
    margin: 0,
    color: '#c0cbd0',
});
var postContentStyle = css({
    marginTop: 20,
    paddingBottom: 30,
    borderBottom: '0.5px solid #DFE8F0',
    marginBottom: 10,
});
var replyContentText = css({
    marginTop: 5,
    marginBottom: '1rem',
});
var replyContentNote = css({
    background: '#feefc3',
    padding: '10px 15px',
    marginTop: 10,
    width: 'fit-content',
    borderRadius: '0.88rem',
    transform: 'translateX(-5px)',
    color: '#333',
    marginBottom: '1rem',
});
var replyContentImage = css({
    borderRadius: 5,
    width: '50%',
    marginTop: 10,
    marginBottom: '1rem',
});
var linkStyle = css({
    textDecoration: 'none',
    color: '#184D47',
    ':hover': {
        textDecoration: 'underline',
    },
});
var FeedPost = function (_a) {
    var style = _a.style, className = _a.className, note = _a.note, msgTime = _a.msgTime, takenBy = _a.takenBy, postAvatar = _a.postAvatar, postName = _a.postName, postTime = _a.postTime, content = _a.content, contentType = _a.contentType, replyContent = _a.replyContent, pageLink = _a.pageLink, commentData = _a.commentData, rest = __rest(_a, ["style", "className", "note", "msgTime", "takenBy", "postAvatar", "postName", "postTime", "content", "contentType", "replyContent", "pageLink", "commentData"]);
    var getContents = function () {
        switch (contentType) {
            case 'text':
                return content;
            default:
                return 'No contentType matched';
        }
    };
    var getReplyContent = function (reply) {
        switch (reply.contentType) {
            case 'text':
                return React.createElement("p", { className: "" + replyContentText }, reply.content);
            case 'note':
                return React.createElement("div", { className: "" + replyContentNote }, reply.content);
            case 'image':
                return React.createElement("img", { className: "" + replyContentImage, src: reply.content, alt: 'image-note' });
            default:
                return 'No contentType matched';
        }
    };
    return (React.createElement("div", __assign({ style: __assign({}, style), className: feedContainer + " " + className }, rest),
        React.createElement("div", { className: "" + feedPostContainer },
            React.createElement("div", { className: "" + postInfoContainer },
                React.createElement("img", { src: postAvatar, className: "" + avatarStyle }),
                React.createElement("div", { style: { marginLeft: 10, flex: 10 } },
                    !!pageLink ? (React.createElement("a", { href: pageLink, className: "" + linkStyle, target: '_blank', rel: 'noreferrer noopener' },
                        ' ',
                        React.createElement("p", { className: "" + postNameStyle }, postName))) : (React.createElement("p", { className: "" + postNameStyle }, postName)),
                    React.createElement("p", { className: "" + postTimeStyle }, postTime))),
            React.createElement("div", { className: "" + postContentStyle }, getContents()),
            React.createElement("div", { className: "" + commentInfoContainer, key: 'reply-comment' },
                React.createElement("img", { src: commentData.avatar, className: "" + avatarSmallStyle }),
                React.createElement("div", { style: { marginLeft: 10, flex: 10 } },
                    !!commentData.link ? (React.createElement("a", { href: commentData.link, className: "" + linkStyle, target: '_blank', rel: 'noreferrer noopener' },
                        React.createElement("p", { className: "" + postNameStyle }, commentData.name))) : (React.createElement("p", { className: "" + postNameStyle }, commentData.name)),
                    React.createElement("p", { className: "" + postTimeStyle }, commentData.time),
                    getReplyContent(commentData))),
            replyContent.map(function (reply, i) { return (React.createElement("div", { className: "" + replyInfoContainer, key: i },
                React.createElement("img", { src: reply.avatar, className: "" + avatarSmallStyle }),
                React.createElement("div", { style: { marginLeft: 10, flex: 10 } },
                    !!reply.link ? (React.createElement("a", { href: reply.link, className: "" + linkStyle, target: '_blank', rel: 'noreferrer noopener' },
                        React.createElement("p", { className: "" + postNameStyle }, reply.name))) : (React.createElement("p", { className: "" + postNameStyle }, reply.name)),
                    React.createElement("p", { className: "" + postTimeStyle }, reply.time),
                    getReplyContent(reply)))); }))));
};
FeedPost.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    postAvatar: PropTypes.string,
    postName: PropTypes.string,
    postTime: PropTypes.string,
    content: PropTypes.any,
    contentType: PropTypes.string,
    replyContent: PropTypes.any,
};
FeedPost.defaultProps = {
    style: {},
    className: '',
    contentType: 'text',
    replyContent: [],
};
export default FeedPost;
//# sourceMappingURL=index.js.map