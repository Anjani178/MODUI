import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtCompletedComponent } from './ut-completed.component';

describe('UtCompletedComponent', () => {
  let component: UtCompletedComponent;
  let fixture: ComponentFixture<UtCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
