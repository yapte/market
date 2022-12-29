import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { Destroy$ } from 'src/app/helpers/destroy';
import { Sort } from '../sort.interface';

@Component({
  selector: 'sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent extends Destroy$ implements OnInit {
  @Input() data: Sort;
  private _currentParams: Record<string, string> = {};
  value: boolean = null;

  constructor(
    protected _activatedRoute: ActivatedRoute,
    protected _router: Router,
  ) {
    super()
  }

  protected initQueryParamsSubscription() {
    this._activatedRoute.queryParams
      .pipe(takeUntil(this._destroy$))
      .subscribe(params => {
        this._currentParams = params as Record<string, string>;
        this._parseQueryParams(params);
      });
  }

  private _setQueryParam(value: string) {
    const queryParams = { ...this._currentParams, sort: value };
    this._router.navigate(['.'], { queryParams, relativeTo: this._activatedRoute })
  }

  private _clearQueryParam() {
    const queryParams = { ...this._currentParams };
    delete queryParams.sort;
    this._router.navigate(['.'], { queryParams, relativeTo: this._activatedRoute })
  }

  private _parseQueryParams(params: Params): void {
    const sortParam = params.sort;
    if (!sortParam) {
      this.value = null;
      return;
    }

    const isAsc = sortParam.charAt(0) !== '-';
    const paramValue = sortParam.substring(isAsc ? 0 : 1);
    if (paramValue === this.data.queryParamValue)
      this.value = isAsc;
    else
      this.value = null;
  }

  ngOnInit(): void {
    this.initQueryParamsSubscription();
  }

  change() {
    if (this.value === null) {
      this._clearQueryParam();
    } else {
      this._setQueryParam(`${this.value ? '' : '-'}${this.data.queryParamValue}`)
    }

  }
}
