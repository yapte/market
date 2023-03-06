import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { tap } from 'rxjs';
import { titleAnimation } from 'src/app/animations/title.animation';
import { PpsSendOffersFacadeService } from '../../services/pps-send-offers-facade.service';

@Component({
  selector: 'app-pps-send-offers-create-modal',
  templateUrl: './pps-send-offers-create-modal.component.html',
  styleUrls: ['./pps-send-offers-create-modal.component.scss'],
  animations: [titleAnimation],
})
export class PpsSendOffersCreateModalComponent {
  private _activeFormIndex: number = 0;

  forms: FormGroup[] = this._facade.forms;

  get activeFormIndex(): number {
    return this._activeFormIndex;
  }

  constructor(
    private _facade: PpsSendOffersFacadeService,
    private _modalRef: DynamicDialogRef,
  ) { }

  prev() {
    this._activeFormIndex--;
  }

  submit() {
    this._facade.publishOffer(this._activeFormIndex)
      .pipe(tap(() => {
        if (this._activeFormIndex === this.forms.length - 1) {
          this._facade.fetchOffers();
          this._modalRef.close(true);
          return;
        }
        this._activeFormIndex++;
      }))
      .subscribe();
  }
}
