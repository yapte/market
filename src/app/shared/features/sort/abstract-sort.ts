// import { Component, Input, OnDestroy, OnInit } from "@angular/core";
// import { ActivatedRoute, Params, Router } from "@angular/router";
// import { Subject, takeUntil } from "rxjs";
// import { Sort } from "./sort.interface";

// @Component({ template: '' })
// export abstract class AbstractSortComponent implements OnInit, OnDestroy {
//     @Input() data: Sort;
//     private _currentParams: Record<string, string> = {};
//     protected _destroy$ = new Subject<boolean>();

//     // abstract data: Sort;
//     value: boolean = null;

//     constructor(
//         protected _activatedRoute: ActivatedRoute,
//         protected _router: Router,
//     ) { }

//     protected initQueryParamsSubscription() {
//         this._activatedRoute.queryParams
//             .pipe(takeUntil(this._destroy$))
//             .subscribe(params => {
//                 this._currentParams = params as Record<string, string>;
//                 this.parseQueryParams(params);
//             });
//     }

//     protected abstract parseQueryParams(params: Params): void;

//     protected setQueryParam(value: string) {
//         const queryParams = { ...this._currentParams, sort: value };
//         this._router.navigate(['.'], { queryParams, relativeTo: this._activatedRoute })
//     }

//     protected clearQueryParam() {
//         const queryParams = { ...this._currentParams };
//         delete queryParams.sort;
//         this._router.navigate(['.'], { queryParams, relativeTo: this._activatedRoute })
//     }

//     ngOnInit(): void {
//         this.initQueryParamsSubscription();
//     }

//     ngOnDestroy(): void {
//         this._destroy$.next(true);
//         this._destroy$.complete
//     }
// }