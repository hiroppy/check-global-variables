'use strict';

function checkGlobalVariables() {
  var iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  var res = Object.keys(window).filter(function(e) {
    return iframe.contentWindow[e] === undefined;
  }).map(function(e) {
    return {
      key: e,
      value: window[e]
    }
  });
  document.body.removeChild(iframe);

  return res;
}

module.exports = checkGlobalVariables;
