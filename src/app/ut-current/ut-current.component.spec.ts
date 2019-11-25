import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtCurrentComponent } from './ut-current.component';

describe('UtCurrentComponent', () => {
  let component: UtCurrentComponent;
  let fixture: ComponentFixture<UtCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
