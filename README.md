# BlogApp API

## Opis
BlogApp to API umożliwiające zarządzanie wpisami na blogu. Obsługuje funkcje CRUD (tworzenie, odczyt, edycja, usuwanie), komentarze, oceny oraz filtrowanie i sortowanie blogów.

## Funkcjonalności
- Tworzenie, edycja, usuwanie i pobieranie wpisów na blogu.
- Filtrowanie po autorze, tytule i kategorii.
- Sortowanie wyników według daty utworzenia lub tytułu.
- Paginacja wyników.
- Możliwość dodawania komentarzy do wpisów.
- System ocen blogów z obliczaniem średniej.

## Użyte technologie i frameworki:
- Postman - testowanie API
- MongoDB Compass - interfejs dla nierelacyjnych baz danych
- MongoDB Atlas - chmura MongoDB
- Node.js - środowisko o asynchronicznym modelu dla Java Scripta 
- Express.js - upraszcza tworzenie API i ogólnie aplikacji webowych

## Instalacja
1. Sklonuj repozytorium:
    ```bash
    git clone https://github.com/your-repo/blogapp.git

2. Przejdź do katalogu projektu
    cd blogapp

3. Zainstaluj zależności:
    npm install

4. Skonfiguruj plik .env zgodnie z .env.example. Przykładowe zmienne środowiskowe:
    DB_USER=your_username
    DB_PASSWORD=your_password
    DB_NAME=your_database

## Uruchamianie:

    npm start

========================================================================

## Autorzy: Krzysztof Falandysz, Błażej Jaskółowski



