(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{2112:function(t,e,a){"use strict";a.r(e);var s=a(0),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"google-sheets-action-add-rows-in-bulk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google-sheets-action-add-rows-in-bulk"}},[t._v("#")]),t._v(" Google Sheets action - Add rows in bulk")]),t._v(" "),s("p",[t._v("This action adds multiple rows at the bottom of a selected sheet in Google Sheets.")]),t._v(" "),s("h2",{attrs:{id:"input"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[t._v("#")]),t._v(" Input")]),t._v(" "),s("p",[t._v("First, select the drive, spreadsheet and sheet that you want to add rows into.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(495),alt:"Sheet selector",width:"579",height:"358"}})],1),t._v(" "),s("p",[t._v("The action will then display the list of columns in the sheet. Here you can do the mappings to create multiple rows in the sheet. In this example, we map the CSV columns from Box's trigger "),s("code",[t._v("New CSV file in directory")]),t._v(" into the Google sheet's columns. The action will then iterate through all rows from the Box's CSV file, then add them into the Google sheet.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(496),alt:"Column mappings",width:"971",height:"627"}})],1),t._v(" "),s("p",[t._v("The followings are all input fields in this action:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Field name")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Google Drive")]),t._v(" "),s("td",[t._v("Whether you are using "),s("code",[t._v("My Drive")]),t._v(" or "),s("code",[t._v("Team Drive")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[t._v("Spreadsheet")]),t._v(" "),s("td",[t._v("The spreadsheet that you want to add rows into.")])]),t._v(" "),s("tr",[s("td",[t._v("Sheet")]),t._v(" "),s("td",[t._v("The sheet that you want to add rows into.")])]),t._v(" "),s("tr",[s("td",[t._v("Rows source list")]),t._v(" "),s("td",[t._v("You need to provide a "),s("router-link",{attrs:{to:"/features/list-management.html"}},[t._v("list data pill")]),t._v(" here. For example, list of rows in a CSV file. The action will automatically iterate through all items in the list and create multiple Google sheet rows.")],1)]),t._v(" "),s("tr",[s("td",[t._v("Rows fields")]),t._v(" "),s("td",[t._v("This section will display all columns in the Google sheet. Here you need to map the data pills under the list data pill provided above (e.g. CSV column names under the "),s("code",[t._v("CSV Rows")]),t._v(" list data pill). The action will automatically iterate through all items in the list and create multiple Google sheet rows.")])])])]),t._v(" "),s("h2",{attrs:{id:"output"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" Output")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Field name")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Spreadsheet ID")]),t._v(" "),s("td",[t._v("ID of the spreadsheet.")])]),t._v(" "),s("tr",[s("td",[t._v("Sheet name")]),t._v(" "),s("td",[t._v("Name of the sheet.")])]),t._v(" "),s("tr",[s("td",[t._v("All rows successfully added?")]),t._v(" "),s("td",[t._v("Whether all rows have been successfully added.")])]),t._v(" "),s("tr",[s("td",[t._v("Number of rows added")]),t._v(" "),s("td",[t._v("Number of rows that are successfully added.")])]),t._v(" "),s("tr",[s("td",[t._v("Number of rows failed")]),t._v(" "),s("td",[t._v("Number of rows that are failed to be added.")])]),t._v(" "),s("tr",[s("td",[t._v("Contents of failed rows")]),t._v(" "),s("td",[t._v("Contents of all failed rows are stored here.")])]),t._v(" "),s("tr",[s("td",[t._v("List of batches")]),t._v(" "),s("td",[t._v("To optimize performance, this action adds rows in small batches. This data pill is a list containing all batches, which you can "),s("router-link",{attrs:{to:"/features/list-management.html"}},[t._v("iterate through")]),t._v(". The status of each batch is shown below:")],1)]),t._v(" "),s("tr",[s("td",[t._v("- Batch number")]),t._v(" "),s("td",[t._v("The order of this batch.")])]),t._v(" "),s("tr",[s("td",[t._v("- All rows successfully added?")]),t._v(" "),s("td",[t._v("Whether all rows in this batch have been successfully added.")])]),t._v(" "),s("tr",[s("td",[t._v("- Starting row")]),t._v(" "),s("td",[t._v("Starting row of this batch.")])]),t._v(" "),s("tr",[s("td",[t._v("- Ending row")]),t._v(" "),s("td",[t._v("Ending row of this batch.")])]),t._v(" "),s("tr",[s("td",[t._v("- Number of rows added")]),t._v(" "),s("td",[t._v("Number of rows in this batch that are successfully added.")])]),t._v(" "),s("tr",[s("td",[t._v("- Number of rows failed")]),t._v(" "),s("td",[t._v("Number of rows in this batch that are failed to be added.")])]),t._v(" "),s("tr",[s("td",[t._v("- Error code")]),t._v(" "),s("td",[t._v("Error code if there are failed rows.")])]),t._v(" "),s("tr",[s("td",[t._v("- Error text")]),t._v(" "),s("td",[t._v("Error message if there are failed rows.")])]),t._v(" "),s("tr",[s("td",[t._v("- List size")]),t._v(" "),s("td",[t._v("Total number of batches.")])])])])])}),[],!1,null,null,null);e.default=o.exports},495:function(t,e,a){t.exports=a.p+"assets/img/sheet-selector.7637188d.png"},496:function(t,e,a){t.exports=a.p+"assets/img/bulk-mappings.4c511eaa.png"}}]);