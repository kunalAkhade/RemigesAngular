import { Assignment24Component } from './assignments/assignment24/assignment24.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WikiComponent } from './wiki/wiki.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Assignment1Component } from './assignments/assignment1/assignment1.component';
import { Assignment2Component } from './assignments/assignment2/assignment2.component';
import { Assignment3Component } from './assignments/assignment3/assignment3.component';
import { Assignment4Component } from './assignments/assignment4/assignment4.component';
import { Assignment5Component } from './assignments/assignment5/assignment5.component';
import { Assignment10Component } from './assignments/assignment10/assignment10.component';
import { Assignment11Component } from './assignments/assignment11/assignment11.component';
import { Assignment12Component } from './assignments/assignment12/assignment12.component';
import { Assignment13Component } from './assignments/assignment13/assignment13.component';
import { Assignment14Component } from './assignments/assignment14/assignment14.component';
import { Assignment15Component } from './assignments/assignment15/assignment15.component';
import { Assignment16Component } from './assignments/assignment16/assignment16.component';
import { Assignment6Component } from './assignments/assignment6/assignment6.component';
import { Assignment7Component } from './assignments/assignment7/assignment7.component';
import { Assignment8Component } from './assignments/assignment8/assignment8.component';
import { Assignment9Component } from './assignments/assignment9/assignment9.component';
import { Assignment17Component } from './assignments/assignment17/assignment17.component';
import { Assignment18Component } from './assignments/assignment18/assignment18.component';
import { Assignment19Component } from './assignments/assignment19/assignment19.component';
import { Assignment20Component } from './assignments/assignment20/assignment20.component';
import { Assignment21Component } from './assignments/assignment21/assignment21.component';
import { Assignment22Component } from './assignments/assignment22/assignment22.component';
import { Assignment23Component } from './assignments/assignment23/assignment23.component';
import { CardsComponent } from './components/cards/cards.component';
import { ListComponent } from './components/list/list.component';
import { MapComponent } from './components/map/map.component';
import { DetailsComponent } from './components/details/details.component';
import { CustomersComponent } from './components/customers/customers.component';

export const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'Form',
    component: FormComponent,
  },
  {
    path: 'first',
    component: FirstComponent,
  },
  {
    path: 'second/:id',
    component: SecondComponent,
  },
  {
    path: 'wiki',
    component: WikiComponent,
  },
  {
    path: 'sidebar',
    component: SidebarComponent,
  },
  {
    path: 'assign1',
    component: Assignment1Component,
  },
  {
    path: 'assign2',
    component: Assignment2Component,
  },
  {
    path: 'assign3',
    component: Assignment3Component,
  },
  {
    path: 'assign4',
    component: Assignment4Component,
  },
  {
    path: 'assign5',
    component: Assignment5Component,
  },
  {
    path: 'assign6',
    component: Assignment6Component,
  },
  {
    path: 'assign7',
    component: Assignment7Component,
  },
  {
    path: 'assign8',
    component: Assignment8Component,
  },
  {
    path: 'assign9',
    component: Assignment9Component,
  },
  {
    path: 'assign10',

    component: Assignment10Component,
  },
  {
    path: 'assign11',
    component: Assignment11Component,
  },
  {
    path: 'assign12',
    component: Assignment12Component,
  },
  {
    path: 'assign13',
    component: Assignment13Component,
  },
  {
    path: 'assign14',
    component: Assignment14Component,
  },
  {
    path: 'assign15',
    component: Assignment15Component,
  },
  {
    path: 'assign16',
    component: Assignment16Component,
  },
  {
    path: 'assign17',
    component: Assignment17Component,
  },
  {
    path: 'assign18',
    component: Assignment18Component,
  },
  {
    path: 'assign19',
    component: Assignment19Component,
  },
  {
    path: 'assign20',
    component: Assignment20Component,
  },
  {
    path: 'assign21',
    component: Assignment21Component,
  },
  {
    path: 'assign22',
    component: Assignment22Component,
  },
  {
    path: 'assign23',
    component: Assignment23Component,
  },
  {
    path:'assign24',
    component: Assignment24Component,
    children: [
      {
        path: 'Customers',
        component: CustomersComponent,
        children: [
          {
            path: 'cards',
            component: CardsComponent
          },
          {
            path: 'list',
            component: ListComponent
          },
          {
            path: 'map',
            component: MapComponent
          }
        ],

      },
      {
        path:'details',
        component: DetailsComponent
      }

    ]

  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
