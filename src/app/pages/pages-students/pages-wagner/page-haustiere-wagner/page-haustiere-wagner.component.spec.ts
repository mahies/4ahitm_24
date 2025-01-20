import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHaustiereWAGNERComponent } from './page-haustiere-wagner.component';

describe('PageHaustiereWAGNERComponent', () => {
  let component: PageHaustiereWAGNERComponent;
  let fixture: ComponentFixture<PageHaustiereWAGNERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHaustiereWAGNERComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHaustiereWAGNERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
