import { Component, OnInit } from '@angular/core';
import { ApiService, ContentBlock } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events-preview',
  imports: [CommonModule],
  templateUrl: './events-preview.component.html',
  styleUrl: './events-preview.component.scss'
})
export class EventsPreviewComponent implements OnInit {
  events: ContentBlock[] = [];
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.api.getBySection('events-preview')
      .subscribe(data => this.events = data);
  }
}
