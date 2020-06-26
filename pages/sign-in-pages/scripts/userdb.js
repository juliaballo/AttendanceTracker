class Userdb {
    constructor() {
        this.arrayOfUsers = [];
        this.description("constructor");
    }
    addUser(user) {
        const currentUser = this.findUser(user.email);
        if(!currentUser) {
            this.arrayOfUsers.push(user);
            console.log(this.arrayOfUsers);
            this.description("add User");
            return currentUser;
        } else {
            return currentUser;
        }
    }
    removeUser(user) {
        userIndex = this.arrayOfUsers.findIndex(currentUser => {return currentUser.email === user.email;})
        if(userIndex = -1) {
            return;
        } else {
            this.arrayOfUsers.splice(userIndex, 1);
        }
    }
    findUser(email) {
        return this.arrayOfUsers.find(currentUser => {return currentUser.email === email;});
    }
    logInUser(email, password) {
        const currentUser = this.findUser(email);
        if(!currentUser) { //! => if this.findUser(email) === false
            console.log("There is no email address like this in our database, please sign up first");
        } else {
            console.log("Email address is signed up, way to go! " + currentUser.firstName);
        }
    }
    description(reason) {
        console.log('\n'+reason+':');
        this.arrayOfUsers.forEach(user=>{console.log(user.email)});
    }
}