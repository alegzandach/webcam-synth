import { HomeComponent } from './home/home.component'
import { GifContainer } from './pages/projects/gif-container/gif-container.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    {
        path: 'projects/gifsynth',
        component: GifContainer
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