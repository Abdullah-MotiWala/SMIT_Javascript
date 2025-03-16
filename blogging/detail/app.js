import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, collection, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

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
    try {
        const id = getID()
        const docRef = doc(blogRef, id)
        const data = await getDoc(docRef)
        return data.data()
    }
    catch (e) {
        console.log(e)
    }
}
function getID() {
    const url = location.href
    const [_, id] = url.split("#")
    return id
}
async function showData() {
    const data = await fetchData()
    console.log(data)
}
showData()
