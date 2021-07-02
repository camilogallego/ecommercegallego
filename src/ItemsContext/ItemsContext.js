import React, { createContext, useState, useEffect} from 'react'

export const ItemsContext = createContext()

export const ItemsProvider = (props) => {
    const [items,setItems] = useState ([])


return(
    <ItemsContext.Provider value={[items,setItems]}>
        {props.children}
    </ItemsContext.Provider>
)


}
