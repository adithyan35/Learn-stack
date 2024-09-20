/* event delegation in JavaScript leverages event bubbling to manage events efficiently
 by attaching a single event listener to a parent element, 
reducing the need to manage individual listeners for each child element. */

document.getElementById('parent-list').addEventListener('click', function(e) {
    // Ensure the clicked element is an <li>
    if (e.target && e.target.nodeName === 'LI') {
        console.log('List item clicked: ' + e.target.textContent);
    }
});