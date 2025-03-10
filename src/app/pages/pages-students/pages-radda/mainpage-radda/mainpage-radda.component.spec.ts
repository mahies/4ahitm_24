import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeRADDAComponent } from './mainpage-radda.component';

describe('PageAboutMeRADDAComponent', () => {
  let component: PageAboutMeRADDAComponent;
  let fixture: ComponentFixture<PageAboutMeRADDAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeRADDAComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeRADDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
