import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AparatifYemeklerDetayComponent } from './aparatif-yemekler-detay.component';

describe('AparatifYemeklerDetayComponent', () => {
  let component: AparatifYemeklerDetayComponent;
  let fixture: ComponentFixture<AparatifYemeklerDetayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AparatifYemeklerDetayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AparatifYemeklerDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
