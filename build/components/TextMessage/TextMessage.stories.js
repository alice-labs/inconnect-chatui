import * as React from 'react';
import TextMessage from './index';
import { withInfo } from '@storybook/addon-info';
import { css } from 'glamor';
var changeStyle = css({
    background: 'green',
});
var styleOfStoryContainer = {
    border: '1px solid #184D47',
    borderRadius: '10px',
    margin: '0 auto',
    width: '90%',
    padding: 20,
};
export default { title: 'TextMessage', decorators: [withInfo] };
export var ExampleAdmin = function () { return (React.createElement("div", { style: styleOfStoryContainer },
    React.createElement(TextMessage, { userType: 'user', text: 'hello admin', consumer: 'admin', msgTime: '4h ago', avatar: React.createElement("svg", { viewBox: '0 0 512 512', xmlns: 'http://www.w3.org/2000/svg' },
            React.createElement("path", { d: 'm440 409.417969v17.996093c0 4.257813-1.695312 8.347657-4.734375 11.324219-11.097656 10.890625-23.179687 20.773438-36.105469 29.507813-2.464844 1.667968-5.679687 1.757812-8.203125.1875-39.183593-24.359375-85.425781-38.433594-134.957031-38.433594-49.078125 0-94.925781 13.820312-133.878906 37.769531-3.191406 1.960938-7.242188 1.875-10.335938-.242187-12.632812-8.625-24.445312-18.359375-35.3125-29.050782-4.113281-4.046874-6.472656-9.546874-6.472656-15.320312v-15.910156c0-20.570313-16.675781-37.246094-37.246094-37.246094-3.722656 0-7.109375-2.148438-8.691406-5.515625-15.433594-32.9375-24.0625-69.703125-24.0625-108.484375 0-141.285156 114.457031-255.839844 255.707031-256 141.34375-.160156 256.632813 115.28125 256.292969 256.628906-.09375 38.617188-8.742188 75.21875-24.144531 108.019532-1.535157 3.269531-4.828125 5.351562-8.4375 5.351562-21.769531 0-39.417969 17.648438-39.417969 39.417969zm0 0', fill: '#fded32' }),
            React.createElement("path", { d: 'm296 270c0 22.089844-17.910156 40-40 40s-40-17.910156-40-40 17.910156-40 40-40 40 17.910156 40 40zm0 0', fill: '#0995a3' }),
            React.createElement("path", { d: 'm350 20c0 11.046875-8.953125 20-20 20-6.589844 0-12.417969-3.203125-16.0625-8.117188-30.878906 7.28125-53.9375 35.046876-53.9375 68.117188h-20c0-43.371094 30.839844-79.675781 71.742188-88.136719 3.117187-6.984375 10.113281-11.863281 18.257812-11.863281 11.046875 0 20 8.953125 20 20zm0 0', fill: '#013f69' }),
            React.createElement("path", { d: 'm333 5c5.523438 0 10 4.476562 10 10s-4.476562 10-10 10-10-4.476562-10-10 4.476562-10 10-10zm0 0', fill: '#015081' }),
            React.createElement("path", { d: 'm350 275.332031h-190c-55.226562 0-100-44.769531-100-100v-10c0-55.226562 44.773438-100 100-100h190c55.226562 0 100 44.773438 100 100v10c0 55.230469-44.773438 100-100 100zm137.988281 89.015625c-13.074219 27.945313-31.042969 53.132813-52.808593 74.46875l-33.890626-33.886718c-.355468-.355469-.695312-.722657-1.035156-1.085938v46.15625c0 6.390625-.605468 12.636719-1.75 18.691406-40.734375 27.347656-89.753906 43.308594-142.503906 43.308594-53.617188 0-103.375-16.492188-144.5-44.667969-.984375-5.632812-1.5-11.421875-1.5-17.332031v-44.359375l-33.179688 33.175781c-21.765624-21.335937-39.734374-46.523437-52.808593-74.46875l23.058593-23.058594c9.011719-9.007812 21.25-12.8125 32.992188-11.425781 1.136719-21.074219 18.582031-37.8125 39.9375-37.8125 16.207031 0 30.148438 9.640625 36.433594 23.496094 15.488281-9.84375 33.859375-15.546875 53.566406-15.546875h90.257812c23.101563 0 44.371094 7.839844 61.300782 20.996094 4.800781-16.714844 20.1875-28.945313 38.441406-28.945313 21.308594 0 38.71875 16.660157 39.925781 37.667969 9.117188.746094 18.027344 4.59375 25.003907 11.570312zm0 0', fill: '#0cabb9' }),
            React.createElement("path", { d: 'm199 275.332031c-55.230469 0-100-44.769531-100-100v-10c0-55.226562 44.769531-100 100-100h151c55.230469 0 100 44.773438 100 100v10c0 55.230469-44.769531 100-100 100zm-79 96.71875c-14.683594 0-27.515625-7.921875-34.472656-19.714843-6.3125 1.804687-12.269532 5.191406-17.242188 10.167968l-29.308594 29.308594c10.75 17.136719 23.46875 32.910156 37.84375 47.003906l33.890626-33.886718c8.996093-8.996094 12.808593-21.210938 11.441406-32.941407-.714844.039063-1.429688.0625-2.152344.0625zm344.929688-30.761719c-6.976563-6.976562-15.886719-10.832031-25.003907-11.578124.046875.773437.074219 1.550781.074219 2.339843 0 17.378907-11.089844 32.167969-26.578125 37.683594 1.945313 5.097656 4.972656 9.875 9.082031 13.980469l32.859375 32.863281c12.863281-15.949219 23.847657-33.46875 32.625-52.230469zm-104.929688-9.238281c0-4.007812.597656-7.875 1.691406-11.523437-16.828125-12.875-37.867187-20.527344-60.691406-20.527344h-51c-55.230469 0-100 44.769531-100 100v50c0 15.515625 3.535156 30.203125 9.839844 43.304688 29.691406 12.046874 62.144531 18.695312 96.160156 18.695312 53.117188 0 102.457031-16.179688 143.355469-43.875 1.078125-5.878906 1.644531-11.9375 1.644531-18.125v-50c0-9.746094-1.402344-19.167969-4-28.074219-20.6875-1.535156-37-18.796875-37-39.875zm0 0', fill: '#2abbc7' }),
            React.createElement("path", { d: 'm342 195.332031h-172c-24.851562 0-45-20.144531-45-45 0-24.851562 20.148438-45 45-45h172c24.851562 0 45 20.148438 45 45 0 24.855469-20.148438 45-45 45zm0 0', fill: '#013f69' }),
            React.createElement("path", { d: 'm342 195.332031h-147c-24.851562 0-45-20.144531-45-45 0-24.851562 20.148438-45 45-45h147c24.851562 0 45 20.148438 45 45 0 24.855469-20.148438 45-45 45zm0 0', fill: '#015081' }),
            React.createElement("path", { d: 'm195 125.332031c-13.808594 0-25 11.195313-25 25 0 13.808594 11.191406 25 25 25s25-11.191406 25-25c0-13.804687-11.191406-25-25-25zm0 35c-5.523438 0-10-4.476562-10-10 0-5.523437 4.476562-10 10-10s10 4.476563 10 10c0 5.523438-4.476562 10-10 10zm120-35c-13.808594 0-25 11.195313-25 25 0 13.808594 11.191406 25 25 25s25-11.191406 25-25c0-13.804687-11.191406-25-25-25zm0 35c-5.523438 0-10-4.476562-10-10 0-5.523437 4.476562-10 10-10s10 4.476563 10 10c0 5.523438-4.476562 10-10 10zm0 0', fill: '#84deea' }),
            React.createElement("path", { d: 'm140 332.050781c0 11.042969-8.953125 20-20 20s-20-8.957031-20-20c0-11.046875 8.953125-20 20-20s20 8.953125 20 20zm260-20c-11.046875 0-20 8.953125-20 20 0 11.042969 8.953125 20 20 20s20-8.957031 20-20c0-11.046875-8.953125-20-20-20zm0 0', fill: '#84deea' }),
            React.createElement("path", { d: 'm140 332.050781c0 8.390625-5.171875 15.5625-12.5 18.53125-3.609375-1.464843-6.691406-3.953125-8.894531-7.101562-.753907-1.082031.039062-2.519531 1.363281-2.515625h.03125c5.195312 0 9.355469-4.445313 8.882812-9.738282-.335937-3.726562-3.074218-6.914062-6.703124-7.824218-.761719-.191406-1.507813-.273438-2.234376-.269532-1.3125.007813-2.089843-1.4375-1.339843-2.511718 2.203125-3.152344 5.285156-5.640625 8.898437-7.105469 7.324219 2.96875 12.496094 10.140625 12.496094 18.535156zm267.5-18.535156c-3.613281 1.464844-6.695312 3.953125-8.894531 7.105469-.753907 1.074218.027343 2.519531 1.335937 2.511718.726563-.003906 1.476563.082032 2.238282.269532 3.628906.910156 6.367187 4.097656 6.699218 7.824218.476563 5.292969-3.683594 9.738282-8.878906 9.738282-.011719 0-.023438 0-.035156 0-1.320313-.003906-2.117188 1.433594-1.359375 2.515625 2.199219 3.152343 5.28125 5.640625 8.894531 7.101562 7.324219-2.96875 12.5-10.140625 12.5-18.53125s-5.171875-15.566406-12.5-18.535156zm0 0', fill: '#d3f1f5' }),
            React.createElement("path", { d: 'm330 330c5.523438 0 10 4.476562 10 10s-4.476562 10-10 10-10-4.476562-10-10 4.476562-10 10-10zm-40 10c0 5.523438 4.476562 10 10 10s10-4.476562 10-10-4.476562-10-10-10-10 4.476562-10 10zm0 0', fill: '#0995a3' }),
            React.createElement("path", { d: 'm270 330c5.523438 0 10 4.476562 10 10s-4.476562 10-10 10-10-4.476562-10-10 4.476562-10 10-10zm0 0', fill: '#84deea' })) }),
    React.createElement(TextMessage, { userType: 'admin', text: 'How Can we help you?', consumer: 'admin', msgTime: '3h ago', showInfo: false, avatar: 'https://misx-assets.s3-ap-southeast-1.amazonaws.com/robot.svg' }),
    React.createElement(TextMessage, { userType: 'admin', elementClassName: "" + changeStyle, text: 'Please Fix payment issue', consumer: 'admin', msgTime: '3h ago', showRepliedBy: true, repliedBy: 'John Doe', showInfo: true, avatar: 'https://misx-assets.s3-ap-southeast-1.amazonaws.com/robot.svg' }),
    React.createElement(TextMessage, { userType: 'user', consumer: 'admin', elementStyle: { background: 'orange', color: 'white' }, text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cice', avatar: 'https://misx-assets.s3-ap-southeast-1.amazonaws.com/robot.svg' }))); };
export var ExampleUser = function () { return (React.createElement("div", { style: styleOfStoryContainer },
    React.createElement(TextMessage, { userType: 'user', text: 'hello admin', consumer: 'user', msgTime: '4h ago' }),
    React.createElement(TextMessage, { userType: 'admin', text: 'How Can we help you?', consumer: 'user', msgTime: '3h ago' }),
    React.createElement(TextMessage, { userType: 'admin', text: 'Please Fix payment issue', consumer: 'user', msgTime: '3h ago', showRepliedBy: true, repliedBy: 'John Doe' }),
    React.createElement(TextMessage, { userType: 'user', consumer: 'user', text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cice' }))); };
ExampleAdmin.story = {
    parameters: {
        info: {
            inline: true,
            text: "This is for simple text chat",
        },
    },
};
ExampleUser.story = {
    parameters: {
        info: {
            inline: true,
            text: "This is for simple text chat",
        },
    },
};
//# sourceMappingURL=TextMessage.stories.js.map