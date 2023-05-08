// eslint-disable-next-line operator-linebreak
const regExp =
  /http(s)?:\/\/(www\.)?[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+\.[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+/;

const allowedCors = [
  'https://mesto.deploy.nomoredomains.monster',
  'http://mesto.deploy.nomoredomains.monster',
  'https://api.mesto.deploy.nomoredomains.monster',
  'http://api.mesto.deploy.nomoredomains.monster',
  'localhost:3000',
  'http://localhost:3000',
];

module.exports = {
  regExp,
  allowedCors,
};
