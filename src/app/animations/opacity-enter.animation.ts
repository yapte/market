import { trigger, transition, style, animate } from '@angular/animations';

export const opacityEnterAnimation =
    trigger('opacityEnterAnimation', [
        transition(':enter', [
            style({
                opacity: 0,
            }),
            animate('.2s ease-out',
                style({
                    opacity: '*',
                })
            ),
        ]),
        transition(':leave', [
            style({
                opacity: '*',
            }),
            animate('.2s ease-out',
                style({
                    opacity: 0,
                })
            ),
        ]),
    ]);
