<img src="https://github.com/alice-labs/inconnect-chatui/blob/master/src/assets/inconnect_logo.png?raw=true" width="60%">

## Demo
http://chatui.dev.inconnect.ai/

[**See Demo Here**](https://inconnect.ai/component/demo)

## How to Use

Install **[inconnect-chat-ui](https://github.com/alice-labs/inconnect-chatui)** as dependency

```js
npm i inconnect-chat-ui --save
```

or if you use yarn

```js
yarn install inconnect-chat-ui
```

In your component first import

```jsx
import { TextMessage } from 'inconnect-chat-ui';
```

## API Documentation
[**See Storybook**]('http://chatui.dev.inconnect.ai/')


## Develop

Clone the repo from github

```js
$ git clone https://github.com/alice-labs/inconnect-chatui
```

Install Dependencies

```js
$ yarn install
```

Then, Run storybook

```js
$ yarn storybook
```

To run tests

```js
$ yarn test
```

## How to Contribute

Fork the repo. pull the master branch if required. [**Create a issue**](https://github.com/alice-labs/inconnect-chatui/issues) why we need this feature, then create your **feature branch** do your changes. write **test code** if required. and Send a **Pull Request** . PR's are always welcome!

## Release log

### 16 July 2020 - v 1.0.0-alpha 
- [x] Updated ChatUI Container

### 19 July 2020 - v1.0.1
- [x] Removed Container
- [x] Add TextMessage
- [x] Add NoteMessage

### 19 July 2020 - v1.0.2
- [x] Fixed Import

### 20 July 2020 - v1.0.3
- [x] Image Message
- [x] Button Message



### 21 July 2020 - v1.0.4
- [x] QuickReply Message

### 21 July 2020 - v1.0.5
- [x] Added Consumer - this is chat window from perspective of user or admin (user | admin)
- [x] Added element style and element class name for all chat bubble . using it for manual design override





