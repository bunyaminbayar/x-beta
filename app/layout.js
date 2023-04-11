"use client"; // this is a client component 

import { useState } from 'react';
import * as React from 'react';
import './css/globals.css';
import Navbar from './components/navbar';

export default function RootLayout({ children }) {
  // User be login or no
  const [userAuth] = useState(true);

  return (
    <html lang="en">
      <head>
        <title>X Beta App</title>
        <meta name="description" content="x-beta app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar children={children} userAuth={userAuth} />
      </body>
    </html>
  )
}
