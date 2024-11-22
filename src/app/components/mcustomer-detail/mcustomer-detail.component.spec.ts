import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McustomerDetailComponent } from './mcustomer-detail.component';

describe('McustomerDetailComponent', () => {
  let component: McustomerDetailComponent;
  let fixture: ComponentFixture<McustomerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [McustomerDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
