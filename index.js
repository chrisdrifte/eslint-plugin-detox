/**
 * @fileoverview ESLint config for wix/detox
 * @author Chris Drifte
 */
"use strict";

module.exports = {
  meta: {
    name: "eslint-plugin-wix-detox",
    version: "1.0.0",
  },
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
