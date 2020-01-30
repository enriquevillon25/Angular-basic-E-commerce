import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRopaComponent } from './home-ropa.component';

describe('HomeRopaComponent', () => {
  let component: HomeRopaComponent;
  let fixture: ComponentFixture<HomeRopaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
