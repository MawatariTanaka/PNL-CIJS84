let contacts = [];

const addContactForm = document.getElementById("add-contact-form");
const searchContactForm = document.getElementById("search-contact-form");
const clearDuplicateBtn = document.getElementById("clear-duplicate-btn");
const contactList = document.getElementById("contact-list");

addContactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = addContactForm.name.value;
  const phone = addContactForm.phone.value;
  contacts.push({ name, phone });
  contacts.sort((a, b) => a.name.localeCompare(b.name));
  displayContacts();
  addContactForm.reset();
});

searchContactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const search = searchContactForm.search.value.toLowerCase();
  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(search) ||
      contact.phone.includes(search)
    );
  });
  displayContacts(filteredContacts);
});

function displayContacts(contactsToDisplay = contacts) {
  contactList.innerHTML = "";
  contactsToDisplay.forEach((contact) => {
    const li = document.createElement("li");
    li.innerHTML = `<div>${contact.name}</div><div>${contact.phone}</div>`;
    contactList.appendChild(li);
  });
}

clearDuplicateBtn.addEventListener("click", () => {
  const phoneNumbers = {};
  const uniqueContacts = [];

  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    if (!phoneNumbers[contact.phone]) {
      phoneNumbers[contact.phone] = true;
      uniqueContacts.push(contact);
    }
  }

  contacts = uniqueContacts;
  displayContacts();
});

displayContacts();
