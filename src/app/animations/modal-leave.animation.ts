import { trigger, state, transition, style, animate } from '@angular/animations';

export const modalLeaveAnimation =
    trigger('modalLeaveAnimation', [
        transition(':leave', [
            style({
                opacity: '*',
                transform: '*'
            }),
            animate('0.5s ease-in',
                style({
                    opacity: '0',
                    transform: 'translateY(30px)'
                })
            ),
        ])
    ]);
