// JavaScript Dom Full Course - GreatStack

// 1.What is  Dom?(Document Object Model):
    // The Document Object Model(DOM) is an application programming interface(API) 
    // for Manipulating HTML Documents.
    // The DOM provides functions that allow you to add,remove, and modify 
    // parts of the documents effectively.

// 2.what is nodes and type of nodes?
    // The DOM represents on HTML documents as a tree of nodes.
    // Nodes Relationship:
    // Any nodes has relationships to other nodes in the DOM tree,
    // and it is same as described in the  traditional family tree.


// 3.selecting elements using Dom

    // 1.getElementById() ->The getElementById() method returns an Element object that represents an HTML element
    // 2.getElementByName()
    // 3.getElementByTagName() -> The getElementsByTagName() method accepts a tag name and returns a live HTMLCollection of elements
    // 4.getElementByClassName() -> The getElementByClassName() method returns an array-like of objects of the child elements with a specified class name.
    // 5.querySelector() -> The querySelector() method allows you to select the first element that matches one or more CSS selectors.
    //   and querySelectorAll()
// BASICALLY WE CAN ADD ALL THE CSS SELECTED IN THIS QUERYSELECTOR() AND QUERYSELECTORALL() METHOD.

// 4.Traversing elements

    // 1.selecting parent element:
        //To get the parent node of a specified node in the DOM tree,we can use the parentNode property.
    // 2.selecting child elememt -> Get child elements of a node in javascript
    // 3.selecting Sibling element -> select the next sibling,privious sibling   of an element

// 5.Manipulating HTML elements

    // 1.createElement() -> To create an HTML element,we use the createElement() method
    //The document.createElement() accepts an HTML tag name and returns new node with the Element type.
    // 2.appendChild() -> Use appendChild() method to add a node to the end of the list of child nodes of a specified parent node.
                    // -> The appendChild() can be used to move an existing child node to the new position within the document
    // 3.textContent -> To get the text content of a node and its descendants, you use the textContent property.
                // -> menu.textContent = "<h1>Hello!<h2>" --> <h1>Hello!<h2> (will display plain html)
    // 4.innerHTML -> menu.innnerHTML = "<h1>Hello!<h2>"  --> HELLO (with h1 style)
    // 5.after() method -->We can use after()method to insert one or more nodes after the element.
    //syntax: element.after(node)
    // we can add multiple element after this menu, we can add multiple string after this menu element.
    // 6.append() --> this append will accept multipe nodes and string also
    //Systax : parentNode.append(newNodes);

    // 7.prepend() -->
     //Systax : parentNode.prepend(newNodes);

    // 8.insertAdjacentHTML()
     //Systax : element.insertAdjacentHTML(positionName, text);
     //menu.insertAdjacentHTML("beforeend","<li>contact</li>");
     //menu.insertAdjacentHTML("afterbegin","<li>contact</li>");

    // 9.replaceChild()-->
    //Systax : parentNode.replaceChild(newChild,oldChild);

    // 10.cloneNode()-->
    //Systax: let newNode = originalNode.cloneNode();
    //let newNode = menu.cloneNode(true); --> it will show all nodes in console tab
     //let newNode = menu.cloneNode(false); --> default false - it will show only menu in console tab. 
    //console.log(newNode);

    // 11.removeChild()
    //menu.removeChild(childNode)
    //menu.removeChild(menu.lastElementChild);
    //menu.removeChild(menu.firstElementChild);

    // 12.insertBefore()-->USE  insertBefore() method to insert a new node before an 
    //existing node as a child node of a parent node.
    //Sysntax:parentNode.insertBefore(newNode,existingNode)
    //menu.insertBefore(newNode,menu.firstElementChild);


                  // <input type="text"  id="userName" placeHolder="userName">
                  // let inputBox = document.getElementById("username");
