"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Instagram = /** @class */ (function () {
  function Instagram(cameraMode, filter, burst) {
    this.cameraMode = cameraMode;
    this.filter = filter;
    this.burst = burst;
  }
  Instagram.prototype.storyCaller = function () {
    return "It was a great story";
  };
  return Instagram;
})();
