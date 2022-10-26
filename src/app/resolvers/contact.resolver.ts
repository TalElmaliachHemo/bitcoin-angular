import { ContactService } from './../services/contact.service';
import { inject, Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({
    providedIn: 'root'
})
export class ContactResolver implements Resolve<Observable<void | Contact>> {
    contactService = inject(ContactService)

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id']
        // return this.contactService.getById(id).pipe(delay(1000))
        return this.contactService.getContactById(id)
    }
}
