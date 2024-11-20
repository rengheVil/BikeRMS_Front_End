import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorderHistoryComponent } from './morder-history.component';

describe('MorderHistoryComponent', () => {
  let component: MorderHistoryComponent;
  let fixture: ComponentFixture<MorderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MorderHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
