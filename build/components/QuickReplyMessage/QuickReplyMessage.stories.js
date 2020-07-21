import * as React from 'react';
import QuickReplyMessage from './index';
import { withInfo } from '@storybook/addon-info';
var styleOfStoryContainer = {
    border: '1px solid #184D47',
    borderRadius: '10px',
    margin: '0 auto',
    width: '90%',
    padding: 20,
};
export default { title: 'QuickReplyMessage', decorators: [withInfo] };
export var Example = function () { return (React.createElement("div", { style: styleOfStoryContainer },
    React.createElement(QuickReplyMessage, { text: 'hello user this are our product list', msgTime: '4h ago', consumer: 'user', elementStyle: { background: 'red' }, buttonData: [
            {
                title: 'Button One',
                methodType: 'url',
                url: 'https://getalice.ai',
            },
            {
                title: 'Button Two',
                methodType: 'function',
                action: function () {
                    console.log('clicked on  button two');
                },
            },
            {
                title: 'Button Three',
                methodType: 'function',
                action: function () {
                    console.log('clicked on  button two');
                },
                isDisabled: false,
            },
            {
                title: 'Button Four',
                methodType: 'function',
                action: function () {
                    console.log('clicked on  button two');
                },
                isDisabled: false,
            },
        ] }),
    React.createElement(QuickReplyMessage, { text: 'hello user this are our product list', msgTime: '4h ago', consumer: 'admin', buttonData: [
            {
                title: 'Button One',
                methodType: 'url',
                url: 'https://getalice.ai',
            },
            {
                title: 'Button Two',
                methodType: 'function',
                action: function () {
                    console.log('clicked on  button two');
                },
            },
            {
                title: 'Button Three',
                methodType: 'function',
                action: function () {
                    console.log('clicked on  button two');
                },
                isDisabled: true,
            },
            {
                title: 'Button Four',
                methodType: 'function',
                action: function () {
                    console.log('clicked on  button two');
                },
                isDisabled: false,
                style: { background: 'purple', color: 'white' },
            },
        ] }))); };
Example.story = {
    parameters: {
        info: {
            inline: true,
            text: "Interface List\n \n   ~~~js\n    <QuickReplyMessage\n    style={{width: '100px'}}\n    className={'abcd'}\n    userType='user'\n    text={'hello admin'}};\n    buttonData={[{\n        title: 'Button Title',\n        methodType: 'url',\n        url: 'https://google.com',\n        className: 'some-class__name',\n        style: {{custom style pass to specific button}}\n        rest: 'any key will pass directly to button'\n     },\n    ...more\n    ]}\n    msgTime={'4h Ago'}\n    repliedBy={'Admin name'};\n    showRepliedBy={true};\n    rest={'any it wil pass to container div};\n    />\n   ~~~\n  ",
        },
    },
};
//# sourceMappingURL=QuickReplyMessage.stories.js.map