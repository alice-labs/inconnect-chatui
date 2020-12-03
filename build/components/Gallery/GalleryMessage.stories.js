import * as React from 'react';
import GalleryMessage from './index';
import { withInfo } from '@storybook/addon-info';
var styleOfStoryContainer = {
    border: '1px solid #184D47',
    borderRadius: '10px',
    margin: '0 auto',
    width: '90%',
    padding: 20,
};
export default { title: 'GalleryMessage', decorators: [withInfo] };
export var Example = function () { return (React.createElement("div", { style: styleOfStoryContainer },
    React.createElement(GalleryMessage, { text: 'Buy Some Fruits From Out Website', msgTime: '4h ago', consumer: 'user', hasTitle: true, avatar: 'https://misx-assets.s3-ap-southeast-1.amazonaws.com/robot.svg', galleryData: [
            {
                id: 0,
                title: 'Mango',
                subtitle: '2$',
                image: 'https://images-na.ssl-images-amazon.com/images/I/41EvGpCFECL._SX342_.jpg',
                buttons: [
                    {
                        id: 1,
                        title: 'Visit Website',
                        methodType: 'url',
                        url: 'https://getalice.ai',
                        isDisabled: false,
                    },
                    {
                        id: 2,
                        title: 'Buy Mango',
                        methodType: 'function',
                        action: function () { return alert('Function Triggered to Buy Mango'); },
                        isDisabled: false,
                    },
                    {
                        id: 3,
                        title: 'Buy From ChatBot',
                        methodType: 'function',
                        action: function () { return console.log('Button 02 clicked'); },
                        isDisabled: true,
                    },
                ],
            },
            {
                id: 1,
                title: 'Banana',
                subtitle: '1$',
                image: 'https://api.time.com/wp-content/uploads/2019/11/gettyimages-459761948.jpg?quality=85&w=1024&h=512&crop=1',
                buttons: [
                    {
                        id: 1,
                        title: 'Visit Website',
                        methodType: 'url',
                        url: 'https://getalice.ai',
                        isDisabled: false,
                    },
                    {
                        id: 2,
                        title: 'Buy Banana',
                        methodType: 'function',
                        action: function () { return alert('Function Triggered to Buy banana'); },
                        isDisabled: false,
                    },
                    {
                        id: 3,
                        title: 'Buy From ChatBot',
                        methodType: 'function',
                        action: function () { return console.log('Button 02 clicked'); },
                        isDisabled: true,
                    },
                ],
            },
            {
                id: 2,
                title: 'Watermelon',
                subtitle: '10$',
                image: 'https://i0.wp.com/www.eatthis.com/wp-content/uploads/2020/08/watermelon.jpg?fit=1200%2C879&ssl=1',
                buttons: [
                    {
                        id: 1,
                        title: 'Visit Website',
                        methodType: 'url',
                        url: 'https://getalice.ai',
                        isDisabled: false,
                    },
                    {
                        id: 2,
                        title: 'Buy Watermelon',
                        methodType: 'function',
                        action: function () { return alert('Function Triggered to Buy watermelon'); },
                        isDisabled: false,
                    },
                    {
                        id: 3,
                        title: 'Buy From ChatBot',
                        methodType: 'function',
                        action: function () { return console.log('Button 02 clicked'); },
                        isDisabled: true,
                    },
                ],
            },
            {
                id: 3,
                title: 'Pineapple',
                subtitle: '5$',
                image: 'https://static.toiimg.com/thumb/msid-69876233,imgsize-506233,width-800,height-600,resizemode-75/69876233.jpg',
                buttons: [
                    {
                        id: 1,
                        title: 'Visit Website',
                        methodType: 'url',
                        url: 'https://getalice.ai',
                        isDisabled: false,
                    },
                    {
                        id: 2,
                        title: 'Buy Watermelon',
                        methodType: 'function',
                        action: function () { return alert('Function Triggered to Buy watermelon'); },
                        isDisabled: false,
                    },
                    {
                        id: 3,
                        title: 'Buy From ChatBot',
                        methodType: 'function',
                        action: function () { return console.log('Button 02 clicked'); },
                        isDisabled: true,
                    },
                ],
            },
        ] }),
    React.createElement(GalleryMessage, { msgTime: '4h ago', consumer: 'admin', hasTitle: false, avatar: 'https://misx-assets.s3-ap-southeast-1.amazonaws.com/robot.svg', carouselWidth: '280px', slideToShow: 1, galleryData: [
            {
                id: 0,
                title: 'Mango',
                subtitle: '2$',
                image: 'https://images-na.ssl-images-amazon.com/images/I/41EvGpCFECL._SX342_.jpg',
                buttons: [
                    {
                        id: 1,
                        title: 'Visit Website',
                        methodType: 'url',
                        url: 'https://getalice.ai',
                        isDisabled: false,
                    },
                    {
                        id: 2,
                        title: 'Buy Mango',
                        methodType: 'function',
                        action: function () { return alert('Function Triggered to Buy Mango'); },
                        isDisabled: false,
                    },
                    {
                        id: 3,
                        title: 'Buy From ChatBot',
                        methodType: 'function',
                        action: function () { return console.log('Button 02 clicked'); },
                        isDisabled: true,
                    },
                ],
            },
            {
                id: 1,
                title: 'Banana',
                subtitle: '1$',
                image: 'https://api.time.com/wp-content/uploads/2019/11/gettyimages-459761948.jpg?quality=85&w=1024&h=512&crop=1',
                buttons: [
                    {
                        id: 1,
                        title: 'Visit Website',
                        methodType: 'url',
                        url: 'https://getalice.ai',
                        isDisabled: false,
                    },
                    {
                        id: 2,
                        title: 'Buy Banana',
                        methodType: 'function',
                        action: function () { return alert('Function Triggered to Buy banana'); },
                        isDisabled: false,
                    },
                    {
                        id: 3,
                        title: 'Buy From ChatBot',
                        methodType: 'function',
                        action: function () { return console.log('Button 02 clicked'); },
                        isDisabled: true,
                    },
                ],
            },
            {
                id: 2,
                title: 'Watermelon',
                subtitle: '10$',
                image: 'https://i0.wp.com/www.eatthis.com/wp-content/uploads/2020/08/watermelon.jpg?fit=1200%2C879&ssl=1',
                buttons: [
                    {
                        id: 1,
                        title: 'Visit Website',
                        methodType: 'url',
                        url: 'https://getalice.ai',
                        isDisabled: false,
                    },
                    {
                        id: 2,
                        title: 'Buy Watermelon',
                        methodType: 'function',
                        action: function () { return alert('Function Triggered to Buy watermelon'); },
                        isDisabled: false,
                    },
                    {
                        id: 3,
                        title: 'Buy From ChatBot',
                        methodType: 'function',
                        action: function () { return console.log('Button 02 clicked'); },
                        isDisabled: true,
                    },
                ],
            },
            {
                id: 3,
                title: 'Pineapple',
                subtitle: '5$',
                image: 'https://static.toiimg.com/thumb/msid-69876233,imgsize-506233,width-800,height-600,resizemode-75/69876233.jpg',
                buttons: [
                    {
                        id: 1,
                        title: 'Visit Website',
                        methodType: 'url',
                        url: 'https://getalice.ai',
                        isDisabled: false,
                    },
                    {
                        id: 2,
                        title: 'Buy Watermelon',
                        methodType: 'function',
                        action: function () { return alert('Function Triggered to Buy watermelon'); },
                        isDisabled: false,
                    },
                    {
                        id: 3,
                        title: 'Buy From ChatBot',
                        methodType: 'function',
                        action: function () { return console.log('Button 02 clicked'); },
                        isDisabled: true,
                    },
                ],
            },
        ] }))); };
Example.story = {
    parameters: {
        info: {
            inline: true,
            text: "Interface List\n \n   ~~~js\n    <GalleryMessage\n    style={{width: '100px'}}\n    className={'abcd'}\n    userType='user'\n    text={'hello admin'}};\n    buttonData={[{\n        title: 'Button Title',\n        methodType: 'url',\n        url: 'https://google.com',\n        className: 'some-class__name',\n        style: {{custom style pass to specific button}}\n        rest: 'any key will pass directly to button'\n     },\n    ...more\n    ]}\n    msgTime={'4h Ago'}\n    repliedBy={'Admin name'};\n    showRepliedBy={true};\n    rest={'any it wil pass to container div};\n    />\n   ~~~\n  ",
        },
    },
};
//# sourceMappingURL=GalleryMessage.stories.js.map