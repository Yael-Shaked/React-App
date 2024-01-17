import { initializeApp } from "firebase/app";
import 'firebase/auth';
import firebase from 'firebase/app';

    const firebaseConfig = {
        apiKey: "AIzaSyARGXQ4jtizTKFISGpSMwfrgwsKxQP4YD4",
        authDomain: "todo-app-4ed84.firebaseapp.com",
        projectId: "todo-app-4ed84",
        storageBucket: "todo-app-4ed84.appspot.com",
        messagingSenderId: "134515366318",
        appId: "1:134515366318:web:a50ad1a4d6289802eb103f"
      };
      
      const app = initializeApp(firebaseConfig);