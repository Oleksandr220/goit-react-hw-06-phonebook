import "./App.css";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "./redux/actions";

import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import ContactsList from "./components/ContactsList/ContactsList";
import Conteiner from "./components/Conteiner/Conteiner";
import shortid from "shortid";

function App() {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  // useEffect(
  //   (prevState) => {
  //     if (contacts !== prevState) {
  //       localStorage.setItem("contacts", JSON.stringify(contacts));
  //     }
  //   },
  //   [contacts]
  // );

  const addContacts = (data) => {
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };
    console.log(data);

    const inIsContact = (e) => {
      return contact.name === e.name;
    };
    if (data.name === "" || data.number === "") {
      alert("Please make a correct contact");
      return;
    }
    if (contacts.some(inIsContact)) {
      alert(`${data.name} is already in contacts`);
    } else dispatch(actions.addContact(contact));
  };

  const deleteContact = (eventId) => {
    dispatch(actions.deleteContact(eventId));
  };

  const changeFilter = (e) => {
    dispatch(e.currentTarget.value);
  };

  const normalizedFilter = filter.toLocaleLowerCase();

  const visibleContacts = contacts.filter(
    (contact) =>
      contact.name.includes(normalizedFilter) ||
      contact.number.includes(normalizedFilter)
  );

  return (
    <>
      <Conteiner title="Phonebook">
        <Form addContacts={addContacts} />
      </Conteiner>
      <Conteiner title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter value={filter} onChange={changeFilter} />
            <ContactsList
              users={visibleContacts}
              ondeleteContact={deleteContact}
            />
          </>
        ) : (
          <span className="contact-message">
            You have not contacts yet, please add contact to phoneboock
          </span>
        )}
      </Conteiner>
    </>
  );
}

export default App;
