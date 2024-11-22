import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditBikeComponent } from './medit-bike.component';

describe('MeditBikeComponent', () => {
  let component: MeditBikeComponent;
  let fixture: ComponentFixture<MeditBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeditBikeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeditBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
