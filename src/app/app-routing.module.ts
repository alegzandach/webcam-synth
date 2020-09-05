import { BioComponent } from './pages/bio/bio.component'
import { ResumeComponent } from './pages/resume/resume.component'
import { ProjectsComponent } from './pages/projects/projects.component'
import { ContactComponent } from './pages/contact/contact.component'
import { HomeComponent } from './home/home.component'
import { GifContainer } from './pages/projects/gif-container/gif-container.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
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