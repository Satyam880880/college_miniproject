const express = require("express");
const app = express();
const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/College-miniproject";

main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err) =>{
    console.log(err);
});

const path = require('path');


async function main() {
  await mongoose.connect(MONGO_URL);
}


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Static folder ka path set karna
app.use(express.static(path.join(__dirname,  'views', 'includes')));

// Route define karna (index.html ko serve karna)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'includes', 'index.html'));
});


  app.get('/login', (req, res) => {
    res.render('users/login.ejs'); 
  });

    app.get('/signup', (req, res) => {
        res.render('users/signup.ejs'); 
    });


    app.get('/symptom', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'includes', 'Symptoms.html'));
    });


    app.get('/doctor', (req, res) => {
      const doctor = {
          name: "Dr. Raj Singh",
          specialization: "Cardiology",
          yearsOfExperience: 15,
          contact: "8578451477",
          consultationFee: 250,
          clinicAddress: "Sharda Hospital Greater Noida, State: UP"
      };
      res.render('users/doctor.ejs', { doctor });
  });


app.listen(8000, () => {
    console.log("server is listening on port 8000");
});