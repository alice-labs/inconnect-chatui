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
    React.createElement(GalleryMessage, { text: 'hello user this are our product list', msgTime: '4h ago', consumer: 'user', hasTitle: true, avatar: 'https://misx-assets.s3-ap-southeast-1.amazonaws.com/robot.svg', galleryData: [{
                id: 0,
                title: 'Pureit Mineral Ultima RO + UV',
                subtitle: '2500$',
                image: 'https://images.unsplash.com/photo-1606830079880-e90bd08e9a98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
                buttons: [{
                        id: 1,
                        title: 'Button 01',
                        methodType: 'url',
                        url: 'https://getalice.ai',
                        isDisabled: false,
                    }, {
                        id: 2,
                        title: 'Button 02',
                        methodType: 'function',
                        action: function () { return console.log('Button 02 clicked'); },
                        isDisabled: false,
                    }, {
                        id: 3,
                        title: 'Button 03',
                        methodType: 'function',
                        action: function () { return console.log('Button 02 clicked'); },
                        isDisabled: true,
                    }]
            }, {
                id: 1,
                title: 'Random Dear Visit',
                subtitle: '150$',
                image: 'https://images.unsplash.com/photo-1606762803100-5b4833aaccc0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1633&q=80',
                buttons: [{
                        id: 1,
                        title: 'Button 01',
                        methodType: 'url',
                        url: 'https://getalice.ai',
                        isDisabled: false,
                    }, {
                        id: 2,
                        title: 'Button 02',
                        methodType: 'function',
                        action: function () { return console.log('Button 02 clicked'); },
                        isDisabled: false,
                    }, {
                        id: 3,
                        title: 'Button 03',
                        methodType: 'function',
                        action: function () { return console.log('Button 02 clicked'); },
                        isDisabled: true,
                    }]
            }] }))); };
Example.story = {
    parameters: {
        info: {
            inline: true,
            text: "Interface List\n \n   ~~~js\n    <GalleryMessage\n    style={{width: '100px'}}\n    className={'abcd'}\n    userType='user'\n    text={'hello admin'}};\n    buttonData={[{\n        title: 'Button Title',\n        methodType: 'url',\n        url: 'https://google.com',\n        className: 'some-class__name',\n        style: {{custom style pass to specific button}}\n        rest: 'any key will pass directly to button'\n     },\n    ...more\n    ]}\n    msgTime={'4h Ago'}\n    repliedBy={'Admin name'};\n    showRepliedBy={true};\n    rest={'any it wil pass to container div};\n    />\n   ~~~\n  ",
        },
    },
};
//# sourceMappingURL=GalleryMessage.stories.js.map