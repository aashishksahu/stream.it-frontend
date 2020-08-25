import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongContainerComponent } from './song-container.component';

describe('SongContainerComponent', () => {
  let component: SongContainerComponent;
  let fixture: ComponentFixture<SongContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
