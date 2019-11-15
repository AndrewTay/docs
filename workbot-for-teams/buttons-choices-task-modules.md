---
title: Buttons, Task modules and Pick lists
date: 2018-05-21 10:23:00 Z
---

# Workbot buttons, Task modules and Pick lists
Workbot commands can be invoked via button or task module submissions.

![Command name in button example](/assets/images/workbot-for-teams/button-submission.png)
*The 'Create issue' button invokes the 'newissue' command and executes the recipe when submitted*

Additional parameters can also be passed by buttons and task modules as they invoke a Workbot command. Typically, you use parameters to pass context to the invoked Workbot recipe.

![Button with params example](/assets/images/workbot-for-teams/button-with-params.png)
*The 'Re-open issue' button not only invokes the 'reopen_issue' command - it's also passing parameters!*

![Button with params recipe](/assets/images/workbot-for-teams/button-with-params-recipe.png)
*The 'Re-open issue' button is configured to pass the 'sys_id' so that the 'reopen_issue' recipe knows which issue to re-open*

While choices in a pick list cannot invoke Workbot commands, they can pass their choice parameter together with button or task module submissions in the same message.

![Choice param recipe](/assets/images/workbot-for-teams/choice-param-recipe.png)
*The choice parameter will take its value from a choice (if it's chosen)*

The choice parameter is passed when a button from the same message is submitted (along with any other parameters the button may have).

![Choice param](/assets/images/workbot-for-teams/choice-param.png)
*The 'Next' button also passes the 'opportunity_id' of 'Google' onto the command recipe that it invokes*

## Configuring buttons
Buttons can be used in either a [post reply](/workbot-for-teams/workbot-actions.md#post-reply) or a [post message](/workbot-for-teams/workbot-actions.md#post-message) action.

![Command name in button](/assets/images/workbot-for-teams/button-command.png)
*A button can be configured to invoke a Workbot command of another recipe*

The following table shows what goes into the button fields:

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Input field</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
    <tbody>
        <tr>
          <td>Title</td>
          <td>
            Button title e.g. <kbd>Create ticket</kbd>
          </td>
          <td>
            Title of the button to be displayed.<br><br><img src="/assets/images/workbot-for-teams/create-ticket-button.png"></img><br><br>
          </td>
        </tr>
        <tr>
          <td>Submit button command</td>
          <td>
            Workbot command to execute when button is clicked, e.g.
          <code>create_ticket</code>
          </td>
          <td>
            Choose from a list of existing recipes that can be invoked by a Workbot command.
          </td>
        </tr>
        <tr>
          <td>Parameters</td>
          <td>
            Parameter values to pass onto the next recipe when button is clicked, e.g.<br><br><pre>{<br>  "sys_id": "<kbd>sys_id</kbd>"<br>  "summary": "<kbd>Summary</kbd>",<br>  "description": "<kbd>Description</kbd>"<br>}
          </td>
          <td>
            Key in name-value pairs to pass onto the next recipe as parameter values. Remember to wrap datapills with double quotes.
          </td>
        </tr>
      </tbody>
    </table>

## Configuring a pick list and choices
While choices cannot invoke Workbot commands, they can pass their choice parameter together with button or task module submissions in the same message.

![Choice param recipe](/assets/images/workbot-for-teams/choice-param-recipe.png)
*The choice parameter will take its value from a choice (if it's chosen)*

The choice parameter is passed when a button from the same message is submitted (along with any other parameters the button may have).

![Choice param](/assets/images/workbot-for-teams/choice-param.png)
*The 'Next' button also passes the 'opportunity_id' of 'Google' onto the command recipe that it invokes*

The following table shows what goes into the pick list and choice fields:

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Input field</th>
            <th>Description</th>
        </tr>
    <tbody>
        <tr>
          <td>Pick list name</td>
          <td>
            Name of pick list. Displays before choices, and supports markdown.
          </td>
        </tr>
        <tr>
          <td>Pick list style</td>
          <td>
            <b>Compact</b> displays choices in a drop-down menu, while <b>Expanded</b> displays all choices with radio buttons.
          </td>
        </tr>
        <tr>
          <td>Choice parameter</td>
          <td>
            Parameter name to store the choice value. This name-value pair will be passed on as additional parameters.
          </td>
        </tr>
        <tr>
          <td>Title (choice)</td>
          <td>
            Title of the choice to be displayed.
          </td>
        </tr>
        <tr>
          <td>Value (choice)</td>
          <td>
            Value of the choice. If chosen, passes its value to the <b>Choice parameter</b>.
          </td>
        </tr>
      </tbody>
    </table>

## Task modules
When parameters are defined in the Workbot command, Workbot will launch a task module within Teams to collect parameter values from the user.

![Parameters in recipe](/assets/images/workbot-for-teams/task-module-recipe.png)
*Parameters in recipe*

Here's how the task module looks like when prompting users for parameter values.

![Task module in Teams](/assets/images/workbot-for-teams/task-module-teams.png)
*Parameters in recipe*

### Adding hints and example values in task modules
Hints and example values can be configured for each parameter. Hints appear below the input field; example values will appear inside the input field.

![Parameters schema](/assets/images/workbot-for-teams/task-module-recipe.png)
*Parameters in recipe*

Here's how the task module looks like when prompting users for parameter values.

![Hints & examples in Teams](/assets/images/workbot-for-teams/task-module-teams.png)
*Hints below input fields; example values inside input fields*

### Hiding parameters
Parameters can be hidden in task modules by setting **Optional** to **Yes**, and **Visible?** to **No**. This is useful when passing record IDs that are not human-readable.

![Hidden parameter](/assets/images/workbot-for-teams/hidden-parameter.png)

The parameter will be hidden from the task module.

![Hidden parameter](/assets/images/workbot-for-teams/hidden-parameter-teams.png)

## Adding picklist options in task modules
Picklist options can be configured so that users can pick from a finite list of choices. This is useful when the available options are known, e.g. Urgency (High:1, Medium: 2, Low: 3), Priority (1,2,3,4,5), and so on.

To add a picklist, simply add comma-separated options in the **Options** field. If the display name and the value are different, separate the two by a colon, e.g. **High:1, Medium:2, Low: 3**.

It's important to note that pick list display name and value cannot contain <code>:</code> or <code>,</code>.

![Picklist options in recipe](/assets/images/workbot-for-teams/parameter-picklist-1.png)
*Options where display name and value are the same*

![Picklist options in recipe](/assets/images/workbot-for-teams/parameter-picklist-1.png)
*Options where display name and value are different*

![Picklist in Teams](/assets/images/workbot-for-teams/parameter-picklist-teams.png)
*Options displayed in a picklist in task module*

## Dynamic buttons & fact sets
Buttons and fact sets can also be generated dynamically using a list datapill (for more information on lists, see the [list management guide](https://docs.workato.com/features/list-management.html))

From the button (or fact set) fields, click on the horizontal ellipses on the top-right and choose 'Dynamic List'. This should bring up the dynamic list option.

![Dynamic buttons](/assets/images/workbot-for-teams/dynamic-buttons.png)

The following table shows what goes into the dynamic buttons fields:

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Input field</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
    <tbody>
        <tr>
          <td>Button source list</td>
          <td>
            Input a list datapill, e.g. <kbd>Users</kbd>.
          </td>
          <td>
            List datapills have a list icon next to them in the datatree, e.g. Salesforce users:<br>
            <img src="/assets/images/workbot-for-teams/list-datapill.png"></img>
          </td>
        </tr>
        <tr>
          <td>Title</td>
          <td>
            Button title e.g. <kbd>Assign users</kbd>
          </td>
          <td>
            The title of the button to be displayed. Typically, you want to use datapills from the list datapill, e.g. Salesforce user name, a datapill from the Salesforce users list:
            <img src="/assets/images/workbot-for-teams/dynamic-button-title.png"></img>
          </td>
        </tr>
        <tr>
          <td>Submit button command</td>
          <td>
            Workbot command to execute when button is clicked, e.g.
          <code>assign_user</code>
          </td>
          <td>
            Choose from a list of existing Workbot command recipes or key in a new command. Clicking on this button will trigger the recipe with the corresponding command trigger.
          </td>
        </tr>
        <tr>
          <td>Additional parameters</td>
          <td>
            Pass additional parameters when user submits by clicking a button. Format should be JSON with name-value pairs, e.g.<br><br><pre>{<br>  "opportunity_id": "<kbd>Opportunity ID</kbd>",<br>  "stage": "<kbd>Stage</kbd>"<br>}<samp>
          </td>
          <td>
            Key in name-value pairs to pass onto the next recipe as additional parameters.
          </td>
        </tr>
      </tbody>
    </table>

# Learn more
- [Using Workbot for MS Teams](/workbot-for-teams/using-workbot-for-teams.md)
- [Workbot triggers](/workbot-for-teams/workbot-triggers.md)
- [Workbot actions](/workbot-for-teams/workbot-actions.md)
