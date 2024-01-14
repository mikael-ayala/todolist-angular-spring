import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskUpdateFormComponent } from './task-update-form.component';

describe('TaskUpdateFormComponent', () => {
  let component: TaskUpdateFormComponent;
  let fixture: ComponentFixture<TaskUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskUpdateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
