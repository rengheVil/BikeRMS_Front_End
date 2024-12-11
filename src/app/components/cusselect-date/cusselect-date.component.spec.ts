import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusselectDateComponent } from './cusselect-date.component';

describe('CusselectDateComponent', () => {
  let component: CusselectDateComponent;
  let fixture: ComponentFixture<CusselectDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusselectDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusselectDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
