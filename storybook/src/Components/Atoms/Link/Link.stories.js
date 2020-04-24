import React from 'react';
import Link from './Link';

export default {
  title: 'Atoms / Link',
};

export const Baisc = () => (
  <Link link={'https://www.bbc.co.uk/news'} linkText={'BBC News'} />
);

export const NoStyles = () => (
  <Link
    noStyles={true}
    link={'https://www.bbc.co.uk/news'}
    linkText={'BBC News'}
  />
);
