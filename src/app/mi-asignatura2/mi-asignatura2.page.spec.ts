import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiAsignatura2Page } from './mi-asignatura2.page';

describe('MiAsignatura2Page', () => {
  let component: MiAsignatura2Page;
  let fixture: ComponentFixture<MiAsignatura2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MiAsignatura2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
