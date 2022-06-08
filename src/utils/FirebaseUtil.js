// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { collection, doc, getDocs, setDoc, getFirestore, deleteDoc } from "firebase/firestore";
import { uuid } from 'uuidv4';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export function firebaseConfig() {
    const config = {
        apiKey: "AIzaSyAvj1GDqA5tRR3shTyQHVDnIrG8jDZ43Zw",
        authDomain: "sistema-ad1a5.firebaseapp.com",
        projectId: "sistema-ad1a5",
        storageBucket: "sistema-ad1a5.appspot.com",
        messagingSenderId: "331169786455",
        appId: "1:331169786455:web:4ce10d38f81c935cb9d112",
        measurementId: "G-B5PFFKH9HJ"
    };

    // Initialize Firebase
    const app = initializeApp(config);
    const analytics = getAnalytics(app);
}

export function firebaseRegistrarUsuario(email, password) {
    createUserWithEmailAndPassword(getAuth(), email, password)
    .then(credenciales => {
        //credenciales.user
    })
}

export async function firebaseIniciarSesion(email, password) {
    try {
        let credenciales = await signInWithEmailAndPassword(getAuth(), email, password);
        //credenciales.user
    } catch(e) {
        return false;
    }
    return true;
}

export async function firebaseBuscar(coleccionABuscar) {
    let listado = [];
    let consulta = collection(getFirestore(), coleccionABuscar);
    let resultado = await getDocs(consulta);
    resultado.forEach(documento => {
        let objeto = documento.data(); // esto nos va a traer un objeto como {email, telefono, etc}
        objeto.id = documento.id; // esto nos va a traer el id del cliente
        listado.push(objeto); //este objeto se va a agregar al listado
    });
    return listado;
}

export function firebaseCrear(coleccion, objeto) {
    objeto.id = uuid();
    let referencia = doc(getFirestore(), coleccion, objeto.id)
    setDoc(referencia, objeto);
}

export async function firebaseEliminar(coleccion, id) {
    await deleteDoc(doc(getFirestore(), coleccion, id));
}
//Continuar video desde minuto 04:52:05
//NO ENTENDÍ QUE PASÓ ENTRE EL MINUTO 04:48:28 Y EL MINUTO 04:48:40
//UUID significa: unstable_useId