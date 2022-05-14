Phone book

This is my application, where the user can add, edit and delete yours contacts. 
This phone book contain and displays items such as the firstname, surname and phone number, the creation date (or last modified date) of the contact.

I created this project in two ways.
In the first place, I only used HTML5, CSS, and Java Script to write the entire DOM structure, add style and functionality.
Secondly, I used the API and created a service that reads in Java.
  The created new contact is send to the database using the POST method.
  I get a contact from the database and sort the contacts in the table using the GET method.
  I can use the PUT method on the edited contact and the DELETE method on the deleted contact.

I created two branch. 
On the first branch called master is a project with only Java Script without API.
  If the user want use this project should be:
  1. Clone url this repository from website
  2. Open Development Environment for example IntelliJ IDEA or Visual Studio Code
  3. Paste this url to Development Environment
  4. Open a project locally from a previously cloned GitHub repository

On the second branch called projectWithApi is a project, where I use API. The service is on another repository called phone_book-java.
  If the user want use this project should be:
  1. The same steps like in previous project
  2. Repeat point 1 for repository called phone_book-java.
  3. Open both repository 
