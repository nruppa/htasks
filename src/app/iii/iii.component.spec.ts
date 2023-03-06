import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IiiComponent } from './iii.component';

describe('IiiComponent', () => {
  let component: IiiComponent;
  let fixture: ComponentFixture<IiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IiiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
