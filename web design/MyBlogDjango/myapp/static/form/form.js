class user 
{
    constructor(firstName, lastName, email, gender, country, picture, cv) 
    {
        this.firstName = firstName;
        this.lastName = lastName;

        this.email = email;
        this.gender = gender;
        this.country = country;

        this.picture = picture;
        this.cv = cv;

    }

    validateUser(currentUser)
    {
        if
        (
            currentUser.firstName == "" ||
            currentUser.lastName == "" ||
            currentUser.email == "" ||
            currentUser.gender == "" ||
            currentUser.country == "" ||
            !currentUser.picture ||
            !currentUser.cv 
        )
        {
            alert("User could NOT be created - A field is missing");
            return false;
        }
        

        if(currentUser.gender != "Male" && currentUser.gender != "Female")
        {
            alert("User could NOT be created - Gender must be Male or Female");
            return false;
        }
        

        const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if(!emailPattern.test(currentUser.email))
        {
            alert("User could NOT be created - Email is NOT correct");
            return false;
        }
        
        
        alert("User created");
        return true;
    }
}

document.getElementById("createUserButton").addEventListener("click", function() 
{
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    let email = document.getElementById("email").value;
    let gender = document.getElementById("gender").value.trim();
    let country = document.getElementById("country").value;

    let picture = document.getElementById("picture").files[0];
    let cv = document.getElementById("cv").files[0];

    const currentUser = new user(firstName, lastName, email, gender, country, picture, cv);

    console.log(currentUser);
    currentUser.validateUser(currentUser);
    
    

});
