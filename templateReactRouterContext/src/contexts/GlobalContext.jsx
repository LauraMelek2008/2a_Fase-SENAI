import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates'
// diaHoje = "SEXTOUUUUUUUUUUUUU"

const [diaHoje, setDiaHoje] = useState('QUINTA  ')



    return(
        <GlobalContext.Provider value={{usuarioLogado, diaHoje, setDiaHoje}}>
            {children}
            
        </GlobalContext.Provider>
    )
}
