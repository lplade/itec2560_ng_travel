Angular Lab
===========
Travel app
----------
- [x] Build the travel app
- [x] An element for each list which is displayed if that list is empty; this element should say "this list is empty" or similar. Use a ng-show or ng-hide directive.
- [x] The ability to delete a place - for example, if you no longer wish to go there.
    - [x] You'll need to add a button (or some other element) for each place. Add a listener for clicking the button (or element). Add a method to your controller which sends the delete request for this place to your server.
    - [x] You'll also need to add a method to your server code which will delete the place from the database.
- [ ] Add the date you visited the place to the 'Where you've been list'. You'll need to edit the model to add this data. (Suggestions: for a first prototype, set the date visited to the date/time the user clicks on the checkbox. Then think about how you'll ask the user for the actual date)
- [ ] Use a filter to display the dates nicely