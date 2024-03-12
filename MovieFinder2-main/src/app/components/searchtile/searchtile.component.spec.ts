import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtileComponent } from './searchtile.component';

describe('SearchtileComponent', () => {
  let component: SearchtileComponent;
  let fixture: ComponentFixture<SearchtileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchtileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchtileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
