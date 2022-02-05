import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmCarouselComponent } from './xm-carousel.component';

describe('XmCarouselComponent', () => {
  let component: XmCarouselComponent;
  let fixture: ComponentFixture<XmCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XmCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XmCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
