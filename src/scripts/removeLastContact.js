import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      return;
    }
    const newContacts = contacts.slice(0, contacts.length - 1);
    const updatedContacts = JSON.stringify(newContacts);
    await writeContacts(updatedContacts);
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
