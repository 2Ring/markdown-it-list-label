'use strict';

var mdRegexp = require('markdown-it-regexp');

module.exports = function buttonPlugin(md) {
  md.use(mdRegexp(
      /(^| )(?:~)([\w -]+)(?:~)/,
      function(match, utils) {
        return utils.escape(match[1]) + '<span class="list-label">' + utils.escape(match[2]) + '</span>';
      }
  ));
}