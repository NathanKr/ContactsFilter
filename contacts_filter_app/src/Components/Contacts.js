import React from 'react';
import ContactsShow from './ContactsShow';
import ContactsLoad from './ContactsLoad';
import ContactsFilter from './ContactsFilter';

export default function Contacts(){
    return <div>
        <ContactsLoad/>
        <ContactsFilter/>
        <ContactsShow/>
    </div>;
}