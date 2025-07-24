import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  template: `
  <h2 mat-dialog-title>Edit Description</h2>
  <mat-dialog-content>
    <div *ngIf="errorMessage" class="error-message">{{ errorMessage }}</div>
    <mat-form-field appearance="fill" style="width:100%;">
      <mat-label>Description</mat-label>
      <textarea matInput [(ngModel)]="updatedDescription" rows="4" 
                data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false" 
                spellcheck="false"></textarea>
    </mat-form-field>
  </mat-dialog-content>
  <mat-dialog-actions align="end">
    <button mat-button (click)="onCancel()">Cancel</button>
    <button mat-button color="primary" (click)="onSave()">Save</button>
  </mat-dialog-actions>
  `,
  styles: [`
    .error-message {
      color: red;
      font-size: 13px;
      margin-bottom: 10px;
    }
  `]
})
export class EditDialogComponent {
  updatedDescription: string;
  errorMessage: string = '';

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number; title: string; description: string }
  ) {
    this.updatedDescription = data.description;
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSave() {
    if (!this.updatedDescription.trim()) {
      this.errorMessage = 'Description cannot be empty!';
      return;
    }
    this.dialogRef.close({ ...this.data, description: this.updatedDescription });
  }
}
