import { Directive } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { CITIES } from '../components/trade-form/constants/cities.const';

@Directive({
  selector: 'p-autoComplete[appQwerty]'
})
export class QwertyDirective {

  constructor(private _el: AutoComplete) {
    // this._el.suggestions = SUGGESTIONS;
    this._el.search = (event: any, query: string) => {
      if (query === undefined || query === null) {
        return;
      }
      this._el.loading = true;
      this._el.suggestions = CITIES.filter(c => c.value.toLowerCase().includes(query.toLowerCase().trim()))
      this._el.cd.detectChanges();
    }
  }
}
