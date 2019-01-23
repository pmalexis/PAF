import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCoiffureComponent } from './ajout-coiffure.component';

describe('AjoutCoiffureComponent', () => {
  let component: AjoutCoiffureComponent;
  let fixture: ComponentFixture<AjoutCoiffureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutCoiffureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCoiffureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
