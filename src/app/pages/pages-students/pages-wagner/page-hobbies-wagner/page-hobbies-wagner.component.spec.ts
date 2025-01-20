import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHobbiesWAGNERComponent } from './page-hobbies-wagner.component';

describe('PageHobbiesWAGNERComponent', () => {
  let component: PageHobbiesWAGNERComponent;
  let fixture: ComponentFixture<PageHobbiesWAGNERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHobbiesWAGNERComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHobbiesWAGNERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
