Animal Search for Children. 

This project provides an Search Engine for children with additional Interface to search for Animals with Icon buttons.
The Icon search allows children to search without typing in text. It supports the following categories:
- Favorite animals of children (e.g. dog, cat, monkey, ...)
- Animal colors (e.g. white, black, light brown,...)
- Animal places (e.g. zoo, desert, ...)
- Cartoon search, this allows children to get only cartoon results

The target user are Children, under 9 years old, interested in animals.

Explanation about the different files:
index.html:
This html file includes the basic structure of the interface. It consists of search part, option part and result part. 

search.js:
This javascript includes all the search operation. If a children types in keywords in the input field and press enter or press the search button, a request to the Google Costum Api is trasmitted. The response is a JSON file, which is parsed and shown in the result part of the html file. Also, the query is build of the different Icons, which are selected in the categorie menu. 

options.js: 
This Javascript code handels the interaction from the children with the categoie Icon buttons. Hover and Clicking events are handled.
