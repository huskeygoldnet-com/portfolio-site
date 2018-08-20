import {
    trigger,
    animate,
    animateChild,
    transition,
    style,
    query,
    group,
    sequence
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
    transition('* => *', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        query(':enter', style({ transform: 'translateX(100%)' }), { optional: true }),
        sequence([
            query(':leave', animateChild(), { optional: true }),
            group([
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('750ms ease', style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('750ms ease',
                        style({ transform: 'translateX(0%)' })),
                ], { optional: true }),
            ]),
            query(':enter', animateChild(), { optional: true }),
        ])
    ])
]);
