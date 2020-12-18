import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteFechaComponent } from './comite-fecha.component';

describe('ComiteFechaComponent', () => {
  let component: ComiteFechaComponent;
  let fixture: ComponentFixture<ComiteFechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComiteFechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
