/*global exports, window, Modernizr */
/**
    A module representing a FloraSystem.
    @module florasystem
 */

/**
 * Creates a new FloraSystem.
 *
 * @constructor
 */
function FloraSystem(opt_el) {

  'use strict';

  var i, max,
      defaultColorList = exports.config.defaultColorList;

  this.el = opt_el || null;

  exports.liquids = [];
  exports.repellers = [];
  exports.attractors = [];
  exports.heats = [];
  exports.colds = [];
  exports.lights = [];
  exports.oxygen = [];
  exports.food = [];
  exports.predators = [];

  exports.mouse = {
    loc: new exports.Vector(),
    locLast: new exports.Vector()
  };

  exports.elementList = new exports.ElementList();

  exports.universe = new exports.Universe();
  exports.universe.addWorld({
    el: this.el
  });

  //exports.world = new exports.World();
  //exports.world.configure(this.el); // call configure after DOM has loaded



  //exports.world = new exports.World();
  //exports.world.configure(this.el); // call configure after DOM has loaded
  //exports.elementList.records.push(exports.world); // use add() method here

  exports.camera = new exports.Camera();

  // add default colors
  exports.defaultColors = new exports.ColorTable();
  for (i = 0, max = defaultColorList.length; i < max; i++) {
    exports.defaultColors.addColor({
      name: defaultColorList[i].name,
      startColor: defaultColorList[i].startColor,
      endColor: defaultColorList[i].endColor
    });
  }

  /*exports.destroyElement = function (id) {

    var i, max, elements = exports.elementList.records;

    for (i = 0, max = elements.length; i < max; i += 1) {
      if (elements[i].id === id) {
        exports.world.el.removeChild(elements[i].el);
        elements.splice(i, 1);
        break;
      }
    }
  };*/

  exports.animLoop = function () {

    var i, max,
        world = exports.universe.first(),
        elements = exports.elementList.records;

    //if (exports.world.isPlaying) {
      window.requestAnimFrame(exports.animLoop);

      //if (world.zSorted) {
        //elements = elements.sort(function(a,b){return (b.zIndex - a.zIndex);});
      //}

      for (i = elements.length - 1; i >= 0; i -= 1) {
        elements[i].step();
        if (elements[i]) {
          elements[i].draw();
        }
      }
      world.clock += 1;
    //}
  };
}

/**
 * Define a name property. Used to assign a class name and prefix an id.
 */
FloraSystem.name = 'florasystem';

/**
 * Starts a FloraSystem.
 * @param {function} func A list of instructions to execute when the system starts.
 */
FloraSystem.prototype.start = function (func) {

  'use strict';

  func = exports.Interface.getDataType(func) === "function" ? func : function () {};

  func.call();
  exports.animLoop();
};

FloraSystem.prototype.destroy = function () {
  'use strict';
  exports.elementList.destroyAll();
};

exports.FloraSystem = FloraSystem;