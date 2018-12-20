import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoiffuresComponent } from './coiffures.component';

describe('CoiffuresComponent', () => {
  let component: CoiffuresComponent;
  let fixture: ComponentFixture<CoiffuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoiffuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoiffuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
