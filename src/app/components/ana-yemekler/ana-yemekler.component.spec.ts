import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaYemeklerComponent } from './ana-yemekler.component';

describe('AnaYemeklerComponent', () => {
  let component: AnaYemeklerComponent;
  let fixture: ComponentFixture<AnaYemeklerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaYemeklerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaYemeklerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
