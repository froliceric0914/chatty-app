Chatty-app Project
=====================

Chatty allows users to communicate with each other without having to register accounts. It uses React, a popular front-end library created and used heavily by Facebook as well as modern tools for Node including Webpack and Babel.

### Final Product
!["chart-room"](https://github.com/vivienfan/chatty-app/blob/master/documents/screen_shot.jpg?raw=true)
* When any connected user sends a chat message, all connected users receive and display the message
* When any connected user changes their name, all connected users are notified of the name change
* Notifications are styled differently from chat messages
* Header will display the count of connected users
* When the number of connected users changes, this count will be updated for all connected users
* User can paste any number of url links ends with jpg, png, gif in a the message to display images in the chat
* Different users' names will each be coloured differently, and the color stays then same even if they change theirm name. 

### Usage

clone this repository, as well as [chattty-app-server](https://github.com/vivienfan/chattty-app-server)

Install the dependencies and start for both chatty-app and chattty-app-server.

```
npm install
npm start
```
then open the broswer and go to

```
http://localhost:3000
```

### Dependencies

* react
* react-dom
* webpack
* webpack-dev-server
* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-react
* babel-preset-stage-0
* css-loader
* eslint
* eslint-plugin-react
* node-sass
* sass-loader
* sockjs-client
* style-loader
