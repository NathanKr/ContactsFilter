<h2>This project is not finished !!!</h2>


<h3>Motivation</h3>
<ul>
<li>Build an application that is useful for my internal use and may be others for marketing reasons</li>
<li>Experiment with react-redux</li>
</ul>


<h3>Functionality</h3>
This apps has three legs :
<ul>
<li>Csv file with contacts. Columns names and order is as follows 
<ul>
<li>First Name</li>	<li>Last Name</li>	<li>Email Address</li>	<li>Company</li>	<li>Position</li>	<li>Connected On</li>
</ul>
</li>
<li>Filter e.g. all contacts with CEO as position</li>
<li>Actions e.g. send mail by SendGrid to or get email list of all filtered contacts. SendGrid is used with tiny Node.js server</li>
</ul>

<h3>Points of interests</h3>
<ul>
<li>Following seems to be the correct order 
<ol>
<li>Write your actions and views on paper </li>
<li>Define your state and reducers </li>
<li>Implement </li>
<li>Test</li>
</ol>
</li>
<li>Given contacst which are stored as an array of objects(row per object) it is amzingly simple to use array.filter and invoke javascript eval on the input string (it is assumed at this stage that the user is a developer)</li>
<li>Loading local CSV file and parsing it to a table is done nicely by react-csv-reader</li>
</ul>

<h3>Actions</h3>
<table border=1>
<tr>
<th>Description</th>
<th>Require middleware</th>
</tr>
<tr>
<td>Load contacts from csv file</td>
<td>yes</td>
</tr>
<tr>
<td>Filter contacts</td>
<td>no</td>
</tr>
<tr>
<td>Send engine<ul>
<li>Send mails</li>
<li>Delete selected mail</li>
<li>Edit selected mail</li>
</ul>
</td>
<td>only for send mail</td>
</tr>
<tr>
<td>Concat email addresses to string</td>
<td>no</td>
</tr>
</table>

<h3>Views</h3>
<ul>
<li>Define filter</li>
<li>Show contacts</li>
<li>Edit settings</li>
<li>Perform actions : send emails , concat e-mails , ....</li>
</ul>

<h3>State keys</h3>
<ul>
<li>filter</li>
<li>contacts</li>
<li>send_engine</li>
<li>concat emails</li>
<li>edit settings</li>
</ul>


<h3>Future</h3>
<ul>
<li>Handle csv other than exported from linkedIn</li>
<li>Remove the assumption that the user is a developer ,thus provide a more intuitive way to define the filter</li>
</ul>

<h3>Client installations</h3>
<ul>
<li>npm install redux</li>
<li>npm install react-redux</li>
<li>npm install react-router</li>
<li>npm install redux-logger</li>
<li>npm install prop-types</li>
<li>npm install react-csv-reader</li>

</ul>

<h3>Server installations  - for send mail only</h3>
<ul>
<li><a href='https://nodejs.org/en/'>Node.js</a></li>
<li>npm install @sendgrid/mail</li>
</ul>


<h3>Open issues</h3>
<ul>
<li>Fix class csv-input to take just enough space it needs</li>
<li>table width is not good e.g. width of e-mail is too wide , also it get out of 100% , may be try bootstrap</li>
</ul>