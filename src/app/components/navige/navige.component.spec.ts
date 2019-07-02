import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigeComponent } from './navige.component';

describe('NavigeComponent', () => {
  let component: NavigeComponent;
  let fixture: ComponentFixture<NavigeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
