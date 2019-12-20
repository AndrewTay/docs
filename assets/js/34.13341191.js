(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1250:function(t,e,a){t.exports=a.p+"assets/img/connection-popup.8caa43d2.png"},1251:function(t,e,a){t.exports=a.p+"assets/img/http-connector-auth-none.e7917abc.png"},1252:function(t,e,a){t.exports=a.p+"assets/img/http-connector-auth-basic.36c690a0.png"},1253:function(t,e,a){t.exports=a.p+"assets/img/http-connector-auth-header.a197fb24.png"},1254:function(t,e,a){t.exports=a.p+"assets/img/http-connector-auth-query-params.12ac4dce.png"},1255:function(t,e,a){t.exports=a.p+"assets/img/http-connector-auth-custom.c7929d2f.png"},1256:function(t,e,a){t.exports=a.p+"assets/img/http-connector-auth-oauth2-code-grant.08aab76c.png"},1257:function(t,e,a){t.exports=a.p+"assets/img/http-connector-auth-oauth2-cred-grant.63d5711a.png"},1258:function(t,e,a){t.exports=a.p+"assets/img/http-connector-auth-oauth2.e1b3eba4.png"},165:function(t,e,a){t.exports=a.p+"assets/img/eventbrite-authentication.32bbc432.png"},166:function(t,e,a){t.exports=a.p+"assets/img/eventbrite-app-management.866cb55c.png"},167:function(t,e,a){t.exports=a.p+"assets/img/jira-connection.733aa8f8.png"},168:function(t,e,a){t.exports=a.p+"assets/img/connection-settings-jira.7aefb0b9.png"},2394:function(t,e,a){"use strict";a.r(e);var n=a(0),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"http-connection-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http-connection-setup"}},[t._v("#")]),t._v(" HTTP connection setup")]),t._v(" "),n("p",[t._v("In order to interact with an API, we first need to set up our connection to the app to interact with. Click the "),n("code",[t._v("Link your account")]),t._v(" button and the connection popup appears.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(1250),alt:"Connection popup for HTTP connector",width:"1091",height:"794"}}),t._v(" "),n("em",[t._v("Connection popup for HTTP connector")])],1),t._v(" "),n("p",[t._v("Configure the following input fields to connect successfully. Apart from authentication type and fields subsequently generated when a type is selected, most fields can usually be left to their default values.")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Input field")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Connection name")]),t._v(" "),n("td",[t._v("Give your HTTP connection a name to identify this connection.")])]),t._v(" "),n("tr",[n("td",[t._v("Authentication type")]),t._v(" "),n("td",[t._v("Type of authentication used to connect to your app. Refer to the API documentation of the app you're connecting to for more information.")])]),t._v(" "),n("tr",[n("td",[t._v("Use client SSL certificate")]),t._v(" "),n("td",[n("code",[t._v("Yes")]),t._v(" if your API requires client SSL certificates. "),n("code",[t._v("No")]),t._v(" if it does not require client SSL certificates.")])]),t._v(" "),n("tr",[n("td",[t._v("Is this app in a private network?")]),t._v(" "),n("td",[n("code",[t._v("Yes")]),t._v(" if you're connecting to an on-premise app behind the firewall. This requires an "),n("router-link",{attrs:{to:"/on-prem.html"}},[t._v("on-premise agent")]),t._v(" to be set up in Workato. "),n("code",[t._v("No")]),t._v(" if you're connecting to an app on the public cloud.")],1)])])]),t._v(" "),n("h2",{attrs:{id:"authentication-types"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authentication-types"}},[t._v("#")]),t._v(" Authentication types")]),t._v(" "),n("p",[t._v("The following section details the different authentication types and how to set them up. They include:")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#authentication-type-none"}},[t._v("None")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#authentication-type-basic"}},[t._v("Basic")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#authentication-type-header-auth"}},[t._v("Header auth")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#authentication-type-query-params"}},[t._v("Query params")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#authentication-type-custom"}},[t._v("Custom")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#authentication-type-oauth2-authorization-code-grant"}},[t._v("OAuth2 (authorization code grant)")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#authentication-type-oauth2-client-credentials-grant"}},[t._v("OAuth2 (client credentials grant)")])])]),t._v(" "),n("p",[t._v("The process of setting up a non-OAuth2 connection on Workato is similar regardless of the authentication type. This is because after setting up the non-OAuth2 connection, you would need to test it out to ensure that it's valid. To do that, you would need to send out a test API request - a simple one would be a GET request. If it succeeds, you know that the connection is valid.")]),t._v(" "),n("p",[t._v("In this article, we provide a "),n("a",{attrs:{href:"#authentication-type-basic"}},[t._v("basic auth example")]),t._v(" as an example of a non-OAuth2 connection and an "),n("a",{attrs:{href:"#authentication-type-oauth2-authorization-code-grant"}},[t._v("OAuth2 example")]),t._v(".")]),t._v(" "),n("h2",{attrs:{id:"authentication-type-none"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authentication-type-none"}},[t._v("#")]),t._v(" Authentication type: None")]),t._v(" "),n("p",[t._v("This allows you to create a connection without providing any authentication details. This is usually the case when you wish to just receive a webhook trigger from the app. Workato generates a URL for you to direct your webhooks to, and retrieves information from the webhook payload sent in.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(1251),alt:"HTTP connector authentication type: None",width:"1169",height:"658"}}),t._v(" "),n("em",[t._v("HTTP connector authentication type: None")])],1),t._v(" "),n("h2",{attrs:{id:"authentication-type-basic"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authentication-type-basic"}},[t._v("#")]),t._v(" Authentication type: Basic")]),t._v(" "),n("p",[t._v("This requires your username and password. An alternative to your username and password would be an API key or API token, retrieved from your account settings. This is encoded with Base64 in transit, over SSL. This is a common authentication flow.\n"),n("DocImage",{attrs:{src:a(1252),alt:"HTTP connector authentication type: Basic",width:"1025",height:"775"}}),t._v(" "),n("em",[t._v("HTTP connector authentication type: Basic")])],1),t._v(" "),n("h3",{attrs:{id:"example-connecting-to-jira-via-basic-authentication-and-testing-the-connection-via-a-get-action"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-connecting-to-jira-via-basic-authentication-and-testing-the-connection-via-a-get-action"}},[t._v("#")]),t._v(" Example - connecting to Jira via basic authentication and testing the connection via a GET action")]),t._v(" "),n("p",[t._v("Let’s try to connect to Jira using basic authentication - Jira's documentation for basic authentication can be found "),n("a",{attrs:{href:"https://developer.atlassian.com/cloud/jira/platform/jira-rest-api-basic-authentication/?_ga=1.137752242.320850437.1478498822",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),n("OutboundLink")],1),t._v(". In the case of JIRA, we need to provide several things: subdomain (which tells us what JIRA company instance to connect to, essentially - your company’s Jira database), username and password.")]),t._v(" "),n("p",[t._v("For this example, I’ve created a company instance in Jira with a company name Workato321, and Jira has automatically assigned my subdomain to be "),n("a",{attrs:{href:"http://workato321.atlassian.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("workato321.atlassian.net"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("I’ve also created a project in my new Jira instance, named PPP, to be used for testing out my connection later.")]),t._v(" "),n("h4",{attrs:{id:"setting-up-your-jira-connection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-your-jira-connection"}},[t._v("#")]),t._v(" Setting up your Jira connection")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(167),alt:"Jira Connection",width:"1680",height:"1033"}}),t._v(" "),n("em",[t._v("Jira screenshot with subdomain "),n("a",{attrs:{href:"http://workato321.atlassian.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("workato321.atlassian.net"),n("OutboundLink")],1),t._v(" and existing project PPP")])],1),t._v(" "),n("p",[t._v("We can provide our username and password in the connection settings as below. For the field "),n("strong",[t._v("On-prem secure agent")]),t._v(", I selected no gateway as my Jira instance is on the cloud.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(168),alt:"Jira Connection settings",width:"1680",height:"856"}}),t._v(" "),n("em",[t._v("Jira connection settings")])],1),t._v(" "),n("p",[t._v("Click "),n("code",[t._v("Connect")]),t._v(". For non-OAuth2 connections, remember to send a quick test request, e.g. a GET request, to verify that you are successfully connected to the app.")]),t._v(" "),n("h2",{attrs:{id:"authentication-type-header-auth"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authentication-type-header-auth"}},[t._v("#")]),t._v(" Authentication type: Header auth")]),t._v(" "),n("p",[t._v("For applications which require additional headers outside of the usual username and password or API key, or if you want to customize the headers sent in the request. Header authentication can be used when you have a generated token ready for use.\n"),n("DocImage",{attrs:{src:a(1253),alt:"HTTP connector authentication type: Header auth",width:"1024",height:"703"}}),t._v(" "),n("em",[t._v("HTTP connector authentication type: Header authorization")])],1),t._v(" "),n("h2",{attrs:{id:"authentication-type-query-params"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authentication-type-query-params"}},[t._v("#")]),t._v(" Authentication type: Query params")]),t._v(" "),n("p",[t._v("For applications where the authentication structure is based on validating an API key as a parameter. What you need to do is to add the parameter key/value pair in the params authorization field.\n"),n("DocImage",{attrs:{src:a(1254),alt:"HTTP connector authentication type: Query params",width:"992",height:"710"}}),t._v(" "),n("em",[t._v("HTTP connector authentication type: Query params")])],1),t._v(" "),n("h2",{attrs:{id:"authentication-type-custom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authentication-type-custom"}},[t._v("#")]),t._v(" Authentication type: Custom")]),t._v(" "),n("p",[t._v("Custom allows you to use a combination of input fields as needed.\n"),n("DocImage",{attrs:{src:a(1255),alt:"Custom http connector",width:"874",height:"849"}}),t._v(" "),n("em",[t._v("HTTP connector authentication type: Custom")])],1),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Input field")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Authorization URL")]),t._v(" "),n("td",[t._v("URL that Workato redirects you to when you click on the ‘Connect’ button. This usually brings you to the login screen of your app. Some APIs require that you include certain parameters in the authorization URL. Common examples are response_type ("),n("code",[t._v("code")]),t._v(" or "),n("code",[t._v("token")]),t._v(") and scope ("),n("code",[t._v("read")]),t._v(", "),n("code",[t._v("write")]),t._v(", "),n("code",[t._v("admin")]),t._v(", etc.). This should be publicly available from the API documentation of the app you’re connecting to, under the Authentication section.")])]),t._v(" "),n("tr",[n("td",[t._v("Token URL")]),t._v(" "),n("td",[t._v("URL that Workato will retrieve an auth token from. This auth token is used to verify that we have permission to access your app and its data. This should be publicly available from the API documentation of the app you’re connecting to, under the Authentication section.")])]),t._v(" "),n("tr",[n("td",[t._v("Client ID and client secret")]),t._v(" "),n("td",[t._v("The client ID identifies you as the user who’s sending these API calls, while the client secret authenticates that you as this user. This is usually found in the Settings or Integrations page (or equivalent) of your logged in app account that you wish to connect to. This is specific to your account and should be kept secret.")])])])]),t._v(" "),n("p",[t._v("In addition, it requires you to have the following information ready.")]),t._v(" "),n("h2",{attrs:{id:"authentication-type-oauth2-authorization-code-grant"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authentication-type-oauth2-authorization-code-grant"}},[t._v("#")]),t._v(" Authentication type: OAuth2 (authorization code grant)")]),t._v(" "),n("p",[t._v("OAuth2 is the authentication standard adopted by a number of cloud apps. It’s widely adopted because it allows you to give third parties access to your apps without having to disclose your username and password to the third party. In this case, Workato simply redirects you to your app, where you key in your login credentials, and that’s sufficient for the app to trust that Workato is acting on your behalf when it makes API requests.")]),t._v(" "),n("p",[t._v("The Authorization Code grant type is used by confidential and public clients to exchange an authorization code for an access token.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(1256),alt:"HTTP (OAuth2 auth code grant) connector's connection fields",width:"994",height:"848"}}),t._v(" "),n("em",[t._v("HTTP (OAuth2 authorization code grant) connector's connection fields")])],1),t._v(" "),n("h2",{attrs:{id:"authentication-type-oauth2-client-credentials-grant"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authentication-type-oauth2-client-credentials-grant"}},[t._v("#")]),t._v(" Authentication type: OAuth2 (client credentials grant)")]),t._v(" "),n("p",[t._v("Using the client credentials grant, the client can request an access token using only its client credentials. This is usually used when the client is requesting access to the protected resources under its control or for machine-to-machine authentication where a specific user’s permission to access data is not required.")]),t._v(" "),n("p",[t._v("The client credentials grant type must only be used by confidential clients.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(1257),alt:"HTTP (OAuth2 client cred grant) connector's connection fields",width:"952",height:"762"}}),t._v(" "),n("em",[t._v("HTTP (OAuth2 client credentials grant) connector's connection fields")])],1),t._v(" "),n("p",[t._v("OAuth2 authentication type requires the following fields.")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Information")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Credentials")]),t._v(" "),n("td",[t._v("A set of username and password for logging into your app to give permission for Workato to access the data in the app. This user (to whom the credentials belong) should have the correct permissions to read/write to the records (e.g. customer records, sales invoice records) you want to access.")])]),t._v(" "),n("tr",[n("td",[t._v("Redirect/callback URL (to be configured in the app)")]),t._v(" "),n("td",[t._v("The URL provided to the app for redirection back to Workato after going through the authentication flow and credentials/token exchange. Provide this URL "),n("code",[t._v("https://www.workato.com/oauth/callback")]),t._v(" to the app if it asks for it in the Integration setup screen.")])])])]),t._v(" "),n("h3",{attrs:{id:"example-connecting-to-eventbrite-via-oauth2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-connecting-to-eventbrite-via-oauth2"}},[t._v("#")]),t._v(" Example - connecting to Eventbrite via OAuth2")]),t._v(" "),n("p",[t._v("Let us run through an example of how we can connect to an OAuth2 application. In this case, we’ll use Eventbrite, an events management and ticketing application.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(165),alt:"Eventbrite OAuth2 authentication page",width:"1680",height:"838"}}),t._v(" "),n("em",[t._v("Eventbrite OAuth2 authentication page")])],1),t._v(" "),n("p",[t._v("From the documentation page, we can obtain 2 of the required fields for our connection - the authorization URL and the access token URL. We would need to append further parameters to the URL. Eventbrite's documentation mentions that we'd need to post to this URL: "),n("code",[t._v("https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=YOUR_CLIENT_KEY")])]),t._v(" "),n("p",[t._v("But as Workato will handle the client key, the following is what's needed in the input field to connect.")]),t._v(" "),n("p",[t._v("Eventbrite authorization URL:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("https://www.eventbrite.com/oauth/authorize?response_type=code\n")])])]),n("p",[t._v("Eventbrite access token URL:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("https://www.eventbrite.com/oauth/token\n")])])]),n("p",[t._v("In order to connect to your Eventbrite account successfully, you would also need a set of client ID and client secret. To obtain this, you will need to register an app with Eventbrite so that they can assign the app with a client ID and secret. Log into Eventbrite and navigate to Account Settings > App Management.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(166),alt:"Eventbrite's App Management screen",width:"1681",height:"676"}}),t._v(" "),n("em",[t._v("Eventbrite's app management screen")])],1),t._v(" "),n("p",[t._v("In the app management page, you will be able to find your client ID (also called key). Expand the Show Client Secret and OAuth Token section to retrieve the client secret, and navigate to the App Extension section to input the callback URL "),n("code",[t._v("https://www.workato.com/oauth/callback")]),t._v(" into Eventbrite.")]),t._v(" "),n("p",[n("DocImage",{attrs:{src:a(1258),alt:"Completed Eventbrite connection",width:"2364",height:"2699"}}),t._v(" "),n("em",[t._v("Completed Eventbrite connection")])],1),t._v(" "),n("h2",{attrs:{id:"http-setup-documentation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http-setup-documentation"}},[t._v("#")]),t._v(" HTTP setup documentation")]),t._v(" "),n("p",[t._v("Next, learn more about triggers and actions:")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/developing-connectors/http/building-http-trigger.html"}},[t._v("Building a HTTP trigger")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/developing-connectors/http/building-http-action.html"}},[t._v("Building a HTTP action")])],1)])])}),[],!1,null,null,null);e.default=o.exports}}]);