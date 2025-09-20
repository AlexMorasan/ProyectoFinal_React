// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, getFirestore, getDocs,doc, getDoc, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU6IbFPzqieUm8zyynjHJZDDeiQicFLIw",
  authDomain: "proyectofinal-react-atpfitness.firebaseapp.com",
  projectId: "proyectofinal-react-atpfitness",
  storageBucket: "proyectofinal-react-atpfitness.firebasestorage.app",
  messagingSenderId: "236457574249",
  appId: "1:236457574249:web:31e5502cd77bd8266b87f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

export async function getProducts(){
    const querySnapshot = await getDocs(collection(db, 'productos'));
    querySnapshot.forEach(doc => console.log(`${doc.id} => ${doc.data().nombre}`))
    const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    return products;
}

export async function getProductById(id) {
  const docRef = doc(db, 'productos', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data()
    };
  } else {
    console.warn(`No se encontró producto con ID: ${id}`);
    return null;
  }
}


