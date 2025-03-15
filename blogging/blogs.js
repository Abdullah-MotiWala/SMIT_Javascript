import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

const blog = document.getElementById("blog")
const firebaseConfig = {
    apiKey: "AIzaSyAFQI8gL7G3rC1ZKJCtep1Owd6uwLUiAso",
    authDomain: "smit-13-test.firebaseapp.com",
    projectId: "smit-13-test",
    storageBucket: "smit-13-test.firebasestorage.app",
    messagingSenderId: "833923891649",
    appId: "1:833923891649:web:a8717788e7172a18ccaf40"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const blogRef = collection(db, "blogs")

const fetchData = async () => {
    const data = await getDocs(blogRef)
    data.forEach(doc => {
        console.log(
            doc.id,
            doc.data(),
            "data"
        )
        let card = `<div>${doc.data().title}</div>`
        blog.innerHTML += card
        console.log(card)
    })
}

fetchData()


