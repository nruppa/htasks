import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Save2draftComponent } from './save2draft.component';

describe('Save2draftComponent', () => {
  let component: Save2draftComponent;
  let fixture: ComponentFixture<Save2draftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Save2draftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Save2draftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
