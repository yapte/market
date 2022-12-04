import { trigger, state, transition, style, animate } from '@angular/animations';

export const modalAnimation =
    trigger('modalAnimation', [
        transition(':enter', [
            style({
                transform: 'translateY(30px)'
            }),
            animate('.3s ease-out',
                style({
                    transform: '*'
                }))
        ]),
        transition(':leave', [
            style({
                opacity: '*'
            }),
            animate('0.5s ease-in',
                style({
                    opacity: '0'
                }))
        ])
    ]);
