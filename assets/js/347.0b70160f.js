(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{1094:function(t,e,s){t.exports=s.p+"assets/img/get-task-by-id-action.bcb0a72b.png"},2309:function(t,e,s){"use strict";s.r(e);var d=s(0),a=Object(d.a)({},(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[d("h1",{attrs:{id:"wrike-get-task-by-id-action"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#wrike-get-task-by-id-action"}},[t._v("#")]),t._v(" Wrike - Get task by id action")]),t._v(" "),d("p",[t._v("This action retrieves a single task that matches a search by task ID. Only results in your Wrike instance that match the criteria will be returned.")]),t._v(" "),d("p",[d("DocImage",{attrs:{src:s(1094),alt:"Get task by ID action",width:"1251",height:"716"}}),t._v(" "),d("em",[t._v("Get task by ID action")])],1),t._v(" "),d("h3",{attrs:{id:"input-fields"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),d("table",{staticClass:"unchanged rich-diff-level-one"},[d("thead",[d("tr",[d("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),d("th",[t._v("Description")])])]),t._v(" "),d("tbody",[d("tr",[d("td",[t._v("Task ID")]),t._v(" "),d("td",[t._v("\n        The ID of the task.\n      ")])])])]),t._v(" "),d("h3",{attrs:{id:"output-fields"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),d("table",{staticClass:"unchanged rich-diff-level-one"},[d("thead",[d("tr",[d("th",{attrs:{width:"25%"}},[t._v("Output field")]),t._v(" "),d("th",[t._v("Description")])])]),t._v(" "),d("tbody",[d("tr",[d("td",[t._v("Task ID")]),t._v(" "),d("td",[t._v("\n        The ID of the task.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Account ID")]),t._v(" "),d("td",[t._v("\n        The ID of the account.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Title")]),t._v(" "),d("td",[t._v("\n        The title of the task.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Description")]),t._v(" "),d("td",[t._v("\n        The description of the task. Will be blank if not specified.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Brief description")]),t._v(" "),d("td",[t._v("\n        A brief description of the task.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Parent folder")]),t._v(" "),d("td",[t._v("\n        The list of parent folders of this task.\n        "),d("table",[d("tbody",[d("tr",[d("td",[t._v("Folder ID")]),t._v(" "),d("td",[t._v("The folder ID of the parent folder.")])]),t._v(" "),d("tr",[d("td",[t._v("List size")]),t._v(" "),d("td",[t._v("The size of the list, corresponding to the number of parent folders retrieved.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Super parent folder")]),t._v(" "),d("td",[t._v("\n        The list of super parent folder to this task.\n        "),d("table",[d("tbody",[d("tr",[d("td",[t._v("Folder ID")]),t._v(" "),d("td",[t._v("The folder ID of the super parent folder.")])]),t._v(" "),d("tr",[d("td",[t._v("List size")]),t._v(" "),d("td",[t._v("The size of the list, corresponding to the number of super parent folders retrieved.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("List of users who share task")]),t._v(" "),d("td",[t._v("\n        The list of users who share the task.\n        "),d("table",[d("tbody",[d("tr",[d("td",[t._v("User ID")]),t._v(" "),d("td",[t._v("The ID of the user who shares this task.")])]),t._v(" "),d("tr",[d("td",[t._v("List size")]),t._v(" "),d("td",[t._v("The size of the list, corresponding to the number of users retrieved.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Assignees")]),t._v(" "),d("td",[t._v("\n        The list of users who are assigned to the task.\n        "),d("table",[d("tbody",[d("tr",[d("td",[t._v("User ID")]),t._v(" "),d("td",[t._v("The ID of the user who shares this task.")])]),t._v(" "),d("tr",[d("td",[t._v("List size")]),t._v(" "),d("td",[t._v("The size of the list, corresponding to the number of users retrieved.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Status")]),t._v(" "),d("td",[t._v("\n        The status of the task.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Importance")]),t._v(" "),d("td",[t._v("\n        The importance of the task. Permitted values are "),d("code",[t._v("High")]),t._v(", "),d("code",[t._v("Normal")]),t._v(", and "),d("code",[t._v("Low")]),t._v(".\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Created date")]),t._v(" "),d("td",[t._v("\n        The date this task was created.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Updated date")]),t._v(" "),d("td",[t._v("\n        The date this task was updated.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Completed date")]),t._v(" "),d("td",[t._v("\n       The date this task was completed.\n     ")])]),t._v(" "),d("tr",[d("td",[t._v("Dates")]),t._v(" "),d("td",[t._v("\n        The tasks dates.\n        "),d("table",[d("tbody",[d("tr",[d("td",[t._v("Type")]),t._v(" "),d("td",[t._v("The type of task. Permitted values are "),d("code",[t._v("Backlogged")]),t._v(", "),d("code",[t._v("Milestone")]),t._v(", and "),d("code",[t._v("scheduled")]),t._v(".")])]),t._v(" "),d("tr",[d("td",[t._v("Duration")]),t._v(" "),d("td",[t._v("\n                Mandatory for "),d("code",[t._v("Planned")]),t._v(" tasks. The duration in minutes.\n              ")])]),t._v(" "),d("tr",[d("td",[t._v("Start date")]),t._v(" "),d("td",[t._v("The start date of this task. "),d("code",[t._v("Backlogged")]),t._v(" tasks do not have start dates.")])]),t._v(" "),d("tr",[d("td",[t._v("Due date")]),t._v(" "),d("td",[t._v("The due date of this task. "),d("code",[t._v("Backlogged")]),t._v(" tasks and "),d("code",[t._v("Milestone")]),t._v(" tasks do not have due dates.")])]),t._v(" "),d("tr",[d("td",[t._v("Work on weekends")]),t._v(" "),d("td",[t._v("Indicates if weekends are included in task scheduling.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Scope")]),t._v(" "),d("td",[t._v("\n        The scope of the task.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Author")]),t._v(" "),d("td",[t._v("\n        The list of users who are assigned as authors of the task.\n        "),d("table",[d("tbody",[d("tr",[d("td",[t._v("User ID")]),t._v(" "),d("td",[t._v("The ID of the user.")])]),t._v(" "),d("tr",[d("td",[t._v("List size")]),t._v(" "),d("td",[t._v("The size of the list, corresponding to the number of users retrieved.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Custom status ID")]),t._v(" "),d("td",[t._v("\n        The custom status ID of the task.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Custom status")]),t._v(" "),d("td",[t._v("\n        The custom status of the task.\n        "),d("table",[d("tbody",[d("tr",[d("td",[t._v("Name")]),t._v(" "),d("td",[t._v("The name of the custom status.")])]),t._v(" "),d("tr",[d("td",[t._v("List size")]),t._v(" "),d("td",[t._v("The custom status ID of the task.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Has attachments")]),t._v(" "),d("td",[t._v("\n        Indicates if the folder has attachments.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Permalink")]),t._v(" "),d("td",[t._v("\n        The link to open the task in a web workspace. This is only accessible if the user has the appropriate access.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Priority")]),t._v(" "),d("td",[t._v("\n        The ordering key that defines the task order in a task list.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Followed by me")]),t._v(" "),d("td",[t._v("\n        Indicates if the task is followed by the Wrike user registered on Workato.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Followers")]),t._v(" "),d("td",[t._v("\n        The users who follow this task.\n        "),d("table",[d("tbody",[d("tr",[d("td",[t._v("Follower ID")]),t._v(" "),d("td",[t._v("The ID of the user who follows this task.")])]),t._v(" "),d("tr",[d("td",[t._v("List size")]),t._v(" "),d("td",[t._v("The size of the list, corresponding to the number of users retrieved.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Super task")]),t._v(" "),d("td",[t._v("\n        The list of tasks that are marked as super tasks.\n        "),d("table",[d("tbody",[d("tr",[d("td",[t._v("Super task ID")]),t._v(" "),d("td",[t._v("The ID of the task that is marked as a super task.")])]),t._v(" "),d("tr",[d("td",[t._v("List size")]),t._v(" "),d("td",[t._v("The size of the list, corresponding to the number of tasks retrieved.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Subtask")]),t._v(" "),d("td",[t._v("\n        The list of tasks that are marked as subtasks.\n        "),d("table",[d("tbody",[d("tr",[d("td",[t._v("Super task ID")]),t._v(" "),d("td",[t._v("The ID of the task that is marked as a subtask.")])]),t._v(" "),d("tr",[d("td",[t._v("List size")]),t._v(" "),d("td",[t._v("The size of the list, corresponding to the number of subtasks retrieved.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Dependency")]),t._v(" "),d("td",[t._v("\n        The list of tasks that are marked as dependencies.\n        "),d("table",[d("tbody",[d("tr",[d("td",[t._v("Dependency ID")]),t._v(" "),d("td",[t._v("The ID of the task that is marked as a dependency.")])]),t._v(" "),d("tr",[d("td",[t._v("List size")]),t._v(" "),d("td",[t._v("The size of the list, corresponding to the number of tasks retrieved.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Metadata")]),t._v(" "),d("td",[t._v("\n        The metadata of this task. The metadata list size corresponds to the number of metadata entries retrieved.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Custom fields")]),t._v(" "),d("td",[t._v("\n        Includes data from custom field(s).\n      ")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);