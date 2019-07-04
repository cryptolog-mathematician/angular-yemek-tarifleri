import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YemekEkleComponent } from './yemek-ekle.component';

describe('YemekEkleComponent', () => {
  let component: YemekEkleComponent;
  let fixture: ComponentFixture<YemekEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YemekEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YemekEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
