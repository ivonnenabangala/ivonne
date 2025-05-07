import { Component, Inject, Injector } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.scss'
})
export class BottomSheetComponent {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) { }

  selectedImage: string | null = null;

  previewImage(image: string): void {
    this.selectedImage = image;
  }

}
