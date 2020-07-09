import { HomeComponent } from './home/home.component'
import { GifComponent } from './synths/gif/gif.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    { 
        path: 'page/:page',
        component: HomeComponent
    },
    { 
        path: 'gifsynth',
        component: GifComponent
    },
    { 
        path: '**',
        component: HomeComponent
    },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}