import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

const saveDataBtn = document.getElementById("save-data")


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

const saveData = async () => {
    const title = document.querySelector("#title").value
    const description = document.querySelector("#description").value
    const author = document.querySelector("#author").value
    const currentDate = new Date()
    const payload = {
        title,
        description,
        author,
        publishedAt: currentDate.toISOString()
    }

    const response = await addDoc(blogRef, payload)
    console.log(response)
}

saveDataBtn.addEventListener("click", saveData)