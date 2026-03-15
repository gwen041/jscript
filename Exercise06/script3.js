let contacts = [
  {
    personName: 'Maxwell Wright',
    phone: '(0191) 719 6495',
    email: 'Curabitur.egestas.nunc@nonummyac.co.uk'
  },

  {
    personName: 'Raja Villarreal',
    phone: '0866 398 2895',
    email: 'posuere.vulputate@sed.com'
  },

  {
    personName: 'Helen Richards',
    phone: '0800 1111',
    email: 'libero@convallis.edu'
  }
];

let newContact = {
  personName: 'Maisie Haley',
  phone: '0913 531 3030',
  email: 'risus.Quisque@urna.ca'
}

contacts.push(newContact);
console.log(contacts.length);

let firstContact = contacts[0];
let lastContact = contacts[3];

console.log('First Contact');
console.log(`Name: ${firstContact.personName} / Phone: ${firstContact.phone} / Email: ${firstContact.email}`);

console.log('Last Contact');
console.log(`Name: ${lastContact.personName} / Phone: ${lastContact.phone} / Email: ${lastContact.email}`);