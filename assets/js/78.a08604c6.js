(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1044:function(e,t,n){e.exports=n.p+"assets/img/workday-rest-connection.3690087e.png"},1045:function(e,t,n){e.exports=n.p+"assets/img/view-api-client-endpoints.efca3843.png"},1046:function(e,t,n){e.exports=n.p+"assets/img/register-api-client.01e592f8.png"},1047:function(e,t,n){e.exports=n.p+"assets/img/api-client-details.f241e816.png"},1048:function(e,t,n){e.exports=n.p+"assets/img/register-api-client-for-integration.fffcf623.png"},1049:function(e,t,n){e.exports=n.p+"assets/img/api-client-for-integration-details.9077ffb4.png"},1050:function(e,t,n){e.exports=n.p+"assets/img/generate-refresh-token.a63750f4.png"},1051:function(e,t,n){e.exports=n.p+"assets/img/choose-isu.ae0481f5.png"},1052:function(e,t,n){e.exports=n.p+"assets/img/isu-refresh-token.bf0785ce.png"},2286:function(e,t,n){"use strict";n.r(t);var o=n(0),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"workday-rest-connection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#workday-rest-connection"}},[e._v("#")]),e._v(" Workday REST Connection")]),e._v(" "),o("h2",{attrs:{id:"how-to-connect-to-workday-on-workato"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-connect-to-workday-on-workato"}},[e._v("#")]),e._v(" How to connect to Workday on Workato")]),e._v(" "),o("p",[e._v("The Workday REST connector uses the "),o("a",{attrs:{href:"https://doc.workday.com/reader/wsiU0cnNjCc_k7shLNxLEA/HvgwLwxCHVdBlZUTNd9s7A",target:"_blank",rel:"noopener noreferrer"}},[e._v("Workday REST API"),o("OutboundLink")],1),e._v(". Workday recommends using an Integration System User (ISU) for integration using third party services like Workato.")]),e._v(" "),o("h3",{attrs:{id:"connect-to-workday-on-workato"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-workday-on-workato"}},[e._v("#")]),e._v(" Connect to Workday on Workato")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:n(1044),alt:"Workday connection fields",width:"2587",height:"2089"}}),e._v(" "),o("em",[e._v("Workday connection fields")])],1),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Connection field")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Connection name")]),e._v(" "),o("td",[e._v("Give this Workday connection a unique name that identifies which Workday tenant it is connected to.")])]),e._v(" "),o("tr",[o("td",[e._v("REST API endpoint")]),e._v(" "),o("td",[e._v("This is the base URL of all requests made to your Workday instance.")])]),e._v(" "),o("tr",[o("td",[e._v("Authorization endpoint")]),e._v(" "),o("td",[e._v("Authorization endpoint of your Workday instance.")])]),e._v(" "),o("tr",[o("td",[e._v("Token endpoint")]),e._v(" "),o("td",[e._v("Token endpoint of your Workday instance.")])]),e._v(" "),o("tr",[o("td",[e._v("Client ID")]),e._v(" "),o("td",[e._v("Client ID of theAPI Client you created to connect to Workato.")])]),e._v(" "),o("tr",[o("td",[e._v("Client secret")]),e._v(" "),o("td",[e._v("Client secret of the API Client you created to connect to Workato.")])]),e._v(" "),o("tr",[o("td",[e._v("Refresh token")]),e._v(" "),o("td",[e._v("Provide a refresh token if this connection is restricted to an integration user instead of a user account. See "),o("a",{attrs:{href:"#api-client"}},[e._v("API Client")]),e._v(" for more details.")])])])]),e._v(" "),o("h2",{attrs:{id:"api-client"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#api-client"}},[e._v("#")]),e._v(" API Client")]),e._v(" "),o("p",[e._v("You will need to create an API client to connect to Workday REST API. There are 2 ways to connect using API clients:")]),e._v(" "),o("ol",[o("li",[e._v("Authorize using a user account")]),e._v(" "),o("li",[e._v("Use an API Client for Integration")])]),e._v(" "),o("h3",{attrs:{id:"api-client-for-user-account"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#api-client-for-user-account"}},[e._v("#")]),e._v(" API Client for user account")]),e._v(" "),o("p",[e._v("Use a regular "),o("strong",[e._v("API Client")]),e._v(" to authorize a connection to the REST API using a user account.")]),e._v(" "),o("p",[e._v("First, navigate to the "),o("strong",[e._v("View API Clients")]),e._v(" page by typing it into the search bar. You should see this screen. Here, you will see the endpoints required for the connection. Take note of "),o("strong",[e._v("REST API endpoint")]),e._v(", "),o("strong",[e._v("Token endpoint")]),e._v(" and "),o("strong",[e._v("Authorization endpoint")]),e._v(".")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:n(1045),alt:"View API Clients",width:"1332",height:"1184"}}),e._v(" "),o("em",[e._v("View API clients")])],1),e._v(" "),o("p",[e._v("Click on an existing API Clients that is available to integration if there are any. Otherwise, you need to create a new one. Navigate to "),o("strong",[e._v("Register API Client")]),e._v(" in your Workday instance.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:n(1046),alt:"Register API Client",width:"2686",height:"1983"}}),e._v(" "),o("em",[e._v("Registering a new client")])],1),e._v(" "),o("ul",[o("li",[e._v("Enter a meaningful name to indicate that this API client is used for Workato recipes")]),e._v(" "),o("li",[e._v("Select "),o("strong",[e._v("Authorization Code Grant")]),e._v(" for "),o("strong",[e._v("Client Grant Type")])]),e._v(" "),o("li",[e._v("Select "),o("strong",[e._v("Bearer")]),e._v(" for "),o("strong",[e._v("Access Token Type")])]),e._v(" "),o("li",[e._v("Use "),o("code",[e._v("https://www.workato.com/oauth/callback")]),e._v(" as the Redirection URL")]),e._v(" "),o("li",[e._v("Select all the "),o("strong",[e._v("OAuth2 scopes")]),e._v(" and "),o("strong",[e._v("Functional Area scope")]),e._v(" that you need for the recipes you intend to create")])]),e._v(" "),o("p",[o("DocImage",{attrs:{src:n(1047),alt:"API Client credentials",width:"2963",height:"2246"}}),e._v(" "),o("em",[e._v("API client details")])],1),e._v(" "),o("p",[e._v("Remember to save the "),o("strong",[e._v("Client ID")]),e._v(" and "),o("strong",[e._v("Client Secret")]),e._v(" before clicking "),o("strong",[e._v("Done")]),e._v(". This will be required to create a Workday REST connection.")]),e._v(" "),o("h3",{attrs:{id:"api-client-for-integrations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#api-client-for-integrations"}},[e._v("#")]),e._v(" API Client for Integrations")]),e._v(" "),o("p",[e._v("If you wish to use a manually generated token to connect to Workday, you will need to register an "),o("strong",[e._v("API client for integration")]),e._v(". This is required when using an ISU that does not have login access and is used only for API access.")]),e._v(" "),o("p",[e._v("Navigate to "),o("strong",[e._v("Register API Client for integration")]),e._v(" in your Workday instance.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:n(1048),alt:"Register API Client for Integrations",width:"2672",height:"1256"}}),e._v(" "),o("em",[e._v("Registering a new client for Integrations")])],1),e._v(" "),o("ul",[o("li",[e._v("Enter a meaning name to indicate that this API client is used for Workato recipes")]),e._v(" "),o("li",[e._v("Select "),o("strong",[e._v("Non-Expiring Refresh Tokens")]),e._v(" to avoid regenerating and reconnecting")]),e._v(" "),o("li",[e._v("Select all the "),o("strong",[e._v("OAuth2 scopes")]),e._v(" and "),o("strong",[e._v("Functional Area scope")]),e._v(" that you need for the recipes you intend to create")])]),e._v(" "),o("p",[o("DocImage",{attrs:{src:n(1049),alt:"API client details",width:"2602",height:"1298"}}),e._v(" "),o("em",[e._v("API client details")])],1),e._v(" "),o("p",[e._v("Remember to save the "),o("strong",[e._v("Client ID")]),e._v(" and "),o("strong",[e._v("Client Secret")]),e._v(" before clicking "),o("strong",[e._v("Done")]),e._v(". This will be required to create a Workday REST connection.")]),e._v(" "),o("p",[e._v("Lastly, navigate to "),o("strong",[e._v("Action")]),e._v(" > "),o("strong",[e._v("API Client")]),e._v(" > "),o("strong",[e._v("Manage Refresh Tokens for Integrations")]),e._v(".")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:n(1050),alt:"Generate refresh token",width:"2698",height:"1100"}}),e._v(" "),o("em",[e._v("Generate refresh token")])],1),e._v(" "),o("p",[e._v("Select the Integration user to perform all recipe actions.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:n(1051),alt:"Select refresh token for ISU",width:"2688",height:"594"}}),e._v(" "),o("em",[e._v("Select refresh token for ISU")])],1),e._v(" "),o("p",[e._v("If there are no existing refresh tokens, select "),o("strong",[e._v("Generate new refresh token")]),e._v(" and copy the new "),o("strong",[e._v("Refresh token")]),e._v(". This will be required to create a Workday REST connection.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:n(1052),alt:"Refresh token for ISU",width:"3342",height:"1134"}}),e._v(" "),o("em",[e._v("Refresh token for ISU")])],1)])}),[],!1,null,null,null);t.default=r.exports}}]);