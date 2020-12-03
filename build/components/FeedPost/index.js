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
    position: 'relative',
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
    position: 'relative',
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
    margin: '5px 0 0 0',
    color: '#91999d',
    textTransform: 'capitalize',
});
var postContentStyle = css({
    marginTop: 20,
    paddingBottom: 30,
    borderBottom: '0.5px solid #DFE8F0',
    marginBottom: 10,
});
var replyContentText = css({
    marginTop: 5,
    marginBottom: 5,
});
var replyContentNote = css({
    background: '#feefc3',
    padding: '10px 15px',
    marginTop: 10,
    width: 'fit-content',
    borderRadius: '0.88rem',
    transform: 'translateX(-5px)',
    color: '#333',
    marginBottom: 5,
});
var replyContentImage = css({
    borderRadius: 5,
    width: '20rem',
    marginTop: 10,
    marginBottom: 5,
});
var linkStyle = css({
    textDecoration: 'none',
    color: '#184D47',
    ':hover': {
        textDecoration: 'underline',
    },
});
var flexWrapContainer = css({
    display: 'flex',
    flexWrap: 'wrap',
});
var imageHolder = css({
    width: 'calc(50% - 20px)',
    borderRadius: 10,
    margin: 10,
    '@media(max-width: 400px)': {
        maxWidth: '100%',
    },
});
var highLighted = css({
    background: 'rgba(0, 123, 101, 0.19)',
    borderRadius: '3px',
    fontSize: '0.7rem',
    padding: '5px 10px',
    color: '#184d47',
    textTransform: 'uppercase',
    position: 'absolute',
    right: '16px',
    top: '8px',
});
var moreButton = css({
    background: '#f2f2f2',
    borderRadius: 20,
    marginLeft: 10,
    cursor: 'pointer',
    padding: 5,
    ':hover': {
        background: '#dcdcdc',
    },
});
var moreButtonContainer = css({
    background: 'white',
    borderRadius: 5,
    boxShadow: '0px 0px 8px #90909066',
    marginTop: 5,
    position: 'absolute',
    zIndex: 999,
    width: 100,
});
var moreButtonElement = css({
    padding: '5px 10px',
    margin: 3,
    cursor: 'pointer',
    fontSize: 12,
    textAlign: 'left',
    textTransform: 'uppercase',
    ':hover': {
        background: '#E9E9E9',
    },
});
var FeedPost = function (_a) {
    var style = _a.style, className = _a.className, note = _a.note, msgTime = _a.msgTime, takenBy = _a.takenBy, postAvatar = _a.postAvatar, postName = _a.postName, postTime = _a.postTime, content = _a.content, contentType = _a.contentType, replyContent = _a.replyContent, pageLink = _a.pageLink, commentData = _a.commentData, contentItem = _a.contentItem, commentBg = _a.commentBg, showAction = _a.showAction, handleDelete = _a.handleDelete, handleEdit = _a.handleEdit, handleHide = _a.handleHide, closeOnActionClick = _a.closeOnActionClick, moreButtonHeightWidth = _a.moreButtonHeightWidth, handleCommentDelete = _a.handleCommentDelete, handleCommentHide = _a.handleCommentHide, showCommentAction = _a.showCommentAction, status = _a.status, rest = __rest(_a, ["style", "className", "note", "msgTime", "takenBy", "postAvatar", "postName", "postTime", "content", "contentType", "replyContent", "pageLink", "commentData", "contentItem", "commentBg", "showAction", "handleDelete", "handleEdit", "handleHide", "closeOnActionClick", "moreButtonHeightWidth", "handleCommentDelete", "handleCommentHide", "showCommentAction", "status"]);
    var statustoExcludeAction = ['note', 'hide', 'deleted'];
    var getContents = function () {
        switch (contentType) {
            case 'text':
                return content;
            case 'video':
                return (React.createElement(React.Fragment, null,
                    React.createElement("p", null, content),
                    !!contentItem && (React.createElement("video", { controls: true, style: { width: '100%', maxWidth: 650 } },
                        React.createElement("source", { src: contentItem, type: 'video/mp4' }),
                        "Your browser does not support HTML video."))));
            case 'image':
                return (React.createElement(React.Fragment, null,
                    React.createElement("p", null, content),
                    React.createElement("div", { className: "" + flexWrapContainer }, !!contentItem &&
                        contentItem.map(function (elem, index) { return (React.createElement("img", { src: elem, className: "" + imageHolder, alt: index + '', key: index, width: 'fit-content' })); }))));
            default:
                return 'No contentType matched';
        }
    };
    var getReplyContent = function (reply) {
        switch (reply.contentType) {
            case 'text':
                return (React.createElement("p", { className: "" + replyContentText, style: reply.status === 'deleted'
                        ? { textDecoration: 'line-through' }
                        : {} }, reply.content));
            case 'note':
                return React.createElement("div", { className: "" + replyContentNote }, reply.content);
            case 'image':
                return (React.createElement("img", { className: "" + replyContentImage, src: reply.content, alt: 'image-note' }));
            default:
                return 'No contentType matched';
        }
    };
    var _b = React.useState(null), showPopover = _b[0], setShowPopover = _b[1];
    return (React.createElement("div", __assign({ style: __assign({}, style), className: feedContainer + " " + className }, rest),
        React.createElement("div", { className: "" + feedPostContainer },
            React.createElement("div", { className: "" + postInfoContainer },
                React.createElement("img", { src: postAvatar, className: "" + avatarStyle }),
                React.createElement("div", { style: { marginLeft: 10, flex: 10 } },
                    !!pageLink ? (React.createElement("a", { href: pageLink, className: "" + linkStyle, target: '_blank', rel: 'noreferrer noopener' },
                        React.createElement("p", { className: "" + postNameStyle }, postName))) : (React.createElement("p", { className: "" + postNameStyle }, postName)),
                    React.createElement("p", { className: "" + postTimeStyle }, postTime))),
            React.createElement("div", { className: "" + postContentStyle }, getContents()),
            React.createElement("div", { className: "" + commentInfoContainer, key: 'reply-comment' },
                React.createElement("img", { src: commentData.avatar, className: "" + avatarSmallStyle }),
                React.createElement("div", { style: {
                        marginLeft: 10,
                        flex: 10,
                        display: 'flex',
                        alignItems: 'center',
                    } },
                    React.createElement("div", { style: {
                            maxWidth: '70%',
                            marginBottom: 8,
                            opacity: commentData.status === 'hide' ? 0.5 : 1,
                        } },
                        React.createElement("div", { style: {
                                background: contentType !== 'note' ? commentBg : 'transparent',
                                padding: '10px 30px 10px 20px',
                                borderRadius: 5,
                            } },
                            !!commentData.link ? (React.createElement("a", { href: commentData.link, className: "" + linkStyle, target: '_blank', rel: 'noreferrer noopener' },
                                React.createElement("p", { className: "" + postNameStyle }, commentData.name))) : (React.createElement("p", { className: "" + postNameStyle }, commentData.name)),
                            commentData.isHighlighted && (React.createElement("span", { className: "" + highLighted }, "Highlighted")),
                            getReplyContent(commentData)),
                        React.createElement("p", { className: "" + postTimeStyle }, commentData.time)),
                    showCommentAction &&
                        statustoExcludeAction.includes("" + commentData.status) ===
                            false &&
                        contentType !== 'note' && (React.createElement("div", { style: { position: 'relative' } },
                        React.createElement("div", { className: "" + moreButton, style: {
                                height: moreButtonHeightWidth,
                                width: moreButtonHeightWidth,
                            }, onClick: function () {
                                if (commentData.id + '-comment' === showPopover) {
                                    setShowPopover(null);
                                }
                                else {
                                    setShowPopover(commentData.id + '-comment');
                                }
                            } },
                            React.createElement("svg", { "data-icon": 'more', viewBox: '0 0 16 16', className: 'ub-w_16px ub-h_16px ub-box-szg_border-box', style: { fill: 'rgb(102, 120, 138)' } },
                                React.createElement("path", { d: 'M2 6.03a2 2 0 100 4 2 2 0 100-4zM14 6.03a2 2 0 100 4 2 2 0 100-4zM8 6.03a2 2 0 100 4 2 2 0 100-4z', fillRule: 'evenodd' }))),
                        showPopover === commentData.id + '-comment' && (React.createElement("div", { className: "" + moreButtonContainer },
                            React.createElement("div", { onClick: function () {
                                    if (!!handleCommentHide) {
                                        handleCommentHide(commentData);
                                        if (closeOnActionClick) {
                                            setShowPopover(null);
                                        }
                                    }
                                }, className: "" + moreButtonElement }, "Hide"),
                            React.createElement("div", { onClick: function () {
                                    if (!!handleCommentDelete) {
                                        handleCommentDelete(commentData);
                                        if (closeOnActionClick) {
                                            setShowPopover(null);
                                        }
                                    }
                                }, className: "" + moreButtonElement }, "Delete"))))))),
            replyContent.map(function (reply, i) { return (React.createElement("div", { className: "" + replyInfoContainer, key: i },
                React.createElement("img", { src: reply.avatar, className: "" + avatarSmallStyle }),
                React.createElement("div", { style: {
                        marginLeft: 10,
                        flex: 10,
                        display: 'flex',
                        alignItems: 'center',
                    } },
                    React.createElement("div", { style: {
                            maxWidth: '70%',
                            marginBottom: 8,
                            opacity: reply.status === 'hide' ? 0.5 : 1,
                            cursor: reply.status === 'hide' ? 'not-allowed' : 'default',
                        } },
                        React.createElement("div", { style: reply.contentType === 'note'
                                ? {
                                    background: reply.contentType !== 'note'
                                        ? commentBg
                                        : 'transparent',
                                    padding: '10px 30px 10px 5px',
                                    borderRadius: 5,
                                }
                                : {
                                    background: reply.contentType !== 'note'
                                        ? commentBg
                                        : 'transparent',
                                    padding: '10px 30px 10px 20px',
                                    borderRadius: 5,
                                } },
                            !!reply.link ? (React.createElement("a", { href: reply.link, className: "" + linkStyle, target: '_blank', rel: 'noreferrer noopener' },
                                React.createElement("p", { className: "" + postNameStyle }, reply.name))) : (React.createElement("p", { className: "" + postNameStyle }, reply.name)),
                            !!reply.isHighlighted && (React.createElement("span", { className: "" + highLighted }, "Highlighted")),
                            getReplyContent(reply)),
                        React.createElement("p", { className: "" + postTimeStyle, style: reply.contentType === 'note'
                                ? { margin: '-10px 0 0 10px' }
                                : {} },
                            reply.time,
                            ' ',
                            !!reply.messageType && React.createElement("span", null,
                                " \u2022 ",
                                reply.messageType),
                            !!reply.status && reply.status === 'edited' && (React.createElement("span", null,
                                " \u2022 ",
                                reply.status)))),
                    showAction &&
                        statustoExcludeAction.includes("" + reply.status) === false &&
                        reply.contentType !== 'note' && (React.createElement("div", { style: { position: 'relative' } },
                        React.createElement("div", { className: "" + moreButton, style: {
                                height: moreButtonHeightWidth,
                                width: moreButtonHeightWidth,
                            }, onClick: function () {
                                if (reply.id === showPopover) {
                                    setShowPopover(null);
                                }
                                else {
                                    setShowPopover(reply.id);
                                }
                            } },
                            React.createElement("svg", { "data-icon": 'more', viewBox: '0 0 16 16', className: 'ub-w_16px ub-h_16px ub-box-szg_border-box', style: { fill: 'rgb(102, 120, 138)' } },
                                React.createElement("path", { d: 'M2 6.03a2 2 0 100 4 2 2 0 100-4zM14 6.03a2 2 0 100 4 2 2 0 100-4zM8 6.03a2 2 0 100 4 2 2 0 100-4z', fillRule: 'evenodd' }))),
                        showPopover === reply.id && (React.createElement("div", { className: "" + moreButtonContainer },
                            React.createElement("div", { onClick: function () {
                                    if (!!handleEdit) {
                                        handleEdit(reply);
                                        if (closeOnActionClick) {
                                            setShowPopover(null);
                                        }
                                    }
                                }, className: "" + moreButtonElement }, "Edit"),
                            React.createElement("div", { onClick: function () {
                                    if (!!handleDelete) {
                                        handleDelete(reply);
                                        if (closeOnActionClick) {
                                            setShowPopover(null);
                                        }
                                    }
                                }, className: "" + moreButtonElement }, "Delete"),
                            React.createElement("div", { onClick: function () {
                                    if (!!handleHide) {
                                        handleHide(reply);
                                        if (closeOnActionClick) {
                                            setShowPopover(null);
                                        }
                                    }
                                }, className: "" + moreButtonElement }, "Hide")))))))); }))));
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
    contentItem: PropTypes.any,
    commentBg: PropTypes.string,
    showAction: PropTypes.bool,
    handleDelete: PropTypes.func,
    handleHide: PropTypes.func,
    handleEdit: PropTypes.func,
    closeOnActionClick: PropTypes.bool,
    moreButtonHeightWidth: PropTypes.number,
    handleCommentDelete: PropTypes.func,
    handleCommentHide: PropTypes.func,
    showCommentAction: PropTypes.bool,
};
FeedPost.defaultProps = {
    style: {},
    className: '',
    contentType: 'text',
    replyContent: [],
    commentBg: '#f2f2f2',
    showAction: false,
    closeOnActionClick: true,
    status: 'add',
    moreButtonHeightWidth: 15,
    showCommentAction: false,
    handleDelete: function () {
        console.log('delete button clicked');
    },
    handleHide: function () {
        console.log('hide button clicked');
    },
    handleEdit: function () {
        console.log('edit button clicked');
    },
    handleCommentDelete: function () {
        console.log('Comment Delete button clicked');
    },
    handleCommentHide: function () {
        console.log('Comment Hide button clicked');
    },
};
export default FeedPost;
//# sourceMappingURL=index.js.map