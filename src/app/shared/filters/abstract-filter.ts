import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Filter } from "./filter.interface";

@Component({ template: '' })
export abstract class AbstractFilterComponent implements OnInit, OnDestroy {
    abstract data: Filter;
    private _currentParams: Record<string, string> = {};
    protected _destroy$ = new Subject<boolean>();

    constructor(
        protected _activatedRoute: ActivatedRoute,
        protected _router: Router,
    ) { }

    protected initQueryParamsSubscription() {
        this._activatedRoute.queryParams
            .pipe(takeUntil(this._destroy$))
            .subscribe(params => {
                this._currentParams = params as Record<string, string>;
                this.parseQueryParams(params);
            });
    }

    protected abstract parseQueryParams(params: Params): void;

    protected setQueryParam(value: string) {
        const queryParams = { ...this._currentParams, [this.data.queryParamName]: value };
        this._router.navigate(['.'], { queryParams, relativeTo: this._activatedRoute })
    }

    protected clearQueryParam() {
        const queryParams = { ...this._currentParams };
        delete queryParams[this.data.queryParamName];
        this._router.navigate(['.'], { queryParams, relativeTo: this._activatedRoute })
    }

    ngOnInit(): void {
        this.initQueryParamsSubscription();
    }

    ngOnDestroy(): void {
        this._destroy$.next(true);
        this._destroy$.complete
    }
}