import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReisenMajzelComponent } from './page-reisen-majzel.component';

describe('PageReiseMajzelComponent', () => {
  let component: PageReisenMajzelComponent;
  let fixture: ComponentFixture<PageReisenMajzelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageReisenMajzelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageReisenMajzelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
