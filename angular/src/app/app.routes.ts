import { AComponent } from './results/a/a.component';
import { BComponent } from './results/b/b.component';
import { CComponent } from './results/c/c.component';
import { DComponent } from './results/d/d.component';
import { EComponent } from './results/e/e.component';
import { FComponent } from './results/f1/f1.component';
import { GComponent } from './results/g1/g1.component';
import { HComponent } from './results/h/h.component';
import { HomeComponent } from './home/home.component';
import { IComponent } from './results/i/i.component';
import { JComponent } from './results/j/j.component';
import { KComponent } from './results/k/k.component';
import { LComponent } from './results/l/l.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'results/a',
    component: AComponent,
  },
  {
    path: 'results/b',
    component: BComponent,
  },
  {
    path: 'results/c',
    component: CComponent,
  },
  {
    path: 'results/d',
    component: DComponent,
  },
  {
    path: 'results/e',
    component: EComponent,
  },
  {
    path: 'results/f',
    component: FComponent,
  },
  {
    path: 'results/g',
    component: GComponent,
  },
  {
    path: 'results/h',
    component: HComponent,
  },
  {
    path: 'results/i',
    component: IComponent,
  },
  {
    path: 'results/j',
    component: JComponent,
  },
  {
    path: 'results/k',
    component: KComponent,
  },
  {
    path: 'results/l',
    component: LComponent,
  },
];
