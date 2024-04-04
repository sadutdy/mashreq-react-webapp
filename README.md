                                                        **React Webapp **

1) React web application consisting of two screens: a login screen and a home screen.
2) Two languages (Hindi & English) with translations maintained in separate language files. The app's color is changing based on the language being used.
3) Simple login screen with email and password fields (with input type validations and error messages).
4) Home screen with a "welcome back" text based on the language of the app being used


https://github.com/sadutdy/mashreq-react-webapp/assets/26121634/eb121cbc-143a-4950-8574-fffa0e010001



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

``Email : admam@domain.com``
``Password : 1234``

Login API are managed through a custom mocked API , which returns a prefixed json which is located in _src/data/users.json_

<img width="452" alt="Screenshot 2024-04-04 at 1 21 25 PM" src="https://github.com/sadutdy/mashreq-react-webapp/assets/26121634/3f6ae806-b3c0-4dfc-a731-3e0a8dc87f6c">

We can add more users into this json to support more user

**Multi Language Support**

Multi-Language is managed by having individual json file for each language 

**How to add a new language ?**

1) Create a new file with lang suffix , ( example : ar.json for arabic inside _src/lang_ )

<img width="383" alt="Screenshot 2024-04-04 at 1 20 17 PM" src="https://github.com/sadutdy/mashreq-react-webapp/assets/26121634/6ac52243-5145-4057-ab61-5c5263182997">

2) Update src/lang/index.js with new lang suffix , update ``bgColors ,langDropdown``  object also
 
<img width="509" alt="Screenshot 2024-04-04 at 1 20 54 PM" src="https://github.com/sadutdy/mashreq-react-webapp/assets/26121634/f4a7ab12-ed4f-410b-af53-ab0c6d8016d0">








