(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{2012:function(e,t,s){e.exports=s.p+"assets/img/replace-button-example.a889ddeb.gif"},2013:function(e,t,s){e.exports=s.p+"assets/img/reduce-clutter.6203a6d2.gif"},2014:function(e,t,s){e.exports=s.p+"assets/img/unmapped-button.7e9e0edf.png"},2015:function(e,t,s){e.exports=s.p+"assets/img/message-to-update-optional-fields.c6b5a840.gif"},208:function(e,t,s){e.exports=s.p+"assets/img/message-to-update-example.b4947d30.png"},209:function(e,t,s){e.exports=s.p+"assets/img/update-message-example.4a4aee39.gif"},2584:function(e,t,s){"use strict";s.r(t);var a=s(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"updating-workbot-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-workbot-messages"}},[e._v("#")]),e._v(" Updating Workbot messages")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:s(209),alt:"Update message example",width:"600",height:"210"}}),e._v(" "),a("em",[e._v("Message updating from button, menu, and back to button again")])],1),e._v(" "),a("p",[e._v("You can update a bot message that was posted earlier by using a post message action. This is especially useful for the use cases shown in the table below.")]),e._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",[e._v("Use case")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Replacing buttons or menus")]),e._v(" "),a("td",[e._v("\n        You may want to remove buttons or message menus after users have clicked on their selection (to prevent spam):"),a("br"),e._v(" "),a("img",{attrs:{src:s(2012)}}),a("br"),e._v("\n        In the example above, not only are the buttons removed in the updated message, it also displays the user's choice, followed by a 'thank you' message.\n        ")])]),e._v(" "),a("tr",[a("td",[e._v("Reduce clutter in chat")]),e._v(" "),a("td",[e._v("\n      You may also want to reduce clutter in bot conversations by 'reusing' the original bot message (by repeatedly updating the original):"),a("br"),e._v(" "),a("img",{attrs:{src:s(2013)}}),a("br"),e._v("\n      In the example above, the updating message clears the lengthy original message and prompts the user to key in another query instead.\n      ")])])])]),e._v(" "),a("h2",{attrs:{id:"how-it-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[e._v("#")]),e._v(" How it works")]),e._v(" "),a("p",[e._v("You can instruct Workbot to use the message contents of a "),a("strong",[e._v("Post message")]),e._v(" action to update an existing bot message.")]),e._v(" "),a("p",[e._v("Each message posted in Slack has a "),a("kbd",[e._v("Message ID")]),e._v(", displayed in the output of Workbot triggers & actions.")]),e._v(" "),a("blockquote",[a("p",[e._v("When a user invokes a trigger by typing a command, the trigger output will not have a message ID (since there's no message to update yet). However, if the trigger is invoked from a bot command of a message (e.g. a submit button command, submit menu option command, or a dialog submission), the trigger output will contain the message ID of that message.")])]),e._v(" "),a("p",[e._v("Hence, the "),a("kbd",[e._v("Message ID")]),e._v(" datapill can be obtained from the output of a "),a("strong",[e._v("Post command")]),e._v(" trigger or a "),a("strong",[e._v("Post message")]),e._v("  / "),a("strong",[e._v("Post command reply")]),e._v(" action.")]),e._v(" "),a("h2",{attrs:{id:"using-message-to-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-message-to-update"}},[e._v("#")]),e._v(" Using 'Message to update'")]),e._v(" "),a("p",[e._v("To update a message, use its "),a("kbd",[e._v("Message ID")]),e._v(" in the "),a("strong",[e._v("Message to update")]),e._v(" field of a new "),a("strong",[e._v("Post message")]),e._v(" action. This field can be found under the 'Advanced' section of the action.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:s(208),alt:"Message to update example",width:"2156",height:"544"}})],1),e._v(" "),a("p",[e._v("The original message will be replaced by the new message defined in the "),a("strong",[e._v("Post message")]),e._v(" action, along with any interactive components like buttons or message menus.")]),e._v(" "),a("h2",{attrs:{id:"replacing-messages-containing-buttons-message-menus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replacing-messages-containing-buttons-message-menus"}},[e._v("#")]),e._v(" Replacing messages containing buttons & message menus")]),e._v(" "),a("p",[e._v("To replace messages containing buttons, message menus, or both, simply add an 'unmapped' button or message menu (depending on what you're replacing) in the updating post message action.")]),e._v(" "),a("p",[e._v("An 'unmapped' button (or message menu) is one where the "),a("strong",[e._v("Submit button command")]),e._v(" (or "),a("strong",[e._v("Submit menu option command")]),e._v(") does not match any command triggers of any Workbot recipes in the Workato account. This is because 'unmapped' buttons or message menus are not displayed in messages.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:s(2014),alt:"Unmapped button",width:"625",height:"761"}}),e._v(" "),a("em",[e._v("Since 'blank' does not trigger any Workbot recipe, no button will be shown in the message")])],1),e._v(" "),a("h2",{attrs:{id:"common-mistakes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-mistakes"}},[e._v("#")]),e._v(" Common mistakes")]),e._v(" "),a("ol",[a("li",[a("p",[a("strong",[e._v("Updating the wrong message")]),e._v("\nTo ensure that you're updating the correct message, make sure that you use the "),a("kbd",[e._v("Message ID")]),e._v(" from the output step which posted the original message.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Can't find the 'Message to update' field")]),e._v("\nMake sure that it's checked from the 'Add/remove optional fields' list at the bottom of the post message action. After it's enabled, the field can be found in the Advanced group of the post message action.\n"),a("DocImage",{attrs:{src:s(2015),alt:"Message to update optional fields",width:"414",height:"254"}})],1)]),e._v(" "),a("li",[a("p",[a("kbd",[e._v("Message ID")]),e._v(" "),a("strong",[e._v("pill is empty")]),e._v("\nRemember, when a user invokes a trigger by typing a command, the trigger output will not have a message ID (since there's no message to update yet)."),a("br"),e._v("\nHowever, if the trigger is invoked from a bot command of a message (e.g. a submit button command, submit menu option command, or a dialog submission), the trigger output will contain the message ID of that message."),a("br"),e._v("\nIf you want to use a "),a("kbd",[e._v("Message ID")]),e._v(" pill from the output of a trigger, make sure that the trigger is invoked by a button / menu option click or dialog submission from a bot command of a message.")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);