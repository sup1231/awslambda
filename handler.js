'use strict';

module.exports.firstMethod = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'My first method in serverless :) ! ',
    }),
  };

};

module.exports.secondMethod = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'My second method in serverless :) ! ',
        }),
    };

};