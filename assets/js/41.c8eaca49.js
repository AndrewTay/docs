(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{2264:function(t,e,o){"use strict";o.r(e);var a=o(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sharepoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sharepoint"}},[t._v("#")]),t._v(" SharePoint")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://products.office.com/en-us/sharepoint/collaboration",target:"_blank",rel:"noopener noreferrer"}},[t._v("SharePoint"),a("OutboundLink")],1),t._v(" is a web-based collaboration, document management and storage system integrated with Microsoft Office.")]),t._v(" "),a("p",[t._v("Workato's SharePoint connector enables you to build even more integrations and automations around Sharepoint and other third-party applications.")]),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("p",[t._v("The SharePoint connector uses "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/get-to-know-the-sharepoint-rest-service",target:"_blank",rel:"noopener noreferrer"}},[t._v("SharePoint REST API"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"how-to-connect-to-sharepoint-on-workato"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-connect-to-sharepoint-on-workato"}},[t._v("#")]),t._v(" How to connect to SharePoint on Workato")]),t._v(" "),a("h3",{attrs:{id:"register-workato-app-in-sharepoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-workato-app-in-sharepoint"}},[t._v("#")]),t._v(" Register Workato app in SharePoint")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Login to "),a("a",{attrs:{href:"https://portal.azure.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://portal.azure.com/"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("Click on "),a("code",[t._v("Azure Active Directory")]),t._v(" -> "),a("code",[t._v("App Registrations")]),t._v(" -> "),a("code",[t._v("New Application Registration")])]),t._v(" "),a("p",[a("DocImage",{attrs:{src:o(962),alt:"Step 2",width:"1074",height:"695"}})],1)]),t._v(" "),a("li",[a("p",[t._v("Give a unique name for the application, select the Application type as "),a("code",[t._v("Web app / API")]),t._v(" and Sign In URL as "),a("code",[t._v("​https://www.workato.com")]),t._v("​ and click on "),a("code",[t._v("Create")]),t._v(".")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:o(963),alt:"Step 3",width:"320",height:"645"}})],1)]),t._v(" "),a("li",[a("p",[t._v("Click on "),a("code",[t._v("Settings")]),t._v(" -> "),a("code",[t._v("Keys")]),t._v(". Make sure to save the "),a("code",[t._v("Application ID")]),t._v(", you will use this connect with Workato later.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:o(964),alt:"Step 4",width:"899",height:"623"}})],1)]),t._v(" "),a("li",[a("p",[t._v("Create a new Password with Key as "),a("code",[t._v("client_secret")]),t._v(" and set the desired expiry time and click on "),a("code",[t._v("Save")]),t._v(". Upon clicking "),a("code",[t._v("Save")]),t._v(", a new password will be generated. Make sure to save the generated client secret password, you will use this to connect with Workato later.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:o(965),alt:"Step 6",width:"837",height:"310"}})],1)]),t._v(" "),a("li",[a("p",[t._v("In Settings, click on "),a("code",[t._v("Required Permission")]),t._v(" -> "),a("code",[t._v("Add")]),t._v(" -> "),a("code",[t._v("Select an API")]),t._v(" -> "),a("code",[t._v("Office 365 Sharepoint Online")]),t._v(" -> "),a("code",[t._v("Select")])]),t._v(" "),a("p",[a("DocImage",{attrs:{src:o(966),alt:"Step 6.1",width:"897",height:"584"}})],1),t._v(" "),a("p",[a("DocImage",{attrs:{src:o(967),alt:"Step 6.2",width:"875",height:"575"}})],1)]),t._v(" "),a("li",[a("p",[t._v("Choose the permissions you want to give Workato and click on "),a("code",[t._v("Select")])]),t._v(" "),a("p",[a("DocImage",{attrs:{src:o(968),alt:"Step 7",width:"887",height:"593"}})],1)]),t._v(" "),a("li",[a("p",[t._v("In Settings, click on "),a("code",[t._v("Reply URLs")]),t._v(" and add the URL "),a("code",[t._v("https://www.workato.com/oauth/callback​")]),t._v(" as Reply URL and click on "),a("code",[t._v("Save")])]),t._v(" "),a("p",[a("DocImage",{attrs:{src:o(969),alt:"Step 8",width:"898",height:"519"}})],1)])]),t._v(" "),a("h3",{attrs:{id:"configure-sharepoint-connection-in-workato"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-sharepoint-connection-in-workato"}},[t._v("#")]),t._v(" Configure SharePoint connection in Workato")]),t._v(" "),a("ol",{attrs:{start:"9"}},[a("li",[a("p",[t._v("Login to Workato to create SharePoint connection. Go to "),a("code",[t._v("App Connections")]),t._v(" tab -> "),a("code",[t._v("Create a new connection")]),t._v(" -> select the Sharepoint Connector")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:o(970),alt:"Step 9",width:"1750",height:"700"}})],1)]),t._v(" "),a("li",[a("p",[t._v("Enter the required fields. Use "),a("code",[t._v("Application ID")]),t._v(" from Step 4 as "),a("code",[t._v("Client ID")]),t._v(" and "),a("code",[t._v("client_secret password")]),t._v(" from Step 5 as "),a("code",[t._v("Client Secret")])]),t._v(" "),a("p",[a("DocImage",{attrs:{src:o(971),alt:"Step 10",width:"1376",height:"1264"}})],1)]),t._v(" "),a("li",[a("p",[t._v("Click on "),a("code",[t._v("Link your account")]),t._v(" to connect Sharepoint and enter username and password in pop-up window.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:o(972),alt:"Step 11",width:"1560",height:"1136"}})],1)]),t._v(" "),a("li",[a("p",[t._v("Connection should be established in Workato as shown below")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:o(973),alt:"Step 12",width:"1576",height:"1078"}})],1)])])])}),[],!1,null,null,null);e.default=n.exports},962:function(t,e,o){t.exports=o.p+"assets/img/img24.1b241328.jpg"},963:function(t,e,o){t.exports=o.p+"assets/img/img2.a321312d.jpg"},964:function(t,e,o){t.exports=o.p+"assets/img/img5.8779d0d0.jpg"},965:function(t,e,o){t.exports=o.p+"assets/img/img6.cde2420d.jpg"},966:function(t,e,o){t.exports=o.p+"assets/img/img9.b0bfe64c.jpg"},967:function(t,e,o){t.exports=o.p+"assets/img/img10.5f875293.jpg"},968:function(t,e,o){t.exports=o.p+"assets/img/img13.4c3c9e86.jpg"},969:function(t,e,o){t.exports=o.p+"assets/img/img16.10893a11.jpg"},970:function(t,e,o){t.exports=o.p+"assets/img/image10.cde4aa70.png"},971:function(t,e,o){t.exports=o.p+"assets/img/image27.082836d1.png"},972:function(t,e,o){t.exports=o.p+"assets/img/image26.489103cb.png"},973:function(t,e,o){t.exports=o.p+"assets/img/image28.2c2ebfda.png"}}]);