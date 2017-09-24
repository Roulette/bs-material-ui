// Generated by BUCKLESCRIPT VERSION 1.9.2, PLEASE EDIT WITH CARE
'use strict';

var ReasonReact  = require("reason-react/src/reasonReact.js");
var MaterialUi   = require("material-ui");
var Js_undefined = require("bs-platform/lib/js/js_undefined.js");

function make(badgeContent, style, children) {
  return ReasonReact.wrapJsForReason(MaterialUi.Badge, {
              badgeContent: badgeContent,
              style: Js_undefined.from_opt(style)
            }, children);
}

exports.make = make;
/* ReasonReact Not a pure module */