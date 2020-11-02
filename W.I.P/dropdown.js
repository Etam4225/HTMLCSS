/*
	dropdown.js
	
	This file is designed to work with dropdown menus using the dropdown.css template.
	
	NOTE -	THE USE OF THIS FILE IS DEPENDENT UPON THE CLASS STRUCTURE ESTABLISHED IN THE CSS FILE.
			THE FUNCTION getElementsByClassName IS NOT SUPPORTED IN SOME OLDER VERSIONS OF THE MAJOR BROWSERS.
*/

/*
	toggleMenuItems
	
	Makes visible or invisible the submenuitems inside of a container.
	
	Parameters:
		parentItem - the container for the submenu items.
		displayVal - the value that will go into the "display" property of the style object.  Typically, this will either be "none" if hiding the item, or "block" if showing the item.
*/
function toggleMenuItems(parentItem, displayVal)
{
	var subList = parentItem.getElementsByClassName("subcontainer");
	
	/*
		If there are multiple levels of submenus, there may be multiple "subcontainer" objects.
		This function needs to open all of them up down the line.
	*/
	subList[0].style.display = displayVal;
}
