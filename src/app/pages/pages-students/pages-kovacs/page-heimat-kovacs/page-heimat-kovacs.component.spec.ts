import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeimatKovacsComponent } from './page-heimat-kovacs.component';

describe('PageHeimatKovacsComponent', () => {
  let component: PageHeimatKovacsComponent;
  let fixture: ComponentFixture<PageHeimatKovacsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHeimatKovacsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHeimatKovacsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
