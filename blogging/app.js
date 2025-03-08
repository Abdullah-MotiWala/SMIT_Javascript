const clickButton = document.getElementById("click")
clickButton.addEventListener("click", () => {
    alert("clicked")
    localStorage.setItem("user", { name: "abdullah" })
})

const click2Button = document.getElementById("click-2")
click2Button.addEventListener("click", () => {
    alert("clicked-2")
    const user = localStorage.getItem("user")
    console.log(user)
})