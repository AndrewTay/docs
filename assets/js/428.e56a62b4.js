(window.webpackJsonp=window.webpackJsonp||[]).push([[428],{2081:function(t,e,v){"use strict";v.r(e);var _=v(0),r=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"box-trigger-new-csv-file-in-directory"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#box-trigger-new-csv-file-in-directory"}},[t._v("#")]),t._v(" Box Trigger - New CSV file in directory")]),t._v(" "),v("p",[t._v("Triggers when a new CSV file is added to a specified folder and processes CSV lines in batches. Trigger will not pick up newly uploaded versions of the same file. Checks selected folder for CSV files every 5 minutes. CSV rows are delivered in batches of 100 by default, maximum is 50000.")]),t._v(" "),v("h2",{attrs:{id:"input-fields"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Field name")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("When first started, this recipe should pick up events from.")]),t._v(" "),v("td",[t._v("When you start recipe for the first time, it picks up files created from specified time. Defaults to fetching files created an hour ago if left blank. Once recipe has been run or tested, value cannot be changed. "),v("router-link",{attrs:{to:"/recipes/triggers.html#since-from"}},[t._v("Learn more")])],1)]),t._v(" "),v("tr",[v("td",[t._v("Folder")]),t._v(" "),v("td",[t._v("Monitor for new CSV files in this folder. Select from the pick list or enter folder ID.")])]),t._v(" "),v("tr",[v("td",[t._v("Include sub-folders?")]),t._v(" "),v("td",[t._v("If Yes, trigger will pick up new CSV files in sub-folders as well.")])]),t._v(" "),v("tr",[v("td",[t._v("Sample CSV file / Field names")]),t._v(" "),v("td",[t._v("Select a CSV file for Workato to understand the data columns in your files. Otherwise, toggle to provide column names manually.")])]),t._v(" "),v("tr",[v("td",[t._v("Column delimiter")]),t._v(" "),v("td",[t._v("The character used to separate column values within each CSV row.")])]),t._v(" "),v("tr",[v("td",[t._v("Contains header row?")]),t._v(" "),v("td",[t._v("Set to Yes if the first CSV row is a header row, containing column names. Workato will then not process the first row as CSV data.")])]),t._v(" "),v("tr",[v("td",[t._v("Batch size")]),t._v(" "),v("td",[t._v("Number of CSV rows per batch. Instead of reading rows one by one, Workato reads a batch of CSV rows at a time to increase throughput. Modify batch size to optimize throughput. "),v("router-link",{attrs:{to:"/features/batch-processing.html"}},[t._v("Learn more about batch processing")])],1)]),t._v(" "),v("tr",[v("td",[t._v("Expected encoding")]),t._v(" "),v("td",[t._v("Expected encoding of the CSV files.")])])])]),t._v(" "),v("h2",{attrs:{id:"output-fields"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Field name")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("ID")]),t._v(" "),v("td",[t._v("ID of the file.")])]),t._v(" "),v("tr",[v("td",[t._v("Name")]),t._v(" "),v("td",[t._v("File name.")])]),t._v(" "),v("tr",[v("td",[t._v("Type")]),t._v(" "),v("td",[t._v("Type of this object, which in this case is "),v("code",[t._v("file")]),t._v(".")])]),t._v(" "),v("tr",[v("td",[t._v("Description")]),t._v(" "),v("td",[t._v("Description of file.")])]),t._v(" "),v("tr",[v("td",[t._v("Size")]),t._v(" "),v("td",[t._v("Size of file.")])]),t._v(" "),v("tr",[v("td",[t._v("Shared link")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("- URL")]),t._v(" "),v("td",[t._v("Shared link URL for viewing file.")])]),t._v(" "),v("tr",[v("td",[t._v("- Download URL")]),t._v(" "),v("td",[t._v("Shared link URL for downloading file.")])]),t._v(" "),v("tr",[v("td",[t._v("Created at")]),t._v(" "),v("td",[t._v("Date/time file is created.")])]),t._v(" "),v("tr",[v("td",[t._v("Modified at")]),t._v(" "),v("td",[t._v("Date/time file is modified.")])]),t._v(" "),v("tr",[v("td",[t._v("Trashed at")]),t._v(" "),v("td",[t._v("Date/time file is trashed.")])]),t._v(" "),v("tr",[v("td",[t._v("Purged at")]),t._v(" "),v("td",[t._v("Date/time file is purged.")])]),t._v(" "),v("tr",[v("td",[t._v("Content created at")]),t._v(" "),v("td",[t._v("Date/time file content is created.")])]),t._v(" "),v("tr",[v("td",[t._v("Content modified at")]),t._v(" "),v("td",[t._v("Date/time file content is modified.")])]),t._v(" "),v("tr",[v("td",[t._v("Sequence ID")]),t._v(" "),v("td",[t._v("Position of this object in the folder hierarchy.")])]),t._v(" "),v("tr",[v("td",[t._v("Etag")]),t._v(" "),v("td",[t._v("Entity tag of this object.")])]),t._v(" "),v("tr",[v("td",[t._v("Sha 1")]),t._v(" "),v("td",[t._v("SHA-1 hash value of this object.")])]),t._v(" "),v("tr",[v("td",[t._v("Parent")]),t._v(" "),v("td",[t._v("Includes details about the file's parent folder.")])]),t._v(" "),v("tr",[v("td",[t._v("- ID")]),t._v(" "),v("td",[t._v("ID of parent folder.")])]),t._v(" "),v("tr",[v("td",[t._v("- Name")]),t._v(" "),v("td",[t._v("Name of parent folder.")])]),t._v(" "),v("tr",[v("td",[t._v("- Type")]),t._v(" "),v("td",[t._v("Object type, which in this case is "),v("code",[t._v("folder")]),t._v(".")])]),t._v(" "),v("tr",[v("td",[t._v("- Sequence ID")]),t._v(" "),v("td",[t._v("Position of this object in the folder hierarchy.")])]),t._v(" "),v("tr",[v("td",[t._v("- Etag")]),t._v(" "),v("td",[t._v("Entity tag of this object.")])]),t._v(" "),v("tr",[v("td",[t._v("Path")]),t._v(" "),v("td",[t._v("File path.")])]),t._v(" "),v("tr",[v("td",[t._v("Path collection")]),t._v(" "),v("td",[t._v("Includes details of all paths this file belongs to.")])]),t._v(" "),v("tr",[v("td",[t._v("- Total count")]),t._v(" "),v("td",[t._v("Number of file paths.")])]),t._v(" "),v("tr",[v("td",[t._v("- Entries")]),t._v(" "),v("td",[t._v("File path entries.")])]),t._v(" "),v("tr",[v("td",[t._v("-- ID")]),t._v(" "),v("td",[t._v("ID of file path.")])]),t._v(" "),v("tr",[v("td",[t._v("-- Name")]),t._v(" "),v("td",[t._v("File path.")])]),t._v(" "),v("tr",[v("td",[t._v("-- Type")]),t._v(" "),v("td",[t._v("Type of file path.")])]),t._v(" "),v("tr",[v("td",[t._v("-- Sequence ID")]),t._v(" "),v("td",[t._v("Position of this object in the folder hierarchy.")])]),t._v(" "),v("tr",[v("td",[t._v("-- Etag")]),t._v(" "),v("td",[t._v("Entity tag of this object.")])]),t._v(" "),v("tr",[v("td",[t._v("-- List size")]),t._v(" "),v("td",[t._v("Number of items in this "),v("code",[t._v("Entries")]),t._v(" list.")])]),t._v(" "),v("tr",[v("td",[t._v("Created by")]),t._v(" "),v("td",[t._v("Includes details about user who created this file.")])]),t._v(" "),v("tr",[v("td",[t._v("- ID")]),t._v(" "),v("td",[t._v("ID of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Name")]),t._v(" "),v("td",[t._v("Name of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Type")]),t._v(" "),v("td",[t._v("Type of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Login")]),t._v(" "),v("td",[t._v("Login email of user.")])]),t._v(" "),v("tr",[v("td",[t._v("Modified by")]),t._v(" "),v("td",[t._v("Includes details about user who modified this file.")])]),t._v(" "),v("tr",[v("td",[t._v("- ID")]),t._v(" "),v("td",[t._v("ID of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Name")]),t._v(" "),v("td",[t._v("Name of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Type")]),t._v(" "),v("td",[t._v("Type of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Login")]),t._v(" "),v("td",[t._v("Login email of user.")])]),t._v(" "),v("tr",[v("td",[t._v("Owned by")]),t._v(" "),v("td",[t._v("Includes details about user who owned this file.")])]),t._v(" "),v("tr",[v("td",[t._v("- ID")]),t._v(" "),v("td",[t._v("ID of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Name")]),t._v(" "),v("td",[t._v("Name of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Type")]),t._v(" "),v("td",[t._v("Type of user.")])]),t._v(" "),v("tr",[v("td",[t._v("- Login")]),t._v(" "),v("td",[t._v("Login email of user.")])]),t._v(" "),v("tr",[v("td",[t._v("Item status")]),t._v(" "),v("td",[t._v("Status of this file, e.g. active.")])]),t._v(" "),v("tr",[v("td",[t._v("First")]),t._v(" "),v("td",[t._v("Whether this is the first batch of CSV rows.")])]),t._v(" "),v("tr",[v("td",[t._v("Last")]),t._v(" "),v("td",[t._v("Whether this is the last batch of CSV rows.")])]),t._v(" "),v("tr",[v("td",[t._v("Rows")]),t._v(" "),v("td",[t._v("This is a "),v("router-link",{attrs:{to:"/features/list-management.html"}},[t._v("List data pill")]),t._v(", representing the list of CSV rows.")],1)]),t._v(" "),v("tr",[v("td",[t._v("- Columns")]),t._v(" "),v("td",[t._v("Include all data pills representing CSV columns and CSV data.")])]),t._v(" "),v("tr",[v("td",[t._v("- Row")]),t._v(" "),v("td",[t._v("The row number of this row.")])]),t._v(" "),v("tr",[v("td",[t._v("- List size")]),t._v(" "),v("td",[t._v("Total number of rows.")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);