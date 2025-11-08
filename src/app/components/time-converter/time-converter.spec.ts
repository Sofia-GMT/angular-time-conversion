import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeConverter } from './time-converter';

describe('TimeConverter', () => {
  let component: TimeConverter;
  let fixture: ComponentFixture<TimeConverter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeConverter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeConverter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
