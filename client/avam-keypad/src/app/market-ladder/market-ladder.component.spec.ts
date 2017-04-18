import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketLadderComponent } from './market-ladder.component';

describe('MarketLadderComponent', () => {
  let component: MarketLadderComponent;
  let fixture: ComponentFixture<MarketLadderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketLadderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketLadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
