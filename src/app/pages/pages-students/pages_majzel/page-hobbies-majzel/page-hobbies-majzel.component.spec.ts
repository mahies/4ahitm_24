import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHobbiesMajzelComponent } from './page-hobbies-majzel.component';

describe('PageHobbiesMajzelComponent', () => {
  let component: PageHobbiesMajzelComponent;
  let fixture: ComponentFixture<PageHobbiesMajzelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHobbiesMajzelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHobbiesMajzelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
