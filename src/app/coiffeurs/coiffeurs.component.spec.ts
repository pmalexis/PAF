import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoiffeursComponent } from './coiffeurs.component';

describe('CoiffeursComponent', () => {
  let component: CoiffeursComponent;
  let fixture: ComponentFixture<CoiffeursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoiffeursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoiffeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
