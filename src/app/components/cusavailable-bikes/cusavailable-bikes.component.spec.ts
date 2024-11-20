import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusavailableBikesComponent } from './cusavailable-bikes.component';

describe('CusavailableBikesComponent', () => {
  let component: CusavailableBikesComponent;
  let fixture: ComponentFixture<CusavailableBikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusavailableBikesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusavailableBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
