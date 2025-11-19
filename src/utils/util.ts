const getImagePrefix = () => {
  return process.env.NODE_ENV === 'production' ? '/rilcoy/' : '';
};

export { getImagePrefix };
