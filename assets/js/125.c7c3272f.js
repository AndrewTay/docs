(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{1987:function(e,n,o){e.exports=o.p+"assets/img/connection-credentials.0aaa25ff.png"},1988:function(e,n,o){e.exports=o.p+"assets/img/recipe-settings.04e53986.png"},1989:function(e,n,o){e.exports=o.p+"assets/img/slack-flow.cea721b8.gif"},1990:function(e,n,o){e.exports=o.p+"assets/img/dm-connections.e03635bc.gif"},1991:function(e,n,o){e.exports=o.p+"assets/img/manage.228f4529.gif"},1992:function(e,n,o){e.exports=o.p+"assets/img/disconnect-personal-connections.0e1ac433.gif"},2581:function(e,n,o){"use strict";o.r(n);var t=o(0),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"workbot-personal-connections"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workbot-personal-connections"}},[e._v("#")]),e._v(" Workbot personal connections")]),e._v(" "),t("p",[e._v("By default, recipes perform actions based on the identity & permissions of the credentials used to connect the application.")]),e._v(" "),t("p",[t("DocImage",{attrs:{src:o(1987),alt:"Connection credentials",width:"2800",height:"1178"}}),e._v(" "),t("em",[e._v("A sales manager's credentials used in Salesforce connection")])],1),e._v(" "),t("p",[e._v("In the example above, Workbot commands create opportunities in Salesforce — but solely as the sales manager, i.e. the Salesforce connection owner. This means that even though sales reps are creating opportunities in Slack, they would all be reflected as creations of the sales manager in Salesforce. This is also an issue for approvals workflows — approving users need to perform approvals as themselves, not as the connection owner.")]),e._v(" "),t("p",[e._v("Using personal connections, Workbot allows users to authenticate themselves before carrying out actions for them in other apps, e.g. asking sales reps to log in to Salesforce before dispatching Workbot to create the opportunity in Salesforce on their behalf. These personal connection persist, meaning that the user doesn't have to provide credentials every time they use a Workbot command.")]),e._v(" "),t("p",[e._v("To enable personal connections, go to "),t("strong",[e._v("Recipe > Settings")]),e._v(" page and enable "),t("strong",[e._v("Verify user access at runtime")]),e._v(". Currently, Workbot supports personal connections to apps with OAuth2 connections only, e.g. Salesforce, ServiceNow, Box.")]),e._v(" "),t("p",[t("DocImage",{attrs:{src:o(1988),alt:"recipe-setting",width:"2800",height:"1689"}})],1),e._v(" "),t("p",[e._v("When this feature is enabled, Workbot recipes will request individual users to authenticate (i.e. login) to the app, from Slack, before carrying out the app action.")]),e._v(" "),t("p",[t("DocImage",{attrs:{src:o(1989),alt:"personal-connection-flow",width:"1345",height:"687"}}),e._v(" "),t("em",[e._v("Personal connection setup for Salesforce Approval flow")])],1),e._v(" "),t("h1",{attrs:{id:"viewing-personal-connections"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#viewing-personal-connections"}},[e._v("#")]),e._v(" Viewing personal connections")]),e._v(" "),t("p",[e._v("You can view your personal connections sending '"),t("em",[e._v("connections")]),e._v("' in a DM to Workbot.")]),e._v(" "),t("p",[t("DocImage",{attrs:{src:o(1990),alt:"Personal connections - DM 'connections'",width:"1370",height:"796"}}),e._v(" "),t("em",[e._v("Sending a 'connections' DM to Workbot to view personal connections")])],1),e._v(" "),t("p",[e._v("You can also type '"),t("em",[e._v("help")]),e._v("'' in the DM, followed by clicking on the "),t("em",[e._v("personal accounts")]),e._v(" button.")]),e._v(" "),t("p",[t("DocImage",{attrs:{src:o(1991),alt:"personal-connection-control",width:"1370",height:"796"}}),e._v(" "),t("em",[e._v("Viewing personal connections")])],1),e._v(" "),t("p",[e._v("If Workbot has been invited to your channels, you can use '"),t("em",[e._v("@Workbot connections")]),e._v("'' or '"),t("em",[e._v("@Workbot help")]),e._v("' to view your personal connections in those channels.")]),e._v(" "),t("h1",{attrs:{id:"disconnecting-your-personal-connections"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disconnecting-your-personal-connections"}},[e._v("#")]),e._v(" Disconnecting your personal connections")]),e._v(" "),t("p",[e._v("You can disconnect your personal connections anytime by viewing your personal connections and clicking 'Disconnect'.")]),e._v(" "),t("p",[t("DocImage",{attrs:{src:o(1992),alt:"Disconnecting personal connections",width:"1370",height:"796"}}),e._v(" "),t("em",[e._v("Disconnecting a personal connection")])],1)])}),[],!1,null,null,null);n.default=s.exports}}]);