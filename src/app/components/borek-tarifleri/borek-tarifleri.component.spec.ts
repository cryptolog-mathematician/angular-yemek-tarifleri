import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorekTarifleriComponent } from './borek-tarifleri.component';

describe('BorekTarifleriComponent', () => {
  let component: BorekTarifleriComponent;
  let fixture: ComponentFixture<BorekTarifleriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorekTarifleriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorekTarifleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
