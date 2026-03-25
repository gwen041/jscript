let contacts = [{
  name: "Maxwell Wright",
  phone: "(0191) 719 6495",
  email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
  name: "Raja Villarreal",
  phone: "0866 398 2895",
  email: "posuere.vulputate@sed.com"
}, {
  name: "Helen Richards",
  phone: "0800 1111",
  email: "libero@convallis.edu"
}];

let isValid = false;

do {
  let choice = prompt('What do you want to do? \nFirst Contact (first) \nLast Contact (last) \nAll Contacts (all) \nAdd Contact (new) \nExit (quit)');

  switch(choice) {
    case 'first':
      displayFirst();
      break;
    case 'last':
      displayLast();
      break;
    case 'all':
      displayAll();
      break;
    case 'new':
      newContact();
      break;
    case 'quit':
      isValid = true;
      break;
    default:
      console.log('Invalid choice!')
  }

} while(!isValid);

function displayFirst() {
  console.log(`FIRST CONTACT:`);
  console.log(contacts[0]);
}

function displayLast() {
  console.log('LAST CONTACT:');
  console.log(contacts[contacts.length -1]);
}

function displayAll() {
  console.log('ALL CONTACTS:')
  for (let contact of contacts) {
    console.log(contact);
  }
}

function newContact() {
  let addName, addPhone, addEmail;

  do {
    addName = prompt('Enter your name');
    addPhone = prompt('Enter your phone number');
    addEmail = prompt('Enter your email address');

    if (addName == null || addPhone == null || addEmail == null) {
      return;
    }
  }
  while(!isNaN(addName) || !addEmail.includes('@') || !/^\d+$/.test(addPhone));

  contacts.push ({
    name: addName,
    phone: addPhone,
    email: addEmail
  });
}