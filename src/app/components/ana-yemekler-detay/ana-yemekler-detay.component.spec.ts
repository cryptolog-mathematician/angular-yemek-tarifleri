import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaYemeklerDetayComponent } from './ana-yemekler-detay.component';

describe('AnaYemeklerDetayComponent', () => {
  let component: AnaYemeklerDetayComponent;
  let fixture: ComponentFixture<AnaYemeklerDetayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaYemeklerDetayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaYemeklerDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
