                  

                          https://github.com/sadutdy/mashreq-react-webapp/assets/26121634/1cda66ee-3f3b-49bc-a233-b62c5f4eea7a

                                                        **React Webapp **

1) React web application consisting of two screens: a login screen and a home screen.
2) Two languages (Hindi & English) with translations maintained in separate language files. The app's color is changing based on the language being used.
3) Simple login screen with email and password fields (with input type validations and error messages).
4) Home screen with a "welcome back" text based on the language of the app being used


**Available Scripts**

In the project directory, you can run:

**To Run**

``npm start``

**To Test ( Jest unit testing )**

``npm test``

**To Build the bundle**

``npm run build``

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


**Test user credetials**

Login API are managed through a custom mocked API , which returns a prefixed json which is located in _src/data/users.json_

 ![Uploading Screenshot 2024-04-04 at 12.52.49 PM.png…]()

We can add more users into this json to support more user

valid login credatails 

``
Email : admam@domain.com
Password : 1234
``

**Multi Language Support**

Multi-Language is managed by having individual json file for each language 

**How to add a new language ?**

1) Create a new file with lang suffix , ( example : ar.json for arabic inside _src/lang_ )
  ![Uploading Screenshot 2024-04-04 at 12.58.34 PM.png…]()
2) Update src/lang/index.js with new lang suffix , update ``bgColors ,langDropdown``  object also
  ![Uploading Screenshot 2024-04-04 at 1.08.01 PM.png…]()



   




















The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!







