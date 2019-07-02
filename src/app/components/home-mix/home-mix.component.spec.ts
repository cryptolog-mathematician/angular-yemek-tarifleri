import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMixComponent } from './home-mix.component';

describe('HomeMixComponent', () => {
  let component: HomeMixComponent;
  let fixture: ComponentFixture<HomeMixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
