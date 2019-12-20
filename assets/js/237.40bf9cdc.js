(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{2215:function(e,t,o){"use strict";o.r(t);var i=o(0),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"quickbooks-online"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#quickbooks-online"}},[e._v("#")]),e._v(" QuickBooks Online")]),e._v(" "),i("p",[i("a",{attrs:{href:"https://quickbooks.intuit.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("QuickBooks Online"),i("OutboundLink")],1),e._v(" is an easy-to-use accounting software package that enables businesses to manage business payments, bills, and payroll functions.")]),e._v(" "),i("h2",{attrs:{id:"api-version"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#api-version"}},[e._v("#")]),e._v(" API version")]),e._v(" "),i("p",[e._v("The QuickBooks Online connector uses the "),i("a",{attrs:{href:"https://developer.intuit.com/docs/api/accounting",target:"_blank",rel:"noopener noreferrer"}},[e._v("V3 REST API"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"supported-editions-and-versions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#supported-editions-and-versions"}},[e._v("#")]),e._v(" Supported editions and versions")]),e._v(" "),i("p",[e._v("The QuickBooks connector works with all versions of "),i("strong",[e._v("QuickBooks Online-")]),e._v(" QuickBooks Self-Employed, QuickBooks Simple Start, QuickBooks Essentials, as well as QuickBooks Plus.")]),e._v(" "),i("p",[e._v("Workato currently does not support QuickBooks Desktop/Enterprise versions.")]),e._v(" "),i("h2",{attrs:{id:"how-to-connect-to-quickbooks-on-workato"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-connect-to-quickbooks-on-workato"}},[e._v("#")]),e._v(" How to connect to QuickBooks on Workato")]),e._v(" "),i("p",[e._v("QuickBooks Online supports OAuth1. Clicking on "),i("strong",[e._v("Connect")]),e._v(" would create a popup window to QuickBooks that prompts for you to provide your QuickBooks Online credentials to QuickBooks.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:o(811),alt:"QBO connect2",width:"1177",height:"373"}}),e._v(" "),i("em",[e._v("Click on connect to start the QuickBooks Online authorization flow")])],1),e._v(" "),i("p",[e._v("Once authenticated, you would need to authorize Workato to read and write to your QuickBooks account.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:o(812),alt:"QBO connect2",width:"1226",height:"662"}}),e._v(" "),i("em",[e._v("Popup to QuickBooks Online will be generated to prompt you for credentials")])],1),e._v(" "),i("ul",[i("li",[e._v("Connection name")])]),e._v(" "),i("p",[e._v("Give this QuickBooks connection a unique name which identifies the QuickBooks account you are connected to and click "),i("strong",[e._v("Connect")]),e._v(". A pop-up will be generated.")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Username & Password")])])]),e._v(" "),i("p",[e._v("Login with your QuickBooks credentials and allow Workato to access your QuickBooks account.")]),e._v(" "),i("h3",{attrs:{id:"roles-and-permissions-required-to-connect"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#roles-and-permissions-required-to-connect"}},[e._v("#")]),e._v(" Roles and permissions required to connect")]),e._v(" "),i("p",[e._v("We recommend that a separate user be created for integration purposes. In order to successfully connect to QuickBooks Online from Workato, this user should have "),i("code",[e._v("Company Administrator")]),e._v(" permissions.")]),e._v(" "),i("p",[e._v("Note: Clicking on Connect (to QuickBooks Online) in Workato will bring you to QuickBooks Online to both log in and authorize Workato to read and write to your QuickBooks account. If you are already logged in to your QuickBooks Online account in the same browser, QuickBooks will skip the step where it asks for username and password, and simply ask you to authorize Workato. If you are the administrator for multiple companies in QuickBooks, ensure that you are logged in to the right company so that you create a connection to the right QuickBooks Online company.")]),e._v(" "),i("h3",{attrs:{id:"connecting-to-multiple-companies-on-quickbooks"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-multiple-companies-on-quickbooks"}},[e._v("#")]),e._v(" Connecting to Multiple Companies on QuickBooks")]),e._v(" "),i("p",[e._v("If you have multiple Companies on your QuickBooks account, you can connect them to Workato using the same QuickBooks authentication. Simply create new connections for each Company.")]),e._v(" "),i("p",[e._v("However, if you have multiple Workato accounts and try to connect to the same Company, the earlier connection will be disconnected. Hence, we recommend that only 1 Workato account is used to connect to 1 Company to prevent any disruption to your recipes.")]),e._v(" "),i("h2",{attrs:{id:"quickbooks-triggers"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#quickbooks-triggers"}},[e._v("#")]),e._v(" QuickBooks triggers")]),e._v(" "),i("p",[e._v("The following triggers are currently available for the QuickBooks connector:")]),e._v(" "),i("p",[i("strong",[e._v("NEW:")]),e._v(" Account, Bank Deposit, Bill Payment, Credit Note, Customer, Employee, Estimate, Invoice, Item, Payment, Sales Receipt, Vendor")]),e._v(" "),i("p",[i("strong",[e._v("NEW/UPDATED:")]),e._v(" Account, Tax Code, Tax Rate")]),e._v(" "),i("p",[i("strong",[e._v("UPDATED:")]),e._v(" Bill, Credit Note, Customer, Employee, Estimate, Invoice, Item, Purchase, Vendor")]),e._v(" "),i("p",[e._v("If you wish to submit a request for a new Trigger not currently available, please visit:")]),e._v(" "),i("h2",{attrs:{id:"action-add-line-to-invoice"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#action-add-line-to-invoice"}},[e._v("#")]),e._v(" Action: Add Line to Invoice")]),e._v(" "),i("h3",{attrs:{id:"sales-item-detail-vs-discount-line-detail-vs-description-only"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sales-item-detail-vs-discount-line-detail-vs-description-only"}},[e._v("#")]),e._v(" Sales Item Detail vs. Discount Line Detail vs. Description only")]),e._v(" "),i("h5",{attrs:{id:"sales-item-detail"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sales-item-detail"}},[e._v("#")]),e._v(" Sales Item Detail")]),e._v(" "),i("p",[e._v("As the name suggests, user is required to key in some of the details regarding the sales item. This includes Item ID, Total Amount, Unit Price/Quantity and also the Description.")]),e._v(" "),i("h5",{attrs:{id:"discount-line-detail"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#discount-line-detail"}},[e._v("#")]),e._v(" Discount Line Detail")]),e._v(" "),i("h5",{attrs:{id:"description-only"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#description-only"}},[e._v("#")]),e._v(" Description Only")]),e._v(" "),i("p",[e._v('When user wants to include only the description of the items, he/she would choose this option.\nAs such, "Description only" is a subset of "Sales Item Detail", if the user wants to include more details in the invoice, he/she should choose "Sales Item Detail".')]),e._v(" "),i("h3",{attrs:{id:"difference-between-create-with-1-line-item-and-create-with-line-items"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#difference-between-create-with-1-line-item-and-create-with-line-items"}},[e._v("#")]),e._v(" Difference between Create with 1 line item and Create with Line items")]),e._v(" "),i("h4",{attrs:{id:"creating-transactional-objects-with-line-items"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#creating-transactional-objects-with-line-items"}},[e._v("#")]),e._v(" Creating Transactional Objects with line items")]),e._v(" "),i("p",[e._v("Workato QuickBooks actions for creating Transactional objects (Invoice, Sales receipt, Bill, Credit Memo, etc) generally has two ways for populating them:")]),e._v(" "),i("ol",[i("li",[e._v("Creating first an invoice with a single line item (as mandatory by QuickBooks Online to have at least one line item), and use Add Line Item to X action for any further addition")])]),e._v(" "),i("p",[e._v("or")]),e._v(" "),i("ol",{attrs:{start:"2"}},[i("li",[e._v("Creating an invoice with line items. The line items detail will be pulled dynamically from a list data pill. You can learn more about it here.")])]),e._v(" "),i("p",[i("strong",[e._v("When do I use 'Create with 1 line item'?")])]),e._v(" "),i("p",[e._v("Creating a single invoice with only line items are great for Single sync ups, where details of the transactional items are minimal. Example of this is creating an invoice for an opportunity, or creating a Sales Receipt for donations. Subsequently, adding on line items to an invoice can be done in another recipe when new items are added for an existing invoice, giving you the flexibility of structuring your invoices.")]),e._v(" "),i("p",[e._v("In all other cases, you should use 'Create with line items' and simply place the list of items where required.")]),e._v(" "),i("p",[e._v("![QBO mulltiline](~@img/QBO_docs/QBO mulltiline.png)")]),e._v(" "),i("p",[e._v("A 'list' type pill is marked with the list logo as can be seen above in red.")]),e._v(" "),i("h2",{attrs:{id:"bank-deposit"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bank-deposit"}},[e._v("#")]),e._v(" Bank Deposit")]),e._v(" "),i("p",[e._v("Workato has several QuickBooks actions that are related to a Bank Deposit object:")]),e._v(" "),i("ul",[i("li",[e._v("Create bank deposits")]),e._v(" "),i("li",[e._v("Search bank deposits")]),e._v(" "),i("li",[e._v("Update bank deposits")])]),e._v(" "),i("p",[e._v("The available fields for a Bank Deposits are:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Txn Date")]),e._v(" "),i("ul",[i("li",[e._v("Date of the transaction object")])])]),e._v(" "),i("li",[i("p",[e._v("Total amount")]),e._v(" "),i("ul",[i("li",[e._v("The total amount that the bank deposit should amount to. Note that this value cannot be negative.")])])]),e._v(" "),i("li",[i("p",[e._v("Cash back")]),e._v(" "),i("ul",[i("li",[e._v("Specify an account that should return a certain amount back to for this deposit\n"),i("ul",[i("li",[e._v("Account")]),e._v(" "),i("li",[e._v("Amount")]),e._v(" "),i("li",[e._v("Memo")])])])])]),e._v(" "),i("li",[i("p",[e._v("Deposit To Account Reference")]),e._v(" "),i("ul",[i("li",[e._v("Specify an account that this bank deposit should be targeted to. Note that you cannot specify Undeposited Funds as the Deposit To Account here.")]),e._v(" "),i("li",[e._v("Account\n"),i("ul",[i("li",[e._v("Account specified here must be of Bank or Other Current Asset Account type.")])])])])]),e._v(" "),i("li",[i("p",[e._v("Transaction tax detail")]),e._v(" "),i("ul",[i("li",[e._v("Tax Code")]),e._v(" "),i("li",[e._v("Total Tax")])])]),e._v(" "),i("li",[i("p",[e._v("Line")]),e._v(" "),i("ul",[i("li",[e._v("Line Source list\n"),i("ul",[i("li",[e._v("Specify a line item object here where data will be accessed from. The total number of line item created will equals to the size of the source list. To learn more about source list, see here")])])]),e._v(" "),i("li",[e._v("Description\n"),i("ul",[i("li",[e._v("For each of the line item, specify its Description")])])]),e._v(" "),i("li",[e._v("Amount\n"),i("ul",[i("li",[e._v("For each of the line items, specify its Amount")])])])])]),e._v(" "),i("li",[i("p",[e._v("Linked Transaction")]),e._v(" "),i("ul",[i("li",[e._v("If there are existing transactions that needs to be related, specify details here to record a deposit for an existing transaction.")]),e._v(" "),i("li",[e._v("Linked transaction source list\n"),i("ul",[i("li",[e._v("Specify a line item object here where data will be accessed from. The total number of line item created will equals to the size of the source list. To learn more about source list, see here")])])]),e._v(" "),i("li",[e._v("Transaction ID")]),e._v(" "),i("li",[e._v("Transaction Type\n"),i("ul",[i("li",[e._v("Possible types of transactions that can be linked to a Deposit include: "),i("code",[e._v("Transfer")]),e._v(", "),i("code",[e._v("Payment")]),e._v(" (for Cash, CreditCard, and Check payment method types), "),i("code",[e._v("SalesReceipt")]),e._v(","),i("code",[e._v("RefundReceipt")]),e._v(", "),i("code",[e._v("JournalEntry")]),e._v(".")])])]),e._v(" "),i("li",[e._v("Transaction Line ID")])])]),e._v(" "),i("li",[i("p",[e._v("Deposit Line Detail")]),e._v(" "),i("ul",[i("li",[e._v("Entity Name\n"),i("ul",[i("li",[e._v("Reference to a customer Display Name from which deposit was received")])])]),e._v(" "),i("li",[e._v("Type\n"),i("ul",[i("li",[e._v("Specify if it is a Customer or Vendor")])])]),e._v(" "),i("li",[e._v("Value\n"),i("ul",[i("li",[e._v("Reference to a customer ID from which deposit was received")])])])])]),e._v(" "),i("li",[i("p",[e._v("Class reference")]),e._v(" "),i("ul",[i("li",[e._v("Reference to the Class associated with the transaction")])])]),e._v(" "),i("li",[i("p",[e._v("Account Reference")]),e._v(" "),i("ul",[i("li",[e._v("Account where the funds are deposited")])])]),e._v(" "),i("li",[i("p",[e._v("Payment method reference")]),e._v(" "),i("ul",[i("li",[e._v("Payment method")])])]),e._v(" "),i("li",[i("p",[e._v("Check num")]),e._v(" "),i("ul",[i("li",[e._v("Check number for the desposit.")])])]),e._v(" "),i("li",[i("p",[e._v("Tax reference")]),e._v(" "),i("ul",[i("li",[e._v("Tax code\n"),i("ul",[i("li",[e._v("Sales/Purchase tax code associated with the Line. For Non US Companies only")])])]),e._v(" "),i("li",[e._v("Tax applicable on")])])]),e._v(" "),i("li",[i("p",[e._v("Private Note")])]),e._v(" "),i("li",[i("p",[e._v("Currency Reference")]),e._v(" "),i("ul",[i("li",[e._v("Value")]),e._v(" "),i("li",[e._v("Name")])])]),e._v(" "),i("li",[i("p",[e._v("Transaction source")]),e._v(" "),i("ul",[i("li",[e._v("A field used internally to specify originating source of a credit card transaction.")])])])]),e._v(" "),i("h2",{attrs:{id:"exchange-rate"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#exchange-rate"}},[e._v("#")]),e._v(" Exchange Rate")]),e._v(" "),i("p",[e._v("QuickBooks Online provides international trades to be done in multiple currencies.\nWorkato adapts your business needs and supports all necessary changes needed to automate your business.")]),e._v(" "),i("p",[e._v("QuickBooks Online allows you to support multiple currencies. To do so, you may enable it in your Accounts and Settings section. Do note that enabling multiple currency may incur setting changes. Please do seek consultation with QuickBooks Online support.")]),e._v(" "),i("p",[e._v("![QBO currency](~@img/QBO_docs/QBO currency.png)")]),e._v(" "),i("p",[e._v("Exchange Rate field allows you to specify the exchange rate to your home currency from the specified currency. If no Currency is specified, the exchange rate will be defaulted to 1 in respect of the home currency.")]),e._v(" "),i("p",[e._v("For dependent transaction documents such as Credit memo, the applied currency will depends on its parent transactions document, such as payment, or bank deposit.")]),e._v(" "),i("p",[e._v("An Example:")]),e._v(" "),i("p",[e._v("![QBO currency2](~@img/QBO_docs/QBO currency2.png)")]),e._v(" "),i("p",[e._v("This field means that it will take 1.5239475 to exchange for 1 unit of the specified currency of the transaction document")]),e._v(" "),i("h2",{attrs:{id:"different-labels-between-profit-and-non-profit-versions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#different-labels-between-profit-and-non-profit-versions"}},[e._v("#")]),e._v(" Different Labels between profit and non-profit versions")]),e._v(" "),i("p",[e._v("If you are using the non-profit version of QuickBooks, do note that on Workato, certain terms may be labelled differently from what appears in your QuickBooks account. Refer to the table below to know which triggers and actions to use:")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("For Profit")]),e._v(" "),i("th",[e._v("Non-Profit")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("Invoice")]),e._v(" "),i("td",[e._v("Pledge")])]),e._v(" "),i("tr",[i("td",[e._v("Sales Receipt")]),e._v(" "),i("td",[e._v("Donations (Sales)")])]),e._v(" "),i("tr",[i("td",[e._v("Expenses")]),e._v(" "),i("td",[e._v("Expenditure")])]),e._v(" "),i("tr",[i("td",[e._v("Profit & Loss")]),e._v(" "),i("td",[e._v("Statement of Activity")])]),e._v(" "),i("tr",[i("td",[e._v("Balance Sheet")]),e._v(" "),i("td",[e._v("Statement of Financial Positions")])])])]),e._v(" "),i("p",[e._v("For more info on non-profit organization in QuickBooks, you can click "),i("a",{attrs:{href:"https://community.intuit.com/articles/1145585-quickbooks-online-for-nonprofits",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"common-errors-troubleshooting"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#common-errors-troubleshooting"}},[e._v("#")]),e._v(" Common Errors & Troubleshooting")]),e._v(" "),i("h3",{attrs:{id:"duplicate-name-exists"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#duplicate-name-exists"}},[e._v("#")]),e._v(" Duplicate Name Exists")]),e._v(" "),i("p",[e._v("In Quickbooks, the display name is used as a unique identifier across Customer (also known as Donor, Tenants etc.), Employee and Vendor.")]),e._v(" "),i("p",[e._v("As such, trying to add another record with the same display name which already exist in any of the three types will give you an error: Another tenant, vendor or employee is already using this name. Please use a different name.")]),e._v(" "),i("p",[e._v("![QBO error1](~@img/QBO_docs/QBO error1.png)")]),e._v(" "),i("p",[e._v("On Workato, you will receive a Duplicate Name Exists Error.")]),e._v(" "),i("p",[e._v("![QBO error2](~@img/QBO_docs/QBO error2.png)")]),e._v(" "),i("p",[e._v("One solution to this is to add a Prefix or Suffix before or after the Display name of the Customer, Employee or Vendor.")]),e._v(" "),i("p",[e._v("![QBO error3](~@img/QBO_docs/QBO error3.png)")]),e._v(" "),i("p",[e._v("Do note however that QuickBooks does not allow for certain special characters in the Display Name including colon (:).")]),e._v(" "),i("p",[e._v("Here is a list of accepted characters:")]),e._v(" "),i("ul",[i("li",[e._v("Alpha-numeric (A-Z, a-z, 0-9)")]),e._v(" "),i("li",[e._v("Comma (,)")]),e._v(" "),i("li",[e._v("Dot or period (.)")]),e._v(" "),i("li",[e._v("Question mark (?)")]),e._v(" "),i("li",[e._v("At symbol (@)")]),e._v(" "),i("li",[e._v("Ampersand (&)")]),e._v(" "),i("li",[e._v("Exclamation point (!)")]),e._v(" "),i("li",[e._v("Number/pound sign (#)")]),e._v(" "),i("li",[e._v("Single quote (')")]),e._v(" "),i("li",[e._v("Tilde (~)")]),e._v(" "),i("li",[e._v("Asterisk (*)")]),e._v(" "),i("li",[e._v("Space ( )")]),e._v(" "),i("li",[e._v("Underscore (_)")]),e._v(" "),i("li",[e._v("Minus sign/hyphen (-)")]),e._v(" "),i("li",[e._v("Semi-colon (;)")]),e._v(" "),i("li",[e._v("Plus sign (+)")]),e._v(" "),i("li",[e._v("Brackets (())")])]),e._v(" "),i("h3",{attrs:{id:"account-period-closed-cannot-update-through-api"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#account-period-closed-cannot-update-through-api"}},[e._v("#")]),e._v(" Account period closed, cannot update through API")]),e._v(" "),i("p",[e._v("Error 6210: Account period closed, cannot update through API")]),e._v(" "),i("p",[e._v("This error means that in QuickBooks you have set a closing date, and it will not let you create/update transactions within that period. To remedy it, you have to take out the closed date.")]),e._v(" "),i("p",[e._v("Refer to this article below to see how.\n"),i("a",{attrs:{href:"https://support.quickbooks.intuit.com/support/Articles/HOW12993",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://support.quickbooks.intuit.com/support/Articles/HOW12993"),i("OutboundLink")],1)]),e._v(" "),i("h3",{attrs:{id:"malformed-website-address-format"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#malformed-website-address-format"}},[e._v("#")]),e._v(" Malformed Website Address format")]),e._v(" "),i("p",[e._v('QuickBooks fault: {"Error"=>[{"Message"=>"Malformed Web Site Address format", "Detail"=>"Web Site URL does not have correct format. Supplied value:example.com", "code"=>"2200", "element"=>"WebAddr"}], "type"=>"ValidationFault"}')]),e._v(" "),i("p",[e._v("You get this error when you are trying to create a record in QuickBooks Online and you have mapped a field that requires a website address. Quickbooks API requires a well formed web address of the form "),i("a",{attrs:{href:"http://example.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://example.com"),i("OutboundLink")],1),e._v(", but if your input does not have the "),i("strong",[e._v("http:// or https://")]),e._v(" at the beginning then the recipe fails.")]),e._v(" "),i("h3",{attrs:{id:"app-already-purchased"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#app-already-purchased"}},[e._v("#")]),e._v(" App Already Purchased")]),e._v(" "),i("p",[e._v("![QBO purchased](~@img/QBO_docs/QBO purchased.png)")]),e._v(" "),i("p",[e._v("If you receive the following error, there is someone else in your company who is already connected to Workato. Contact your colleague to delete their Workato connection to resolve this error.")]),e._v(" "),i("h3",{attrs:{id:"object-not-found-error-while-accessing-quickbooks-api"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#object-not-found-error-while-accessing-quickbooks-api"}},[e._v("#")]),e._v(" Object Not found. Error while accessing QuickBooks API")]),e._v(" "),i("p",[e._v("![QBO errorobjnotfound1](~@img/QBO_docs/QBO errorobjnotfound1.png)")]),e._v(" "),i("p",[e._v("What does this mean : This usually happens when you tried to get an object based on an ID in QuickBooks and that object does not exist. For example,")]),e._v(" "),i("p",[e._v("![QBO errorobjnotfound3](~@img/QBO_docs/QBO errorobjnotfound3.png)")]),e._v(" "),i("p",[e._v("The recipe tries to get the item from QuickBooks based on the ID, unfortunately that object does not exist in your Quickbooks account. You would want to check again in your QuickBooks.")]),e._v(" "),i("p",[e._v("You can find the ID of your object in the URL. It would usually shown up with an ID=6 where 6 is the ID of your object.")]),e._v(" "),i("p",[e._v("![QBO errorobjnotfound2](~@img/QBO_docs/QBO errorobjnotfound2.png)")]),e._v(" "),i("p",[e._v("You can always re-run the job again once it has been ensured, or you may have to change your recipe to make sure that the workflow is correct.")]),e._v(" "),i("h3",{attrs:{id:"_784-quickbooks-api-not-responding"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_784-quickbooks-api-not-responding"}},[e._v("#")]),e._v(" 784 QuickBooks API not responding")]),e._v(" "),i("p",[e._v("![QBO APIerror](~@img/QBO_docs/QBO APIerror.png)")]),e._v(" "),i("p",[e._v("This usually happens when there is an API outage on QuickBooks side, or it has some intermittent issues\nKeep watch of "),i("a",{attrs:{href:"http://status.developer.intuit.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://status.developer.intuit.com"),i("OutboundLink")],1),e._v(", and try re-running the same job after a while")]),e._v(" "),i("h3",{attrs:{id:"_403-forbidden-error"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_403-forbidden-error"}},[e._v("#")]),e._v(" 403 Forbidden Error")]),e._v(" "),i("p",[e._v("This error could mean that there were some connectivity issues with the app connection.\nDisconnect your app by going to the connections tab at the bottom of your recipe page, and reconnect it again.")]),e._v(" "),i("p",[e._v("![QBO connect3](~@img/QBO_docs/QBO connect3.png)")])])}),[],!1,null,null,null);t.default=n.exports},811:function(e,t,o){e.exports=o.p+"assets/img/qbo-connect1.096ce1ce.jpg"},812:function(e,t,o){e.exports=o.p+"assets/img/qbo-connect2.5bafaf5b.jpg"}}]);