# -User-Management-Templates-and-Validation
User Management System

Overview :-

This project is a simple User Management System that allows users to register, log in, and view their profile page. The user data (name, email, password) is stored locally in the browser using localStorage, enabling users to maintain their session even after refreshing the page.

The project consists of three primary pages :-

1. Login Page (index.html) – Allows users to log in with their credentials.
2. Registration Page (register.html) – Allows users to register by entering their name, email, and password.
3. Profile Page (profile.html) – Displays the user's name and email after a successful login.

Features :-

. Registration: Users can create a new account by providing their name, email, and password.
. Login: Registered users can log in with their credentials. Upon successful login, they are redirected to their profile page.
. Profile Page: After logging in, users are presented with a simple profile page that displays their name and email.
. Logout: Users can log out of their profile, which clears the session data from the browser and redirects them back to the login page.

Technologies Used :-

. HTML: For structuring the pages.
. CSS: For styling the pages and making them visually appealing.
. JavaScript: For handling the logic of registration, login, profile management, and session handling using localStorage.

How to Use :-

. Clone this repository or download the files.
. Open the index.html file in your browser to start the login process.
. If you don't have an account, click on the "Register here" link to create a new account.
. After registration, log in with the credentials you used to register.
. Once logged in, you'll be redirected to your profile page, where you can see your name and email.
. Click the "Logout" button to log out and return to the login page.

Known Issues :- 

. The login functionality is based solely on the data stored in localStorage, so it's only valid within the same browser session. If the browser's localStorage is cleared, users will need to register again.

License :-

. This project is open-source and available under the MIT License.
