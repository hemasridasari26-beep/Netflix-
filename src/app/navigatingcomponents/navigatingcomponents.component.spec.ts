import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatingcomponentsComponent } from './navigatingcomponents.component';

describe('NavigatingcomponentsComponent', () => {
  let component: NavigatingcomponentsComponent;
  let fixture: ComponentFixture<NavigatingcomponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigatingcomponentsComponent]
    });
    fixture = TestBed.createComponent(NavigatingcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
