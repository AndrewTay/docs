(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{2424:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"static-webhook-trigger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static-webhook-trigger"}},[t._v("#")]),t._v(" Static Webhook Trigger")]),t._v(" "),a("p",[t._v("A static webhook trigger is one that requires manual registration. This usually involves a user creating a webhook in the application user interface with a pre-defined webhook URL. It defers from a dynamic webhook because it requires a fixed webhook URL for use in the manual registration process, instead of having it be done in the background (programmatic subscription through the API when a user starts a recipe).")]),t._v(" "),a("h2",{attrs:{id:"sample-code-snippet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-code-snippet"}},[t._v("#")]),t._v(" Sample code snippet")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'My connector'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  webhook_keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payload"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'spaceId'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  triggers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    new_message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      input_fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'space_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Space"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            control_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"select"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            pick_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"space_list"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("false")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      webhook_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n        input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'space_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      webhook_notification"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payload"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n        payload\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      dedup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("messages"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n        messages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'messageId'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      output_fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("object_definitions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n        object_definitions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  object_definitions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  picklists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"webhook-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webhook-keys"}},[t._v("#")]),t._v(" "),a("code",[t._v("webhook_keys:")])]),t._v(" "),a("p",[t._v("This is a top level key (connnector-wide definition). This code block is called for each webhook notification. This code block should return the key(s) in the webhook notification that will be used to match any running triggers.")]),t._v(" "),a("p",[t._v("In a statically-registered webhook, this will be compared with each recipe that has a trigger running under this connector.\nThose with matching results from their "),a("code",[t._v("webhook_key")]),t._v(' hook (if any) will be "notified". When that happens, the webhook notification will be translated into trigger events to be processed in each respective recipe.')]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Argument")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("params")]),t._v(" "),a("td",[t._v("A hash of all response URL parameters")])]),t._v(" "),a("tr",[a("td",[t._v("headers")]),t._v(" "),a("td",[t._v("A hash of all response headers")])]),t._v(" "),a("tr",[a("td",[t._v("payload")]),t._v(" "),a("td",[t._v("Original payload from the webhook POST/PUT notification.")])])])]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("webhook_keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _payload"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'spaceId'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v("In this example, the "),a("code",[t._v("webhook_keys")]),t._v(" uses the spaceId of the webhook notification. Each webhook event received by this connector will be processed and identified by the spaceId. It is then matched against individual active triggers that have the same "),a("code",[t._v("webhook_key")]),t._v(" value.")]),t._v(" "),a("h2",{attrs:{id:"webhook-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webhook-key"}},[t._v("#")]),t._v(" "),a("code",[t._v("webhook_key:")])]),t._v(" "),a("p",[t._v("This code block is used to filter incoming webhook notifications. All webhook notifications that have "),a("code",[t._v("key")]),t._v("s matching the one defined here will be translated into trigger events.")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("webhook_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'space_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Argument")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("connection")]),t._v(" "),a("td",[a("code",[t._v("connection")]),t._v(" object, frequently used to access domain or subdomain information from the user.")])]),t._v(" "),a("tr",[a("td",[t._v("input")]),t._v(" "),a("td",[a("code",[t._v("input")]),t._v(" object: Data from trigger input fields. In this example, the input contains the Room ID to receive messages from.")])])])]),t._v(" "),a("p",[t._v("In this example, the "),a("code",[t._v("key")]),t._v(" defined here is the spaceId selected by the user from trigger input. When the recipe is started, only webhook notifications with matching spaceId values will be translated into a trigger event.")]),t._v(" "),a("h2",{attrs:{id:"webhook-notification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webhook-notification"}},[t._v("#")]),t._v(" "),a("code",[t._v("webhook_notification:")])]),t._v(" "),a("p",[t._v("When the webhook trigger receives a webhook notification, the payload is processed through this block. Here, we can access the desired key that contains the webhook notification data.")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("webhook_notification"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payload"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  payload\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Argument")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("input")]),t._v(" "),a("td",[a("code",[t._v("input")]),t._v(" object: Data from trigger input fields. In this example, the input contains the Room ID to receive messages from.")])]),t._v(" "),a("tr",[a("td",[t._v("payload")]),t._v(" "),a("td",[t._v("Original payload from the webhook POST/PUT notification.")])])])]),t._v(" "),a("h2",{attrs:{id:"output-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" "),a("code",[t._v("output_fields:")])]),t._v(" "),a("p",[t._v("You can statically define output_fields in the same way you define input_fields. This time, however, we have used something called object_definitions to define the output schema, where we defined the schema for the "),a("code",[t._v("message")]),t._v(" object once and can continue to reuse this same schema by referencing it in multiple areas in the custom connector code.")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("output_fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("object_definitions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  object_definitions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Argument")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("object_definitions")]),t._v(" "),a("td",[t._v("This allows us to access a static or dynamic definition declared in the object_definitions block")])])])]),t._v(" "),a("p",[t._v("This is something we will cover later on in our "),a("router-link",{attrs:{to:"/developing-connectors/sdk/object-definition.html"}},[t._v("object definitions")]),t._v(" section.")],1),t._v(" "),a("h2",{attrs:{id:"sample-output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-output"}},[t._v("#")]),t._v(" "),a("code",[t._v("sample_output:")])]),t._v(" "),a("p",[t._v("This is an optional block that populates the datapills defined in the "),a("code",[t._v("output_fields:")]),t._v(" block with some sample information for users. It is exposed as grey text next to datapills. Check out "),a("router-link",{attrs:{to:"/developing-connectors/sdk/best-practices.html"}},[t._v("best practices")]),t._v(" section on how to use sample_outputs.")],1),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("sample_output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _input"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    accounts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" call"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"format_api_output_field_names"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/accounts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                       return_object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shallow"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                       limit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compact"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[a("DocImage",{attrs:{src:e(26),alt:"Sample output",width:"1082",height:"1118"}}),t._v(" "),a("em",[t._v("Sample outputs make your datapills more usable by giving some context to users.")])],1),t._v(" "),a("h2",{attrs:{id:"other-optional-blocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-optional-blocks"}},[t._v("#")]),t._v(" Other optional blocks")]),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"10%"}},[t._v("Block")]),t._v(" "),a("th",{attrs:{width:"20%"}},[t._v("Example")]),t._v(" "),a("th",{attrs:{width:"70%"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("title:")])]),t._v(" "),a("td",[a("code",[t._v('title: "This is the title of the action"')])]),t._v(" "),a("td",[t._v("This shows up as the main action/trigger name and override the name given to the action block. This is useful in naming actions and triggers that have special characters"),a("br"),t._v(" "),a("img",{attrs:{src:e(27)}})])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("subtitle:")])]),t._v(" "),a("td",[a("code",[t._v('subtitle: "This is a subtitle"')])]),t._v(" "),a("td",[t._v("This shows up below the main action name when users are looking at the dropdown of possible actions"),a("br"),t._v(" "),a("img",{attrs:{src:e(28)}})])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("description:")])]),t._v(" "),a("td",[a("code",[t._v('description: "This is a description"')])]),t._v(" "),a("td",[t._v("This is what shows up as the summary of an action when looking at the recipe."),a("br"),t._v(" "),a("img",{attrs:{src:e(29)}})])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("help:")])]),t._v(" "),a("td",[a("code",[t._v('help: "This is a help text"')])]),t._v(" "),a("td",[t._v("This shows up as the help hint when users are configuring the action. Use this to detail any important information the user should have"),a("br"),t._v(" "),a("img",{attrs:{src:e(30)}})])])])]),t._v(" "),a("h2",{attrs:{id:"other-trigger-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-trigger-types"}},[t._v("#")]),t._v(" Other trigger types")]),t._v(" "),a("p",[t._v("Check out the other trigger types we support. "),a("router-link",{attrs:{to:"/developing-connectors/sdk/trigger.html"}},[t._v("Go back to our list of triggers.")])],1),t._v(" "),a("h2",{attrs:{id:"next-section"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-section"}},[t._v("#")]),t._v(" Next section")]),t._v(" "),a("p",[t._v("If you're already familiar with the trigger types we support, check out the various types of HTTP requests that our SDK supports as well as how to use them in your "),a("code",[t._v("connection:")]),t._v(", "),a("code",[t._v("actions:")]),t._v(" and "),a("code",[t._v("triggers:")]),t._v(" blocks. "),a("router-link",{attrs:{to:"/developing-connectors/sdk/http-requests-and-response-handling.html"}},[t._v("Go to our HTTP methods documentation")]),t._v(" or check our our "),a("router-link",{attrs:{to:"/developing-connectors/sdk/best-practices.html"}},[t._v("best practices")]),t._v(" for some tips on building triggers.")],1)])}),[],!1,null,null,null);s.default=n.exports},26:function(t,s,e){t.exports=e.p+"assets/img/sample_output_sample.271867aa.png"},27:function(t,s,e){t.exports=e.p+"assets/img/title.5d31000a.png"},28:function(t,s,e){t.exports=e.p+"assets/img/subtitle.af1f85c5.png"},29:function(t,s,e){t.exports=e.p+"assets/img/description.4655ec2d.png"},30:function(t,s,e){t.exports=e.p+"assets/img/help.55bf1b97.png"}}]);