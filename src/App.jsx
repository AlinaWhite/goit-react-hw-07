import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectContatsState } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContatsState);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <main>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        {isLoading && !error && (
          <p>
            Oops, some error occured &quot;{error}&quot;. Please, try again
            later 🤷‍♂️.
          </p>
        )}
      </main>
    </>
  );
}

export default App;
