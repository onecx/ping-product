import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-test-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-lib.component.html',
  styleUrls: ['./test-lib.component.css'],
})
export class TestLibComponent {}
