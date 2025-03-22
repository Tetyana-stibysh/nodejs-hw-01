import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const updatedContacts = JSON.stringify([]);
    await writeContacts(updatedContacts);
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
