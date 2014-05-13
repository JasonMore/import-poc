var util = require('util');

function derp(a, b) {
  return util.format('%s:%s', a, b);
}

module.exports = {
  derp: derp
};