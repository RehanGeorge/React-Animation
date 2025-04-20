import { createContext, useState } from "react"

type itemsStoreType = {
    items: string[],
    addItem: (text: string) => void,
    deleteItem: (id: string) => void
}

export const ItemsContext = createContext<itemsStoreType>({
    items: [],
    addItem: () => { },
    deleteItem: () => { },
});

const ItemsContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
    const [items, setItems] = useState<string[]>(['Hello', 'Hi']);

    const addItemHandler = (itemText: string) => {
        setItems((prevItems) => {
            return prevItems.concat(itemText);
        })
    }

    const removeItemHandler = (itemId: string) => {
        setItems((prevItems) => {
            return prevItems.filter(item => item !== itemId);
        })
    }

    const contextValue: itemsStoreType = {
        items: items,
        addItem: addItemHandler,
        deleteItem: removeItemHandler
    }

    return (
        <ItemsContext.Provider value={contextValue}>
            {props.children}
        </ItemsContext.Provider>
    )
};

export default ItemsContextProvider;