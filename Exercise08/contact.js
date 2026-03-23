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

let pickContact = Number(prompt('Pick a number to display a contact', 0));

function displayContact() {
  let index = pickContact-1;

  if(index >= contacts.length || index < 0) {
    alert('Contact cannot be found');
  }
  else {
    console.log(contacts[pickContact-1]);
  }
}

displayContact();


let addContact = confirm('Would you like to add a new contact?');
let addName, addPhone, addEmail;

if (addContact) {
  while(!addName) {
    addName = prompt('Enter a name');

    if(!addName) {
      alert('You are required to enter a NAME to add a new contact!');
    }

  }
  while(!addPhone) {
    addPhone = prompt('Enter a phone number');

    if(!addPhone) {
      alert('You are required to enter a PHONE NUMBER to add a new contact!');
    }
  }
  while(!addEmail) {
    addEmail = prompt('Enter email address');

    if(!addEmail) {
      alert('You are required to enter an EMAIL ADDRESS to add a new contact!');
    }
  }

  contacts.push(
    {
      name: addName,
      phone: addPhone,
      email: addEmail
    }
  )
  console.log('New contact has been added!');
  console.log(contacts[contacts.length-1]);
}