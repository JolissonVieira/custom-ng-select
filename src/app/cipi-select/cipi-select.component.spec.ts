import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CipiSelectComponent } from './cipi-select.component';

describe('CipiSelectComponent', () => {
  let component: CipiSelectComponent;
  let fixture: ComponentFixture<CipiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CipiSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CipiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
