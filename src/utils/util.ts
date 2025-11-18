const getImagePrefix = () => {
  return process.env.NODE_ENV === 'production' ? '/rilsweb/' : '';
};

export { getImagePrefix };
