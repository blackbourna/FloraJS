/** 
    A module representing a Repeller object.
    @module Repeller
 */

/**
 * Creates a new Repeller object.
 *
 * @constructor
 * @extends Mover
 *
 * @param {Object} [opt_options] Options.
 * @param {number} [opt_options.G = -1] Universal Gravitational Constant.
 * @param {number} [opt_options.mass = 100] Mass.
 * @param {boolean} [opt_options.isStatic = true] If true, object will not move. 
 * @param {number} [opt_options.width = 50] Width.
 * @param {number} [opt_options.height = 50] Height. 
 * @param {Object} [opt_options.color = {r: 97, g: 210, b: 214}] Color.
 * @param {number} [opt_options.opacity = 0.75] The particle's opacity.  
 */
function Repeller(opt_options) {

  'use strict';
  
  var options = opt_options || {};

  exports.Mover.call(this, options);

  this.G = options.G || -1;
  this.mass = options.mass || 100;
  this.isStatic = options.isStatic || true;
  this.width = options.width || 50;
  this.height = options.height || 50;
  this.color = options.color || {r: 97, g: 210, b: 214};
  this.opacity = options.opacity || 0.75;
}
exports.Utils.inherit(Repeller, exports.Mover);
exports.Repeller = Repeller;