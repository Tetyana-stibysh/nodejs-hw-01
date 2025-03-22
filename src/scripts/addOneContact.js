import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();
    contacts.push(newContact);
    const updatedContacts = JSON.stringify(contacts);
    await writeContacts(updatedContacts);
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
