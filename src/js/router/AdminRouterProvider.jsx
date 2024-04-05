import React, {createContext, useContext, useMemo} from 'react';
const RouteContext = createContext();

export const RouteProvider = ({children}) => {
    const routeData = useMemo(() => ({
        "admin/companies":
        {
            title: "Companies",
            parent: "#"
        },
        "admin/games":
        {
            title: "Games",
            parent: "#"
        },
        "admin/catalog":
        {
            title: "Catalog",
            parent: "#"
        },
    }),[]);

    return (
        <RouteContext.Provider value={routeData}>
            {children}
        </RouteContext.Provider>
    );
}

export const useRoute = () => {
    return useContext(RouteContext);
};