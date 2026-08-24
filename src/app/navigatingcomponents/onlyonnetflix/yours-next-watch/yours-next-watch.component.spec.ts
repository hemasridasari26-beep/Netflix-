import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoursNextWatchComponent } from './yours-next-watch.component';

describe('YoursNextWatchComponent', () => {
  let component: YoursNextWatchComponent;
  let fixture: ComponentFixture<YoursNextWatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoursNextWatchComponent]
    });
    fixture = TestBed.createComponent(YoursNextWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