//6.Attribute() method: let inbutBox = document.getElementById("userName"); -> console.log(inputBox.attributes);
    //1.getAttribute()-->console.log(inputBox.getAttribute("id")); -> it is getting existing attribute
    //2.setAttribute()-->inputBox.setAttribute("class","user"); -> console.log(inputBox); -> we can set the new attribute.
    //3.hasAttribute()-->console.log(input.hasAttribute("class")); ->   o/p:false.  -> it is return true or false value.this attribute is there or not?
    //4.removeAttribute() --> inputBox.removeAttribute("placeholder"); -> console.log(inputBox); -> we can remove attribute from the existing attribute

//7.Manipulating Element's Styles:    // <input type="text"  id="userName" placeHolder="userName">
                                      //style= :"background-color : red; font-size : 20px;"  
                                     // let inputBox = document.getElementById("username");
    //1.style property -->  we can use the style property to get or set the inliner style of an element.
     // console.log(inputBox.style); ,  console.log(inputBox.style.backgroundColor);
     //inpubox.style.padding = "10px";
     //console.log(inputBox);
     //so using this style property we get the inline css and we can also set the inline css

    //2.CSStext --> this is the one more option to add the inline style in HTML element that is using CSS TEXT.
    //inpubox.style.cssText = "width:200px"; -> using cssText it will override the existing Html inline stylings.
    //inpubox.style.cssText += "width:200px"; -> using this concat we can use existing and new one also it will show in the console tab.
    //inpubox.style.cssText = "width:200px";"height:100px"; -> using this css text we can add multiple CSS properties at the same time.multiple css properties in HTML element as a inline css.

    //3.getcuputedStyle() -- This is a window object
    //syntax:window.getComputedStyle(element,pseudoElement)

    //<style>
    //background-clor:red;
    //font-size:12px;
    //</style>
{/* <body>
     <input type="text"  id="userName" placeHolder="userName">
     <script>
     let inputBox = document.getElementById("username");
     console.log(window.getComputedStyle(inputBox)) --> here displayed all the css properties in console tab.
     NOW WE CAN GET THE VALUE OF THE PARTICULAR CSS PROPERTY.
     console.log(window.getComputedStyle(inputBox.fontSize)) (or) -->FROM THIS INPUT BOX WE WILL ADD FONT SIZE --> now it will display the value of this fontsize.  
     console.log(window.getComputedStyle(inputBox.backgroundColor)) 
So using this getComputedStyle method we can read all the CSS properties applied on any HTML element 
    </script>
</body> */}


    //4.className property -->  retured a list of classes separted by space. 
    
    //<h1 id="title" class ="main message">kaveri</h1>
    //  let inputBox = document.getElementById("username");
    // console.log(title.className); --> o/p:  main message 
                   //(or)
    //  let inputBox = document.getElementById("username");
    //title.className="new"; --> this is override the existing class name, now class is --> o/p: new
    //title.className +=" new"; --> new and existing both can will displayed.
    // console.log(title);


    //5.classList property --> class list return the collection of css classes so
    //console.log(title.classList); 

   // add - we can add new class in element and multiple class name also we can add [class="main message new"]
   //console.log(title.classList.add);

   // remove - we can remove class name from the element
   //console.log(title.classList.remove);

    //replace - we can replace the class name like[ "message" to "msg"]
    //console.log(title.classList.replace);

    //contains --> class name is available in the element then only it is written in true, not available in the element i will written false.
    //console.log(title.classList.contains);

    //toggle --> if class name is already there it will remove it and if it is not there it will add the class name
    //console.log(title.classList.toggle);

