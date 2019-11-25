import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtCompletedComponent } from './mt-completed.component';

describe('MtCompletedComponent', () => {
  let component: MtCompletedComponent;
  let fixture: ComponentFixture<MtCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
