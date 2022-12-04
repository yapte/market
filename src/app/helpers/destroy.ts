import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Component({ template: '' })
export abstract class Destroy$ implements OnDestroy {
    protected _destroy$ = new Subject<boolean>();

    ngOnDestroy(): void {
        this._destroy$.next(true);
        this._destroy$.complete();
    }
}