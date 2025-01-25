const divElement = document.getElementById("parent")
const pElements = divElement.getElementsByTagName("p")

const firstP = pElements[0]
const secondP = pElements[1]

const nthChild = divElement.childNodes[4]
console.log(nthChild.nodeType);

// const firstChild = divElement.firstChild
const firstChild = divElement.firstElementChild
// const lastChild = divElement.lastChild
const lastChild = divElement.lastElementChild
const divParent = divElement.parentNode
const divSibling = divElement.nextElementSibling
const divPreSibling = divElement.previousElementSibling

// console.log(divElement.childNodes, nthChild, firstChild, lastChild);
console.log(divPreSibling, lastChild.tagName, divSibling);
const ulElement = document.getElementById("list")
const ulStyling = ulElement.getAttribute("style")
ulElement.setAttribute("class", "d-flex")
console.log(ulStyling);

// console.log(ulElement.hasAttribute("class"))
// console.log(firstP.textContent,firstP.outerHTML, firstP.innerHTML)


