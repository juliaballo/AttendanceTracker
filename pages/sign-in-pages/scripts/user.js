const userDB = new Userdb();
let currentUser = 0;

const getCurrentUser = () => {
    return currentUser;
}

const handleSignUp = (firstName, lastName, email, password) => {
    const newUser = new User(firstName, lastName, email, password);
    const userAdded = userDB.addUser(newUser); // userAdded is going to be a user object
    const signUpPage = document.getElementById("signUpPage");
    const logInPage = document.getElementById("logInPage");
    if(!userAdded) {
        currentUser = newUser;
        signUpPage.classList.toggle("show");
        logInPage.classList.toggle("show");
    }
}

const handleSignIn = () => {
    const email = document.getElementById("loginEmail").value; //.value is a method on imput fields => returns the value
    const password = document.getElementById("password").value;
    console.log("I'm here at handleSignIn: " + email);
    console.dir(document.getElementById("loginEmail"));
    currentUser = userDB.logInUser(email, password);
}

class User {
    constructor(firstName, lastName, email, password, pswRepeat) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.email = email,
        this.password = password,
        this.pswRepeat = pswRepeat
    } 
    accountInfo() {
        console.log(`My name is ${this.firstName} ${this.lastName} and my email address is ${this.email}`);
    }
}

newUser = new User("Julia", "Ballo", "ballo.julia@gmail.com", "testtest");
userDB.addUser(newUser);
newUser = new User("Marton", "Ballo", "marton.ballo@gmail.com", "testtest2");
userDB.addUser(newUser);
newUser = new User("Miklos", "Ballo", "miklos.ballo@gmail.com", "testtest3");
userDB.addUser(newUser);
