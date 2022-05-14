Phone book

This is my application, where the user can add, edit and delete contacts. 
This phone book contain and display items such as the firstname, surname and phone number, the creation date (or last modified date) of the contacts.

I created this project in two ways.
In the first place, I only used HTML5, CSS, and Java Script to write the entire DOM structure, added style and functionality.
Secondly, I used the API and created a service that written in the Java.
  Created new contact is send to the database using the POST method.
  I get a contact from the database and sort the contacts in the array using the GET method.
  I can use the PUT method to edit the contact and to delete the contact I use DELETE method.

I created two branches: 
The first branch is the Java Script project without the API called master.
  If the user want use this project should:
  1. Clone url this repository from website
  2. Open Development Environment for example IntelliJ IDEA or Visual Studio Code
  3. Paste this url to Development Environment
  4. Open a project locally from a previously cloned GitHub repository

The second branch is called projectWithApi with API. The service is on another repository called phone_book-java.
  If the user want use this project should:
  1. The same steps like in previous project
  2. Repeat point 1 for repository called phone_book-java.
  3. Open both repositories 
