import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadeInIndiaComponent } from './made-in-india.component';

describe('MadeInIndiaComponent', () => {
  let component: MadeInIndiaComponent;
  let fixture: ComponentFixture<MadeInIndiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MadeInIndiaComponent]
    });
    fixture = TestBed.createComponent(MadeInIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
