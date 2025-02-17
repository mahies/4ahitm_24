import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHaustiereHauerComponent } from './page-haustiere-hauer.component';

describe('PageHaustiereHauerComponent', () => {
  let component: PageHaustiereHauerComponent;
  let fixture: ComponentFixture<PageHaustiereHauerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHaustiereHauerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageHaustiereHauerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
