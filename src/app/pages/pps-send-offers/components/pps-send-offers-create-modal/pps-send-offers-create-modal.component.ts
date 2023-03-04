import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { titleAnimation } from 'src/app/animations/title.animation';
import { PpsSendOffersFacadeService } from '../../services/pps-send-offers.service';

@Component({
  selector: 'app-pps-send-offers-create-modal',
  templateUrl: './pps-send-offers-create-modal.component.html',
  styleUrls: ['./pps-send-offers-create-modal.component.scss'],
  animations: [titleAnimation],
})
export class PpsSendOffersCreateModalComponent implements OnInit {
  forms: FormGroup[];
  activeFormIndex$: Observable<number>;

  constructor(
    private _facade: PpsSendOffersFacadeService,
  ) { }

  ngOnInit(): void {
    this.forms = this._facade.forms;
    this.activeFormIndex$ = this._facade.activeFormIndex$;
  }

  prev() {
    this._facade.goToPreviousForm();
  }

  submit() {
    this._facade.publishOffer();
  }
}
