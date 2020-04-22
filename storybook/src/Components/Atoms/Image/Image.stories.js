import React from 'react';
import Image from './Image';

export default {
  title: 'Atoms / Image',
};

export const Baisc = () => (
  <Image
    imageLink={'https://via.placeholder.com/150'}
    altText={'placeholder text'}
  />
);

export const LargeImage = () => (
  <Image
    imageLink={
      'https://images.unsplash.com/photo-1587270804625-48c99a3cc707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
    }
    altText={'unsplash image'}
  />
);
