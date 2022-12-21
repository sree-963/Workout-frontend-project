import { Authcontext } from "../Context/AuthContext";
import { useContext } from "react";

 export const useAuthContext = () => {
    const context = useContext(Authcontext);
    if (!context) {
        throw Error('usecontext can not be used')
    }
    return context;
}
