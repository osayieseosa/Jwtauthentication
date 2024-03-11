import { createContext } from "react";

const AppContext = createContext({})

export const AppProvider = ({children}) => {
    const companyName = "Web Inovated";
    return(
        <AppContext.Provider value={{companyName}}>{children}</AppContext.Provider>
    );
}

export default AppContext