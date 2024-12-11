import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapproveCusComponent } from './mapprove-cus.component';

describe('MapproveCusComponent', () => {
  let component: MapproveCusComponent;
  let fixture: ComponentFixture<MapproveCusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapproveCusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapproveCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
