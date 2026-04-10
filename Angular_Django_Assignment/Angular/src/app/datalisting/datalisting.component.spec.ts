import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalistingComponent } from './datalisting.component';

describe('DatalistingComponent', () => {
  let component: DatalistingComponent;
  let fixture: ComponentFixture<DatalistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatalistingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatalistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
