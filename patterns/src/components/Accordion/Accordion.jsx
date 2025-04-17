import { createContext, useContext, useState } from "react"

const AccordionContext = createContext();

export function useAccordionContext() {
    const ctx = useContext(AccordionContext);

    if (!ctx) {
        throw new Error("Accordion-related elements must be wrapped by <Accordion>.")
    }

    return ctx;
}

export default function Accordion({ children, className }) {
    const [openItemId, setOpenItemId] = useState(null);

    function toggleItem(id) {
        setOpenItemId(prevId => prevId === id ? null : id);
    }

    function openItem(id) {
        setOpenItemId(id);
    }

    function closeItem() {
        setOpenItemId(null);
    }

    const contextValue = {
        openItemId,
        openItem,
        closeItem
    }

    return (
        <AccordionContext.Provider value={contextValue}>
            <ul className={className}>
                {children}
            </ul>
        </AccordionContext.Provider>
    )
}