import { useState } from "react";


const useDisclose = () => {

    const [contacts, setContacts]=useState([]);
    const [isOpen,setOpen]=useState(false);
  
    const onOpen = () => {
      setOpen(true);
    }
  
    const onClose= () => {
      setOpen(false);
    }

  return {onClose, onOpen, isOpen};
}

export default useDisclose