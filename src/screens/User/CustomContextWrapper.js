import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import { languages, bgColors } from "../../lang";

const sampleUser = {
  id: 1,
  name: "Adam",
  email: "adam@domain.com",
  password: "1234",
  lang: "en",
};

// Define a custom wrapper component that provides the context
const CustomWrapper = ({ children }) => {
  // Return the component with the context provider
  const [user, setUser] = useState(sampleUser);
  const [lang, setLang] = useState(sampleUser.lang || "en");

  // Clear user data on logout
  const logout = () => setUser(null);

  //set user specific lang
  const changeLang = (value) => setLang(value);


  //translate text from user specific lang
  const translate = (key) => {
    try {
      return languages[lang][key] || key;
    } catch (error) {
      return key
    }
  };

  //get lang specific background color
  const getBgColor = () => bgColors[lang] || "black";

  return (
    <AuthContext.Provider
      value={{
        user,
        lang,
        changeLang,
        logout,
        translate,
        getBgColor,
        authError: "",
        login: jest.fn(),
        setAuthError: jest.fn(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { CustomWrapper, sampleUser };
