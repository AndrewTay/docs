(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{2237:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"salesforce-batch-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#salesforce-batch-operations"}},[e._v("#")]),e._v(" Salesforce batch operations")]),e._v(" "),s("p",[e._v("Apart from support for Salesforce "),s("router-link",{attrs:{to:"/connectors/salesforce/salesforce-bulk.html"}},[e._v("bulk operations")]),e._v(", Workato has included support for Salesforce "),s("strong",[e._v("batch")]),e._v(" operations, which make use of Salesforce's "),s("code",[e._v("sObject Collections")]),e._v(" "),s("a",{attrs:{href:"https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_sobjects_collections.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("API"),s("OutboundLink")],1),e._v(".")],1),e._v(" "),s("p",[e._v("These operations allow the creation and update of up to "),s("strong",[e._v("2,000 records")]),e._v(" at a time. Users should make use of these operations when they are creating or updating smaller batches of Salesforce records, or if they wish to perform multiple operations without using Bulk API.")]),e._v(" "),s("p",[e._v("The supported operations are:")]),e._v(" "),s("ul",[s("li",[e._v("Create records in batches")]),e._v(" "),s("li",[e._v("Update records in batches")])]),e._v(" "),s("h2",{attrs:{id:"create-records-in-batches"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-records-in-batches"}},[e._v("#")]),e._v(" Create records in batches")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(875),alt:"Create record in batch",width:"1312",height:"680"}}),e._v(" "),s("em",[e._v("Create records in batches action")])],1),e._v(" "),s("p",[e._v("The 'Create records in batches' action allows the creation of up to 2,000 records in a single request. To begin using this action, select the Salesforce object to be created. As shown in the example below, when the 'Contact' object is selected, the list input pill and all the required fields in the object is displayed.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(253),alt:"Select object",width:"1204",height:"582"}}),e._v(" "),s("em",[e._v("Select Salesforce Contact object")])],1),e._v(" "),s("p",[e._v("The list input pill can come from various sources such as a new CSV file in a file storage app (eg. Box, Amazon S3, On-prem files) or a list created with the Lists by Workato application. To learn more on how to use list inputs, refer to the "),s("router-link",{attrs:{to:"/features/list-management.html"}},[e._v("List Management")]),e._v(" documentation.")],1),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(254),alt:"Select object",width:"2176",height:"1096"}}),e._v(" "),s("em",[e._v("Select list input pill")])],1),e._v(" "),s("p",[e._v("Thereafter, in the "),s("code",[e._v("Add/remove optional fields")]),e._v(" section at the end of the action, proceed to select any additional optional Salesforce fields and map those fields.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(255),alt:"Select optional fields",width:"1260",height:"922"}}),e._v(" "),s("em",[e._v("Select optional fields")])],1),e._v(" "),s("h3",{attrs:{id:"advanced-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#advanced-configuration"}},[e._v("#")]),e._v(" Advanced configuration")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(256),alt:"Advanced configuration",width:"1320",height:"590"}}),e._v(" "),s("em",[e._v("Advanced configuration")])],1),e._v(" "),s("p",[e._v("In the advanced configuration section, choose if you want to roll back if the record creation fails. If "),s("strong",[e._v("Yes")]),e._v(", this is how the roll-back works:")]),e._v(" "),s("p",[e._v("Workato processes in batches of 200 records per batch. So when 1 record in a batch fails, that whole batch will be rolled back, but other batches will not be affected.")]),e._v(" "),s("p",[e._v("For example, if 1000 records are being created, they will be divided into 5 batches of 200 records each. If a record in the 1st batch failed, that entire 1st batch of 200 records will be rolled back. The other 4 batches are not affected and will be processed as normal.")]),e._v(" "),s("p",[e._v("The default, "),s("strong",[e._v("No")]),e._v(", is the recommended setting. The records that are created successfully will remain created, and the failed records are handled by additional logic in the subsequent recipe steps.")]),e._v(" "),s("h3",{attrs:{id:"output-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),s("p",[e._v("The output fields for this action are split into 2 categories: "),s("strong",[e._v("Successful records")]),e._v(" for the records created in Salesforce and "),s("strong",[e._v("Failed records")]),e._v(" for those that were not created.")]),e._v(" "),s("p",[e._v("Note that in "),s("strong",[e._v("Failed records")]),e._v(", the Salesforce ID of the object will not be available as an output data pill as no record was created.")]),e._v(" "),s("h4",{attrs:{id:"successful-records"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#successful-records"}},[e._v("#")]),e._v(" Successful records")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Output data pill")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("ID")]),e._v(" "),s("td",[e._v("Internal Salesforce ID of the record created")])]),e._v(" "),s("tr",[s("td",[e._v("Success")]),e._v(" "),s("td",[e._v("In successful records, this value will always be 'true'")])]),e._v(" "),s("tr",[s("td",[e._v("List size")]),e._v(" "),s("td",[e._v("Corresponds to the number of successfully created records")])])])]),e._v(" "),s("h4",{attrs:{id:"failed-records"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#failed-records"}},[e._v("#")]),e._v(" Failed records")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Output data pill")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Success")]),e._v(" "),s("td",[e._v("In failed records, this value will always be 'false'")])]),e._v(" "),s("tr",[s("td",[e._v("Errors")]),e._v(" "),s("td",[e._v("An array that contains the "),s("strong",[e._v("Status code")]),e._v(", "),s("strong",[e._v("Error message")]),e._v(" and "),s("strong",[e._v("Fields")]),e._v(". Use the information here to determine why the records failed and in error emails.")])]),e._v(" "),s("tr",[s("td",[e._v("List size")]),e._v(" "),s("td",[e._v("Corresponds to the number of records that failed to create")])])])]),e._v(" "),s("h2",{attrs:{id:"update-records-in-batches"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-records-in-batches"}},[e._v("#")]),e._v(" Update records in batches")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(876),alt:"Create record in batch",width:"1322",height:"682"}}),e._v(" "),s("em",[e._v("Update records in batches action")])],1),e._v(" "),s("p",[e._v("The 'Update records in batches' action allows the update of up to 2,000 records in a single request. To begin using this action, select the Salesforce object to be updated. As shown in the example below, when the 'Contact' object is selected, the list input pill and all the required fields in the object is displayed. In this case, one of the required fields will always be the ID of the Salesforce object to be updated. This means that one column in the list provided must contain the Salesforce ID.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(253),alt:"Select object",width:"1204",height:"582"}}),e._v(" "),s("em",[e._v("Select Salesforce Contact object")])],1),e._v(" "),s("p",[e._v("The list input pill can come from various sources such as a new CSV file in a file storage app (eg. Box, Amazon S3, On-prem files) or a list created with the Lists by Workato application. To learn more on how to use list inputs, refer to the "),s("router-link",{attrs:{to:"/features/list-management.html"}},[e._v("List Management")]),e._v(" documentation.")],1),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(254),alt:"Select object",width:"2176",height:"1096"}}),e._v(" "),s("em",[e._v("Select list input pill")])],1),e._v(" "),s("p",[e._v("Thereafter, in the "),s("code",[e._v("Add/remove optional fields")]),e._v(" section at the end of the action, proceed to select any additional optional Salesforce fields and map those fields.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(255),alt:"Select optional fields",width:"1260",height:"922"}}),e._v(" "),s("em",[e._v("Select optional fields")])],1),e._v(" "),s("h3",{attrs:{id:"advanced-configuration-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#advanced-configuration-2"}},[e._v("#")]),e._v(" Advanced configuration")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(256),alt:"Advanced configuration",width:"1320",height:"590"}}),e._v(" "),s("em",[e._v("Advanced configuration")])],1),e._v(" "),s("p",[e._v("In the advanced configuration section, choose if you want to roll back if the record creation fails. If "),s("strong",[e._v("Yes")]),e._v(", this is how the roll-back works:")]),e._v(" "),s("p",[e._v("Workato processes in batches of 200 records per batch. So when 1 record in a batch fails, that whole batch will be rolled back, but other batches will not be affected.")]),e._v(" "),s("p",[e._v("For example, if 1000 records are being created, they will be divided into 5 batches of 200 records each. If a record in the 1st batch failed, that entire 1st batch of 200 records will be rolled back. The other 4 batches are not affected and will be processed as normal.")]),e._v(" "),s("p",[e._v("The default, "),s("strong",[e._v("No")]),e._v(", is the recommended setting. The records that are created successfully will remain created, and the failed records are handled by additional logic in the subsequent recipe steps.")]),e._v(" "),s("h3",{attrs:{id:"output-fields-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-fields-2"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),s("p",[e._v("The output fields for this action are split into 2 categories: "),s("strong",[e._v("Successful records")]),e._v(" for the records updated in Salesforce and "),s("strong",[e._v("Failed records")]),e._v(" for those that were not updated.")]),e._v(" "),s("h4",{attrs:{id:"successful-records-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#successful-records-2"}},[e._v("#")]),e._v(" Successful records")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Output data pill")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("ID")]),e._v(" "),s("td",[e._v("Internal Salesforce ID of the record updated")])]),e._v(" "),s("tr",[s("td",[e._v("Success")]),e._v(" "),s("td",[e._v("In successful records, this value will always be 'true'")])]),e._v(" "),s("tr",[s("td",[e._v("List size")]),e._v(" "),s("td",[e._v("Corresponds to the number of successfully updated records")])])])]),e._v(" "),s("h4",{attrs:{id:"failed-records-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#failed-records-2"}},[e._v("#")]),e._v(" Failed records")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Output data pill")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("ID")]),e._v(" "),s("td",[e._v("Internal Salesforce ID of the record updated")])]),e._v(" "),s("tr",[s("td",[e._v("Success")]),e._v(" "),s("td",[e._v("In failed records, this value will always be 'false'")])]),e._v(" "),s("tr",[s("td",[e._v("Errors")]),e._v(" "),s("td",[e._v("An array that contains the "),s("strong",[e._v("Status code")]),e._v(", "),s("strong",[e._v("Error message")]),e._v(" and "),s("strong",[e._v("Fields")]),e._v(". Use the information here to determine why the records failed and in error emails.")])]),e._v(" "),s("tr",[s("td",[e._v("List size")]),e._v(" "),s("td",[e._v("Corresponds to the number of records that failed to update")])])])])])}),[],!1,null,null,null);t.default=r.exports},253:function(e,t,a){e.exports=a.p+"assets/img/salesforce-batch-select-object.fa5a268e.gif"},254:function(e,t,a){e.exports=a.p+"assets/img/salesforce-batch-select-object.11ba7d62.png"},255:function(e,t,a){e.exports=a.p+"assets/img/batch-select-optional-fields.1fa5534e.png"},256:function(e,t,a){e.exports=a.p+"assets/img/batch-advanced-config.0668964f.png"},875:function(e,t,a){e.exports=a.p+"assets/img/batch-create-action.0c3817a4.png"},876:function(e,t,a){e.exports=a.p+"assets/img/batch-update-action.add7a60b.png"}}]);