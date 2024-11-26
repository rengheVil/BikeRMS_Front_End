import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CviewRequestComponent } from './cview-request.component';

describe('CviewRequestComponent', () => {
  let component: CviewRequestComponent;
  let fixture: ComponentFixture<CviewRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CviewRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CviewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
