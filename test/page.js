// Generated by BUCKLESCRIPT VERSION 1.9.2, PLEASE EDIT WITH CARE
'use strict';

var List                           = require("bs-platform/lib/js/list.js");
var $$Array                        = require("bs-platform/lib/js/array.js");
var Block                          = require("bs-platform/lib/js/block.js");
var Curry                          = require("bs-platform/lib/js/curry.js");
var React                          = require("react");
var Pervasives                     = require("bs-platform/lib/js/pervasives.js");
var ReasonReact                    = require("reason-react/src/reasonReact.js");
var Paper$BsMaterialUi             = require("../src/paper.js");
var MaterialUi$slashcolors         = require("material-ui/colors");
var AppBar$BsMaterialUi            = require("../src/appBar.js");
var Avatar$BsMaterialUi            = require("../src/avatar.js");
var Button$BsMaterialUi            = require("../src/button.js");
var Dialog$BsMaterialUi            = require("../src/dialog.js");
var Toolbar$BsMaterialUi           = require("../src/toolbar.js");
var Checkbox$BsMaterialUi          = require("../src/checkbox.js");
var Typography$BsMaterialUi        = require("../src/typography.js");
var DialogTitle$BsMaterialUi       = require("../src/dialogTitle.js");
var DialogActions$BsMaterialUi     = require("../src/dialogActions.js");
var DialogContent$BsMaterialUi     = require("../src/dialogContent.js");
var DialogContentText$BsMaterialUi = require("../src/dialogContentText.js");

console.log(MaterialUi$slashcolors.teal[50]);

function addItem(_, param) {
  var state = param[/* state */3];
  return /* Update */Block.__(0, [/* record */[
              /* checked */state[/* checked */0],
              /* expanded */state[/* expanded */1],
              /* items : :: */[
                List.hd(state[/* items */2]) + 1 | 0,
                state[/* items */2]
              ],
              /* openDialog */state[/* openDialog */3]
            ]]);
}

function openDialog(_, param) {
  var state = param[/* state */3];
  return /* Update */Block.__(0, [/* record */[
              /* checked */state[/* checked */0],
              /* expanded */state[/* expanded */1],
              /* items */state[/* items */2],
              /* openDialog : true */1
            ]]);
}

function closeDialog(_, param) {
  var state = param[/* state */3];
  return /* Update */Block.__(0, [/* record */[
              /* checked */state[/* checked */0],
              /* expanded */state[/* expanded */1],
              /* items */state[/* items */2],
              /* openDialog : false */0
            ]]);
}

function checkBox(checked, param) {
  var state = param[/* state */3];
  return /* Update */Block.__(0, [/* record */[
              /* checked */checked,
              /* expanded */state[/* expanded */1],
              /* items */state[/* items */2],
              /* openDialog */state[/* openDialog */3]
            ]]);
}

var component = ReasonReact.statefulComponent("Greeting");

function make(name, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function (param) {
      var state = param[/* state */3];
      var update = param[/* update */2];
      return React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, AppBar$BsMaterialUi.make(/* None */0, /* None */0, /* None */0, /* array */[ReasonReact.element(/* None */0, /* None */0, Toolbar$BsMaterialUi.make(/* None */0, /* None */0, /* array */[
                                    ReasonReact.element(/* None */0, /* None */0, Typography$BsMaterialUi.make(/* None */0, /* None */0, /* None */0, /* Some */["title"], /* Some */[{
                                                color: "white"
                                              }], /* array */[name])),
                                    React.createElement("div", {
                                          style: {
                                            flex: "1"
                                          }
                                        }),
                                    ReasonReact.element(/* None */0, /* None */0, Button$BsMaterialUi.make(/* None */0, /* Some */[Curry._1(update, addItem)], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */["Add Item"]))
                                  ]))])), React.createElement("div", {
                      style: {
                        paddingTop: "64px"
                      }
                    }, $$Array.of_list(List.map((function (item) {
                                return ReasonReact.element(/* Some */[Pervasives.string_of_int(item)], /* None */0, Paper$BsMaterialUi.make(/* None */0, /* None */0, /* Some */[{
                                                  marginTop: "16px",
                                                  padding: "8px"
                                                }], /* array */[ReasonReact.element(/* None */0, /* None */0, Typography$BsMaterialUi.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */["Element number " + Pervasives.string_of_int(item)]))]));
                              }), state[/* items */2])), ReasonReact.element(/* None */0, /* None */0, Dialog$BsMaterialUi.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[Curry._1(update, closeDialog)], /* Some */[state[/* openDialog */3]], /* array */[
                              ReasonReact.element(/* None */0, /* None */0, DialogTitle$BsMaterialUi.make(/* None */0, /* None */0, /* array */["Welcome to the dialog"])),
                              ReasonReact.element(/* None */0, /* None */0, DialogContent$BsMaterialUi.make(/* None */0, /* array */[ReasonReact.element(/* None */0, /* None */0, DialogContentText$BsMaterialUi.make(/* None */0, /* array */["Thanks for opening this awesome dialog"]))])),
                              ReasonReact.element(/* None */0, /* None */0, DialogActions$BsMaterialUi.make(/* None */0, /* array */[ReasonReact.element(/* None */0, /* None */0, Button$BsMaterialUi.make(/* None */0, /* Some */[Curry._1(update, closeDialog)], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */["Close"]))]))
                            ])), ReasonReact.element(/* None */0, /* None */0, Button$BsMaterialUi.make(/* Some */[/* true */1], /* Some */[Curry._1(update, openDialog)], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */["Click me to open dialog"])), ReasonReact.element(/* None */0, /* None */0, Button$BsMaterialUi.make(/* Some */[/* true */1], /* Some */[Curry._1(update, addItem)], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */["Click me to add Item"])), ReasonReact.element(/* None */0, /* None */0, Avatar$BsMaterialUi.make(/* Some */["a kitten"], /* None */0, /* None */0, /* None */0, /* Some */["div"], /* None */0, /* None */0, /* Some */["./kitten.jpg"], /* None */0, /* None */0, /* array */[])), "Fixed checkbox", ReasonReact.element(/* None */0, /* None */0, Checkbox$BsMaterialUi.make(/* Some */[/* true */1], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[])), "Dead checkbox", ReasonReact.element(/* None */0, /* None */0, Checkbox$BsMaterialUi.make(/* Some */[/* false */0], /* None */0, /* None */0, /* Some */[/* true */1], /* Some */[/* true */1], /* Some */["dead"], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[])), "Live checkbox", ReasonReact.element(/* None */0, /* None */0, Checkbox$BsMaterialUi.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["mah checkbox"], /* Some */[Curry._1(update, checkBox)], /* None */0, /* array */[])), "Custom icons", ReasonReact.element(/* None */0, /* None */0, Checkbox$BsMaterialUi.make(/* None */0, /* None */0, /* Some */["CH-CH-CHECKED"], /* None */0, /* None */0, /* None */0, /* Some */["CHECKIT"], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[]))));
    });
  newrecord[/* initialState */10] = (function () {
      return /* record */[
              /* checked : false */0,
              /* expanded : false */0,
              /* items : :: */[
                1,
                /* [] */0
              ],
              /* openDialog : false */0
            ];
    });
  return newrecord;
}

exports.addItem     = addItem;
exports.openDialog  = openDialog;
exports.closeDialog = closeDialog;
exports.checkBox    = checkBox;
exports.component   = component;
exports.make        = make;
/*  Not a pure module */