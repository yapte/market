import { trigger, state, transition, style, animate } from '@angular/animations';

export const pageAnimation =
    trigger('pageAnimation', [
        transition(':enter', [
            style({
                transform: 'translateY(30px)'
            }),
            animate('.3s ease-out',
                style({
                    transform: '*'
                }))
        ]),
    ]);
