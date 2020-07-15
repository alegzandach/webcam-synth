import { BioComponent } from './pages/bio/bio.component'
import { ResumeComponent } from './pages/resume/resume.component'
import { ProjectsComponent } from './pages/projects/projects.component'
import { ContactComponent } from './pages/contact/contact.component'
import { GifContainer } from './pages/projects/gif-container/gif-container.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    { 
        path: 'bio',
        component: BioComponent
    },
    { 
        path: 'resume',
        component: ResumeComponent
    },
    { 
        path: 'projects',
        component: ProjectsComponent
    },
    {  
        path: 'projects/gifsynth',
        component: GifContainer
    },
    { 
        path: 'contact',
        component: ContactComponent
    },
    { 
        path: '**',
        component: BioComponent
    },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}