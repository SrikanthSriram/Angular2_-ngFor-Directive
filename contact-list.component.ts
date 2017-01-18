import {Component} from 'angular2/core';
import {ContactComponent} from './contact.component';

@Component({
    selector: "contact-list",
    template: `
        <ul style="list-style-type:lower-greek;">
    <li  
    *ngFor="#contact of contacts"
    (click)="onSelect(contact)" 
    [class.click]="showDetails === true">
    {{contact.firstName}} {{contact.lastName}}
    </li>
    </ul>
    <contact [contact]= "selectedContact"><contact>
    `
    directives: [ContactComponent]
})

export class ContactListComponent {

    public contacts = [
        { firstName: "Srikanth", lastName: "Sriram", phone: "925-361-2117", email: "srikanth@gmail.com" },
        { firstName: "Vijay", lastName: "Sriram", phone: "925-361-2221", email: "vijay@gmail.com" },
        { firstName: "Sainath", lastName: "Sriram", phone: "551-208-5826", email: "sainath@gmail.com" },
        { firstName: "Niharika", lastName: "Sriram", phone: "925-225-8881", email: "niharika@gmail.com" },
        { firstName: "Aashritha", lastName: "Sriram", phone: "551-925-3641", email: "aashritha@gmail.com" }
    ];

    public selectedContact = {};

    onSelect(contact) {
        this.selectedContact = contact;
    }
}
