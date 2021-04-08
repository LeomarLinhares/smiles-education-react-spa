import React, { useState } from "react";

export const GlobalContext = React.createContext({});

export default function GlobalProvider({children}) {
    let [catalogHelpBalloonCoords, setCatalogHelpBalloonCoords] = useState([0, 0]);

    return (
        <GlobalContext.Provider
         value={{
             catalogHelpBalloonCoords,
             setCatalogHelpBalloonCoords
         }}
        >
            {children}
        </GlobalContext.Provider>
    );
}