import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorekTarifleriDetayComponent } from './borek-tarifleri-detay.component';

describe('BorekTarifleriDetayComponent', () => {
  let component: BorekTarifleriDetayComponent;
  let fixture: ComponentFixture<BorekTarifleriDetayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorekTarifleriDetayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorekTarifleriDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
