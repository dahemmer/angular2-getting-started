import { ContactsListComponent } from './contacts-list';
import { ContactsDetailComponent } from './contacts-detail';

export const ContactsRoutes = [
    { path: '', component: ContactsListComponent },
    { path: 'contacts/:id', component: ContactsDetailComponent }
];
