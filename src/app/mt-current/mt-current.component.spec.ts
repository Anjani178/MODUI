import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtCurrentComponent } from './mt-current.component';

describe('MtCurrentComponent', () => {
  let component: MtCurrentComponent;
  let fixture: ComponentFixture<MtCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
