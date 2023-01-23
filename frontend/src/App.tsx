import './App.css';

import { MantineProvider } from '@mantine/core';
import React from 'react';

import Content from './components/Content';
import { HeaderMenu } from './components/Header';

const links = [
  {
    link: '/home',
    label: 'Home',
  },
  {
    link: '#1',
    label: 'Products',
    links: [
      {
        link: '/product1',
        label: 'Product 1',
      },
      {
        link: '/product2',
        label: 'Product 2',
      },
      {
        link: '/product3',
        label: 'Product 3',
      },
      {
        link: '/product4',
        label: 'Product 4',
      },
    ],
  },
  {
    link: '/aboutus',
    label: 'About Us',
  },
];

function App() {
  return (
    <MantineProvider
      theme={{
        colors: {
          brand: [
            '#F0BBDD',
            '#ED9BCF',
            '#EC7CC3',
            '#ED5DB8',
            '#F13EAF',
            '#F71FA7',
            '#FF00A1',
            '#E00890',
            '#C50E82',
            '#AD1374',
          ],
        },
        primaryColor: 'brand',
      }}
    >
      <div className="app">
        <HeaderMenu links={links}></HeaderMenu>
        <Content></Content>
      </div>
    </MantineProvider>
  );
}

export default App;
