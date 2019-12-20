(window.webpackJsonp=window.webpackJsonp||[]).push([[497],{2409:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"json-data-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-data-format"}},[t._v("#")]),t._v(" JSON data format")]),t._v(" "),a("p",[t._v("The Workato SDK's default expected data format is JSON. Action and trigger inputs will be passed as JSON payloads if no data format is specified. A JSON parser error will be shown if the SDK expected JSON and got another data format.")]),t._v(" "),a("blockquote",[a("p",[t._v("When sending HTTP requests to API endpoints, the data format is defined in the requests. This is done by embedding the data format inside the "),a("code",[t._v("Content-Type")]),t._v(" header.")])]),t._v(" "),a("p",[t._v("Below we have an example of an action block titled "),a("code",[t._v("post_message")]),t._v(". This simple action collects input from the user based on fields defined in the "),a("code",[t._v("input_fields")]),t._v(" block in the "),a("code",[t._v("post_message")]),t._v(" block and when the action is executed in a recipe, the execute block is run that creates a "),a("code",[t._v("POST")]),t._v(" HTTP call to "),a("code",[t._v("https://api.ciscospark.com/v1/messages")]),t._v(" with "),a("code",[t._v("input")]),t._v(" as its body.")]),t._v(" "),a("h2",{attrs:{id:"sample-code-snippet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-code-snippet"}},[t._v("#")]),t._v(" Sample code snippet")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'My cisco connector'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    post_message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      input_fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"roomId"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      execute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("input"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n        post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.ciscospark.com/v1/messages"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      output_fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"roomId"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"roomType"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"personId"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"personEmail"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"created"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  triggers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  object_definitions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  picklists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Here we have the resultant request that is sent when the "),a("code",[t._v("execute:")]),t._v(" block above is executed. We default your "),a("code",[t._v("Content-Type")]),t._v(" header to "),a("code",[t._v("application/json")]),t._v(" and also format your input as key-value pairs in a JSON formatted string. This minimises the amount of pre and post request processing that you need to do.")]),t._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("p",[t._v("Now lets go through what happens when we run the "),a("code",[t._v("post_message")]),t._v(" action that we just defined. Below we go through the POST HTTP request we send out to "),a("a",{attrs:{href:"https://api.ciscospark.com/v1/messages",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://api.ciscospark.com/v1/messages"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("POST HTTP requests can be split into 2 different sections of "),a("code",[t._v("Headers")]),t._v(" and "),a("code",[t._v("Body")]),t._v(". Request headers are where the HTTP method is defined as well as metadata related to the request body. The body contains the actual content of the request.")])]),t._v(" "),a("h3",{attrs:{id:"request-headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-headers"}},[t._v("#")]),t._v(" Request headers")]),t._v(" "),a("p",[t._v("Since no data format was declared in our action, Workato defaults to JSON and assigns "),a("code",[t._v("Content-Type")]),t._v(" to "),a("code",[t._v("application/json")]),t._v(". This tells the API we sent the request to that our request body is in a JSON data format.")]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[t._v("POST https://api.ciscospark.com/v1/messages\nAccept  application/json\nContent-Type  application/json\nAuthorization Bearer ---\n")])])]),a("h3",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body:")]),t._v(" "),a("p",[t._v("This request body is generated based on the user's input and transformed into a JSON format by Workato. This request body corresponds to a user's input for the "),a("code",[t._v("roomId")]),t._v(" field being "),a("code",[t._v("1234")]),t._v(" and "),a("code",[t._v("text")]),t._v(" field being "),a("code",[t._v("testing")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"roomId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testing"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("p",[t._v("Whenever you send a HTTP request, you expect a response back which contains a few components")]),t._v(" "),a("h3",{attrs:{id:"response-status-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-status-code"}},[t._v("#")]),t._v(" Response status code")]),t._v(" "),a("p",[t._v("The response status code is an important way to know whether your request to the API was good.\n"),a("code",[t._v("HTTP/1.1 200 OK")])]),t._v(" "),a("h3",{attrs:{id:"response-headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-headers"}},[t._v("#")]),t._v(" Response headers")]),t._v(" "),a("p",[t._v("This is similar to request headers and contains metadata about the response body.")]),t._v(" "),a("h3",{attrs:{id:"response-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-body"}},[t._v("#")]),t._v(" Response body:")]),t._v(" "),a("p",[t._v("The response body is where the API sends the most of information in response to your request.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"roomId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"roomType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testing"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"personId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"101"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"personEmail"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eeshan@workato.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-03-26T13:28:22.131Z"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"other-data-formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-data-formats"}},[t._v("#")]),t._v(" Other data Formats")]),t._v(" "),a("p",[t._v("Check out the other data formats we support. "),a("router-link",{attrs:{to:"/developing-connectors/sdk/data-format.html"}},[t._v("Learn more")])],1),t._v(" "),a("h3",{attrs:{id:"next-section"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-section"}},[t._v("#")]),t._v(" Next section")]),t._v(" "),a("p",[t._v("If you're already familiar with the data formats we support, check out the authentication types that our SDK supports as well as how to implement them. "),a("router-link",{attrs:{to:"/developing-connectors/sdk/authentication.html"}},[t._v("Learn more")])],1)])}),[],!1,null,null,null);s.default=n.exports}}]);