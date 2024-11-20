import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusorderHistoryComponent } from './cusorder-history.component';

describe('CusorderHistoryComponent', () => {
  let component: CusorderHistoryComponent;
  let fixture: ComponentFixture<CusorderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusorderHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusorderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
