import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, tap } from 'rxjs';
import { TradeFormFacadeService } from '../../trade-form-facade.service';

@Component({
  selector: 'app-trade-form-invitation-auto-keywords',
  templateUrl: './trade-form-invitation-auto-keywords.component.html',
  styleUrls: ['./trade-form-invitation-auto-keywords.component.scss']
})
export class TradeFormInvitationAutoKeywordsComponent implements OnInit {
  control: FormControl;
  qty$: Observable<number>;

  constructor(private _facade: TradeFormFacadeService) { }

  ngOnInit(): void {
    this.control = this._facade.getField('invitation', 'invitationTags') as FormControl;
    this.qty$ = this.control.valueChanges
      .pipe(
        map((items: any[]) => 10 - items.length),
      );
  }
}
