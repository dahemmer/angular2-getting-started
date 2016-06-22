import { ContactsListComponent } from './contacts-list';
import { ContactsDetailComponent } from './contacts-detail';
import { ContactsCreatorComponent } from './contacts-creator';

export const ContactsRoutes = [
    { path: '', component: ContactsListComponent },
    { path: 'contacts/new', component: ContactsCreatorComponent },
    { path: 'contacts/:id', component: ContactsDetailComponent }
];
