// Generated by BUCKLESCRIPT VERSION 1.9.2, PLEASE EDIT WITH CARE
'use strict';

var ReasonReact  = require("reason-react/src/reasonReact.js");
var MaterialUi   = require("material-ui");
var Js_undefined = require("bs-platform/lib/js/js_undefined.js");

function make(classes, children) {
  return ReasonReact.wrapJsForReason(MaterialUi.DialogActions, {
              classes: Js_undefined.from_opt(classes)
            }, children);
}

exports.make = make;
/* ReasonReact Not a pure module */