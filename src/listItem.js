// Generated by BUCKLESCRIPT VERSION 1.9.2, PLEASE EDIT WITH CARE
'use strict';

var ReasonReact        = require("reason-react/src/reasonReact.js");
var MaterialUi         = require("material-ui");
var Js_undefined       = require("bs-platform/lib/js/js_undefined.js");
var Utils$BsMaterialUi = require("./utils.js");

function make(button, dense, disableGutters, divider, onClick, className, component, style, children) {
  return ReasonReact.wrapJsForReason(MaterialUi.Paper, {
              dense: Utils$BsMaterialUi.unwrapBool(dense),
              button: Utils$BsMaterialUi.unwrapBool(button),
              disableGutters: Utils$BsMaterialUi.unwrapBool(disableGutters),
              divider: Utils$BsMaterialUi.unwrapBool(divider),
              style: Js_undefined.from_opt(style),
              component: Js_undefined.from_opt(component),
              className: Js_undefined.from_opt(className),
              onClick: Js_undefined.from_opt(onClick)
            }, children);
}

exports.make = make;
/* ReasonReact Not a pure module */