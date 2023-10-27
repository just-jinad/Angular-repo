import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipiesComponent } from './pipies.component';

describe('PipiesComponent', () => {
  let component: PipiesComponent;
  let fixture: ComponentFixture<PipiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipiesComponent]
    });
    fixture = TestBed.createComponent(PipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
