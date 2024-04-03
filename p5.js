/*! p5.js v1.9.2 March 19, 2024 */
(function (f) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = f()
  } else if (typeof define === 'function' && define.amd) {
    define([], f)
  } else {
    var g;
    if (typeof window !== 'undefined') {
      g = window
    } else if (typeof global !== 'undefined') {
      g = global
    } else if (typeof self !== 'undefined') {
      g = self
    } else {
      g = this
    }
    g.p5 = f()
  }
}) (function () {
  var define,
  module,
  exports;
  return (function () {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = 'function' == typeof require && require;
            if (!f && c) return c(i, !0);
            if (u) return u(i, !0);
            var a = new Error('Cannot find module \'' + i + '\'');
            throw a.code = 'MODULE_NOT_FOUND',
            a
          }
          var p = n[i] = {
            exports: {
            }
          };
          e[i][0].call(p.exports, function (r) {
            var n = e[i][1][r];
            return o(n || r)
          }, p, p.exports, r, e, n, t)
        }
        return n[i].exports
      }
      for (var u = 'function' == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
      return o
    }
    return r
  }) () ({
    1: [
      function (_dereq_, module, exports) {
        module.exports = {
          'p5': {
            'describe': {
              'name': 'describe',
              'params': [
                {
                  'name': 'text',
                  'description': '<p>description of the canvas.</p>\n',
                  'type': 'String'
                },
                {
                  'name': 'display',
                  'description': '<p>either LABEL or FALLBACK.</p>\n',
                  'type': 'Constant',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Environment'
            },
            'describeElement': {
              'name': 'describeElement',
              'params': [
                {
                  'name': 'name',
                  'description': '<p>name of the element.</p>\n',
                  'type': 'String'
                },
                {
                  'name': 'text',
                  'description': '<p>description of the element.</p>\n',
                  'type': 'String'
                },
                {
                  'name': 'display',
                  'description': '<p>either LABEL or FALLBACK.</p>\n',
                  'type': 'Constant',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Environment'
            },
            'textOutput': {
              'name': 'textOutput',
              'params': [
                {
                  'name': 'display',
                  'description': '<p>either FALLBACK or LABEL.</p>\n',
                  'type': 'Constant',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Environment'
            },
            'gridOutput': {
              'name': 'gridOutput',
              'params': [
                {
                  'name': 'display',
                  'description': '<p>either FALLBACK or LABEL.</p>\n',
                  'type': 'Constant',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Environment'
            },
            'alpha': {
              'name': 'alpha',
              'params': [
                {
                  'name': 'color',
                  'description': '<p><a href="#/p5.Color">p5.Color</a> object, array of\n                                        color components, or CSS color string.</p>\n',
                  'type': 'p5.Color|Number[]|String'
                }
              ],
              'class': 'p5',
              'module': 'Color'
            },
            'blue': {
              'name': 'blue',
              'params': [
                {
                  'name': 'color',
                  'description': '<p><a href="#/p5.Color">p5.Color</a> object, array of\n                                        color components, or CSS color string.</p>\n',
                  'type': 'p5.Color|Number[]|String'
                }
              ],
              'class': 'p5',
              'module': 'Color'
            },
            'brightness': {
              'name': 'brightness',
              'params': [
                {
                  'name': 'color',
                  'description': '<p><a href="#/p5.Color">p5.Color</a> object, array of\n                                        color components, or CSS color string.</p>\n',
                  'type': 'p5.Color|Number[]|String'
                }
              ],
              'class': 'p5',
              'module': 'Color'
            },
            'color': {
              'name': 'color',
              'class': 'p5',
              'module': 'Color',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'gray',
                      'description': '<p>number specifying value between white and black.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'alpha',
                      'description': '<p>alpha value relative to current color range\n                                (default is 0-255).</p>\n',
                      'type': 'Number',
                      'optional': true
                    }
                  ]
                },
                {
                  'params': [
                    {
                      'name': 'v1',
                      'description': '<p>red or hue value relative to\n                                the current color range.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'v2',
                      'description': '<p>green or saturation value\n                                relative to the current color range.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'v3',
                      'description': '<p>blue or brightness value\n                                relative to the current color range.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'alpha',
                      'description': '',
                      'type': 'Number',
                      'optional': true
                    }
                  ]
                },
                {
                  'params': [
                    {
                      'name': 'value',
                      'description': '<p>a color string.</p>\n',
                      'type': 'String'
                    }
                  ]
                },
                {
                  'params': [
                    {
                      'name': 'values',
                      'description': '<p>an array containing the red, green, blue,\n                                and alpha components of the color.</p>\n',
                      'type': 'Number[]'
                    }
                  ]
                },
                {
                  'params': [
                    {
                      'name': 'color',
                      'description': '',
                      'type': 'p5.Color'
                    }
                  ]
                }
              ]
            },
            'green': {
              'name': 'green',
              'params': [
                {
                  'name': 'color',
                  'description': '<p><a href="#/p5.Color">p5.Color</a> object, array of\n                                        color components, or CSS color string.</p>\n',
                  'type': 'p5.Color|Number[]|String'
                }
              ],
              'class': 'p5',
              'module': 'Color'
            },
            'hue': {
              'name': 'hue',
              'params': [
                {
                  'name': 'color',
                  'description': '<p><a href="#/p5.Color">p5.Color</a> object, array of\n                                        color components, or CSS color string.</p>\n',
                  'type': 'p5.Color|Number[]|String'
                }
              ],
              'class': 'p5',
              'module': 'Color'
            },
            'lerpColor': {
              'name': 'lerpColor',
              'params': [
                {
                  'name': 'c1',
                  'description': '<p>interpolate from this color.</p>\n',
                  'type': 'p5.Color'
                },
                {
                  'name': 'c2',
                  'description': '<p>interpolate to this color.</p>\n',
                  'type': 'p5.Color'
                },
                {
                  'name': 'amt',
                  'description': '<p>number between 0 and 1.</p>\n',
                  'type': 'Number'
                }
              ],
              'class': 'p5',
              'module': 'Color'
            },
            'lightness': {
              'name': 'lightness',
              'params': [
                {
                  'name': 'color',
                  'description': '<p><a href="#/p5.Color">p5.Color</a> object, array of\n                                        color components, or CSS color string.</p>\n',
                  'type': 'p5.Color|Number[]|String'
                }
              ],
              'class': 'p5',
              'module': 'Color'
            },
            'red': {
              'name': 'red',
              'params': [
                {
                  'name': 'color',
                  'description': '<p><a href="#/p5.Color">p5.Color</a> object, array of\n                                        color components, or CSS color string.</p>\n',
                  'type': 'p5.Color|Number[]|String'
                }
              ],
              'class': 'p5',
              'module': 'Color'
            },
            'saturation': {
              'name': 'saturation',
              'params': [
                {
                  'name': 'color',
                  'description': '<p><a href="#/p5.Color">p5.Color</a> object, array of\n                                        color components, or CSS color string.</p>\n',
                  'type': 'p5.Color|Number[]|String'
                }
              ],
              'class': 'p5',
              'module': 'Color'
            },
            'beginClip': {
              'name': 'beginClip',
              'params': [
                {
                  'name': 'options',
                  'description': '<p>an object containing clip settings.</p>\n',
                  'type': 'Object',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Color'
            },
            'endClip': {
              'name': 'endClip',
              'class': 'p5',
              'module': 'Color'
            },
            'clip': {
              'name': 'clip',
              'params': [
                {
                  'name': 'callback',
                  'description': '<p>a function that draws the mask shape.</p>\n',
                  'type': 'Function'
                },
                {
                  'name': 'options',
                  'description': '<p>an object containing clip settings.</p>\n',
                  'type': 'Object',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Color'
            },
            'background': {
              'name': 'background',
              'class': 'p5',
              'module': 'Color',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'color',
                      'description': '<p>any value created by the <a href="#/p5/color">color()</a> function</p>\n',
                      'type': 'p5.Color'
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'colorstring',
                      'description': '<p>color string, possible formats include: integer\n                        rgb() or rgba(), percentage rgb() or rgba(),\n                        3-digit hex, 6-digit hex.</p>\n',
                      'type': 'String'
                    },
                    {
                      'name': 'a',
                      'description': '<p>opacity of the background relative to current\n                            color range (default is 0-255).</p>\n',
                      'type': 'Number',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'gray',
                      'description': '<p>specifies a value between white and black.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'a',
                      'description': '',
                      'type': 'Number',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'v1',
                      'description': '<p>red value if color mode is RGB, or hue value if color mode is HSB.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'v2',
                      'description': '<p>green value if color mode is RGB, or saturation value if color mode is HSB.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'v3',
                      'description': '<p>blue value if color mode is RGB, or brightness value if color mode is HSB.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'a',
                      'description': '',
                      'type': 'Number',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'values',
                      'description': '<p>an array containing the red, green, blue\n                                and alpha components of the color.</p>\n',
                      'type': 'Number[]'
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'image',
                      'description': '<p>image created with <a href="#/p5/loadImage">loadImage()</a>\n                            or <a href="#/p5/createImage">createImage()</a>,\n                            to set as background.\n                            (must be same size as the sketch window).</p>\n',
                      'type': 'p5.Image'
                    },
                    {
                      'name': 'a',
                      'description': '',
                      'type': 'Number',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                }
              ]
            },
            'clear': {
              'name': 'clear',
              'params': [
                {
                  'name': 'r',
                  'description': '<p>normalized red value.</p>\n',
                  'type': 'Number',
                  'optional': true
                },
                {
                  'name': 'g',
                  'description': '<p>normalized green value.</p>\n',
                  'type': 'Number',
                  'optional': true
                },
                {
                  'name': 'b',
                  'description': '<p>normalized blue value.</p>\n',
                  'type': 'Number',
                  'optional': true
                },
                {
                  'name': 'a',
                  'description': '<p>normalized alpha value.</p>\n',
                  'type': 'Number',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Color'
            },
            'colorMode': {
              'name': 'colorMode',
              'class': 'p5',
              'module': 'Color',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'mode',
                      'description': '<p>either RGB, HSB or HSL, corresponding to\n                         Red/Green/Blue and Hue/Saturation/Brightness\n                         (or Lightness).</p>\n',
                      'type': 'Constant'
                    },
                    {
                      'name': 'max',
                      'description': '<p>range for all values.</p>\n',
                      'type': 'Number',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'mode',
                      'description': '',
                      'type': 'Constant'
                    },
                    {
                      'name': 'max1',
                      'description': '<p>range for the red or hue depending on the\n                             current color mode.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'max2',
                      'description': '<p>range for the green or saturation depending\n                             on the current color mode.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'max3',
                      'description': '<p>range for the blue or brightness/lightness\n                             depending on the current color mode.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'maxA',
                      'description': '<p>range for the alpha.</p>\n',
                      'type': 'Number',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                }
              ]
            },
            'fill': {
              'name': 'fill',
              'class': 'p5',
              'module': 'Color',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'v1',
                      'description': '<p>red value if color mode is RGB or hue value if color mode is HSB.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'v2',
                      'description': '<p>green value if color mode is RGB or saturation value if color mode is HSB.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'v3',
                      'description': '<p>blue value if color mode is RGB or brightness value if color mode is HSB.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'alpha',
                      'description': '',
                      'type': 'Number',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'value',
                      'description': '<p>a color string.</p>\n',
                      'type': 'String'
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'gray',
                      'description': '<p>a grayscale value.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'alpha',
                      'description': '',
                      'type': 'Number',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'values',
                      'description': '<p>an array containing the red, green, blue &\n                                and alpha components of the color.</p>\n',
                      'type': 'Number[]'
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'color',
                      'description': '<p>the fill color.</p>\n',
                      'type': 'p5.Color'
                    }
                  ],
                  'chainable': 1
                }
              ]
            },
            'noFill': {
              'name': 'noFill',
              'class': 'p5',
              'module': 'Color'
            },
            'noStroke': {
              'name': 'noStroke',
              'class': 'p5',
              'module': 'Color'
            },
            'stroke': {
              'name': 'stroke',
              'class': 'p5',
              'module': 'Color',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'v1',
                      'description': '<p>red value if color mode is RGB or hue value if color mode is HSB.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'v2',
                      'description': '<p>green value if color mode is RGB or saturation value if color mode is HSB.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'v3',
                      'description': '<p>blue value if color mode is RGB or brightness value if color mode is HSB.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'alpha',
                      'description': '',
                      'type': 'Number',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'value',
                      'description': '<p>a color string.</p>\n',
                      'type': 'String'
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'gray',
                      'description': '<p>a grayscale value.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'alpha',
                      'description': '',
                      'type': 'Number',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'values',
                      'description': '<p>an array containing the red, green, blue,\n                                and alpha components of the color.</p>\n',
                      'type': 'Number[]'
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'color',
                      'description': '<p>the stroke color.</p>\n',
                      'type': 'p5.Color'
                    }
                  ],
                  'chainable': 1
                }
              ]
            },
            'erase': {
              'name': 'erase',
              'params': [
                {
                  'name': 'strengthFill',
                  'description': '<p>a number (0-255) for the strength of erasing under a shape\'s interior.\n                                       Defaults to 255, which is full strength.</p>\n',
                  'type': 'Number',
                  'optional': true
                },
                {
                  'name': 'strengthStroke',
                  'description': '<p>a number (0-255) for the strength of erasing under a shape\'s edge.\n                                       Defaults to 255, which is full strength.</p>\n',
                  'type': 'Number',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Color'
            },
            'noErase': {
              'name': 'noErase',
              'class': 'p5',
              'module': 'Color'
            },
            'arc': {
              'name': 'arc',
              'params': [
                {
                  'name': 'x',
                  'description': '<p>x-coordinate of the arc\'s ellipse.</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'y',
                  'description': '<p>y-coordinate of the arc\'s ellipse.</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'w',
                  'description': '<p>width of the arc\'s ellipse by default.</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'h',
                  'description': '<p>height of the arc\'s ellipse by default.</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'start',
                  'description': '<p>angle to start the arc, specified in radians.</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'stop',
                  'description': '<p>angle to stop the arc, specified in radians.</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'mode',
                  'description': '<p>optional parameter to determine the way of drawing\n                        the arc. either CHORD, PIE, or OPEN.</p>\n',
                  'type': 'Constant',
                  'optional': true
                },
                {
                  'name': 'detail',
                  'description': '<p>optional parameter for WebGL mode only. This is to\n                        specify the number of vertices that makes up the\n                        perimeter of the arc. Default value is 25. Won\'t\n                        draw a stroke for a detail of more than 50.</p>\n',
                  'type': 'Integer',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Shape'
            },
            'ellipse': {
              'name': 'ellipse',
              'class': 'p5',
              'module': 'Shape',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'x',
                      'description': '<p>x-coordinate of the center of the ellipse.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y',
                      'description': '<p>y-coordinate of the center of the ellipse.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'w',
                      'description': '<p>width of the ellipse.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'h',
                      'description': '<p>height of the ellipse.</p>\n',
                      'type': 'Number',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'x',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'w',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'h',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'detail',
                      'description': '<p>optional parameter for WebGL mode only. This is to\n                        specify the number of vertices that makes up the\n                        perimeter of the ellipse. Default value is 25. Won\'t\n                        draw a stroke for a detail of more than 50.</p>\n',
                      'type': 'Integer',
                      'optional': true
                    }
                  ]
                }
              ]
            },
            'circle': {
              'name': 'circle',
              'params': [
                {
                  'name': 'x',
                  'description': '<p>x-coordinate of the center of the circle.</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'y',
                  'description': '<p>y-coordinate of the center of the circle.</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'd',
                  'description': '<p>diameter of the circle.</p>\n',
                  'type': 'Number'
                }
              ],
              'class': 'p5',
              'module': 'Shape'
            },
            'line': {
              'name': 'line',
              'class': 'p5',
              'module': 'Shape',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'x1',
                      'description': '<p>the x-coordinate of the first point.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y1',
                      'description': '<p>the y-coordinate of the first point.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x2',
                      'description': '<p>the x-coordinate of the second point.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y2',
                      'description': '<p>the y-coordinate of the second point.</p>\n',
                      'type': 'Number'
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'x1',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y1',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'z1',
                      'description': '<p>the z-coordinate of the first point.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x2',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y2',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'z2',
                      'description': '<p>the z-coordinate of the second point.</p>\n',
                      'type': 'Number'
                    }
                  ],
                  'chainable': 1
                }
              ]
            },
            'point': {
              'name': 'point',
              'class': 'p5',
              'module': 'Shape',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'x',
                      'description': '<p>the x-coordinate.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y',
                      'description': '<p>the y-coordinate.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'z',
                      'description': '<p>the z-coordinate (for WebGL mode).</p>\n',
                      'type': 'Number',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'coordinateVector',
                      'description': '<p>the coordinate vector.</p>\n',
                      'type': 'p5.Vector'
                    }
                  ],
                  'chainable': 1
                }
              ]
            },
            'quad': {
              'name': 'quad',
              'class': 'p5',
              'module': 'Shape',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'x1',
                      'description': '<p>the x-coordinate of the first point.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y1',
                      'description': '<p>the y-coordinate of the first point.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x2',
                      'description': '<p>the x-coordinate of the second point.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y2',
                      'description': '<p>the y-coordinate of the second point.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x3',
                      'description': '<p>the x-coordinate of the third point.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y3',
                      'description': '<p>the y-coordinate of the third point.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x4',
                      'description': '<p>the x-coordinate of the fourth point.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y4',
                      'description': '<p>the y-coordinate of the fourth point.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'detailX',
                      'description': '<p>number of segments in the x-direction.</p>\n',
                      'type': 'Integer',
                      'optional': true
                    },
                    {
                      'name': 'detailY',
                      'description': '<p>number of segments in the y-direction.</p>\n',
                      'type': 'Integer',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'x1',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y1',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'z1',
                      'description': '<p>the z-coordinate of the first point.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x2',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y2',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'z2',
                      'description': '<p>the z-coordinate of the second point.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x3',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y3',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'z3',
                      'description': '<p>the z-coordinate of the third point.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x4',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y4',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'z4',
                      'description': '<p>the z-coordinate of the fourth point.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'detailX',
                      'description': '',
                      'type': 'Integer',
                      'optional': true
                    },
                    {
                      'name': 'detailY',
                      'description': '',
                      'type': 'Integer',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                }
              ]
            },
            'rect': {
              'name': 'rect',
              'class': 'p5',
              'module': 'Shape',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'x',
                      'description': '<p>x-coordinate of the rectangle.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y',
                      'description': '<p>y-coordinate of the rectangle.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'w',
                      'description': '<p>width of the rectangle.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'h',
                      'description': '<p>height of the rectangle.</p>\n',
                      'type': 'Number',
                      'optional': true
                    },
                    {
                      'name': 'tl',
                      'description': '<p>optional radius of top-left corner.</p>\n',
                      'type': 'Number',
                      'optional': true
                    },
                    {
                      'name': 'tr',
                      'description': '<p>optional radius of top-right corner.</p>\n',
                      'type': 'Number',
                      'optional': true
                    },
                    {
                      'name': 'br',
                      'description': '<p>optional radius of bottom-right corner.</p>\n',
                      'type': 'Number',
                      'optional': true
                    },
                    {
                      'name': 'bl',
                      'description': '<p>optional radius of bottom-left corner.</p>\n',
                      'type': 'Number',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'x',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'w',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'h',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'detailX',
                      'description': '<p>number of segments in the x-direction (for WebGL mode).</p>\n',
                      'type': 'Integer',
                      'optional': true
                    },
                    {
                      'name': 'detailY',
                      'description': '<p>number of segments in the y-direction (for WebGL mode).</p>\n',
                      'type': 'Integer',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                }
              ]
            },
            'square': {
              'name': 'square',
              'params': [
                {
                  'name': 'x',
                  'description': '<p>x-coordinate of the square.</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'y',
                  'description': '<p>y-coordinate of the square.</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 's',
                  'description': '<p>side size of the square.</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'tl',
                  'description': '<p>optional radius of top-left corner.</p>\n',
                  'type': 'Number',
                  'optional': true
                },
                {
                  'name': 'tr',
                  'description': '<p>optional radius of top-right corner.</p>\n',
                  'type': 'Number',
                  'optional': true
                },
                {
                  'name': 'br',
                  'description': '<p>optional radius of bottom-right corner.</p>\n',
                  'type': 'Number',
                  'optional': true
                },
                {
                  'name': 'bl',
                  'description': '<p>optional radius of bottom-left corner.</p>\n',
                  'type': 'Number',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Shape'
            },
            'triangle': {
              'name': 'triangle',
              'params': [
                {
                  'name': 'x1',
                  'description': '<p>x-coordinate of the first point.</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'y1',
                  'description': '<p>y-coordinate of the first point.</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'x2',
                  'description': '<p>x-coordinate of the second point.</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'y2',
                  'description': '<p>y-coordinate of the second point.</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'x3',
                  'description': '<p>x-coordinate of the third point.</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'y3',
                  'description': '<p>y-coordinate of the third point.</p>\n',
                  'type': 'Number'
                }
              ],
              'class': 'p5',
              'module': 'Shape'
            },
            'ellipseMode': {
              'name': 'ellipseMode',
              'params': [
                {
                  'name': 'mode',
                  'description': '<p>either CENTER, RADIUS, CORNER, or CORNERS</p>\n',
                  'type': 'Constant'
                }
              ],
              'class': 'p5',
              'module': 'Shape'
            },
            'noSmooth': {
              'name': 'noSmooth',
              'class': 'p5',
              'module': 'Shape'
            },
            'rectMode': {
              'name': 'rectMode',
              'params': [
                {
                  'name': 'mode',
                  'description': '<p>either CORNER, CORNERS, CENTER, or RADIUS</p>\n',
                  'type': 'Constant'
                }
              ],
              'class': 'p5',
              'module': 'Shape'
            },
            'smooth': {
              'name': 'smooth',
              'class': 'p5',
              'module': 'Shape'
            },
            'strokeCap': {
              'name': 'strokeCap',
              'params': [
                {
                  'name': 'cap',
                  'description': '<p>either ROUND, SQUARE, or PROJECT</p>\n',
                  'type': 'Constant'
                }
              ],
              'class': 'p5',
              'module': 'Shape'
            },
            'strokeJoin': {
              'name': 'strokeJoin',
              'params': [
                {
                  'name': 'join',
                  'description': '<p>either MITER, BEVEL, or ROUND</p>\n',
                  'type': 'Constant'
                }
              ],
              'class': 'p5',
              'module': 'Shape'
            },
            'strokeWeight': {
              'name': 'strokeWeight',
              'params': [
                {
                  'name': 'weight',
                  'description': '<p>the weight of the stroke (in pixels).</p>\n',
                  'type': 'Number'
                }
              ],
              'class': 'p5',
              'module': 'Shape'
            },
            'bezier': {
              'name': 'bezier',
              'class': 'p5',
              'module': 'Shape',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'x1',
                      'description': '<p>x-coordinate for the first anchor point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y1',
                      'description': '<p>y-coordinate for the first anchor point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x2',
                      'description': '<p>x-coordinate for the first control point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y2',
                      'description': '<p>y-coordinate for the first control point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x3',
                      'description': '<p>x-coordinate for the second control point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y3',
                      'description': '<p>y-coordinate for the second control point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x4',
                      'description': '<p>x-coordinate for the second anchor point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y4',
                      'description': '<p>y-coordinate for the second anchor point</p>\n',
                      'type': 'Number'
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'x1',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y1',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'z1',
                      'description': '<p>z-coordinate for the first anchor point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x2',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y2',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'z2',
                      'description': '<p>z-coordinate for the first control point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x3',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y3',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'z3',
                      'description': '<p>z-coordinate for the second control point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x4',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y4',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'z4',
                      'description': '<p>z-coordinate for the second anchor point</p>\n',
                      'type': 'Number'
                    }
                  ],
                  'chainable': 1
                }
              ]
            },
            'bezierDetail': {
              'name': 'bezierDetail',
              'params': [
                {
                  'name': 'detail',
                  'description': '<p>resolution of the curves</p>\n',
                  'type': 'Number'
                }
              ],
              'class': 'p5',
              'module': 'Shape'
            },
            'bezierPoint': {
              'name': 'bezierPoint',
              'params': [
                {
                  'name': 'a',
                  'description': '<p>coordinate of first point on the curve</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'b',
                  'description': '<p>coordinate of first control point</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'c',
                  'description': '<p>coordinate of second control point</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'd',
                  'description': '<p>coordinate of second point on the curve</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 't',
                  'description': '<p>value between 0 and 1</p>\n',
                  'type': 'Number'
                }
              ],
              'class': 'p5',
              'module': 'Shape'
            },
            'bezierTangent': {
              'name': 'bezierTangent',
              'params': [
                {
                  'name': 'a',
                  'description': '<p>coordinate of first point on the curve</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'b',
                  'description': '<p>coordinate of first control point</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'c',
                  'description': '<p>coordinate of second control point</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'd',
                  'description': '<p>coordinate of second point on the curve</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 't',
                  'description': '<p>value between 0 and 1</p>\n',
                  'type': 'Number'
                }
              ],
              'class': 'p5',
              'module': 'Shape'
            },
            'curve': {
              'name': 'curve',
              'class': 'p5',
              'module': 'Shape',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'x1',
                      'description': '<p>x-coordinate for the beginning control point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y1',
                      'description': '<p>y-coordinate for the beginning control point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x2',
                      'description': '<p>x-coordinate for the first point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y2',
                      'description': '<p>y-coordinate for the first point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x3',
                      'description': '<p>x-coordinate for the second point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y3',
                      'description': '<p>y-coordinate for the second point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x4',
                      'description': '<p>x-coordinate for the ending control point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y4',
                      'description': '<p>y-coordinate for the ending control point</p>\n',
                      'type': 'Number'
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'x1',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y1',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'z1',
                      'description': '<p>z-coordinate for the beginning control point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x2',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y2',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'z2',
                      'description': '<p>z-coordinate for the first point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x3',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y3',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'z3',
                      'description': '<p>z-coordinate for the second point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x4',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y4',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'z4',
                      'description': '<p>z-coordinate for the ending control point</p>\n',
                      'type': 'Number'
                    }
                  ],
                  'chainable': 1
                }
              ]
            },
            'curveDetail': {
              'name': 'curveDetail',
              'params': [
                {
                  'name': 'resolution',
                  'description': '<p>resolution of the curves</p>\n',
                  'type': 'Number'
                }
              ],
              'class': 'p5',
              'module': 'Shape'
            },
            'curveTightness': {
              'name': 'curveTightness',
              'params': [
                {
                  'name': 'amount',
                  'description': '<p>amount of deformation from the original vertices</p>\n',
                  'type': 'Number'
                }
              ],
              'class': 'p5',
              'module': 'Shape'
            },
            'curvePoint': {
              'name': 'curvePoint',
              'params': [
                {
                  'name': 'a',
                  'description': '<p>coordinate of first control point of the curve</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'b',
                  'description': '<p>coordinate of first point</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'c',
                  'description': '<p>coordinate of second point</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'd',
                  'description': '<p>coordinate of second control point</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 't',
                  'description': '<p>value between 0 and 1</p>\n',
                  'type': 'Number'
                }
              ],
              'class': 'p5',
              'module': 'Shape'
            },
            'curveTangent': {
              'name': 'curveTangent',
              'params': [
                {
                  'name': 'a',
                  'description': '<p>coordinate of first control point</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'b',
                  'description': '<p>coordinate of first point on the curve</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'c',
                  'description': '<p>coordinate of second point on the curve</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'd',
                  'description': '<p>coordinate of second conrol point</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 't',
                  'description': '<p>value between 0 and 1</p>\n',
                  'type': 'Number'
                }
              ],
              'class': 'p5',
              'module': 'Shape'
            },
            'beginContour': {
              'name': 'beginContour',
              'class': 'p5',
              'module': 'Shape'
            },
            'beginShape': {
              'name': 'beginShape',
              'params': [
                {
                  'name': 'kind',
                  'description': '<p>either POINTS, LINES, TRIANGLES, TRIANGLE_FAN\n                               TRIANGLE_STRIP, QUADS, QUAD_STRIP or TESS</p>\n',
                  'type': 'Constant',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Shape'
            },
            'bezierVertex': {
              'name': 'bezierVertex',
              'class': 'p5',
              'module': 'Shape',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'x2',
                      'description': '<p>x-coordinate for the first control point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y2',
                      'description': '<p>y-coordinate for the first control point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x3',
                      'description': '<p>x-coordinate for the second control point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y3',
                      'description': '<p>y-coordinate for the second control point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x4',
                      'description': '<p>x-coordinate for the anchor point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y4',
                      'description': '<p>y-coordinate for the anchor point</p>\n',
                      'type': 'Number'
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'x2',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y2',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'z2',
                      'description': '<p>z-coordinate for the first control point (for WebGL mode)</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x3',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y3',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'z3',
                      'description': '<p>z-coordinate for the second control point (for WebGL mode)</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x4',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y4',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'z4',
                      'description': '<p>z-coordinate for the anchor point (for WebGL mode)</p>\n',
                      'type': 'Number'
                    }
                  ],
                  'chainable': 1
                }
              ]
            },
            'curveVertex': {
              'name': 'curveVertex',
              'class': 'p5',
              'module': 'Shape',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'x',
                      'description': '<p>x-coordinate of the vertex</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y',
                      'description': '<p>y-coordinate of the vertex</p>\n',
                      'type': 'Number'
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'x',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'z',
                      'description': '<p>z-coordinate of the vertex (for WebGL mode)</p>\n',
                      'type': 'Number',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                }
              ]
            },
            'endContour': {
              'name': 'endContour',
              'class': 'p5',
              'module': 'Shape'
            },
            'endShape': {
              'name': 'endShape',
              'params': [
                {
                  'name': 'mode',
                  'description': '<p>use CLOSE to close the shape</p>\n',
                  'type': 'Constant',
                  'optional': true
                },
                {
                  'name': 'count',
                  'description': '<p>number of times you want to draw/instance the shape (for WebGL mode).</p>\n',
                  'type': 'Integer',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Shape'
            },
            'quadraticVertex': {
              'name': 'quadraticVertex',
              'class': 'p5',
              'module': 'Shape',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'cx',
                      'description': '<p>x-coordinate for the control point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'cy',
                      'description': '<p>y-coordinate for the control point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x3',
                      'description': '<p>x-coordinate for the anchor point</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y3',
                      'description': '<p>y-coordinate for the anchor point</p>\n',
                      'type': 'Number'
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'cx',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'cy',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'cz',
                      'description': '<p>z-coordinate for the control point (for WebGL mode)</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'x3',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y3',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'z3',
                      'description': '<p>z-coordinate for the anchor point (for WebGL mode)</p>\n',
                      'type': 'Number'
                    }
                  ],
                  'chainable': 1
                }
              ]
            },
            'vertex': {
              'name': 'vertex',
              'class': 'p5',
              'module': 'Shape',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'x',
                      'description': '<p>x-coordinate of the vertex</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y',
                      'description': '<p>y-coordinate of the vertex</p>\n',
                      'type': 'Number'
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'x',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'z',
                      'description': '<p>z-coordinate of the vertex.\n                      Defaults to 0 if not specified.</p>\n',
                      'type': 'Number',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'x',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'y',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'z',
                      'description': '',
                      'type': 'Number',
                      'optional': true
                    },
                    {
                      'name': 'u',
                      'description': '<p>the vertex\'s texture u-coordinate</p>\n',
                      'type': 'Number',
                      'optional': true
                    },
                    {
                      'name': 'v',
                      'description': '<p>the vertex\'s texture v-coordinate</p>\n',
                      'type': 'Number',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                }
              ]
            },
            'normal': {
              'name': 'normal',
              'class': 'p5',
              'module': 'Shape',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'vector',
                      'description': '<p>A p5.Vector representing the vertex normal.</p>\n',
                      'type': 'Vector'
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'x',
                      'description': '<p>The x component of the vertex normal.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y',
                      'description': '<p>The y component of the vertex normal.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'z',
                      'description': '<p>The z component of the vertex normal.</p>\n',
                      'type': 'Number'
                    }
                  ],
                  'chainable': 1
                }
              ]
            },
            'VERSION': {
              'name': 'VERSION',
              'class': 'p5',
              'module': 'Constants'
            },
            'P2D': {
              'name': 'P2D',
              'class': 'p5',
              'module': 'Constants'
            },
            'WEBGL': {
              'name': 'WEBGL',
              'class': 'p5',
              'module': 'Constants'
            },
            'WEBGL2': {
              'name': 'WEBGL2',
              'class': 'p5',
              'module': 'Constants'
            },
            'ARROW': {
              'name': 'ARROW',
              'class': 'p5',
              'module': 'Constants'
            },
            'CROSS': {
              'name': 'CROSS',
              'class': 'p5',
              'module': 'Constants'
            },
            'HAND': {
              'name': 'HAND',
              'class': 'p5',
              'module': 'Constants'
            },
            'MOVE': {
              'name': 'MOVE',
              'class': 'p5',
              'module': 'Constants'
            },
            'TEXT': {
              'name': 'TEXT',
              'class': 'p5',
              'module': 'Constants'
            },
            'WAIT': {
              'name': 'WAIT',
              'class': 'p5',
              'module': 'Constants'
            },
            'HALF_PI': {
              'name': 'HALF_PI',
              'class': 'p5',
              'module': 'Constants'
            },
            'PI': {
              'name': 'PI',
              'class': 'p5',
              'module': 'Constants'
            },
            'QUARTER_PI': {
              'name': 'QUARTER_PI',
              'class': 'p5',
              'module': 'Constants'
            },
            'TAU': {
              'name': 'TAU',
              'class': 'p5',
              'module': 'Constants'
            },
            'TWO_PI': {
              'name': 'TWO_PI',
              'class': 'p5',
              'module': 'Constants'
            },
            'DEGREES': {
              'name': 'DEGREES',
              'class': 'p5',
              'module': 'Constants'
            },
            'RADIANS': {
              'name': 'RADIANS',
              'class': 'p5',
              'module': 'Constants'
            },
            'CORNER': {
              'name': 'CORNER',
              'class': 'p5',
              'module': 'Constants'
            },
            'CORNERS': {
              'name': 'CORNERS',
              'class': 'p5',
              'module': 'Constants'
            },
            'RADIUS': {
              'name': 'RADIUS',
              'class': 'p5',
              'module': 'Constants'
            },
            'RIGHT': {
              'name': 'RIGHT',
              'class': 'p5',
              'module': 'Constants'
            },
            'LEFT': {
              'name': 'LEFT',
              'class': 'p5',
              'module': 'Constants'
            },
            'CENTER': {
              'name': 'CENTER',
              'class': 'p5',
              'module': 'Constants'
            },
            'TOP': {
              'name': 'TOP',
              'class': 'p5',
              'module': 'Constants'
            },
            'BOTTOM': {
              'name': 'BOTTOM',
              'class': 'p5',
              'module': 'Constants'
            },
            'BASELINE': {
              'name': 'BASELINE',
              'class': 'p5',
              'module': 'Constants'
            },
            'POINTS': {
              'name': 'POINTS',
              'class': 'p5',
              'module': 'Constants'
            },
            'LINES': {
              'name': 'LINES',
              'class': 'p5',
              'module': 'Constants'
            },
            'LINE_STRIP': {
              'name': 'LINE_STRIP',
              'class': 'p5',
              'module': 'Constants'
            },
            'LINE_LOOP': {
              'name': 'LINE_LOOP',
              'class': 'p5',
              'module': 'Constants'
            },
            'TRIANGLES': {
              'name': 'TRIANGLES',
              'class': 'p5',
              'module': 'Constants'
            },
            'TRIANGLE_FAN': {
              'name': 'TRIANGLE_FAN',
              'class': 'p5',
              'module': 'Constants'
            },
            'TRIANGLE_STRIP': {
              'name': 'TRIANGLE_STRIP',
              'class': 'p5',
              'module': 'Constants'
            },
            'QUADS': {
              'name': 'QUADS',
              'class': 'p5',
              'module': 'Constants'
            },
            'QUAD_STRIP': {
              'name': 'QUAD_STRIP',
              'class': 'p5',
              'module': 'Constants'
            },
            'TESS': {
              'name': 'TESS',
              'class': 'p5',
              'module': 'Constants'
            },
            'CLOSE': {
              'name': 'CLOSE',
              'class': 'p5',
              'module': 'Constants'
            },
            'OPEN': {
              'name': 'OPEN',
              'class': 'p5',
              'module': 'Constants'
            },
            'CHORD': {
              'name': 'CHORD',
              'class': 'p5',
              'module': 'Constants'
            },
            'PIE': {
              'name': 'PIE',
              'class': 'p5',
              'module': 'Constants'
            },
            'PROJECT': {
              'name': 'PROJECT',
              'class': 'p5',
              'module': 'Constants'
            },
            'SQUARE': {
              'name': 'SQUARE',
              'class': 'p5',
              'module': 'Constants'
            },
            'ROUND': {
              'name': 'ROUND',
              'class': 'p5',
              'module': 'Constants'
            },
            'BEVEL': {
              'name': 'BEVEL',
              'class': 'p5',
              'module': 'Constants'
            },
            'MITER': {
              'name': 'MITER',
              'class': 'p5',
              'module': 'Constants'
            },
            'RGB': {
              'name': 'RGB',
              'class': 'p5',
              'module': 'Constants'
            },
            'HSB': {
              'name': 'HSB',
              'class': 'p5',
              'module': 'Constants'
            },
            'HSL': {
              'name': 'HSL',
              'class': 'p5',
              'module': 'Constants'
            },
            'AUTO': {
              'name': 'AUTO',
              'class': 'p5',
              'module': 'Constants'
            },
            'ALT': {
              'name': 'ALT',
              'class': 'p5',
              'module': 'Constants'
            },
            'BACKSPACE': {
              'name': 'BACKSPACE',
              'class': 'p5',
              'module': 'Constants'
            },
            'CONTROL': {
              'name': 'CONTROL',
              'class': 'p5',
              'module': 'Constants'
            },
            'DELETE': {
              'name': 'DELETE',
              'class': 'p5',
              'module': 'Constants'
            },
            'DOWN_ARROW': {
              'name': 'DOWN_ARROW',
              'class': 'p5',
              'module': 'Constants'
            },
            'ENTER': {
              'name': 'ENTER',
              'class': 'p5',
              'module': 'Constants'
            },
            'ESCAPE': {
              'name': 'ESCAPE',
              'class': 'p5',
              'module': 'Constants'
            },
            'LEFT_ARROW': {
              'name': 'LEFT_ARROW',
              'class': 'p5',
              'module': 'Constants'
            },
            'OPTION': {
              'name': 'OPTION',
              'class': 'p5',
              'module': 'Constants'
            },
            'RETURN': {
              'name': 'RETURN',
              'class': 'p5',
              'module': 'Constants'
            },
            'RIGHT_ARROW': {
              'name': 'RIGHT_ARROW',
              'class': 'p5',
              'module': 'Constants'
            },
            'SHIFT': {
              'name': 'SHIFT',
              'class': 'p5',
              'module': 'Constants'
            },
            'TAB': {
              'name': 'TAB',
              'class': 'p5',
              'module': 'Constants'
            },
            'UP_ARROW': {
              'name': 'UP_ARROW',
              'class': 'p5',
              'module': 'Constants'
            },
            'BLEND': {
              'name': 'BLEND',
              'class': 'p5',
              'module': 'Constants'
            },
            'REMOVE': {
              'name': 'REMOVE',
              'class': 'p5',
              'module': 'Constants'
            },
            'ADD': {
              'name': 'ADD',
              'class': 'p5',
              'module': 'Constants'
            },
            'DARKEST': {
              'name': 'DARKEST',
              'class': 'p5',
              'module': 'Constants'
            },
            'LIGHTEST': {
              'name': 'LIGHTEST',
              'class': 'p5',
              'module': 'Constants'
            },
            'DIFFERENCE': {
              'name': 'DIFFERENCE',
              'class': 'p5',
              'module': 'Constants'
            },
            'SUBTRACT': {
              'name': 'SUBTRACT',
              'class': 'p5',
              'module': 'Constants'
            },
            'EXCLUSION': {
              'name': 'EXCLUSION',
              'class': 'p5',
              'module': 'Constants'
            },
            'MULTIPLY': {
              'name': 'MULTIPLY',
              'class': 'p5',
              'module': 'Constants'
            },
            'SCREEN': {
              'name': 'SCREEN',
              'class': 'p5',
              'module': 'Constants'
            },
            'REPLACE': {
              'name': 'REPLACE',
              'class': 'p5',
              'module': 'Constants'
            },
            'OVERLAY': {
              'name': 'OVERLAY',
              'class': 'p5',
              'module': 'Constants'
            },
            'HARD_LIGHT': {
              'name': 'HARD_LIGHT',
              'class': 'p5',
              'module': 'Constants'
            },
            'SOFT_LIGHT': {
              'name': 'SOFT_LIGHT',
              'class': 'p5',
              'module': 'Constants'
            },
            'DODGE': {
              'name': 'DODGE',
              'class': 'p5',
              'module': 'Constants'
            },
            'BURN': {
              'name': 'BURN',
              'class': 'p5',
              'module': 'Constants'
            },
            'THRESHOLD': {
              'name': 'THRESHOLD',
              'class': 'p5',
              'module': 'Constants'
            },
            'GRAY': {
              'name': 'GRAY',
              'class': 'p5',
              'module': 'Constants'
            },
            'OPAQUE': {
              'name': 'OPAQUE',
              'class': 'p5',
              'module': 'Constants'
            },
            'INVERT': {
              'name': 'INVERT',
              'class': 'p5',
              'module': 'Constants'
            },
            'POSTERIZE': {
              'name': 'POSTERIZE',
              'class': 'p5',
              'module': 'Constants'
            },
            'DILATE': {
              'name': 'DILATE',
              'class': 'p5',
              'module': 'Constants'
            },
            'ERODE': {
              'name': 'ERODE',
              'class': 'p5',
              'module': 'Constants'
            },
            'BLUR': {
              'name': 'BLUR',
              'class': 'p5',
              'module': 'Constants'
            },
            'NORMAL': {
              'name': 'NORMAL',
              'class': 'p5',
              'module': 'Constants'
            },
            'ITALIC': {
              'name': 'ITALIC',
              'class': 'p5',
              'module': 'Constants'
            },
            'BOLD': {
              'name': 'BOLD',
              'class': 'p5',
              'module': 'Constants'
            },
            'BOLDITALIC': {
              'name': 'BOLDITALIC',
              'class': 'p5',
              'module': 'Constants'
            },
            'CHAR': {
              'name': 'CHAR',
              'class': 'p5',
              'module': 'Constants'
            },
            'WORD': {
              'name': 'WORD',
              'class': 'p5',
              'module': 'Constants'
            },
            'LINEAR': {
              'name': 'LINEAR',
              'class': 'p5',
              'module': 'Constants'
            },
            'QUADRATIC': {
              'name': 'QUADRATIC',
              'class': 'p5',
              'module': 'Constants'
            },
            'BEZIER': {
              'name': 'BEZIER',
              'class': 'p5',
              'module': 'Constants'
            },
            'CURVE': {
              'name': 'CURVE',
              'class': 'p5',
              'module': 'Constants'
            },
            'STROKE': {
              'name': 'STROKE',
              'class': 'p5',
              'module': 'Constants'
            },
            'FILL': {
              'name': 'FILL',
              'class': 'p5',
              'module': 'Constants'
            },
            'TEXTURE': {
              'name': 'TEXTURE',
              'class': 'p5',
              'module': 'Constants'
            },
            'IMMEDIATE': {
              'name': 'IMMEDIATE',
              'class': 'p5',
              'module': 'Constants'
            },
            'IMAGE': {
              'name': 'IMAGE',
              'class': 'p5',
              'module': 'Constants'
            },
            'NEAREST': {
              'name': 'NEAREST',
              'class': 'p5',
              'module': 'Constants'
            },
            'REPEAT': {
              'name': 'REPEAT',
              'class': 'p5',
              'module': 'Constants'
            },
            'CLAMP': {
              'name': 'CLAMP',
              'class': 'p5',
              'module': 'Constants'
            },
            'MIRROR': {
              'name': 'MIRROR',
              'class': 'p5',
              'module': 'Constants'
            },
            'FLAT': {
              'name': 'FLAT',
              'class': 'p5',
              'module': 'Constants'
            },
            'SMOOTH': {
              'name': 'SMOOTH',
              'class': 'p5',
              'module': 'Constants'
            },
            'LANDSCAPE': {
              'name': 'LANDSCAPE',
              'class': 'p5',
              'module': 'Constants'
            },
            'PORTRAIT': {
              'name': 'PORTRAIT',
              'class': 'p5',
              'module': 'Constants'
            },
            'GRID': {
              'name': 'GRID',
              'class': 'p5',
              'module': 'Constants'
            },
            'AXES': {
              'name': 'AXES',
              'class': 'p5',
              'module': 'Constants'
            },
            'LABEL': {
              'name': 'LABEL',
              'class': 'p5',
              'module': 'Constants'
            },
            'FALLBACK': {
              'name': 'FALLBACK',
              'class': 'p5',
              'module': 'Constants'
            },
            'CONTAIN': {
              'name': 'CONTAIN',
              'class': 'p5',
              'module': 'Constants'
            },
            'COVER': {
              'name': 'COVER',
              'class': 'p5',
              'module': 'Constants'
            },
            'UNSIGNED_BYTE': {
              'name': 'UNSIGNED_BYTE',
              'class': 'p5',
              'module': 'Constants'
            },
            'UNSIGNED_INT': {
              'name': 'UNSIGNED_INT',
              'class': 'p5',
              'module': 'Constants'
            },
            'FLOAT': {
              'name': 'FLOAT',
              'class': 'p5',
              'module': 'Constants'
            },
            'HALF_FLOAT': {
              'name': 'HALF_FLOAT',
              'class': 'p5',
              'module': 'Constants'
            },
            'RGBA': {
              'name': 'RGBA',
              'class': 'p5',
              'module': 'Constants'
            },
            'print': {
              'name': 'print',
              'params': [
                {
                  'name': 'contents',
                  'description': '<p>content to print to the console.</p>\n',
                  'type': 'Any'
                }
              ],
              'class': 'p5',
              'module': 'Environment'
            },
            'frameCount': {
              'name': 'frameCount',
              'class': 'p5',
              'module': 'Environment'
            },
            'deltaTime': {
              'name': 'deltaTime',
              'class': 'p5',
              'module': 'Environment'
            },
            'focused': {
              'name': 'focused',
              'class': 'p5',
              'module': 'Environment'
            },
            'cursor': {
              'name': 'cursor',
              'params': [
                {
                  'name': 'type',
                  'description': '<p>Built-in: either ARROW, CROSS, HAND, MOVE, TEXT, or WAIT.\n                              Native CSS properties: \'grab\', \'progress\', and so on.\n                              Path to cursor image.</p>\n',
                  'type': 'String|Constant'
                },
                {
                  'name': 'x',
                  'description': '<p>horizontal active spot of the cursor.</p>\n',
                  'type': 'Number',
                  'optional': true
                },
                {
                  'name': 'y',
                  'description': '<p>vertical active spot of the cursor.</p>\n',
                  'type': 'Number',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Environment'
            },
            'frameRate': {
              'name': 'frameRate',
              'class': 'p5',
              'module': 'Environment',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'fps',
                      'description': '<p>number of frames to draw per second.</p>\n',
                      'type': 'Number'
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                  ]
                }
              ]
            },
            'getTargetFrameRate': {
              'name': 'getTargetFrameRate',
              'class': 'p5',
              'module': 'Environment'
            },
            'noCursor': {
              'name': 'noCursor',
              'class': 'p5',
              'module': 'Environment'
            },
            'webglVersion': {
              'name': 'webglVersion',
              'class': 'p5',
              'module': 'Environment'
            },
            'displayWidth': {
              'name': 'displayWidth',
              'class': 'p5',
              'module': 'Environment'
            },
            'displayHeight': {
              'name': 'displayHeight',
              'class': 'p5',
              'module': 'Environment'
            },
            'windowWidth': {
              'name': 'windowWidth',
              'class': 'p5',
              'module': 'Environment'
            },
            'windowHeight': {
              'name': 'windowHeight',
              'class': 'p5',
              'module': 'Environment'
            },
            'windowResized': {
              'name': 'windowResized',
              'params': [
                {
                  'name': 'event',
                  'description': '<p>optional resize Event.</p>\n',
                  'type': 'UIEvent',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Environment'
            },
            'width': {
              'name': 'width',
              'class': 'p5',
              'module': 'Environment'
            },
            'height': {
              'name': 'height',
              'class': 'p5',
              'module': 'Environment'
            },
            'fullscreen': {
              'name': 'fullscreen',
              'params': [
                {
                  'name': 'val',
                  'description': '<p>whether the sketch should be in fullscreen mode.</p>\n',
                  'type': 'Boolean',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Environment'
            },
            'pixelDensity': {
              'name': 'pixelDensity',
              'class': 'p5',
              'module': 'Environment',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'val',
                      'description': '<p>desired pixel density.</p>\n',
                      'type': 'Number',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                  ]
                }
              ]
            },
            'displayDensity': {
              'name': 'displayDensity',
              'class': 'p5',
              'module': 'Environment'
            },
            'getURL': {
              'name': 'getURL',
              'class': 'p5',
              'module': 'Environment'
            },
            'getURLPath': {
              'name': 'getURLPath',
              'class': 'p5',
              'module': 'Environment'
            },
            'getURLParams': {
              'name': 'getURLParams',
              'class': 'p5',
              'module': 'Environment'
            },
            'preload': {
              'name': 'preload',
              'class': 'p5',
              'module': 'Structure'
            },
            'setup': {
              'name': 'setup',
              'class': 'p5',
              'module': 'Structure'
            },
            'draw': {
              'name': 'draw',
              'class': 'p5',
              'module': 'Structure'
            },
            'remove': {
              'name': 'remove',
              'class': 'p5',
              'module': 'Structure'
            },
            'disableFriendlyErrors': {
              'name': 'disableFriendlyErrors',
              'class': 'p5',
              'module': 'Structure'
            },
            'let': {
              'name': 'let',
              'class': 'p5',
              'module': 'Foundation'
            },
            'const': {
              'name': 'const',
              'class': 'p5',
              'module': 'Foundation'
            },
            '===': {
              'name': '===',
              'class': 'p5',
              'module': 'Foundation'
            },
            '>': {
              'name': '>',
              'class': 'p5',
              'module': 'Foundation'
            },
            '>=': {
              'name': '>=',
              'class': 'p5',
              'module': 'Foundation'
            },
            '<': {
              'name': '<',
              'class': 'p5',
              'module': 'Foundation'
            },
            '<=': {
              'name': '<=',
              'class': 'p5',
              'module': 'Foundation'
            },
            'if-else': {
              'name': 'if-else',
              'class': 'p5',
              'module': 'Foundation'
            },
            'function': {
              'name': 'function',
              'class': 'p5',
              'module': 'Foundation'
            },
            'return': {
              'name': 'return',
              'class': 'p5',
              'module': 'Foundation'
            },
            'boolean': {
              'name': 'boolean',
              'params': [
                {
                  'name': 'n',
                  'description': '<p>value to parse</p>\n',
                  'type': 'String|Boolean|Number|Array'
                }
              ],
              'class': 'p5',
              'module': 'Data'
            },
            'string': {
              'name': 'string',
              'class': 'p5',
              'module': 'Foundation'
            },
            'number': {
              'name': 'number',
              'class': 'p5',
              'module': 'Foundation'
            },
            'object': {
              'name': 'object',
              'class': 'p5',
              'module': 'Foundation'
            },
            'class': {
              'name': 'class',
              'class': 'p5',
              'module': 'Foundation'
            },
            'for': {
              'name': 'for',
              'class': 'p5',
              'module': 'Foundation'
            },
            'while': {
              'name': 'while',
              'class': 'p5',
              'module': 'Foundation'
            },
            'createCanvas': {
              'name': 'createCanvas',
              'class': 'p5',
              'module': 'Rendering',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'w',
                      'description': '<p>width of the canvas</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'h',
                      'description': '<p>height of the canvas</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'renderer',
                      'description': '<p>either P2D or WEBGL</p>\n',
                      'type': 'Constant',
                      'optional': true
                    },
                    {
                      'name': 'canvas',
                      'description': '<p>existing html canvas element</p>\n',
                      'type': 'HTMLCanvasElement',
                      'optional': true
                    }
                  ]
                },
                {
                  'params': [
                    {
                      'name': 'w',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'h',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'canvas',
                      'description': '',
                      'type': 'HTMLCanvasElement',
                      'optional': true
                    }
                  ]
                }
              ]
            },
            'resizeCanvas': {
              'name': 'resizeCanvas',
              'params': [
                {
                  'name': 'w',
                  'description': '<p>width of the canvas</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'h',
                  'description': '<p>height of the canvas</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'noRedraw',
                  'description': '<p>don\'t redraw the canvas immediately</p>\n',
                  'type': 'Boolean',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Rendering'
            },
            'noCanvas': {
              'name': 'noCanvas',
              'class': 'p5',
              'module': 'Rendering'
            },
            'createGraphics': {
              'name': 'createGraphics',
              'class': 'p5',
              'module': 'Rendering',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'w',
                      'description': '<p>width of the offscreen graphics buffer</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'h',
                      'description': '<p>height of the offscreen graphics buffer</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'renderer',
                      'description': '<p>either P2D or WEBGL\n                              undefined defaults to p2d</p>\n',
                      'type': 'Constant',
                      'optional': true
                    },
                    {
                      'name': 'canvas',
                      'description': '<p>existing html canvas element</p>\n',
                      'type': 'HTMLCanvasElement',
                      'optional': true
                    }
                  ]
                },
                {
                  'params': [
                    {
                      'name': 'w',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'h',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'canvas',
                      'description': '',
                      'type': 'HTMLCanvasElement',
                      'optional': true
                    }
                  ]
                }
              ]
            },
            'createFramebuffer': {
              'name': 'createFramebuffer',
              'params': [
                {
                  'name': 'options',
                  'description': '<p>An optional object with configuration</p>\n',
                  'type': 'Object',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Rendering'
            },
            'clearDepth': {
              'name': 'clearDepth',
              'params': [
                {
                  'name': 'depth',
                  'description': '<p>The value, between 0 and 1, to reset the depth to, where\n0 corresponds to a value as close as possible to the camera before getting\nclipped, and 1 corresponds to a value as far away from the camera as possible.\nThe default value is 1.</p>\n',
                  'type': 'Number',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Rendering'
            },
            'blendMode': {
              'name': 'blendMode',
              'params': [
                {
                  'name': 'mode',
                  'description': '<p>blend mode to set for canvas.\n               either BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY,\n               EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,\n               SOFT_LIGHT, DODGE, BURN, ADD, REMOVE or SUBTRACT</p>\n',
                  'type': 'Constant'
                }
              ],
              'class': 'p5',
              'module': 'Rendering'
            },
            'drawingContext': {
              'name': 'drawingContext',
              'class': 'p5',
              'module': 'Rendering'
            },
            'noLoop': {
              'name': 'noLoop',
              'class': 'p5',
              'module': 'Structure'
            },
            'loop': {
              'name': 'loop',
              'class': 'p5',
              'module': 'Structure'
            },
            'isLooping': {
              'name': 'isLooping',
              'class': 'p5',
              'module': 'Structure'
            },
            'push': {
              'name': 'push',
              'class': 'p5',
              'module': 'Structure'
            },
            'pop': {
              'name': 'pop',
              'class': 'p5',
              'module': 'Structure'
            },
            'redraw': {
              'name': 'redraw',
              'params': [
                {
                  'name': 'n',
                  'description': '<p>Redraw for n-times. The default value is 1.</p>\n',
                  'type': 'Integer',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Structure'
            },
            'p5': {
              'name': 'p5',
              'params': [
                {
                  'name': 'sketch',
                  'description': '<p>a function containing a p5.js sketch</p>\n',
                  'type': 'Object'
                },
                {
                  'name': 'node',
                  'description': '<p>ID or pointer to HTML DOM node to contain sketch in</p>\n',
                  'type': 'String|Object'
                }
              ],
              'class': 'p5',
              'module': 'Structure'
            },
            'applyMatrix': {
              'name': 'applyMatrix',
              'class': 'p5',
              'module': 'Transform',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'arr',
                      'description': '<p>an array of numbers - should be 6 or 16 length (2Ã—3 or 4Ã—4 matrix values)</p>\n',
                      'type': 'Array'
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'a',
                      'description': '<p>numbers which define the 2Ã—3 or 4Ã—4 matrix to be multiplied</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'b',
                      'description': '<p>numbers which define the 2Ã—3 or 4Ã—4 matrix to be multiplied</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'c',
                      'description': '<p>numbers which define the 2Ã—3 or 4Ã—4 matrix to be multiplied</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'd',
                      'description': '<p>numbers which define the 2Ã—3 or 4Ã—4 matrix to be multiplied</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'e',
                      'description': '<p>numbers which define the 2Ã—3 or 4Ã—4 matrix to be multiplied</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'f',
                      'description': '<p>numbers which define the 2Ã—3 or 4Ã—4 matrix to be multiplied</p>\n',
                      'type': 'Number'
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'a',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'b',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'c',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'd',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'e',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'f',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'g',
                      'description': '<p>numbers which define the 4Ã—4 matrix to be multiplied</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'h',
                      'description': '<p>numbers which define the 4Ã—4 matrix to be multiplied</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'i',
                      'description': '<p>numbers which define the 4Ã—4 matrix to be multiplied</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'j',
                      'description': '<p>numbers which define the 4Ã—4 matrix to be multiplied</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'k',
                      'description': '<p>numbers which define the 4Ã—4 matrix to be multiplied</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'l',
                      'description': '<p>numbers which define the 4Ã—4 matrix to be multiplied</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'm',
                      'description': '<p>numbers which define the 4Ã—4 matrix to be multiplied</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'n',
                      'description': '<p>numbers which define the 4Ã—4 matrix to be multiplied</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'o',
                      'description': '<p>numbers which define the 4Ã—4 matrix to be multiplied</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'p',
                      'description': '<p>numbers which define the 4Ã—4 matrix to be multiplied</p>\n',
                      'type': 'Number'
                    }
                  ],
                  'chainable': 1
                }
              ]
            },
            'resetMatrix': {
              'name': 'resetMatrix',
              'class': 'p5',
              'module': 'Transform'
            },
            'rotate': {
              'name': 'rotate',
              'params': [
                {
                  'name': 'angle',
                  'description': '<p>the angle of rotation, specified in radians\n                       or degrees, depending on current angleMode</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'axis',
                  'description': '<p>(in 3d) the axis to rotate around</p>\n',
                  'type': 'p5.Vector|Number[]',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Transform'
            },
            'rotateX': {
              'name': 'rotateX',
              'params': [
                {
                  'name': 'angle',
                  'description': '<p>the angle of rotation, specified in radians\n                       or degrees, depending on current angleMode</p>\n',
                  'type': 'Number'
                }
              ],
              'class': 'p5',
              'module': 'Transform'
            },
            'rotateY': {
              'name': 'rotateY',
              'params': [
                {
                  'name': 'angle',
                  'description': '<p>the angle of rotation, specified in radians\n                       or degrees, depending on current angleMode</p>\n',
                  'type': 'Number'
                }
              ],
              'class': 'p5',
              'module': 'Transform'
            },
            'rotateZ': {
              'name': 'rotateZ',
              'params': [
                {
                  'name': 'angle',
                  'description': '<p>the angle of rotation, specified in radians\n                       or degrees, depending on current angleMode</p>\n',
                  'type': 'Number'
                }
              ],
              'class': 'p5',
              'module': 'Transform'
            },
            'scale': {
              'name': 'scale',
              'class': 'p5',
              'module': 'Transform',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 's',
                      'description': '<p>percent to scale the object, or percentage to\n                     scale the object in the x-axis if multiple arguments\n                     are given</p>\n',
                      'type': 'Number|p5.Vector|Number[]'
                    },
                    {
                      'name': 'y',
                      'description': '<p>percent to scale the object in the y-axis</p>\n',
                      'type': 'Number',
                      'optional': true
                    },
                    {
                      'name': 'z',
                      'description': '<p>percent to scale the object in the z-axis (webgl only)</p>\n',
                      'type': 'Number',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'scales',
                      'description': '<p>per-axis percents to scale the object</p>\n',
                      'type': 'p5.Vector|Number[]'
                    }
                  ],
                  'chainable': 1
                }
              ]
            },
            'shearX': {
              'name': 'shearX',
              'params': [
                {
                  'name': 'angle',
                  'description': '<p>angle of shear specified in radians or degrees,\n                       depending on current angleMode</p>\n',
                  'type': 'Number'
                }
              ],
              'class': 'p5',
              'module': 'Transform'
            },
            'shearY': {
              'name': 'shearY',
              'params': [
                {
                  'name': 'angle',
                  'description': '<p>angle of shear specified in radians or degrees,\n                       depending on current angleMode</p>\n',
                  'type': 'Number'
                }
              ],
              'class': 'p5',
              'module': 'Transform'
            },
            'translate': {
              'name': 'translate',
              'class': 'p5',
              'module': 'Transform',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'x',
                      'description': '<p>left/right translation</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'y',
                      'description': '<p>up/down translation</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'z',
                      'description': '<p>forward/backward translation (WEBGL only)</p>\n',
                      'type': 'Number',
                      'optional': true
                    }
                  ],
                  'chainable': 1
                },
                {
                  'params': [
                    {
                      'name': 'vector',
                      'description': '<p>the vector to translate by</p>\n',
                      'type': 'p5.Vector'
                    }
                  ],
                  'chainable': 1
                }
              ]
            },
            'storeItem': {
              'name': 'storeItem',
              'params': [
                {
                  'name': 'key',
                  'description': '',
                  'type': 'String'
                },
                {
                  'name': 'value',
                  'description': '',
                  'type': 'String|Number|Object|Boolean|p5.Color|p5.Vector'
                }
              ],
              'class': 'p5',
              'module': 'Data'
            },
            'getItem': {
              'name': 'getItem',
              'params': [
                {
                  'name': 'key',
                  'description': '<p>name that you wish to use to store in local storage</p>\n',
                  'type': 'String'
                }
              ],
              'class': 'p5',
              'module': 'Data'
            },
            'clearStorage': {
              'name': 'clearStorage',
              'class': 'p5',
              'module': 'Data'
            },
            'removeItem': {
              'name': 'removeItem',
              'params': [
                {
                  'name': 'key',
                  'description': '',
                  'type': 'String'
                }
              ],
              'class': 'p5',
              'module': 'Data'
            },
            'createStringDict': {
              'name': 'createStringDict',
              'class': 'p5',
              'module': 'Data',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'key',
                      'description': '',
                      'type': 'String'
                    },
                    {
                      'name': 'value',
                      'description': '',
                      'type': 'String'
                    }
                  ]
                },
                {
                  'params': [
                    {
                      'name': 'object',
                      'description': '<p>object</p>\n',
                      'type': 'Object'
                    }
                  ]
                }
              ]
            },
            'createNumberDict': {
              'name': 'createNumberDict',
              'class': 'p5',
              'module': 'Data',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'key',
                      'description': '',
                      'type': 'Number'
                    },
                    {
                      'name': 'value',
                      'description': '',
                      'type': 'Number'
                    }
                  ]
                },
                {
                  'params': [
                    {
                      'name': 'object',
                      'description': '<p>object</p>\n',
                      'type': 'Object'
                    }
                  ]
                }
              ]
            },
            'select': {
              'name': 'select',
              'params': [
                {
                  'name': 'selectors',
                  'description': '<p>CSS selector string of element to search for.</p>\n',
                  'type': 'String'
                },
                {
                  'name': 'container',
                  'description': '<p>CSS selector string, <a href="#/p5.Element">p5.Element</a>, or\n                                            <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTMLElement</a> to search within.</p>\n',
                  'type': 'String|p5.Element|HTMLElement',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'DOM'
            },
            'selectAll': {
              'name': 'selectAll',
              'params': [
                {
                  'name': 'selectors',
                  'description': '<p>CSS selector string of element to search for.</p>\n',
                  'type': 'String'
                },
                {
                  'name': 'container',
                  'description': '<p>CSS selector string, <a href="#/p5.Element">p5.Element</a>, or\n                                            <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTMLElement</a> to search within.</p>\n',
                  'type': 'String|p5.Element|HTMLElement',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'DOM'
            },
            'removeElements': {
              'name': 'removeElements',
              'class': 'p5',
              'module': 'DOM'
            },
            'changed': {
              'name': 'changed',
              'params': [
                {
                  'name': 'fxn',
                  'description': '<p>function to call when the element changes.\n                               <code>false</code> disables the function.</p>\n',
                  'type': 'Function|Boolean'
                }
              ],
              'class': 'p5',
              'module': 'DOM'
            },
            'input': {
              'name': 'input',
              'params': [
                {
                  'name': 'fxn',
                  'description': '<p>function to call when input is detected within\n                               the element.\n                               <code>false</code> disables the function.</p>\n',
                  'type': 'Function|Boolean'
                }
              ],
              'class': 'p5',
              'module': 'DOM'
            },
            'createDiv': {
              'name': 'createDiv',
              'params': [
                {
                  'name': 'html',
                  'description': '<p>inner HTML for the new <code>&lt;div&gt;&lt;/div&gt;</code> element.</p>\n',
                  'type': 'String',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'DOM'
            },
            'createP': {
              'name': 'createP',
              'params': [
                {
                  'name': 'html',
                  'description': '<p>inner HTML for the new <code>&lt;p&gt;&lt;/p&gt;</code> element.</p>\n',
                  'type': 'String',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'DOM'
            },
            'createSpan': {
              'name': 'createSpan',
              'params': [
                {
                  'name': 'html',
                  'description': '<p>inner HTML for the new <code>&lt;span&gt;&lt;/span&gt;</code> element.</p>\n',
                  'type': 'String',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'DOM'
            },
            'createImg': {
              'name': 'createImg',
              'class': 'p5',
              'module': 'DOM',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'src',
                      'description': '<p>relative path or URL for the image.</p>\n',
                      'type': 'String'
                    },
                    {
                      'name': 'alt',
                      'description': '<p>alternate text for the image.</p>\n',
                      'type': 'String'
                    }
                  ]
                },
                {
                  'params': [
                    {
                      'name': 'src',
                      'description': '',
                      'type': 'String'
                    },
                    {
                      'name': 'alt',
                      'description': '',
                      'type': 'String'
                    },
                    {
                      'name': 'crossOrigin',
                      'description': '<p>crossOrigin property to use when fetching the image.</p>\n',
                      'type': 'String',
                      'optional': true
                    },
                    {
                      'name': 'successCallback',
                      'description': '<p>function to call once the image loads. The new image will be passed\n                                     to the function as a <a href="#/p5.Element">p5.Element</a> object.</p>\n',
                      'type': 'Function',
                      'optional': true
                    }
                  ]
                }
              ]
            },
            'createA': {
              'name': 'createA',
              'params': [
                {
                  'name': 'href',
                  'description': '<p>URL of linked page.</p>\n',
                  'type': 'String'
                },
                {
                  'name': 'html',
                  'description': '<p>inner HTML of link element to display.</p>\n',
                  'type': 'String'
                },
                {
                  'name': 'target',
                  'description': '<p>target where the new link should open,\n                            either <code>\'_blank\'</code>, <code>\'_self\'</code>, <code>\'_parent\'</code>, or <code>\'_top\'</code>.</p>\n',
                  'type': 'String',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'DOM'
            },
            'createSlider': {
              'name': 'createSlider',
              'params': [
                {
                  'name': 'min',
                  'description': '<p>minimum value of the slider.</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'max',
                  'description': '<p>maximum value of the slider.</p>\n',
                  'type': 'Number'
                },
                {
                  'name': 'value',
                  'description': '<p>default value of the slider.</p>\n',
                  'type': 'Number',
                  'optional': true
                },
                {
                  'name': 'step',
                  'description': '<p>size for each step in the slider\'s range.</p>\n',
                  'type': 'Number',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'DOM'
            },
            'createButton': {
              'name': 'createButton',
              'params': [
                {
                  'name': 'label',
                  'description': '<p>label displayed on the button.</p>\n',
                  'type': 'String'
                },
                {
                  'name': 'value',
                  'description': '<p>value of the button.</p>\n',
                  'type': 'String',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'DOM'
            },
            'createCheckbox': {
              'name': 'createCheckbox',
              'params': [
                {
                  'name': 'label',
                  'description': '<p>label displayed after the checkbox.</p>\n',
                  'type': 'String',
                  'optional': true
                },
                {
                  'name': 'value',
                  'description': '<p>value of the checkbox. Checked is <code>true</code> and unchecked is <code>false</code>.</p>\n',
                  'type': 'Boolean',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'DOM'
            },
            'createSelect': {
              'name': 'createSelect',
              'class': 'p5',
              'module': 'DOM',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'multiple',
                      'description': '<p>support multiple selections.</p>\n',
                      'type': 'Boolean',
                      'optional': true
                    }
                  ]
                },
                {
                  'params': [
                    {
                      'name': 'existing',
                      'description': '<p>select element to wrap, either as a <a href="#/p5.Element">p5.Element</a> or\n                         a <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement" target="_blank">HTMLSelectElement</a>.</p>\n',
                      'type': 'Object'
                    }
                  ]
                }
              ]
            },
            'createRadio': {
              'name': 'createRadio',
              'class': 'p5',
              'module': 'DOM',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'containerElement',
                      'description': '<p>container HTML Element, either a <code>&lt;div&gt;&lt;/div&gt;</code>\nor <code>&lt;span&gt;&lt;/span&gt;</code>.</p>\n',
                      'type': 'Object',
                      'optional': true
                    }
                  ]
                },
                {
                  'params': [
                    {
                      'name': 'name',
                      'description': '<p>name parameter assigned to each option\'s <code>&lt;input&gt;&lt;/input&gt;</code> element.</p>\n',
                      'type': 'String',
                      'optional': true
                    }
                  ]
                },
                {
                  'params': [
                  ]
                }
              ]
            },
            'createColorPicker': {
              'name': 'createColorPicker',
              'params': [
                {
                  'name': 'value',
                  'description': '<p>default color as a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color" target="_blank">CSS color string</a>.</p>\n',
                  'type': 'String|p5.Color',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'DOM'
            },
            'createInput': {
              'name': 'createInput',
              'class': 'p5',
              'module': 'DOM',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'value',
                      'description': '<p>default value of the input box. Defaults to an empty string <code>\'\'</code>.</p>\n',
                      'type': 'String',
                      'optional': true
                    },
                    {
                      'name': 'type',
                      'description': '<p>type of input. Defaults to <code>\'text\'</code>.</p>\n',
                      'type': 'String',
                      'optional': true
                    }
                  ]
                },
                {
                  'params': [
                    {
                      'name': 'value',
                      'description': '',
                      'type': 'String',
                      'optional': true
                    }
                  ]
                }
              ]
            },
            'createFileInput': {
              'name': 'createFileInput',
              'params': [
                {
                  'name': 'callback',
                  'description': '<p>function to call once the file loads.</p>\n',
                  'type': 'Function'
                },
                {
                  'name': 'multiple',
                  'description': '<p>allow mult
