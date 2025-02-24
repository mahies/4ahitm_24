import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GAKFriedlComponent } from './GAK-friedl.component';

describe('GAKFriedlComponent', () => {
  let component: GAKFriedlComponent;
  let fixture: ComponentFixture<GAKFriedlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GAKFriedlComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GAKFriedlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
