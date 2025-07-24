import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

interface Card {
  id: number;
  title: string;
  description: string;
  selected: boolean;
  editing?: boolean;
}

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, MatCardModule],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cards: Card[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    const saved = localStorage.getItem('cards');
    this.cards = saved ? JSON.parse(saved) : [
      { id: 1, title: 'Card 1', description: 'Description for card 1', selected: false },
      { id: 2, title: 'Card 2', description: 'Description for card 2', selected: false },
      { id: 3, title: 'Card 3', description: 'Description for card 3', selected: false }
    ];
  }

  saveToLocalStorage() {
    localStorage.setItem('cards', JSON.stringify(this.cards));
  }

  addCard() {
    const newId = this.cards.length > 0 ? Math.max(...this.cards.map(c => c.id)) + 1 : 1;
    const newCard: Card = {
      id: newId,
      title: `Card ${newId}`,
      description: `Description for card ${newId}`,
      selected: false
    };
    this.cards.push(newCard);
    this.saveToLocalStorage();
  }

  deleteSelectedCards() {
    this.cards = this.cards.filter(card => !card.selected);
    this.saveToLocalStorage();
  }

  hasSelectedCards(): boolean {
    return this.cards.some(card => card.selected);
  }

  editCard(card: Card) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '400px',
      data: { ...card }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.cards.findIndex(c => c.id === result.id);
        if (index !== -1) {
          this.cards[index].description = result.description;
          this.saveToLocalStorage();
        }
      }
    });
  }

  saveCard(card: Card) {
    if (!card.description.trim()) {
      alert('Description cannot be empty!');
      return;
    }
    card.editing = false;
    this.saveToLocalStorage();
  }

  cancelEdit(card: Card) {
    card.editing = false;
  }
}
