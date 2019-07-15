const badRequest = console.error;

const statusReaction = {
  400: badRequest
};

// eslint-disable-next-line
const errorHandler = defaultReturn => error => {
  const statusCode = error.response.status;
  throw error.response &&
    statusCode &&
    statusReaction[statusCode] &&
    statusReaction[statusCode](error.response);
};

const requestWrapper = (fn, defaultReturn) => (...args) =>
  Promise.resolve(fn(...args)).catch(errorHandler(defaultReturn));

export default requestWrapper;
