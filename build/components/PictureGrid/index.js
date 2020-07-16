import * as React from 'react';
import { css } from 'glamor';
var photoGrid = css({
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gridAutoRows: '240px',
});
var card = css({
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
});
var cardElement = css({
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    transition: 'all 0.2s ease-in',
    position: 'relative',
    ':hover': {
        transform: 'scale(1.1)',
    },
});
var cardTall = css({
    '@media(min-width: 600px)': {
        gridRow: 'span 2 / auto',
    },
});
var cardWide = css({
    '@media(min-width: 600px)': {
        gridColumn: 'span 2 / auto',
    },
});
var cardDetails = css({
    position: 'absolute',
    bottom: '0',
    background: 'rgba(0,0,0,0.3)',
    width: '100%',
    padding: '5px 15px',
});
var title = css({
    color: 'white',
    marginBottom: '0 !important',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    textTransform: 'capitalize',
    textAlign: 'left',
});
var description = css({
    color: 'rgb(201, 201, 201)',
    marginTop: '3px !important',
    fontWeight: 'normal',
    fontSize: '0.9rem',
    textAlign: 'left',
});
var noData = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    minHeight: '400px',
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
var imageInfoStyle = css({
    width: '100%',
});
var imageInfoStyleTitle = css({
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    width: '60%',
    margin: '10px auto 0',
});
var imageInfoStyleDescription = css({
    color: 'grey',
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: '0.7rem',
    width: '60%',
    margin: '5px auto 0',
});
var closeOnClickStyle = css({
    background: 'transparent',
    height: '100%',
    width: '100%',
    position: 'fixed',
    zIndex: 1,
});
var generatePatternClass = function (pattern, index) {
    if (pattern.length > 0) {
        var currentPattern = pattern[index % pattern.length];
        switch (currentPattern) {
            case 'big':
                return card + " " + cardTall + " " + cardWide;
            case 'tall':
                return card + " " + cardTall;
            case 'wide':
                return card + " " + cardWide;
            case 'small':
            default:
                return "" + card;
        }
    }
    return "" + card;
};
var PictureGrid = function (_a) {
    var data = _a.data, showTitle = _a.showTitle, showPreview = _a.showPreview, gap = _a.gap, className = _a.className, imageClass = _a.imageClass, backDropColor = _a.backDropColor, showImageInfo = _a.showImageInfo, showImageCount = _a.showImageCount, closeOnClick = _a.closeOnClick, pattern = _a.pattern;
    var _b = React.useState(-1), currentImage = _b[0], setCurrentImage = _b[1];
    var _c = React.useState(false), isShown = _c[0], setIsShown = _c[1];
    return (React.createElement("div", { className: photoGrid + " " + className, style: isShown
            ? { gap: gap + "px", height: '100vh', overflow: 'hidden' }
            : { gap: gap + "px" } },
        !!data && data.length === 0 && (React.createElement("div", { className: "" + noData }, " No Image Provided")),
        !!data &&
            data.length > 0 &&
            data.map(function (grid, i) { return (React.createElement("div", { key: i, className: "" + (!!pattern ? generatePatternClass(pattern, i) : []) },
                React.createElement("div", { className: cardElement + " " + imageClass, onClick: function () {
                        if (showPreview) {
                            setCurrentImage(i);
                            setIsShown(true);
                        }
                    }, style: {
                        backgroundImage: "url('" + (!!grid.image
                            ? grid.image
                            : 'https://i.ibb.co/rkCBGSG/Artboard-1.png') + "')",
                    } }),
                showTitle && (React.createElement("div", { className: "" + cardDetails },
                    React.createElement("p", { className: "" + title }, grid.title || 'Title'),
                    React.createElement("p", { className: "" + description }, grid.description || 'Description'))))); }),
        isShown && currentImage >= 0 && (React.createElement("div", { className: "" + imageViewerStyle, style: { background: "" + backDropColor } },
            React.createElement("img", { className: "" + imagePreview, src: (!!data && data[currentImage].image) ||
                    'https://i.ibb.co/rkCBGSG/Artboard-1.png', alt: 'image-preview' }),
            showImageInfo && (React.createElement("div", { className: "" + imageInfoStyle },
                React.createElement("p", { className: "" + imageInfoStyleTitle }, !!data && (data[currentImage].title || 'No Titile Available')),
                React.createElement("p", { className: "" + imageInfoStyleDescription }, !!data &&
                    (data[currentImage].description ||
                        'No Description Available')),
                showImageCount && (React.createElement("p", { className: "" + imageInfoStyleDescription }, !!data && "( " + (currentImage + 1) + " of " + data.length + " )")))),
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
                    var max = ((_a = data) === null || _a === void 0 ? void 0 : _a.length) || 0;
                    if (currentImage < max - 1) {
                        setCurrentImage(currentImage + 1);
                    }
                }, role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512', className: "" + arrowRight },
                React.createElement("g", null,
                    React.createElement("path", { fill: 'rgba(255,255,255,0.5)', d: 'M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-83.82 232L182.29 380.65c-8.22 7.16-22.29 2.09-22.29-8V139.4c0-10.14 14.06-15.21 22.29-8.05L316.18 248a10.38 10.38 0 0 1 0 16z' }),
                    React.createElement("path", { fill: 'rgba(255,255,255,0.9)', d: 'M316.18 264L182.29 380.65c-8.22 7.16-22.29 2.09-22.29-8V139.4c0-10.14 14.07-15.21 22.29-8.05L316.18 248a10.38 10.38 0 0 1 0 16z' }))),
            React.createElement("div", { onClick: function () {
                    if (closeOnClick) {
                        setIsShown(false);
                        setCurrentImage(-1);
                    }
                }, className: "" + closeOnClickStyle })))));
};
PictureGrid.defaultProps = {
    data: [],
    showTitle: false,
    showPreview: false,
    gap: 5,
    className: '',
    imageClass: '',
    backDropColor: 'rgba(0, 0, 0, 0.8)',
    pattern: ['big', 'tall', 'small', 'small', 'wide', 'wide'],
};
export default PictureGrid;
//# sourceMappingURL=index.js.map