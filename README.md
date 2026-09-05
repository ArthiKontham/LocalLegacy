<<<<<<< HEAD
# Local Legacy

Design-for-social-good travel app (Barcelona). **Create React App + React Router + Firebase**,
same structure as the reactp1 project.

## Run
```bash
npm install
npm start         # http://localhost:3000
npm run build
```
Tap **"Explore as a guest"** to browse without an account.

## Structure (mirrors reactp1)
```
public/index.html
src/
├── index.js              app entry (BrowserRouter > AppProvider > App)
├── App.js                routes + auth guards + phone frame + navbar
├── App.css, index.css
├── firebase.js           Firebase init (auth, googleProvider, storage, db)
├── auth.js               sign up / login / google / reset / saved-data helpers
├── AppContext.js         shared state (auth, saved, location, category)
├── assets/               images (place photos + logo illustration)
├── components/           Entry, Login, Signup, ResetPassword, LocationPrompt,
│   │                     Home, Detail, Save, Trip, Profile, Navbar, SearchBar,
│   │                     CategoryTabs, ListingCard, GuideCard, Brand, icons
│   └── styles/           one .css per component
└── data/                 businesses.js, guides.js, trips.js
```

## Routes
`/` Entry · `/login` · `/signup` · `/reset` · `/location` · `/home` · `/detail/:id`
· `/save` · `/trip` · `/profile`

## Firebase (project: locallegacy-7f308)
In the Firebase console: enable **Email/Password** and **Google** under Authentication,
and create **Firestore**. Rules:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid}     { allow read, write: if request.auth != null && request.auth.uid == uid; }
    match /usernames/{name} { allow read: if true; allow create: if request.auth != null; }
  }
}
```

## Accounts
- **Username can be anything** (any characters/length) but is **unique** — checked live as you
  type against `usernames/` and reserved on sign-up (case-insensitive).
- **Email** uniqueness enforced by Firebase. Login accepts **username or email**.
- **Google** sign-in supported; Google users also get a `users/{uid}` record.
- **Saved places persist** in `users/{uid}.saved` — log out, return weeks later, log in, and
  your saved hotels/restaurants/guides load back into Discover, Save, and Trip.
=======
