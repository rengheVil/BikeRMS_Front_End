import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaboutComponent } from './zabout.component';

describe('ZaboutComponent', () => {
  let component: ZaboutComponent;
  let fixture: ComponentFixture<ZaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZaboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
