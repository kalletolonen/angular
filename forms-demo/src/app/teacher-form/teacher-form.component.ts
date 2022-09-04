import { Component } from '@angular/core';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})

export class TeacherFormComponent {

  subjects = ['English', 'Math', 'Art']
  model = new Teacher(11, 'Eric Forester', this.subjects[2], '4.5')

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newTeacher() {
    this.model = new Teacher(42, '', '', '')
  }
}


