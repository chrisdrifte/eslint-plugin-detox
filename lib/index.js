/**
 * @fileoverview ESLint config for wix/detox
 * @author Chris Drifte
 */
"use strict";

module.exports = {
  environments: {
    detox: {
      globals: {
        detox: false,
        device: false,
        expect: false,
        waitFor: false,
        element: false,
        by: false,
        web: false,
      },
    },
  },
};
