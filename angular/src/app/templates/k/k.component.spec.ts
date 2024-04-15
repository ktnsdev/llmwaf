import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KComponent } from './k.component';

describe('KComponent', () => {
  let component: KComponent;
  let fixture: ComponentFixture<KComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
