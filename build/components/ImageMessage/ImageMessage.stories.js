import * as React from 'react';
import ImageMessage from './index';
import { withInfo } from '@storybook/addon-info';
var styleOfStoryContainer = {
    border: '1px solid #184D47',
    borderRadius: '10px',
    margin: '0 auto',
    width: '90%',
    padding: 20,
};
export default { title: 'ImageMessage', decorators: [withInfo] };
export var SingleImage = function () { return (React.createElement("div", { style: styleOfStoryContainer },
    React.createElement(ImageMessage, { userType: 'admin', images: [
            'https://images.unsplash.com/photo-1519455953755-af066f52f1a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        ], msgTime: '4h ago' }),
    React.createElement(ImageMessage, { userType: 'user', text: 'With Text, 80% width', imagesWidth: '80%', images: [
            'https://images.unsplash.com/photo-1530631673369-bc20fdb32288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        ], msgTime: '4h ago', avatar: 'https://misx-assets.s3-ap-southeast-1.amazonaws.com/robot.svg' }),
    React.createElement(ImageMessage, { userType: 'admin', repliedBy: 'Ifran Hossain', showRepliedBy: true, text: 'with 200px imageWidth', imagesWidth: '200px', images: [
            'https://images.unsplash.com/photo-1487701606976-c754b54d2d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80',
        ], msgTime: '4h ago', avatar: 'https://misx-assets.s3-ap-southeast-1.amazonaws.com/robot.svg' }))); };
export var MulipleImages = function () { return (React.createElement("div", { style: styleOfStoryContainer },
    React.createElement(ImageMessage, { userType: 'user', consumer: 'user', text: 'With Text, 80% width', imagesWidth: '80%', images: [
            'https://images.unsplash.com/photo-1530631673369-bc20fdb32288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        ], msgTime: '4h ago' }),
    React.createElement(ImageMessage, { userType: 'admin', consumer: 'user', images: [
            'https://images.unsplash.com/photo-1494967990034-6a28085f9ed0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1584367369853-8b966cf223f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        ], msgTime: '4h ago', avatar: 'https://misx-assets.s3-ap-southeast-1.amazonaws.com/robot.svg' }),
    React.createElement(ImageMessage, { userType: 'user', text: 'hello', elementStyle: { background: 'teal', color: 'white' }, consumer: 'user', images: [
            'https://images.unsplash.com/photo-1595079559940-4474acea712a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
            'https://images.unsplash.com/photo-1594886801338-b81548345f77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80',
            'https://images.unsplash.com/photo-1594849044129-f3413e225441?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
            'https://images.unsplash.com/photo-1494967990034-6a28085f9ed0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1594843863977-b72cf8e3855e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        ], msgTime: '4h ago', avatar: 'https://misx-assets.s3-ap-southeast-1.amazonaws.com/robot.svg' }))); };
export var WithPreview = function () { return (React.createElement("div", { style: styleOfStoryContainer },
    React.createElement(ImageMessage, { userType: 'user', text: 'hello', consumer: 'user', showPreview: true, images: [
            'https://images.unsplash.com/photo-1595079559940-4474acea712a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
            'https://images.unsplash.com/photo-1594886801338-b81548345f77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80',
            'https://images.unsplash.com/photo-1594849044129-f3413e225441?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
            'https://images.unsplash.com/photo-1494967990034-6a28085f9ed0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1594843863977-b72cf8e3855e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        ], msgTime: '4h ago' }))); };
SingleImage.story = {
    parameters: {
        info: {
            inline: true,
            text: "This is used to show Images with proper props, need an array to pass as data",
        },
    },
};
MulipleImages.story = {
    parameters: {
        info: {
            inline: true,
            text: "This is used to show Images with proper props, need an array to pass as data",
        },
    },
};
WithPreview.story = {
    parameters: {
        info: {
            inline: true,
            text: "This is used to show Images with proper props, need an array to pass as data",
        },
    },
};
//# sourceMappingURL=ImageMessage.stories.js.map