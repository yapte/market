import { trigger, transition, style, animate } from '@angular/animations';

export const collapseAnimation =
    trigger('collapseAnimation', [
        transition(':enter', [
            style({
                height: 0,
                opacity: 0
            }),
            animate('.3s ease-out',
                style({
                    height: '*',
                    opacity: '*'
                }))
        ]),
        transition(':leave', [
            style({
                height: '*',
                opacity: '*'
            }),
            animate('0.3s ease-in',
                style({
                    height: 0,
                    opacity: 0
                }))
        ])
    ]);
