(window.webpackJsonp=window.webpackJsonp||[]).push([[436],{2097:function(e,t,i){"use strict";i.r(t);var r=i(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"dropbox-trigger-new-updated-csv-file-in-directory"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dropbox-trigger-new-updated-csv-file-in-directory"}},[e._v("#")]),e._v(" Dropbox trigger - New/updated CSV file in directory")]),e._v(" "),i("p",[e._v("Triggers when a new CSV file is added or existing CSV file is updated in a specified folder. New and updated CSV files in subfolders will also be picked up.")]),e._v(" "),i("p",[e._v("Checks selected folder for new/updated CSV files every 5 minutes.")]),e._v(" "),i("h2",{attrs:{id:"input-fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Field name")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("When first started, this recipe should pick up events from")]),e._v(" "),i("td",[e._v("When you start recipe for the first time, it picks up CSV files modified from this specified date and time. Defaults to fetching CSV files created/updated an hour ago if left blank. Once recipe has been run or tested, value cannot be changed. "),i("router-link",{attrs:{to:"/recipes/triggers.html#since-from"}},[e._v("Learn more about this field here.")])],1)]),e._v(" "),i("tr",[i("td",[e._v("Folder / Folder path")]),e._v(" "),i("td",[e._v("The folder to monitor for new/updated CSV files. Sub-folders will also be monitored.")])]),e._v(" "),i("tr",[i("td",[e._v("Column delimiter")]),e._v(" "),i("td",[e._v("The character used to separate column values in your CSV file.")])]),e._v(" "),i("tr",[i("td",[e._v("Batch size")]),e._v(" "),i("td",[e._v("Number of CSV rows to process per batch. Instead of reading rows one by one, Workato reads a batch of CSV rows at a time to increase throughput. "),i("router-link",{attrs:{to:"/features/batch-processing.html"}},[e._v("Learn more about batch processing")]),e._v(".")],1)]),e._v(" "),i("tr",[i("td",[e._v("Obtain a direct URL to file?")]),e._v(" "),i("td",[e._v("Generate a public URL that lives for 4 hours. This URL can be obtained from the "),i("code",[e._v("URL")]),e._v(" data pill in the trigger output.")])]),e._v(" "),i("tr",[i("td",[e._v("Add column names manually?")]),e._v(" "),i("td",[e._v("Set column names manually. Otherwise the first row of the latest CSV file in the selected folder will be taken to get column names.")])]),e._v(" "),i("tr",[i("td",[e._v("Column names")]),e._v(" "),i("td",[e._v("Enter CSV column names, each on a new line. By default, the column names of the latest CSV file in your selected folder will be retrieved.")])])])]),e._v(" "),i("h2",{attrs:{id:"output-fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Field name")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("Path")]),e._v(" "),i("td",[e._v("File path.")])]),e._v(" "),i("tr",[i("td",[e._v("Bytes")]),e._v(" "),i("td",[e._v("File size in bytes.")])]),e._v(" "),i("tr",[i("td",[e._v("Size")]),e._v(" "),i("td",[e._v("File size in string format.")])]),e._v(" "),i("tr",[i("td",[e._v("Mime type")]),e._v(" "),i("td",[e._v("The Mime type of this file.")])]),e._v(" "),i("tr",[i("td",[e._v("URL")]),e._v(" "),i("td",[e._v("File's public URL. Can be used to download file using "),i("router-link",{attrs:{to:"/features/utilities.html#download-file-from-url"}},[e._v("Workato Utility connector")]),e._v(".")],1)]),e._v(" "),i("tr",[i("td",[e._v("URL expires")]),e._v(" "),i("td",[e._v("Date/time the file's public URL will expire.")])]),e._v(" "),i("tr",[i("td",[e._v("Rev")]),e._v(" "),i("td",[e._v("A unique identifier for the current revision of the file.")])]),e._v(" "),i("tr",[i("td",[e._v("Modified")]),e._v(" "),i("td",[e._v("Date/time the file was last modified.")])]),e._v(" "),i("tr",[i("td",[e._v("Client modified time")]),e._v(" "),i("td",[e._v("This is the modification time set by the desktop client when the file was added to Dropbox. Since this time is not verified (the Dropbox server stores whatever the desktop client sends up), this should only be used for display purposes (such as sorting) and not, for example, to determine if a file has changed or not.")])]),e._v(" "),i("tr",[i("td",[e._v("Is directory")]),e._v(" "),i("td",[e._v("Whether this is a directory/folder.")])]),e._v(" "),i("tr",[i("td",[e._v("Read only")]),e._v(" "),i("td",[e._v("Whether this file is read only.")])]),e._v(" "),i("tr",[i("td",[e._v("Modifier")]),e._v(" "),i("td",[e._v("The user who modified this file.")])]),e._v(" "),i("tr",[i("td",[e._v("Content hash")]),e._v(" "),i("td",[e._v("A hash of the file content. This field can be used to verify data integrity. For more information see "),i("a",{attrs:{href:"https://www.dropbox.com/developers/reference/content-hash",target:"_blank",rel:"noopener noreferrer"}},[e._v("Box's  Content hash page"),i("OutboundLink")],1),e._v(".")])]),e._v(" "),i("tr",[i("td",[e._v("Thumb exists")]),e._v(" "),i("td",[e._v("Whether thumbnail exists.")])]),e._v(" "),i("tr",[i("td",[e._v("Icon")]),e._v(" "),i("td",[e._v("String contents of file icon.")])]),e._v(" "),i("tr",[i("td",[e._v("First batch")]),e._v(" "),i("td",[e._v("Whether this is the first batch of CSV lines.")])]),e._v(" "),i("tr",[i("td",[e._v("Last batch")]),e._v(" "),i("td",[e._v("Whether this is the first batch of CSV lines.")])]),e._v(" "),i("tr",[i("td",[e._v("Lines")]),e._v(" "),i("td",[e._v("A "),i("router-link",{attrs:{to:"/features/list-management.html"}},[e._v("list data pill")]),e._v(" representing the list of CSV lines. Can be used with "),i("router-link",{attrs:{to:"/recipes/steps.html#repeat-step"}},[e._v("Repeat step")]),e._v(" to loop through the CSV lines.")],1)]),e._v(" "),i("tr",[i("td",[e._v("- Line")]),e._v(" "),i("td",[e._v("The CSV line number.")])]),e._v(" "),i("tr",[i("td",[e._v("- Columns")]),e._v(" "),i("td",[e._v("Contains the CSV columns' values in this CSV line.")])]),e._v(" "),i("tr",[i("td",[e._v("- List size")]),e._v(" "),i("td",[e._v("Total number of CSV lines.")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);