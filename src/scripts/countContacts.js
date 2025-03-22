import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      return 0;
    }
    const count = contacts.reduce((acc, item) => acc + 1, 0);
    return count;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());
