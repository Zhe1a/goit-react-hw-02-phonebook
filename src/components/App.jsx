import { Component } from 'react';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addTodo = options => {
    this.setState(prev => ({ contacts: [...prev.contacts, options] }));
  };
  removeContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };
  onFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  onfilterContacts = () => {
    const { filter, contacts } = this.state;
    if (filter === '') return contacts;
    const onFilterConst = contacts.filter(el => el.name.toLocaleLowerCase() == filter.toLocaleLowerCase());
    return onFilterConst;
  };
  
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addTodo={this.addTodo} />
        <h1>Contacts</h1>
        <Filter filter={this.onFilter} filterContacts={this.onfilterContacts} />
        <ContactList contacts={this.onfilterContacts()} remove={this.removeContact} />
      </>
    );
  }
}

export default App;
