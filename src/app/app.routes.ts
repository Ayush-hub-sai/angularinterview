import { Routes } from '@angular/router';
import { CrudWithLocalstorageComponent } from './pages/crud/crud-with-localstorage/crud-with-localstorage.component';
import { CrudApiComponent } from './pages/crud/crud-api/crud-api.component';
import { CrudJsonComponent } from './pages/crud/crud-json/crud-json.component';

export const routes: Routes = [
    { path: "crud-with-local", component: CrudWithLocalstorageComponent },
    { path: "crud-api", component: CrudApiComponent },
    { path: "crud-json", component: CrudJsonComponent }
];
