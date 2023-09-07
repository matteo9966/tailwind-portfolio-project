import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TextDrawerComponent } from 'src/app/components/text-drawer/text-drawer.component';
import { SlideIn2Directive } from 'src/app/directives/slide-in-2.directive';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TextDrawerComponent,SlideIn2Directive],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives:[]
})
export class FaqComponent {
  questions1 = [
    {
      question: 'What are the operating hours of the zoo?',
      answer:
        'The zoo is open every day of the year except for Christmas Day. Our operating hours are from 9:00 am to 5:00 pm during the summer months (May to August) and from 9:00 am to 4:00 pm during the winter months (September to April).',
    },
    {
      question: 'What is the admission fee for the zoo?',
      answer:
        'Admission fees vary depending on the age of the visitor and the time of the year. Please refer to our website for up-to-date information on admission fees and special offers.',
    },
    {
      question: 'Is there parking available at the zoo?',
      answer:
        'Yes, we offer free parking for our visitors. There are several parking areas located near the zoo entrance.',
    },
  ];

  questions2 = [
    {
      question: 'Can visitors feed the animals?',
      answer:
        'No, visitors are not allowed to feed the animals. Our animals are fed a carefully planned diet to ensure their health and well-being. Feeding them human food can be harmful to their health.',
    },
    {
      question: 'Are pets allowed in the zoo?',
      answer:
        'No, pets are not allowed in the zoo. This is for the safety of both our visitors and our animals. Service animals are permitted, but they must be kept on a leash and under control at all times.',
    },
    {
      question: 'Is the zoo wheelchair accessible?',
      answer:
        'Yes, the zoo is wheelchair accessible. We have ramps and paved walkways throughout the park, and our staff is trained to assist visitors with disabilities.',
    },
  ];
}
