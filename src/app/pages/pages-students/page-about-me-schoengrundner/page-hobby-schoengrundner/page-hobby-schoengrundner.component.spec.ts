import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHobbySchoengrundnerComponent } from './page-hobby-schoengrundner.component';

describe('PageHobbySchoengrundnerComponent', () => {
  let component: PageHobbySchoengrundnerComponent;
  let fixture: ComponentFixture<PageHobbySchoengrundnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHobbySchoengrundnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHobbySchoengrundnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
