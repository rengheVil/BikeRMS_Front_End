import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusmyrentalRequestsComponent } from './cusmyrental-requests.component';

describe('CusmyrentalRequestsComponent', () => {
  let component: CusmyrentalRequestsComponent;
  let fixture: ComponentFixture<CusmyrentalRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusmyrentalRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusmyrentalRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
