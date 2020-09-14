// EXAMINE THE DOCUMENT OBJECT

// console.dir(document)
// console.log(document.domain);
// console.log(document.URL);
// console.log(document);
// console.log(document.title);
//document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
//document.all[10].textContent = "Hello";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

//GET ELEMENT BY ID

// console.log(document.getElementById("header-title"));
// let headerTitle = document.getElementById("header-title");
// let header = document.getElementById("main-header");
//console.log(headerTitle);
// headerTitle.textContent = "HELLo";
// headerTitle.innerText = "Goodbye";
// console.log(headerTitle.textContent);
//headerTitle.innerHTML = "<h3>Hello</h3>";

//header .style.borderBottom = "solid 3px #000";

//Get elements by class name
// let items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "800";
// items[1].style.backgroundColor = "yellow";

// //gives error
// //items.style.backgroundColor = "#f4f4f4";

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4";
// }

//Get Elements by tag name
// let li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "800";
// li[1].style.backgroundColor = "yellow";

// //gives error
// //items.style.backgroundColor = "#f4f4f4";

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }

// QUERY SELECTOR

// const header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// const input = document.querySelector("input");
// input.value = "Hello World";

// const submit = document.querySelector('input[type="submit"]');
// submit.value = "Send";

// const item = document.querySelector(".list-group-item");
// item.style.color = "red";

// const lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// const secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "coral";

//QUERY SELECTOR ALL
// const titles = document.querySelectorAll(".title");

// console.log(titles);
// titles[0].textContent = "Hello";

// const odd = document.querySelectorAll(".list-group-item:nth-child(odd)");
// const even = document.querySelectorAll(".list-group-item:nth-child(even)");

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.color = "red";
//   even[i].style.color = "blue";
// }

// TREVERSING THE DOM

// let itemList = document.querySelector("#items");

//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement);

//childrenNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

//firstChild
// console.log(itemList.firstChild);
//firstLElementChild

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";

//lastChild
// console.log(itemList.lastChild);

//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";

//nextSibling
// console.log(itemList.nextSibling);

//nextElementSibling
// console.log(itemList.nextElementSibling);

//previous Sibling
// console.log(itemList.previousSibling);

//previous element sibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

//createElement

//create a div
// let newDiv = document.createElement("div");

// add class
// newDiv.className = "Hello";

//add id
// newDiv.id = "Helllo1";

// add attr
// newDiv.setAttribute("title", "Hello div");

// create text Node
// let newDivText = document.createTextNode("Hello World21321312321321");
// let btn = document.querySelector(".btn");
// add text to div
// newDiv.appendChild(newDivText);

// let container = document.querySelector(".container");
// let h1 = document.querySelector("header h1");

// console.log(newDiv);

// newDiv.style.fontSize = "30px";

// container.insertBefore(newDiv, h1);

// EVENTS

// const button = document.getElementById("button");

// button.addEventListener("click", buttonClick);

// function buttonClick(e) {
//console.log("Button clicked");
//   document.getElementById("header-title").textContent = "Changed";
//   document.querySelector("#main").style.backgroundColor = "#f4f4f4";
//   console.log(e);
//   console.log(e.target);
//   console.log(e.target.id);
//   console.log(e.target.className);
//   console.log(e.target.classList);
//   const output = document.getElementById("output");
//   output.innerHTML = "<h3>" + e.target.id + "</h3>";
//   console.log(e.type);
//   console.log(e.clientX);
//   console.log(e.clientY);
//   console.log(e.offsetX);
//   console.log(e.offsetY);
//   console.log(e.altKey);
//   console.log(e.ctrlKey);
//   console.log(e.shiftKey);
//}

// const button = document.getElementById("button");
// const box = document.getElementById("box");

//button.addEventListener("click", runEvent);
//button.addEventListener("dblclick", runEvent);
//button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);

// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);

// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseout", runEvent);

// box.addEventListener("mousemove", runEvent);

// const itemInput = document.querySelector('input[type= "text"]');
// const form = document.querySelector("form");
// const select = document.querySelector("select");

// itemInput.addEventListener("keydown", runEvent);
// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("keypress", runEvent);

// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("blur", runEvent);

// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("paste", runEvent);

// itemInput.addEventListener("input", runEvent);

// select.addEventListener("change", runEvent);
// select.addEventListener("input", runEvent);

// form.addEventListener("submit", runEvent);

// function runEvent(e) {
//   e.preventDefault();
//   console.log("Event type: " + e.type);

//   console.log(e.target.value);
//   document.getElementById("output").innerHTML =
//     "<h3>" + e.target.value + "</h3>";

//   output.innerHTML =
//     "<h3>MouseX: " + e.offsetX + " </h3><h3>MouseY: " + e.offsetY + " </h3>";

//   document.body.style.backgroundColor =
//     "rgb(" + e.offsetX + " , " + e.offsetY + ",200)";
// }

const form = document.getElementById("addForm");
const itemList = document.getElementById("items");
const filter = document.getElementById("filter");
// for submit event
form.addEventListener("submit", addItem);
// delete Event
itemList.addEventListener("click", removeItem);
//filter event
filter.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();

  // Get input value
  const newItem = document.getElementById("item");

  // create new li element
  let li = document.createElement("li");

  //add class
  li.className = "list-group-item";

  //add text node with input value
  li.appendChild(document.createTextNode(newItem.value));

  //create del button element
  let deleteBtn = document.createElement("button");

  //add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  //append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  //append button to li
  li.appendChild(deleteBtn);

  //append li to list
  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are u sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  //convert to lower case
  let text = e.target.value.toLowerCase();
  //get li
  let items = itemList.getElementsByTagName("li");
  // convert to array
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = " none";
    }
  });
}
