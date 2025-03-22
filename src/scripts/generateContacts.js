import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }
    const updatedContacts = JSON.stringify(contacts);
    await writeContacts(updatedContacts);
  } catch (error) {
    console.error(error);
  }
};

generateContacts(1);
