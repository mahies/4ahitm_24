import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieblingsessenComponent } from './lieblingsessen.component';

describe('LieblingsessenComponent', () => {
  let component: LieblingsessenComponent;
  let fixture: ComponentFixture<LieblingsessenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LieblingsessenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LieblingsessenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
