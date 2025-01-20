import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLieblingssaengerinGARCIAComponent } from './page-lieblingssaengerin-garcia.component';

describe('PageLieblingssaengerinGARCIAComponent', () => {
  let component: PageLieblingssaengerinGARCIAComponent;
  let fixture: ComponentFixture<PageLieblingssaengerinGARCIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLieblingssaengerinGARCIAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLieblingssaengerinGARCIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
