-----------Registration Form with Validation---------------

  This project implements a registration form with client-side validation using HTML, CSS, JavaScript, and TypeScript. The form collects basic user information such as name, email, password, and confirm password. Upon form submission, it checks the entered data and shows appropriate error messages if validation fails. When successful, it shows a "Registration successful!" message, clears the input fields, and keeps the user on the same page.

# ------------------------Features-------------------------
Form Fields:
    Name (at least 3 characters)
    Email (valid email format)
    Password (at least 8 characters)
    Confirm Password (must match the password)
#------------------------Validation------------------------
Validation:  
    Ensures that:
        Name is at least 3 characters long.
        Email is in a valid format (e.g., name@example.com).
        Password is at least 8 characters long.
        Confirm Password matches the password.
    Shows error messages when the inputs do not meet the validation criteria.
Success Message:
    Once the form is successfully submitted (all fields are valid), a "Registration successful!" pop-up message appears.
Clear Form:
    After submission, the form fields are cleared automatically.

#-----------Commands for Project Setup and Execution--------
Initialize the Project:

    Run the following command to create a new package.json file:
        npm init -y
        #Install TypeScript

    Install TypeScript as a development dependency:
        npm install typescript --save-dev
        #TypeScript Configuration

    Generate a tsconfig.json file to configure TypeScript settings:
        npx tsc --init
        #Transpile TypeScript

Write the TypeScript code in validation.ts.
    Transpile the TypeScript code into JavaScript:
        npx tsc
        #Run the Application

    To test your application, set up a local development server. Install a server like lite-server or live-server:
        npm install lite-server --save-dev
        #installing lite-server

    Start the server to serve your HTML file and linked resources:
        npm start
        #starting the server

    Make sure your package.json includes a script to start the server, typically something like:

        "scripts": {
            "start": "lite-server --baseDir=src"
        }
        #providing which resorces need to be run by lite-server
By following these structured steps, you'll be able to build a robust and type-safe registration form using both JavaScript and TypeScript. This approach ensures that your solution is both optimized and maintainable, suitable for handling competitive programming test cases and real-world development.