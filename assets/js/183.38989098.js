(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{2222:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"redshift-select-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redshift-select-actions"}},[t._v("#")]),t._v(" Redshift - Select actions")]),t._v(" "),a("h2",{attrs:{id:"select-rows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-rows"}},[t._v("#")]),t._v(" Select rows")]),t._v(" "),a("p",[t._v("This action lets you select rows based on certain criteria defined by a "),a("code",[t._v("WHERE")]),t._v(" condition. Rows from the selected table that match the "),a("code",[t._v("WHERE")]),t._v(" condition will be returned as the output of this action.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(849),alt:"Select rows action",width:"2145",height:"1754"}}),t._v(" "),a("em",[t._v("Select rows action")])],1),t._v(" "),a("h3",{attrs:{id:"table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[t._v("#")]),t._v(" Table")]),t._v(" "),a("p",[t._v("First, select a table to work with. This can be done either by selecting a table from the pick list, or toggling the input to text mode and typing the full table name.")]),t._v(" "),a("h3",{attrs:{id:"where-condition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-condition"}},[t._v("#")]),t._v(" WHERE condition")]),t._v(" "),a("p",[t._v("Next, provide a "),a("code",[t._v("WHERE")]),t._v(" condition to filter rows. This condition can be as simple as filtering a single record by it's "),a("code",[t._v("ID")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n")])])]),a("p",[t._v("Alternatively, it can be used to select multiple rows based on values in one or more columns.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'closed'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" priority "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("p",[t._v("Complex "),a("code",[t._v("WHERE")]),t._v(" conditions with subqueries can also be used. Refer to the "),a("router-link",{attrs:{to:"/connectors/redshift.html#where-condition"}},[t._v("WHERE condition")]),t._v(" guide for more information.")],1),t._v(" "),a("h3",{attrs:{id:"order-by"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#order-by"}},[t._v("#")]),t._v(" Order by")]),t._v(" "),a("p",[t._v("Rows returned from this action can be ordered based on the "),a("strong",[t._v("Order by")]),t._v(" input field. This field is used to change the default ordering of rows from your Redshift database.")]),t._v(" "),a("p",[t._v("You can also define the direction of order for each column you wish to order by. The following order by statement will order rows by "),a("code",[t._v("priority")]),t._v(" in ascending order followed by "),a("code",[t._v("created_date")]),t._v(" in descending order (latest first).")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("priority "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("asc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" created_date "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("desc")]),t._v("\n")])])]),a("p",[a("DocImage",{attrs:{src:s(850),alt:"Sorting select action results with Order by",width:"1101",height:"576"}}),t._v(" "),a("em",[t._v("Sorting select action results with "),a("strong",[t._v("Order by")])])],1),t._v(" "),a("h3",{attrs:{id:"limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limit"}},[t._v("#")]),t._v(" Limit")]),t._v(" "),a("p",[t._v("This input field determines the maximum number of rows to return. The default limit is 100 and capped at a maximum of 1000 rows for a single "),a("strong",[t._v("Select rows")]),t._v(" action.")]),t._v(" "),a("h3",{attrs:{id:"offset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offset"}},[t._v("#")]),t._v(" Offset")]),t._v(" "),a("p",[t._v("This input field gives you the option to fetch only a page of results from the entire results set. For example, to skip the first 100 rows of the selected results set, input "),a("code",[t._v("100")]),t._v(" to this field. The default is "),a("code",[t._v("0")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"select-rows-using-custom-sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-rows-using-custom-sql"}},[t._v("#")]),t._v(" Select rows using custom SQL")]),t._v(" "),a("p",[t._v("This action lets you select rows based on a custom SQL query. Rows that are returned from the query will be returned as the output of this action.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(851),alt:"Select rows using custom SQL action",width:"2144",height:"1597"}}),t._v(" "),a("em",[t._v("Select rows using custom SQL action")])],1),t._v(" "),a("h3",{attrs:{id:"sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[t._v("#")]),t._v(" SQL")]),t._v(" "),a("p",[t._v("Provide the SQL to be executed to select rows. The SQL here will be used to generate the output datatree. To do this, the SQL will be executed once when you provide it. You can map datapills here to execute dynamically changing SQL statements. Remember to wrap datapills in quotes ("),a("code",[t._v("''")]),t._v(").")]),t._v(" "),a("p",[t._v("Avoid using limit clauses like "),a("code",[t._v("LIMIT")]),t._v(" in your SQL. This is because the limit to the number of rows returned in the query is based on the value defined in the "),a("a",{attrs:{href:"#limit-1"}},[a("strong",[t._v("Limit")]),t._v(" input field")]),t._v(". Adding your own limit clause will cause the action to fail.")]),t._v(" "),a("h3",{attrs:{id:"limit-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limit-2"}},[t._v("#")]),t._v(" Limit")]),t._v(" "),a("p",[t._v("This input field determines the maximum number of rows to return. The default limit is 100 and capped at a maximum of 1000 rows for a single "),a("strong",[t._v("Select rows using custom SQL")]),t._v(" action.")]),t._v(" "),a("p",[t._v("If this field is left blank, "),a("code",[t._v("LIMIT 100")]),t._v(" will be used.")])])}),[],!1,null,null,null);e.default=r.exports},849:function(t,e,s){t.exports=s.p+"assets/img/select-rows-action.3273aa42.png"},850:function(t,e,s){t.exports=s.p+"assets/img/order-by.6466c0da.png"},851:function(t,e,s){t.exports=s.p+"assets/img/custom-sql-action.77fbf9ba.png"}}]);