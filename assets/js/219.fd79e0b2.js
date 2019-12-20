(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{122:function(t,e,o){t.exports=o.p+"assets/img/selecting-object.c76036b5.gif"},2087:function(t,e,o){"use strict";o.r(e);var r=o(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"coupa"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#coupa"}},[t._v("#")]),t._v(" Coupa")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.coupa.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Coupa"),r("OutboundLink")],1),t._v(" is a business spend management platform. It supports procurement, invoicing, expense and payment functions for enterprises. Coupa enables users to create and approve procurement processes such as requisitions and invoices. It also has an integrated expense module that allows users to submit expense reports and have them approved directly on Coupa. Traditionally, this information is then synced with ERP systems such as "),r("router-link",{attrs:{to:"/connectors/netsuite.html"}},[t._v("NetSuite")]),t._v(", "),r("router-link",{attrs:{to:"/connectors/oracle-ebs.html"}},[t._v("Oracle EBS")]),t._v(" or "),r("router-link",{attrs:{to:"/connectors/sap.html"}},[t._v("SAP")]),t._v(" for other business functions such as accounting or making payments.")],1),t._v(" "),r("p",[t._v("Workato's integration with Coupa helps you to sync this data with any of these ERP systems to support your Procure To Pay, Procure To Order and Expense Management processes. Read on to find out how to set up your connection on Workato to your Coupa instance and how you can leverage on Workato to increase the business value you gain from Coupa through integrations with your other business applications.")]),t._v(" "),r("h2",{attrs:{id:"how-to-connect-to-coupa-on-workato"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-connect-to-coupa-on-workato"}},[t._v("#")]),t._v(" How to connect to Coupa on Workato")]),t._v(" "),r("p",[t._v("Coupa uses authentication based off API keys. API keys are keys you generate to let Coupa know this Workato connection is allowed to work with your information. Generate your API key in your Coupa instance by heading to https://[your-instance-name].coupacloud.com/api_keys or logging into your Coupa account.")]),t._v(" "),r("p",[t._v("API keys can be found under the "),r("code",[t._v("Setup")]),t._v(" => "),r("code",[t._v("Integrations")]),t._v(" => "),r("code",[t._v("API Keys")]),t._v(" in the top navigation header in your Coupa instance.")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:o(448),alt:"Configure Coupa connection view",width:"2408",height:"1366"}}),t._v(" "),r("center",[r("i",[t._v("The connection configuration page for Coupa on Workato")])])],1),t._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",{attrs:{width:"25%"}},[t._v("Field")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Connection name")]),t._v(" "),r("td",[t._v("Give this Coupa connection a unique name that identifies which API key it is connected to.")])]),t._v(" "),r("tr",[r("td",[t._v("Host")]),t._v(" "),r("td",[t._v("Enter the Coupa URL for your instance.")])]),t._v(" "),r("tr",[r("td",[t._v("API key")]),t._v(" "),r("td",[t._v("Enter your API key which you have generated in your Coupa instance.")])])])]),t._v(" "),r("h2",{attrs:{id:"working-with-the-coupa-connector"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#working-with-the-coupa-connector"}},[t._v("#")]),t._v(" Working with the Coupa connector")]),t._v(" "),r("h3",{attrs:{id:"objects"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#objects"}},[t._v("#")]),t._v(" Objects")]),t._v(" "),r("p",[t._v("In Workato, we grouped Coupa data into objects in our actions and triggers. Objects refer to almost anything Workato currently supports in our Coupa actions or triggers. When selecting an action such as "),r("code",[t._v("Create Object")]),t._v(", you'll be prompted later on to clarify whether you want to create a purchase order or an invoice. We currently support the following objects in Coupa.")]),t._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",{attrs:{width:"25%"}},[t._v("Object")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Account")]),t._v(" "),r("td",[t._v("Query, create or update  accounts that match your financial structure. For example, give marketing, IT and sale their own accounts to manage their own budgets.")])]),t._v(" "),r("tr",[r("td",[t._v("Address")]),t._v(" "),r("td",[t._v("Query, create or update personal or supplier remit-to address information.")])]),t._v(" "),r("tr",[r("td",[t._v("Contract")]),t._v(" "),r("td",[t._v("Query, create or update a contract.")])]),t._v(" "),r("tr",[r("td",[t._v("Department")]),t._v(" "),r("td",[t._v("Query, create or update department information. Departments are used to mimic your company's operating structure and to organise groups and users accordingly.")])]),t._v(" "),r("tr",[r("td",[t._v("Exchange rate")]),t._v(" "),r("td",[t._v("Query, create or update exchange rates.")])]),t._v(" "),r("tr",[r("td",[t._v("Expense line")]),t._v(" "),r("td",[t._v("Query or create expense report lines used for expense management.")])]),t._v(" "),r("tr",[r("td",[t._v("Expense report")]),t._v(" "),r("td",[t._v("Query, create or update expense reports used for expense management.")])]),t._v(" "),r("tr",[r("td",[t._v("Integration")]),t._v(" "),r("td",[t._v("Query or create integrations in Coupa.")])]),t._v(" "),r("tr",[r("td",[t._v("Integration error")]),t._v(" "),r("td",[t._v("Query or create integrations errors in Coupa.")])]),t._v(" "),r("tr",[r("td",[t._v("Integration run")]),t._v(" "),r("td",[t._v("Query or create integrations runs in Coupa.")])]),t._v(" "),r("tr",[r("td",[t._v("Integration history record")]),t._v(" "),r("td",[t._v("Query or create integrations history records in Coupa.")])]),t._v(" "),r("tr",[r("td",[t._v("Invoice")]),t._v(" "),r("td",[t._v("Query, create or update invoices in Coupa.")])]),t._v(" "),r("tr",[r("td",[t._v("Inventory Transaction")]),t._v(" "),r("td",[t._v("Query or create inventory transactions. Receipts of goods are the same as inventory transactions in Coupa.")])]),t._v(" "),r("tr",[r("td",[t._v("Item")]),t._v(" "),r("td",[t._v("Query, create or update items not provided by suppliers. If you are looking to work with items provided by suppliers, use the supplier item object.")])]),t._v(" "),r("tr",[r("td",[t._v("Lookup value")]),t._v(" "),r("td",[t._v("Query, create or update lookup values in Coupa.")])]),t._v(" "),r("tr",[r("td",[t._v("Purchase order")]),t._v(" "),r("td",[t._v("Query, create or update purchase order in Coupa.")])]),t._v(" "),r("tr",[r("td",[t._v("Purchase order line")]),t._v(" "),r("td",[t._v("Query or create purchase order lines in Coupa.")])]),t._v(" "),r("tr",[r("td",[t._v("Remit to address")]),t._v(" "),r("td",[t._v("Query, create or update supplier remit-to addresses. This address is used to send payment to suppliers.")])]),t._v(" "),r("tr",[r("td",[t._v("Supplier")]),t._v(" "),r("td",[t._v("Query, create or update suppliers.")])]),t._v(" "),r("tr",[r("td",[t._v("Supplier information")]),t._v(" "),r("td",[t._v("Query, create or update supplier information.")])]),t._v(" "),r("tr",[r("td",[t._v("Supplier item")]),t._v(" "),r("td",[t._v("Query, create or update items provided by suppliers that users can select when creating a requisition.")])]),t._v(" "),r("tr",[r("td",[t._v("Supplier site")]),t._v(" "),r("td",[t._v("Query, create or update supplier sites.")])]),t._v(" "),r("tr",[r("td",[t._v("User")]),t._v(" "),r("td",[t._v("Query, create or update a user.")])])])]),t._v(" "),r("p",[t._v("This is a non-exhaustive list of Coupa objects and there are still more enhancements to come. Check out the rest of the "),r("a",{attrs:{href:"https://success.coupa.com/Integrate/Technical_Documentation/API/Resources",target:"_blank",rel:"noopener noreferrer"}},[t._v("available Coupa objects on their resource portal"),r("OutboundLink")],1),t._v(". If you see an object that we currently don't support, you can use custom actions that allow you to send "),r("router-link",{attrs:{to:"/developing-connectors/custom-actions.html"}},[t._v("custom HTTP requests")]),t._v(".")],1),t._v(" "),r("h3",{attrs:{id:"using-coupa-actions-and-triggers-on-workato"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#using-coupa-actions-and-triggers-on-workato"}},[t._v("#")]),t._v(" Using Coupa actions and triggers on Workato")]),t._v(" "),r("p",[t._v("The Coupa connector in Workato first requires you to select your action which is a mixture of generic actions as well as commonly used specific actions.")]),t._v(" "),r("p",[r("strong",[t._v("Generic triggers")])]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/connectors/coupa/object-triggers.html"}},[t._v("New/updated object")])],1)]),t._v(" "),r("p",[r("strong",[t._v("Generic actions")])]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/connectors/coupa/object-actions.html"}},[t._v("Create object")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/coupa/object-actions.html"}},[t._v("Update object")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/coupa/object-actions.html"}},[t._v("Search object")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/coupa/object-actions.html"}},[t._v("Get object by ID")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/coupa/object-actions.html"}},[t._v("Get remit to addresses by object ID")])],1)]),t._v(" "),r("p",[r("strong",[t._v("Specific actions")])]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/connectors/coupa/purchase-order-actions.html"}},[t._v("Close purchase order")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/coupa/purchase-order-actions.html"}},[t._v("Cancel purchase order")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/coupa/supplier-actions.html"}},[t._v("Get supplier sites by supplier")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/coupa/integration-action.html"}},[t._v("Set integration run status")])],1)]),t._v(" "),r("p",[t._v("For generic actions and triggers, you'll be able to select the object you want to work with later on when configuring the step. The required input fields for the object you select will then be dynamically generated. This includes any custom fields that you or your team have defined in Coupa")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:o(122),alt:"Selecting an object",width:"708",height:"608"}}),t._v(" "),r("center",[r("i",[t._v("Selecting an object in the Coupa connector")])])],1),t._v(" "),r("h3",{attrs:{id:"custom-object-fields-in-coupa"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#custom-object-fields-in-coupa"}},[t._v("#")]),t._v(" Custom object fields in Coupa")]),t._v(" "),r("p",[t._v("The Coupa connector on Workato automatically pulls all custom fields whenever you request for an object. Search for custom fields you or your team have defined in the "),r("code",[t._v("Add/remove optional fields")]),t._v(" drop down.")]),t._v(" "),r("h2",{attrs:{id:"list-of-triggers-and-actions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#list-of-triggers-and-actions"}},[t._v("#")]),t._v(" List of triggers and actions")]),t._v(" "),r("p",[t._v("Workato currently supports the following Coupa triggers and actions. Find out more details about each by clicking on the links below. You can also navigate to them through the sidebar.")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/connectors/coupa/object-actions.html"}},[t._v("Object actions")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/coupa/object-triggers.html"}},[t._v("Object triggers")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/coupa/purchase-order-actions.html"}},[t._v("Purchase order actions")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/coupa/supplier-actions.html"}},[t._v("Supplier actions")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/connectors/coupa/integration-action.html"}},[t._v("Integration actions")])],1)])])}),[],!1,null,null,null);e.default=a.exports},448:function(t,e,o){t.exports=o.p+"assets/img/connection.7e178161.png"}}]);