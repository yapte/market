import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  items: MenuItem[] = [
    {
      label: 'Главная',
      routerLink: ['/'],
    },
    {
      label: 'Закупки',
      items: [
        {
          label: 'Форма создания закупки',
          routerLink: ['/trade-create'],
        },
        {
          label: 'Все закупки',
          routerLink: ['/trade-list'],
        },
        {
          separator: true
        },
        {
          label: 'Мои закупки',
          items: [
            {
              label: 'Я закупил',
              routerLink: ['/'],
            },
            {
              label: 'У меня закупили',
              routerLink: ['/'],
            },
          ]
        },
      ]
    },
    {
      label: 'ППС - один победитель',
      items: [
        {
          label: 'Подача предложения',
          routerLink: ['/pps-send-offers'],
        },
        {
          label: 'Рассмотрение предложения',
          routerLink: ['/pps-choose-offers'],
        },
      ]
    },
    {
      label: 'Предварительные предложения',
      items: [
        {
          label: 'Все предварительные предложения',
          routerLink: ['/'],
        },
        {
          label: 'Мои предварительные предложения',
          routerLink: ['/'],
        },
      ]
    },
    {
      label: 'Сервисы',
      routerLink: ['/'],
    },
    {
      label: 'Договоры',
      routerLink: ['/'],
    },
  ];
}

