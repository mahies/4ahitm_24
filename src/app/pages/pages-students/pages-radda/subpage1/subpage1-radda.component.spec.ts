import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHobbiesPontComponent } from './subpage1-radda.component';

describe('PageSubpage1RADDAComponent', () => {
  let component: Subpage1RADDAComponent;
  let fixture: ComponentFixture<Subpage1RADDAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubPage1RADDAComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Subpage1RADDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
