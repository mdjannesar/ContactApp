import Navbar from "./components/Navbar"
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import {HiOutlineUserCircle} from "react-icons/hi";
import {IoMdTrash} from "react-icons/io";
import {RiEditCircleLine} from "react-icons/ri";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclose from "./hooks/useDisclose";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [contacts, setContacts]=useState([]);
  const {isOpen, onClose, onOpen}= useDisclose();

  useEffect(()=>{
    const getContacts=async()=>{
       try {
        const contactsRef=collection(db,"contacts");
        
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists=snapshot.docs.map((doc)=>
          {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          
          setContacts(contactLists);
          return contactLists;
        });

       } catch (error) {
     
       }
    };

    getContacts();
  },[]);

  const filterContacts = (e) =>{
    const value=e.target.value;

    const contactsRef=collection(db,"contacts");
        
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists=snapshot.docs.map((doc)=>
          {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });

          const filteredContacts= contactLists.filter((contact)=> 
            contact.name.toLowerCase().includes(value.toLowerCase())
          );
          
          setContacts(filteredContacts);
          return filteredContacts;
        });
  }

  return (
    <>
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar/>
      <div className="flex relative gap-2">
        <FiSearch className="text-3xl text-white absolute top-1 left-1"/>
        <input type="text" onChange={filterContacts}
          className="h-10 flex-grow rounded-md border border-white bg-transparent pl-10 text-white" />
          <div>
            <AiFillPlusCircle onClick={onOpen} className="text-5xl text-white absolute -top-1 cursor-pointer"/>
          </div>
      </div>

      <div className="mt-4 gap-3 flex flex-col">
        {
           contacts.map((contact)=>(
              <ContactCard key={contact.id} contact={contact} />
           ))
        }
      </div>
    </div>

     <AddAndUpdateContact  onClose={onClose} isOpen={isOpen} />
     <ToastContainer position="bottom-center" />
    </>
  );
};

export default App