//8.JavaScript Events:
// in modren browser this click goes upto window object 
    //1.what is event: we have a multiple event in javascript:
    //when we click on the web page that is a click event, 
    //when we move cursor over the web page that is mouse move event, 
    //when the web page loads that is a load event.

    //2.Event Bubbling and Event Capturing
    //Event Bubbling --> Event starts at the  most specific element and flows towards least specific element. <button> to <!DOCTYPE html> 
    //Event Capturing--> Event starts at the least specific element and flows towards most specific element. <!DOCTYPE html> to <button>

    //3.Event Handler in HTML Attributes
    //Event Handler --> An event handler  is a piece of code that will be executed when the event occurs.
    //when we click on this button we will add some code that will be executed after clicking on this button so that code is know as event handler.
    // Event handler is also known as event listener
    // three ways to assign  event handler
       //1.HTML Event Handler Attribute: --> their name typically begins with on [click event - onclick]
    
    //   <body>
    //     <div id="container">
    //         <button type="button" onclick="displayMsg()"> Click Here</button>
    //     </div>
    //     <script>
    //         function displayMsg(){
    //             console.log("Button Clicked from fn");
    //         }
    //     </script>
    //   </body>

        //2.adding event handler name is js:

    //   <body>
    //     <div id="container">
    //         <button id="btn"> Click Here</button>
    //     </div>
    //     <script>
    //        let btn = document.getElementById("btn");
    //        btn.onclick =function(){
    //             console.log("Button Clicked");
                            //(or)
    //             console.log(this.id); --> o/p:btn
    //         }
    //     </script>
    //   </body>

    //remove event handler:
     //     <script>
    //        let btn = document.getElementById("btn");
    //        btn.onclick =null; -->when we will assign null it will remove the event handler
    //         }
    //     </script>


    //4.DOM level 0 Event handlers

    //5.addEventListener()-->  addEventListener() method will register an event handler.
    //addEventListener(event,function,useCapture)

      //   <body>
    //     <div id="container">
    //         <button id="btn"> Click Here</button>
    //     </div>
    //     <script>
    //        let btn = document.getElementById("btn");
    //        btn.addEventListener("click", function(){
    //         console.log("Button clicked")
                //(or)
    //        btn.addEventListener("click", function(event){
    //         console.log(event.type); -->//when the event occurs the js passes the event object to the event handler, so in this one we can pass event  object 
    //       });
    //     </script>
    //   </body>

                //or

                //<script>
                //        let btn = document.getElementById("btn");
                //function displayMsg(){
                // console.log("Button clicked")
                //  }       
                // btn.addEventListener("click", displayMsg); -> it can be a anonymous function or it can be a name external function, refer to the external name function` with the function name without the parenthesis
            // });
            //     </script>


    //6.removeEventListener() -->removeEventListener()method will remove an eventhandler
    // btn.removeEventListener("click", displayMsg);


    //7.Event Objects --> when the event occurs, the web browser passed an Event object to the event handlers
    // <body>
    //     <div id="container">
    //         <button type="button" onclick="console.log(event);"> Click Here</button> --> it will return the object 
    //         <button type="button" onclick="console.log(event.type);"> Click Here</button> --> display the type of event, typr is = "click".
    //          <button type="button" onclick="console.log(event.target);"> Click Here</button> --> we will get the target element on which the event occurs, 
    //when we click on the button it is displaying the entire button element with all the attributes
    //     </div>

    //<button id="btn" type="button" onclick="console.log(this.id);"> Click Here</button>
                                    // (or)
     //<button id="btn" type="button" onclick="console.log(id);"> Click Here</button> --> o/p:btn
                                    // (or)
     //<button id="btn" type="button" onclick="console.log(type);"> Click Here</button> --> o/p:button
   // --> when we click on the button it should display the id value(btn).

    // we can also use "this" keyword inside the event handler refers to the target element 
    // "this" keyword refer to the targer element
     //<button type="button" onclick="console.log(this);"> Click Here</button>

    
    //8.different types of Event:

    //MouseMove:
    //Event fires repeatedly when you move the mouse cursor around the element 

    //MouseDown:
    //Event fires when you press the mouse button on the element 

    //MouseUp:
    //Event fires when you release the mouse button on the element .

    //Mouseover:
    //Event fires when the cursor move from outside to inside the boundaries of the element.

    //MouseOut:
    //Event fires when the cursor is over an element and then moves to another element.
    
    //KeyDown:
    //Event fires when you press a key on the keyboard & fires repeatedly while you're holding down the key.

    //KeyUp:
    //Event fires when you realease a key on the keyboard.

    //KeyPress:
    //Event fires when you press a charecter on keyboard like a,b,c....It fires repeatedly while you hold down the key on the keyboard.

    //Scroll:
    //Event fires when you scroll a document or an element,the scroll events fire.

