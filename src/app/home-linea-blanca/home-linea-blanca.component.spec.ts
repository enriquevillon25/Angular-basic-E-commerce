import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLineaBlancaComponent } from './home-linea-blanca.component';

describe('HomeLineaBlancaComponent', () => {
  let component: HomeLineaBlancaComponent;
  let fixture: ComponentFixture<HomeLineaBlancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLineaBlancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLineaBlancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
