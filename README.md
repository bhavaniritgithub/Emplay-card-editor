# Emplay Card Editor Application

## Overview

This is a simple Angular application built as part of the Full Stack Internship assignment for Emplay Inc. The app displays a list of cards, each containing a title and a description. Users can edit the description of any card through a popup modal. Changes are saved instantly and reflected in the interface without needing a page reload.
## Features
Displays a list of cards loaded from a local JSON file

Allows users to edit the description of each card using a modal dialog

Updates are reflected immediately on the screen

Clean and modern interface using Angular Material

Responsive design that works across devices
## Technologies Used

- Angular 17+
- Angular Material
- TypeScript
- HTML & CSS
- JSON (for dynamic data)

---

## Setup Instructions

### 1. Prerequisites
- **Node.js** and **npm**  
  Download from: https://nodejs.org/

- **Angular CLI**  
  Install using:
  ```bash
  npm install -g @angular/cli
2. ###  Clone the Repository

git clone https://github.com/your-username/emplay-card-editor.git
cd emplay-card-editor



3. ###  Install Dependencies
  npm install

4. ### Run the Application
   ng serve
   http://localhost:4200/

### How the Application Works
The card data is stored in a local JSON file (e.g., assets/cards.json)

The application fetches this data using an Angular service

The component uses *ngFor to dynamically display all the cards

Each card includes an "Edit" button

When the user clicks "Edit", a modal dialog opens with a text area to change the description

Once the user saves changes, the UI updates instantly without reloading the page

