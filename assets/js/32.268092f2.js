(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{130:function(e,t,o){e.exports=o.p+"assets/img/completed-recipe.9c771e3d.jpg"},131:function(e,t,o){e.exports=o.p+"assets/img/row-searching.b228eca4.jpg"},132:function(e,t,o){e.exports=o.p+"assets/img/data-treee.cca45beb.jpg"},133:function(e,t,o){e.exports=o.p+"assets/img/configured-recipe-test.9c771e3d.jpg"},134:function(e,t,o){e.exports=o.p+"assets/img/new-updated-contact.cfab2373.jpg"},135:function(e,t,o){e.exports=o.p+"assets/img/updated-salesforce-contact.17785a89.png"},136:function(e,t,o){e.exports=o.p+"assets/img/trigger-datas.2909e3cc.jpg"},137:function(e,t,o){e.exports=o.p+"assets/img/corresponding-row.3a8e3690.jpg"},138:function(e,t,o){e.exports=o.p+"assets/img/updated-row.0d5a7421.jpg"},18:function(e,t,o){e.exports=o.p+"assets/img/sample-google-sheet.18294aa3.jpg"},2118:function(e,t,o){"use strict";o.r(t);var a=o(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"google-sheets-action-update-row-using-row-id-old-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-sheets-action-update-row-using-row-id-old-version"}},[e._v("#")]),e._v(" Google Sheets action - Update row using row ID (old version)")]),e._v(" "),a("p",[a("strong",[e._v("Note")]),e._v(": This article is about action Update row (old version), using Google Sheets API v3 which will be deprecated in the near term. We recommend using this "),a("router-link",{attrs:{to:"/connectors/google-sheets/action-update-row-v4.html"}},[e._v("new action Update row")]),e._v(" instead.")],1),e._v(" "),a("p",[e._v("The "),a("strong",[e._v("Update row")]),e._v(" action allows you to change the values of any existing row.")]),e._v(" "),a("p",[e._v("It's often used together with a "),a("router-link",{attrs:{to:"/connectors/google-sheets/action-search-rows.html"}},[e._v("Search rows")]),e._v(" action. So that you will first search for the rows you want to update, then update those rows.")],1),e._v(" "),a("h2",{attrs:{id:"how-to-use-this-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-this-action"}},[e._v("#")]),e._v(" How to use this action")]),e._v(" "),a("h3",{attrs:{id:"setting-up-the-google-sheet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-google-sheet"}},[e._v("#")]),e._v(" Setting up the Google sheet")]),e._v(" "),a("p",[e._v("First, in order for us to retrieve the custom data in a sheet, the sheet must contain at least 1 header row and 1 data row, as shown the following screenshot.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(18),alt:"Google sheet sample",width:"653",height:"283"}}),e._v(" "),a("em",[e._v("Sample Google sheet with 1 header row and 1 data rows")])],1),e._v(" "),a("h3",{attrs:{id:"configuring-the-update-row-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-update-row-action"}},[e._v("#")]),e._v(" Configuring the Update row action")]),e._v(" "),a("p",[e._v("We have to select our specific spreadsheet and sheet, then pass in the row ID from the search rows action's datatree. This ID will tell the recipe the exact row to update.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(516),alt:"Unconfigured row",width:"1520",height:"1072"}}),e._v(" "),a("em",[e._v("Unconfigured update row action")])],1),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(517),alt:"Row-ID",width:"1520",height:"1200"}}),e._v(" "),a("em",[e._v("Provide row ID from the search rows action into the update row action. This lets the recipe know the row to update")])],1),e._v(" "),a("h3",{attrs:{id:"example-scenario"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-scenario"}},[e._v("#")]),e._v(" Example Scenario")]),e._v(" "),a("p",[e._v("In this case, let's assume that we wish to move any new or updated contacts from Salesforce into this Google sheet.\n"),a("DocImage",{attrs:{src:o(49),alt:"Sample Google sheet",width:"699",height:"298"}})],1),e._v(" "),a("p",[e._v("The following pictures show the recipe and data mappings I've done to ensure my search will find the right row in Google Sheets, and direct new data coming in from Salesforce to the matching fields in Google Sheets.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(130),alt:"Complete recipe",width:"2204",height:"1222"}}),e._v(" "),a("em",[e._v("Completed recipe to move new or updated Salesforce contacts to selected google sheet")])],1),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(131),alt:"Row searching",width:"1680",height:"1103"}}),e._v(" "),a("em",[e._v("Using "),a("code",[e._v("Search rows")]),e._v(" action to search for rows in my sheet with query. Here, we search for Google Sheet row that has "),a("code",[e._v("email")]),e._v(" column matching the Salesforce Contact's "),a("code",[e._v("Email")]),e._v(".")])],1),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(132),alt:"Data Tree",width:"1680",height:"1128"}}),e._v(" "),a("em",[e._v("We pass "),a("code",[e._v("Row ID")]),e._v(" from "),a("code",[e._v("Search rows")]),e._v(" action's output to this "),a("code",[e._v("Update row")]),e._v(" action, to indicate what row it should update. Then map data pill from the "),a("code",[e._v("Salesforce new/updated Contact")]),e._v(" into the "),a("code",[e._v("Update row")]),e._v(" action.")])],1),e._v(" "),a("p",[e._v("Be careful to pull data from the right datatree! A common mistake is to use the pills from the "),a("code",[e._v("Search rows")]),e._v(" action, which would take the existing data from your Google Sheets row and write that back into the exact same row. That's essentially doing nothing at all, so it's not very useful!")]),e._v(" "),a("h3",{attrs:{id:"running-the-recipe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-the-recipe"}},[e._v("#")]),e._v(" Running the recipe")]),e._v(" "),a("p",[e._v("Now that we have the trigger and action configured, let's run our recipe!")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(133),alt:"Configured recipe",width:"2204",height:"1222"}}),e._v(" "),a("em",[e._v("Configured recipe for testing")])],1),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(134),alt:"Customized report",width:"1680",height:"639"}}),e._v(" "),a("em",[e._v("Customized job report with showing details of the job processed")])],1),e._v(" "),a("p",[e._v("Now we will update the name of a contact in Salesforce from "),a("code",[e._v("Anna Sharpay")]),e._v(" to "),a("code",[e._v("Anna Mccoy")]),e._v(". Notice the email address is "),a("code",[e._v("anna@workato.com")]),e._v(".")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(135),alt:"Updated Salesforce contact",width:"561",height:"258"}})],1),e._v(" "),a("p",[e._v("Let's take a look at the job report to see how the recipe picks up this change:")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(136),alt:"Trigger data",width:"503",height:"619"}}),e._v(" "),a("em",[e._v("The trigger did pick up the updated contact, as viewed in the job details page's output tab")])],1),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(137),alt:"Corresponding row",width:"1088",height:"546"}}),e._v(" "),a("em",[e._v("The "),a("code",[e._v("Search rows")]),e._v(" action tries to find email "),a("code",[e._v("anna@workato.com")]),e._v(". It finds 1 row and passes the "),a("code",[e._v("Row ID")]),e._v(" to the "),a("code",[e._v("Update row")]),e._v(" action. "),a("code",[e._v("Update row")]),e._v(" action then update the name to "),a("code",[e._v("Anna Mccoy")])])],1),e._v(" "),a("p",[e._v("And here is the result sheet after recipe has updated the row. Notice that the name has been changed from "),a("code",[e._v("Anna Sharpay")]),e._v(" to "),a("code",[e._v("Anna Mccoy")]),e._v(".\n"),a("DocImage",{attrs:{src:o(49),alt:"Sample Google sheet",width:"699",height:"298"}}),e._v(" "),a("em",[e._v("Original sheet")]),e._v(" "),a("DocImage",{attrs:{src:o(138),alt:"Update row",width:"660",height:"277"}}),e._v(" "),a("em",[e._v("Updated sheet")])],1)])}),[],!1,null,null,null);t.default=s.exports},49:function(e,t,o){e.exports=o.p+"assets/img/sample-two-rows.96b05d13.png"},516:function(e,t,o){e.exports=o.p+"assets/img/unconfigured-row-action.b1554996.jpg"},517:function(e,t,o){e.exports=o.p+"assets/img/row-id.143563df.jpg"}}]);