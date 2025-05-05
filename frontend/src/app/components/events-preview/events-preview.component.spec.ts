import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EventsPreviewComponent } from './events-preview.component';

// Mocking the ApiService and ContentBlock for testing
describe('EventsPreviewComponent', () => {
  let component: EventsPreviewComponent;
  let fixture: ComponentFixture<EventsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ EventsPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
