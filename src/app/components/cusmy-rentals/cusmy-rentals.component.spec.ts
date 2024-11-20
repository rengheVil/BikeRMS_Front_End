import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusmyRentalsComponent } from './cusmy-rentals.component';

describe('CusmyRentalsComponent', () => {
  let component: CusmyRentalsComponent;
  let fixture: ComponentFixture<CusmyRentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusmyRentalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusmyRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
