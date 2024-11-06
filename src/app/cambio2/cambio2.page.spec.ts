import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cambio2Page } from './cambio2.page';

describe('Cambio2Page', () => {
  let component: Cambio2Page;
  let fixture: ComponentFixture<Cambio2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Cambio2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
