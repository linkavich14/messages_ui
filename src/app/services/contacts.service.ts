import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {
  constructor() {}

  CONTACTS: Contact[] = [
    {
      id: 1,
      surname: 'TestSurname1',
      name: 'TestName1',
      party: 'TestParty1',
      email: 'test1@test.com',
      selected: false
    },
    {
      id: 2,
      surname: 'TestSurname2',
      name: 'TestName2',
      party: 'TestParty2',
      email: 'test2@test.com',
      selected: false
    },
    {
      id: 3,
      surname: 'TestSurname3',
      name: 'TestName3',
      party: 'TestParty3',
      email: 'test3@test.com',
      selected: false
    },
    {
      id: 4,
      surname: 'TestSurname4',
      name: 'TestName4',
      party: 'TestParty4',
      email: 'test4@test.com',
      selected: false
    },
    {
      id: 5,
      surname: 'TestSurname4',
      name: 'TestName4',
      party: 'TestParty4',
      email: 'test5@test.com',
      selected: false
    },
    {
      id: 6,
      surname: 'TestSurname4',
      name: 'TestName4',
      party: 'TestParty4',
      email: 'test6@test.com',
      selected: false
    },
    {
      id: 7,
      surname: 'TestSurname4',
      name: 'TestName4',
      party: 'TestParty4',
      email: 'test7@test.com',
      selected: false
    }
  ];

  getAllContacts() {
    return this.CONTACTS;
  }

}
