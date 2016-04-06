define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Group = function () {
    function Group(name, groupTeams, groupGames) {
      _classCallCheck(this, Group);

      this.name = name;
      this.groupTeams = groupTeams;
      this.groupGames = groupGames;
    }

    _createClass(Group, null, [{
      key: "create",
      value: function create(name, groupTeams, groupGames) {
        return new Group(name, groupTeams, groupGames);
      }
    }]);

    return Group;
  }();

  exports.default = Group;
});