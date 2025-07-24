
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({ providedIn: 'root' })
export class CardService {
  private cards$ = new BehaviorSubject<Card[]>([]);

  constructor(private http: HttpClient) {
    this.loadCards();
  }

  loadCards() {
    this.http.get<Card[]>('assets/cards.json').subscribe(data => {
      this.cards$.next(data);
    });
  }

  getCards(): Observable<Card[]> {
    return this.cards$.asObservable();
  }

  updateCard(updatedCard: Card) {
    const current = this.cards$.getValue();
    const index = current.findIndex(c => c.id === updatedCard.id);
    if (index !== -1) {
      current[index] = updatedCard;
      this.cards$.next([...current]);
    }
  }
}
