import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './components/shared/card/card.component';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './components/tasks/task/task.component';
import { NewTaskComponent } from './components/tasks/new-task/new-task.component';
import { SharedModule } from './components/shared/shared.module';
import { TasksModule } from './components/tasks/tasks.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
  ], // in declaration we only put components that are NOT standalone
  bootstrap: [AppComponent], // bootstrap tells the angular about the first/root component or entry point
  imports: [BrowserModule, SharedModule, TasksModule], // imports can be used for the standalone and non-standalone components
})
export class AppModule {}
