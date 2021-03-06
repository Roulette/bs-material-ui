// Generated by BUCKLESCRIPT VERSION 1.9.2, PLEASE EDIT WITH CARE
'use strict';

var ReasonReact        = require("reason-react/src/reasonReact.js");
var MaterialUi         = require("material-ui");
var Js_undefined       = require("bs-platform/lib/js/js_undefined.js");
var Utils$BsMaterialUi = require("./utils.js");

function make(paragraph, noWrap, gutterBottom, textType, style, children) {
  return ReasonReact.wrapJsForReason(MaterialUi.Typography, {
              paragraph: Utils$BsMaterialUi.unwrapBool(paragraph),
              noWrap: Utils$BsMaterialUi.unwrapBool(noWrap),
              gutterBottom: Utils$BsMaterialUi.unwrapBool(gutterBottom),
              style: Js_undefined.from_opt(style),
              type: Js_undefined.from_opt(textType)
            }, children);
}

exports.make = make;
/* ReasonReact Not a pure module */
