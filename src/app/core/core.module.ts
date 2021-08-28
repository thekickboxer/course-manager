import { NgModule } from '@angular/core';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        NavBarComponent,
        PageNotFoundComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '**', component: PageNotFoundComponent
            }
        ])
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule { 

}
