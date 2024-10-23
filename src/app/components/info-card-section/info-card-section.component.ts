import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card-section',
  templateUrl: './info-card-section.component.html',
  styleUrl: './info-card-section.component.css',
})
export class InfoCardSectionComponent {
  @Input() imageUrl: string = '';
  @Input() altText: string = '';
  @Input() headingText: string = '';
  @Input() descriptionText: string = '';
  @Input() buttonText: string = '';
}
