import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTravelMetzComponent } from './page-travel-metz.component';

describe('PageTravelMetzComponent', () => {
  let component: PageTravelMetzComponent;
  let fixture: ComponentFixture<PageTravelMetzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTravelMetzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTravelMetzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
