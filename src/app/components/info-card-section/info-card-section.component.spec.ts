import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardSectionComponent } from './info-card-section.component';

describe('InfoCardSectionComponent', () => {
  let component: InfoCardSectionComponent;
  let fixture: ComponentFixture<InfoCardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoCardSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
