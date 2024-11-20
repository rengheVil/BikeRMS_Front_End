import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrentalRequestComponent } from './mrental-request.component';

describe('MrentalRequestComponent', () => {
  let component: MrentalRequestComponent;
  let fixture: ComponentFixture<MrentalRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MrentalRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrentalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
