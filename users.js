const qs = require('querystring');
const axios = require('axios');

const find = (slackUserId) => {
  const body = { token: 'xoxp-350542195943-349262444772-349630781125-d0ca667ad4e6ce94e13ba6ca9650b911', user: slackUserId };
  const promise = axios.post('https://slack.com/api/users.info', qs.stringify(body));
  return promise;
};

module.exports = { find };
