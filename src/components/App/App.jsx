import { useEffect, useState } from "react"
import css from "./App.module.css"
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox";
import { nanoid } from "nanoid"


const savedNumbers = window.localStorage.getItem("myContacts");
function App() {
  const [contacts, setContact] = useState(
    JSON.parse(savedNumbers) || [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ]
  );

  useEffect(() => {
    window.localStorage.setItem("myContacts", JSON.stringify(contacts));
  }, [contacts]);

  const addNumber = (newNumber) => {
    setContact((allNumbers) => {
      const newContact = {
        id: nanoid(),
        name: newNumber.name,
        number: newNumber.number,
      };
      return [...allNumbers, newContact];
    });
  };
  const deleteNumber = (numberId) => {
    setContact((allContacts) => {
      return allContacts.filter((contact) => contact.id !== numberId);
    });
  };
  const [filter, setFilter] = useState("");
  const visibleNumbers = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addNumber} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contArr={visibleNumbers} onDelete={deleteNumber} />
    </div>
  );
}

export default App;