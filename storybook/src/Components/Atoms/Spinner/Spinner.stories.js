import React from 'react';
import Spinner from './Spinner';

export default {
  title: 'Atoms / Spinner',
};

export const Small = () => <Spinner size={'small'} color={'basic'} />;
export const Medium = () => <Spinner size={'medium'} color={'basic'} />;
export const Large = () => <Spinner size={'large'} color={'basic'} />;
export const Success = () => <Spinner size={'large'} color={'success'} />;
export const Error = () => <Spinner size={'large'} color={'error'} />;
export const Black = () => <Spinner size={'large'} color={'black'} />;
