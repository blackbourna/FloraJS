/** 
    A module representing a Connector.
    @module Connector
 */

/**
 * Creates a new Connector.
 *
 * @constructor
 * @extends Mover 
 * @param {Object} [opt_options] Options.
 * @param {Object} [opt_options.color = {r: 255, g: 0, b: 0}] Color.
 * @param {number} [opt_options.zIndex = 0] zIndex.
 * @param {number} [opt_options.opacity = 0.25] Opacity.
 * @param {number} [opt_options.width = 10] Width.
 * @param {number} [opt_options.height = 1] Height.
 * @param {Object} [opt_options.parentA = null] The parent A object.
 * @param {Object} [opt_options.parentB = null] The parent B object. 
 */
function Connector(opt_options) {

  'use strict';

  var options = opt_options || {};

  exports.Mover.call(this, options);

  this.color = options.color || {r: 255, g: 0, b: 0};
  this.zIndex = options.zIndex || 0;
  this.opacity = options.opacity || 0.25;
  this.width = options.width || 10;
  this.height = options.height || 1;
  this.parentA = options.parentA || null;
  this.parentB = options.parentB || null;
}
exports.Utils.inherit(Connector, exports.Mover);
/**
 * Called every frame, step() updates the instance's properties.
 */  
Connector.prototype.step = function() {

  'use strict';

  var a = this.parentA.location, b = this.parentB.location;
  
  this.width = Math.floor(exports.PVector.PVectorSub(this.parentA.location, this.parentB.location).mag());
  this.location = exports.PVector.PVectorAdd(this.parentA.location, this.parentB.location).div(2); // midpoint = (v1 + v2)/2
  this.angle = exports.Utils.radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x) );
};

exports.Connector = Connector;  