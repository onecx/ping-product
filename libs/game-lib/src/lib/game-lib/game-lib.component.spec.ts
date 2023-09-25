import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameLibComponent } from './game-lib.component';

describe('GameLibComponent', () => {
  let component: GameLibComponent;
  let fixture: ComponentFixture<GameLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
