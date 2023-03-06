import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalProjectComponent } from './internal-project.component';

describe('InternalProjectComponent', () => {
  let component: InternalProjectComponent;
  let fixture: ComponentFixture<InternalProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
