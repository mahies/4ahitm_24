import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHobbiesHauerComponent } from './page-hobbies-hauer.component';

describe('PageHobbiesHauerComponent', () => {
  let component: PageHobbiesHauerComponent;
  let fixture: ComponentFixture<PageHobbiesHauerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHobbiesHauerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageHobbiesHauerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

