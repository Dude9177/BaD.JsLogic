define(["~/lib/group.js"], function (_group) {
  "use strict";

  var _group2 = _interopRequireDefault(_group);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var group = _group2.default.create("hier", "da", "dort");
  console.log('group', group);
});