import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitersViewComponent } from './waiters-view.component';

describe('WaitersViewComponent', () => {
  let component: WaitersViewComponent;
  let fixture: ComponentFixture<WaitersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitersViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
