import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const navigationItemsData = [
  {link: "profile",title: "Profile"},
  {link: "dialogs",title: "Dialogs"},
  {link: "news",title: "News"},
  {link: "music",title: "Music"},
  {link: "settings",title: "Settings"},
]
const postsData = [{ text: "Hi" }, { text: "Good" }, { text: "Well" }];
const dialogsData = [
  { id: "1", name: "Danila" },
  { id: "2", name: "Vasya" },
  { id: "3", name: "Ivan" },
  { id: "4", name: "Petya" },
];
const messagesData = [
  { text: "Hi" },
  { text: "How are you" },
  { text: "Great" },
  { text: "And You" },
];


ReactDOM.render(
    <BrowserRouter>
      <App navigationItemsData={navigationItemsData} postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
    </BrowserRouter>,
  document.getElementById('root')
);