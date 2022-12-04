import { trigger, transition, style, animate } from '@angular/animations';

export const titleAnimation =
    trigger('titleAnimation', [
        transition(':enter', [
            style({
                transform: 'translateX(5px)',
                opacity: 0,
            }),
            animate('.3s ease-out',
                style({
                    transform: '*',
                    opacity: '*',
                }))
        ]),
        // transition(':leave', [
        //     style({ opacity: '*' }),
        //     animate('0.5s ease-in',
        //         style({ opa: 'translateX(-100%)' }))
        // ])
    ]);
