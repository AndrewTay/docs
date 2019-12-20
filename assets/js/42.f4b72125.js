(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{155:function(e,t,o){e.exports=o.p+"assets/img/custom-oauth-profile.75925a6f.png"},156:function(e,t,o){e.exports=o.p+"assets/img/new-custom-oauth-1.a98146e5.png"},157:function(e,t,o){e.exports=o.p+"assets/img/new-custom-oauth-2.875504c3.png"},158:function(e,t,o){e.exports=o.p+"assets/img/new-custom-oauth-3.da9ab042.png"},159:function(e,t,o){e.exports=o.p+"assets/img/using-custom-oauth-profiles.365643ce.png"},2272:function(e,t,o){"use strict";o.r(t);var s=o(0),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"what-are-custom-oauth-profiles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-are-custom-oauth-profiles"}},[e._v("#")]),e._v(" What are custom OAuth profiles?")]),e._v(" "),s("p",[e._v("For your Slack app to perform actions, it requires certain permission scopes. At the minimum, Slack triggers & actions require the following permission scopes:")]),e._v(" "),s("ul",[s("li",[e._v("channels:read")]),e._v(" "),s("li",[e._v("channels:write")]),e._v(" "),s("li",[e._v("chat:write:bot")]),e._v(" "),s("li",[e._v("chat:write:user")]),e._v(" "),s("li",[e._v("groups:read")]),e._v(" "),s("li",[e._v("groups:write")]),e._v(" "),s("li",[e._v("users:read")])]),e._v(" "),s("p",[e._v("However, your organization may have pre-approved a specific set of permission scopes for use — and you need anyone creating Slack recipes to adhere to it.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:o(55),alt:"Custom permission scopes",width:"1489",height:"2029"}}),e._v(" "),s("em",[e._v("A custom set of permission scopes")])],1),e._v(" "),s("p",[e._v("Custom OAuth profiles are a way for you to 'share' your Slack app (and its specific set of permission scopes) with your team members. Your team can connect your Slack app (using its custom OAuth profile) for use in their Slack recipes. This way, they don't have to create an app of their own from scratch. More importantly, you can enforce the approved permission scopes across your team.")]),e._v(" "),s("h3",{attrs:{id:"creating-a-custom-oauth-profile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-custom-oauth-profile"}},[e._v("#")]),e._v(" Creating a custom OAuth profile")]),e._v(" "),s("p",[e._v("To get started, head to Tools ➤ View all tools. Under "),s("strong",[e._v("Connect apps")]),e._v(", click on "),s("strong",[e._v("Custom OAuth profiles")]),e._v(". Once there, click on "),s("strong",[e._v("Create a new custom OAuth profile")]),e._v(".")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:o(155),alt:"Custom OAuth profile",width:"1658",height:"597"}}),e._v(" "),s("em",[e._v("If you don't see Custom OAuth profile, make sure your Workato team or account has access to it")])],1),e._v(" "),s("p",[e._v("Next, choose "),s("strong",[e._v("Slack")]),e._v(" as your application.\n"),s("DocImage",{attrs:{src:o(156),alt:"Slack custom OAuth profile",width:"1658",height:"1052"}})],1),e._v(" "),s("p",[e._v("In Step 2, click on "),s("strong",[e._v("Create new app")]),e._v(".")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:o(157),alt:"Creating a new Slack app",width:"1658",height:"630"}})],1),e._v(" "),s("p",[e._v("This will open a new tab that brings you to "),s("a",{attrs:{href:"https://api.slack.com/apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://api.slack.com/apps"),s("OutboundLink")],1),e._v(". Keep both the Workato tab and this new tab open - you'll need both to complete Steps 3 and 4.")]),e._v(" "),s("p",[e._v("Sign in to your team (if you haven't already), then click on "),s("strong",[e._v("Create New App")]),e._v(".")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:o(56),alt:"Create new app in Slack 1",width:"1702",height:"444"}})],1),e._v(" "),s("p",[e._v("In the form that pops up, give your app a name - it typically describes its intended functionality, e.g. HRBot or SupportBot.")]),e._v(" "),s("p",[e._v("Choose which Slack team this app belongs to, then click on "),s("strong",[e._v("Create App")]),e._v(".")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:o(57),alt:"Create new app in Slack",width:"1096",height:"1104"}})],1),e._v(" "),s("p",[e._v("Your app should now be created. You should be greeted with your new app's "),s("strong",[e._v("Basic Information")]),e._v(" page. If not - don't sweat it. Just click on "),s("strong",[e._v("Basic Information")]),e._v(" from the left navigation menu.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:o(58),alt:"New app created",width:"1674",height:"1344"}})],1),e._v(" "),s("p",[e._v("Scroll down to "),s("strong",[e._v("App Credentials")]),e._v(" you'll need this information back in your Workato tab. With this info handy, we can now head back to the Workato tab to complete Step 3.")]),e._v(" "),s("p",[e._v("In Step 3, fill up:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Name")]),e._v(": This should be the same name you used when creating the app e.g. HRBot")]),e._v(" "),s("li",[s("strong",[e._v("Client ID")])]),e._v(" "),s("li",[s("strong",[e._v("Client secret")])]),e._v(" "),s("li",[s("strong",[e._v("Verification token")])])]),e._v(" "),s("p",[s("DocImage",{attrs:{src:o(158),alt:"App credentials",width:"1658",height:"1654"}}),e._v(" "),s("em",[e._v("Configuring Workato to talk to your app")])],1),e._v(" "),s("p",[e._v("Hit "),s("strong",[e._v("Save")]),e._v(" once you're done. We can now configure your app to talk to Workato in Step 4.")]),e._v(" "),s("h3",{attrs:{id:"enabling-event-subscriptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enabling-event-subscriptions"}},[e._v("#")]),e._v(" Enabling event subscriptions")]),e._v(" "),s("p",[e._v("To enable event subscriptions, go to your Slack app's page (it should look something like '"),s("a",{attrs:{href:"https://api.slack.com/apps/%7Byour_app_id%7D",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://api.slack.com/apps/{your_app_id}"),s("OutboundLink")],1),e._v("' — your app ID is unique to your app). Under Event Subscriptions, turn on 'Enable Events', then paste the URL from your New event trigger into the Request URL field and click Save.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:o(59),alt:"Event subscriptions",width:"974",height:"626"}}),e._v(" "),s("em",[e._v("Enabling event subscriptions")])],1),e._v(" "),s("p",[e._v("For a "),s("router-link",{attrs:{to:"/connectors/slack/triggers.html#new-event-trigger-real-time"}},[e._v("new event trigger")]),e._v(" to pick up events, your app needs to know where to send these events to. That's why it comes with a target URL. This Target URL is generated once you've entered an "),s("strong",[e._v("Event name")]),e._v(". Once your app is sending events to your recipe's target URL, the recipe can take over and execute your recipe's actions.")],1),e._v(" "),s("h3",{attrs:{id:"subscribing-to-workspace-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscribing-to-workspace-events"}},[e._v("#")]),e._v(" Subscribing to workspace events")]),e._v(" "),s("p",[e._v("Slack provides an entire list of workspace events that you can subscribe to — any of these events can kick-start your recipes.")]),e._v(" "),s("p",[e._v("In this example, customer success users are given the option to create a private channel between themselves & their customers whenever messages containing the word 'resolve' are posted in certain channels and direct messages (DMs). Hence, the events "),s("code",[e._v("message.channels")]),e._v(", "),s("code",[e._v("message.groups")]),e._v(" and "),s("code",[e._v("message.im")]),e._v(" were chosen as triggers.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:o(60),alt:"Event subscription example",width:"704",height:"359"}}),e._v(" "),s("em",[e._v("Whenever a message is posted to a channel, a private channel, or a DM, an event is sent to the recipe")])],1),e._v(" "),s("p",[e._v("Subscribing to events will automatically add scopes that your app does not already have. This may give your app unintended permissions from the additional scopes. After subscribing to events, we strongly recommend going to "),s("strong",[e._v("OAuth & Permissions")]),e._v(" → "),s("strong",[e._v("Scopes")]),e._v(" to confirm your app's permission scopes.")]),e._v(" "),s("h3",{attrs:{id:"installing-your-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-your-app"}},[e._v("#")]),e._v(" Installing your app")]),e._v(" "),s("p",[e._v("Once you've subscribed to at least 1 workspace event, a permission scope is automatically added. This allows you to install the app to your workspace. From the left navigation menu, under "),s("strong",[e._v("Settings")]),e._v(", head over to "),s("strong",[e._v("Install App")]),e._v(".")]),e._v(" "),s("ul",[s("li",[e._v("Click on "),s("strong",[e._v("Install App to Workspace")])])]),e._v(" "),s("p",[s("DocImage",{attrs:{src:o(61),alt:"Install app",width:"1940",height:"460"}})],1),e._v(" "),s("p",[e._v("Choose your Slack team and authorize it to complete the installation.")]),e._v(" "),s("p",[e._v("Jumping back to your custom OAuth profile in Workato, under Step 4, click on "),s("strong",[e._v("Done")]),e._v(" to finish configuring the custom OAuth profile. You can now use this custom OAuth profile in other Slack connections in Workato!")]),e._v(" "),s("h3",{attrs:{id:"using-your-custom-oauth-profile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-your-custom-oauth-profile"}},[e._v("#")]),e._v(" Using your custom OAuth profile")]),e._v(" "),s("p",[e._v("Once you've created a custom OAuth profile, anyone in your Workato workspace can use it in their own Slack connections to the Slack workspace — without having to create and configure a new Slack app.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:o(159),alt:"Using custom OAuth profiles",width:"1688",height:"1450"}}),e._v(" "),s("em",[e._v("Using custom OAuth profiles in a new Slack connection")])],1),e._v(" "),s("p",[e._v("Note that custom OAuth profiles, by definition, can only connect to a single Slack workspace, i.e. 1 custom OAuth profile cannot be used across multiple Slack workspaces.")])])}),[],!1,null,null,null);t.default=a.exports},55:function(e,t,o){e.exports=o.p+"assets/img/custom-permission-scopes.ca1e3149.png"},56:function(e,t,o){e.exports=o.p+"assets/img/create-new-app-in-slack-1.68521b85.png"},57:function(e,t,o){e.exports=o.p+"assets/img/create-new-app-in-slack-2.5470fd21.png"},58:function(e,t,o){e.exports=o.p+"assets/img/new-app-created.666f839a.png"},59:function(e,t,o){e.exports=o.p+"assets/img/event-subscriptions.1dff32f7.gif"},60:function(e,t,o){e.exports=o.p+"assets/img/event-subscription-example.e7817b39.png"},61:function(e,t,o){e.exports=o.p+"assets/img/install-app.91e42e7c.png"}}]);