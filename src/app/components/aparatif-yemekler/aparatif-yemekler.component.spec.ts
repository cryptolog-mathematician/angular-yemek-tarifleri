import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AparatifYemeklerComponent } from './aparatif-yemekler.component';

describe('AparatifYemeklerComponent', () => {
  let component: AparatifYemeklerComponent;
  let fixture: ComponentFixture<AparatifYemeklerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AparatifYemeklerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AparatifYemeklerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
