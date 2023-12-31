import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

export interface HallNames {
  name: string;
  area: string;
}

interface Event {
  eventKind: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    hallName: ''
  });


  hallListSearchControl = new FormControl();
  options: HallNames[] = [
    { name: 'נסיה', area: 'מרכז' }, { name: 'קאלה', area: 'צפון' },
    { name: 'בית וגן', area: 'מרכז' }, { name: 'אולמי בון בון', area: 'צפון' },
    { name: 'אריא', area: 'מרכז' }, { name: 'אלה', area: 'דרום' },
    { name: 'טאו', area: 'צפון' }, { name: 'קאי', area: 'דרום' }];
  filteredOptions: Observable<HallNames[]> | undefined;

  events: Event[] = [
    { eventKind: 'חתונה' },
    { eventKind: 'בר/בת מצווה' },
    { eventKind: 'ברית/ה' },
    { eventKind: 'אירוע חברה' },
    { eventKind: 'חינה' },
    { eventKind: 'יום הולדת' },
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.filteredOptions = this.hallListSearchControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );
  }
  displayFn(hall: HallNames): string {
    return hall && hall.name ? hall.name : '';
  }

  private _filter(name: string): HallNames[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  onSubmit(): void {
    // Process checkout data here
    console.log("onSubmit clicked..", this.checkoutForm);
  }

}
