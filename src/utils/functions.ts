const isEmail = (text: string): boolean => {
  let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return reg.test(text);
};

export { isEmail };
