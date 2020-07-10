import { BioComponent } from './pages/bio/bio.component'
import { ResumeComponent } from './pages/resume/resume.component'
import { ProjectsComponent } from './pages/projects/projects.component'
import { ContactComponent } from './pages/contact/contact.component'
import { GifComponent } from './synths/gif/gif.component'
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
        component: GifComponent
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