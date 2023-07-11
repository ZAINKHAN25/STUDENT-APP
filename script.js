import {db, collection, getDocs} from './firebaseConfig.js'

var rectangle2 = document.querySelector

const querySnapshot = await getDocs(collection(db, "students"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});