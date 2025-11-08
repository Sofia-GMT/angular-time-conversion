import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLocations } from './delete-locations';

describe('DeleteLocations', () => {
  let component: DeleteLocations;
  let fixture: ComponentFixture<DeleteLocations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteLocations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteLocations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
