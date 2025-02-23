import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHobbiesPontComponent } from './page-hobbies-pont.component';

describe('PageHobbiesPontComponent', () => {
  let component: PageHobbiesPontComponent;
  let fixture: ComponentFixture<PageHobbiesPontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHobbiesPontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHobbiesPontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
