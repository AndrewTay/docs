---
title: Workato connectors - JDBC Insert actions
date: 2018-02-02 06:10:00 Z
---

# JDBC - Insert actions

## Insert row
This action inserts a single row into the selected table.

![Insert row action](/assets/images/jdbc/insert-row-action.png)
*Insert row action*

### Table
First, select a table to insert a row into. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name. Case sensitivity of table name depends on the database you are connected to.

### Columns
Next, map the datapills from your previous triggers or actions into their respective columns. The columns in the selected table are presented as input fields here for you to insert datapills.
