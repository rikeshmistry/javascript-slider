/* jshint esversion: 6 */

// alert("Javascript is working and creating this annoying pop up!!");
// This comes up as a popup then once you click onto OK the website will function normally

// When I click the next button
// Show a next page
// Each page should show  a different background color, circle color & content

// When I click the previous button
// Show the previos pages

// When I click the random button
// Show a randon page

// When I press a key
// Show the next or previous page

// Step 1: Add the content for our pages
// To create a list use square brackets []
// To create an object {}
// To create a list of objects use both [{},{},{}];

const pages = [
  {
    content: "a London-based Creative Guy!",
    background: "linear-gradient(0deg, rgba(223, 170, 44, 1) 0%, rgba(253, 107, 45, 1) 100%)",
    circle: "#ffffff",
   },
   {
    content: "currently a Graphic Designer & Photographer",
    background: "linear-gradient(0deg, rgba(223,170,44,1) 0%, rgba(253,107,45,1) 50%)",
    circle: "#cd7f32 ",
   },
   {
    content: "and learning to become a Junior Web Developer",
    background: "linear-gradient(0deg, rgba(223,170,44,1) 0%, rgba(253,107,45,1) 25%)",
    circle: "#C0C0C0",
   },
   {
    content: `letting you <a href="https://www.rikesh-mistry.com/CV.pdf">Download His CV</a>`,
    background: "linear-gradient(0deg, rgba(223,170,44,1) 0%, rgba(253,107,45,1) 0%)",
    circle: "#FFD700",
   }
];

// Step 2: Pick the tags we want to use in HTML & save them in constants

const bodyTag = document.querySelector("body");
const circleTag = document.querySelector(".circle");

// Select each button indivially using the fa classes. Call the constants the following: nextTag, previousTag, randomTag.
// Select the h2 and name the constant outputTag.

const nextTag = document.querySelector(".next");
const previousTag = document.querySelector(".previous");
const randomTag = document.querySelector(".random");
const h2Tag = document.querySelector("h2");

// Step 3: We need to know which page we are in order to change it - so we need a way of tracking this.

let pageNumber = 0;

// Step 4: Create an action that increases the page page number.

const next = function(){
  pageNumber = pageNumber + 1;

  // We only have 4 pages - so we don't want to be able to increase the page number

// pages.length will print out the number of pages in our list. Currently this is page 4. However we start counting from 0 in programming so we -1.

  if (pageNumber > pages.length - 1) {
    // Do something.
    // console.log(console.length);
    pageNumber = 0;

  }
};

//  Step 5: Create an action that decreases the page number

 const previous = function() {
   pageNumber = pageNumber - 1;

// If the page number gets to 0, change the page number to the last page in ourlist.
    if (pageNumber < 0){
      pageNumber = pages.length - 1;
    }
 };

// Step 6: Create an action that generates a random number.

const random = function (){
  // Create a random whole number.
  // So we multiply it by the number of pages we have.
  // We want a whole number so we wrap Math.randon * pages.length. in Math.floor
  pageNumber = Math.floor(Math.random() * pages.length);
};

// Step 10: Update the content on our page with the content from the pages list.
const updatePage = function (){
// Update the content in our body.
h2Tag.innerHTML = pages [pageNumber].content;
// Update the circle background.
circleTag.style.backgroundColor = pages[pageNumber].circle;
bodyTag.style.background = pages [pageNumber].background;

};

// EVENT LISTENERS.

 // Step 7: Attach an eventListener to the next button & call the next function.

 nextTag.addEventListener("click", function(){
   next();
   console.log(pageNumber);
   updatePage();
 });

// Step 9: Attach an eventListener to the previous button & call the previous function. Now the previous button should decrease the page number.
 previousTag.addEventListener("click", function(){
   previous();
   console.log(pageNumber);
   updatePage();
 });

// Step 10: Attach an eventListener to the random button & call the previous function. Now the previous button should decrease the page number.
randomTag.addEventListener("click", function(){
  random();
  console.log(pageNumber);
  updatePage();
});
