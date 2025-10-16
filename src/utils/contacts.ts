interface ContactData {
  name: string;
  email: string;
  message: string;
  company?: string;
  phone?: string;
  timestamp?: string;
}

export async function saveContact(data: ContactData): Promise<string> {
  try {
    // Add timestamp to the data
    const timestamp = new Date().toISOString();
    const contactData = {
      ...data,
      timestamp,
    };

    // Get existing contacts from localStorage
    const existingContacts = localStorage.getItem('contacts');
    const contacts = existingContacts ? JSON.parse(existingContacts) : [];

    // Add new contact to the array
    contacts.push(contactData);

    // Save back to localStorage
    localStorage.setItem('contacts', JSON.stringify(contacts));

    // Return the timestamp as an identifier
    return timestamp;
  } catch (error) {
    console.error('Error saving contact:', error);
    throw new Error('Failed to save contact data');
  }
}

export function getContacts(): ContactData[] {
  try {
    const contacts = localStorage.getItem('contacts');
    return contacts ? JSON.parse(contacts) : [];
  } catch (error) {
    console.error('Error retrieving contacts:', error);
    return [];
  }
}

// Clear all contacts (useful for testing)
export function clearContacts(): void {
  localStorage.removeItem('contacts');
}