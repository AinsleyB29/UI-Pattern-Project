// First create a navbar (done/sort of)
// Then create a box and center that box in the middle of the page (done)
/* Then create a clickable "menu" icon that will be right justified on the navbar that contains an unordered list of character names. (50% done)
    - When the menu icon is clicked, the navbar should expand to reveal the list of names
    -When a single name is clicked on the picture in the middle should change to reflect that character and the value attributes under the name should change as well[!].
    // Think about updating div with api call
    get array of objects with character attributes
    dynamically change src & text attribute based on user event
    */
// Create event listeners for the items inside of the menu bar
//Think about having a homepage (done)
// DEFAULT OR BACKGROUND IMAGE (done)
// http://bobs-burgers-api-ui.herokuapp.com/static/media/banner.1f37b76e95e52551152b.png
// Questions?
// How many api calls do you need to make? 1
// What conditions do you need to check for?
// How will you keep track of where a user has clicked and what to do when they click on/off of an item?
// How can you connect the image in the middle to the menu items?[!]
// the items will point to different positions in an array
// store what you get back from api in object

function menuBar(x) {
  x.classList.toggle('change');
}
