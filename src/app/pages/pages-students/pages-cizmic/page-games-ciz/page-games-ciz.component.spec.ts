import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGamesCizComponent } from './page-games-ciz.component';

describe('PageGamesCizComponent', () => {
  let component: PageGamesCizComponent;
  let fixture: ComponentFixture<PageGamesCizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageGamesCizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGamesCizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
