const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas fa-bars’></i>";
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas fa-times’></i>";
    }
}
 
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);


/*
    First, we select the menu and the toggle button using the querySelector() method so that we can access them with JavaScript. 
    Then, we add the custom toggleMenu() function that will be called when the toggle is clicked. 
    Lastly, we add the event listener that will be listening to the click event using the addEventListener() method.
*/

/*Now, when the user clicks the toggle button, the menu is activated and deactivated,
however, the submenu is still hidden.
We will add this functionality with the following JavaScript*/

const items = document.querySelectorAll(".item");
 
/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}
 
/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }   
}

/*Here, we add the .submenu-active class to each menu item with a submenu when the user clicks it. 

    First, we select all menu items with the querySelectorAll() method that returns a node list (rather than a single element like querySelector()). 
    In the custom toggleItem() function, we add and remove .submenu-active to/from the clicked element. Note that in the else if block, we remove the class from every other menu items that were previously opened. This way, it won’t happen that two submenus are open at the same time, as they can cover each other on desktop.
    Finally, we loop through the items classList using a for...of loop. Within the if block, we add two event listeners to menu items that have a submenu: one for the click event for regular users who access the menu by clicking or tapping, and one for the keypress event for keyboard users.
*/

/*Let Users Close the Submenu By Clicking Anywhere on the Page

Now there’s only one step back. As the dropdown menu is activated on the click event,
it doesn’t close automatically when the user hovers away from the top menu item.
This is especially annoying on desktop where the dropdown can cover the content. 

So, it would be nice to enable users to close the submenu by clicking anywhere on the screen.
We can add the feature with JavaScript*/

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);
   
    if (!isClickInside && menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }
   
  /* Event listener */
  document.addEventListener("click", closeSubmenu, false);

  /*
  The custom closeSubmenu() function checks if the user clicked inside the menu with the help of the target property.
  If not and there’s an active submenu on the screen, the .submenu-active class will be removed, so the submenu closes itself.
  We add the event listener to the document object, as we want to listen for clicks on the whole page.
  */