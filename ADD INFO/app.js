import { db, collection, addDoc } from '../firebaseConfig.js';

var studentname = document.querySelector('.studentname');
var studentfname = document.querySelector('.studentfname');
var studentage = document.querySelector('.studentage');
var studentclass = document.querySelector('.studentclass');
var studentfees = document.querySelector('.studentfees');
var submitbtn = document.querySelector('.submitbtn');

submitbtn.addEventListener('click', setdataofstudent);

async function setdataofstudent() {
  try {
    if (
      studentname.value !== '' &&
      studentfname.value !== '' &&
      studentage.value !== '' &&
      studentclass.value !== '' &&
      studentfees.value !== ''
    ) {
      const docRef = await addDoc(collection(db, 'students'), {
        studentname: studentname.value,
        studentfname: studentfname.value,
        studentage: studentage.value,
        studentclass: studentclass.value,
        studentfees: studentfees.value,
      });
      location.href = '../index.html';
    } else {
      console.log('Please fill out the form');
    }
  } catch (e) {
    console.log(e);
  }
}
