import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SresultsComponent } from './sresults.component';

describe('SresultsComponent', () => {
  let component: SresultsComponent;
  let fixture: ComponentFixture<SresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
