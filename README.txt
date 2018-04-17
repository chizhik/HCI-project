Animal Search for Children. 

This project provides a Search Engine for children with additional Interface to search for Animals with Icon buttons.
The Icon search allows children to search without typing in text. It supports the following categories:
- Favorite animals of children (e.g. dog, cat, monkey, ...)
- Animal colors (e.g. white, black, light brown,...)
- Animal places (e.g. zoo, desert, ...)
- Cartoon search, this allows children to get only cartoon results

The target users are Children under 9 years old, interested in animals.

File structure:
index.html:
This html file includes the basic structure of the interface. It consists of search part, option part and result part. 

search.js:
Supports the search functionality. If a user types in a keyword in the input field, a request to the Google Costum Api is sent. The response is a JSON file, which is parsed and shown in the result part of the html file. Also, the query is build of the different Icons, which are selected in the menu. 

options.js: 
Handels the interactions with the Icon buttons. In particular, hover and clicking events are handled.
