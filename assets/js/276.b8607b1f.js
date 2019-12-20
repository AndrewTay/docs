(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{2084:function(e,t,r){"use strict";r.r(t);var s=r(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"sap-concur-new-expense-report-trigger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sap-concur-new-expense-report-trigger"}},[e._v("#")]),e._v(" SAP Concur - New expense report trigger")]),e._v(" "),s("h2",{attrs:{id:"new-expense-report-trigger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-expense-report-trigger"}},[e._v("#")]),e._v(" New expense report trigger")]),e._v(" "),s("p",[e._v("This trigger picks up expense reports when they are created or submitted. Each report is processed as a separate job. It checks for new reports once every poll interval. The polling interval is determined by your Workato plan. Check the "),s("a",{attrs:{href:"https://www.workato.com/pricing?audience=general",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pricing and Plans page"),s("OutboundLink")],1),e._v(" to find out more.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:r(447),alt:"New expense report trigger",width:"2211",height:"2089"}}),e._v(" "),s("em",[e._v("New expense report trigger")])],1),e._v(" "),s("h2",{attrs:{id:"input-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",{attrs:{width:"25%"}},[e._v("Input field")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("When first started, this recipe should pick up events from")]),e._v(" "),s("td",[e._v("\n        Expense reports created or submitted after this time will be processed by the recipe."),s("br"),e._v("\n        If no Approval status is selected or if "),s("b",[e._v("Not submitted")]),e._v(" status is selected, this trigger will pick up expense reports when they are first created. Otherwise, it will pick up expense reports when they are submitted.\n      ")])]),e._v(" "),s("tr",[s("td",[e._v("Approval status")]),e._v(" "),s("td",[e._v("\n        Filter the expense reports by selecting an Approval status from this list:"),s("br"),e._v("\n        - Not submitted"),s("br"),e._v("\n        - Submitted"),s("br"),e._v("\n        - Submission triggered an anomaly and fraud check"),s("br"),e._v("\n        - Pending reviews"),s("br"),e._v("\n        - Pending external validation"),s("br"),e._v("\n        - Pending Budget approval"),s("br"),e._v("\n        - Pending Cost object approval"),s("br"),e._v("\n        - Pending manager approval"),s("br"),e._v("\n        - Pending prepayment validation"),s("br"),e._v("\n        - Pending receipt images"),s("br"),e._v("\n        - Needs to be resubmitted"),s("br"),e._v("\n        - Approved"),s("br"),e._v("\n        - Expired in approval queue"),s("br"),s("br"),e._v("\n        You can also provide a custom status. Refer to SAP Concur "),s("a",{attrs:{href:"https://developer.concur.com/api-reference/expense/expense-report/v3.reports.html"}},[e._v("API documentation")]),e._v(" for more information about these statuses.\n      ")])]),e._v(" "),s("tr",[s("td",[e._v("Payment status")]),e._v(" "),s("td",[e._v("\n        Filter the expense reports by selecting a Payment status from this list:"),s("br"),e._v("\n        - On hold"),s("br"),e._v("\n        - Not paid"),s("br"),e._v("\n        - Confirmed"),s("br"),e._v("\n        - In process to be paid"),s("br"),e._v("\n        - Paid"),s("br"),s("br"),e._v("\n        You can also provide a custom status. Refer to SAP Concur "),s("a",{attrs:{href:"https://developer.concur.com/api-reference/expense/expense-report/v3.reports.html"}},[e._v("API documentation")]),e._v(" for more information about these statuses.\n      ")])])])]),e._v(" "),s("h2",{attrs:{id:"output-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),s("p",[e._v("All expense report fields, including custom fields, will be available as output fields for mapping in recipes action steps.")])])}),[],!1,null,null,null);t.default=n.exports},447:function(e,t,r){e.exports=r.p+"assets/img/new-expense-report-trigger.a46cd0e9.png"}}]);