# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



Feel free to delete this and start from scratch.
"npm create vite@latest . -- --template react" ✅
 run "npm install"  ✅
 "npm run dev" to get working ✅
 starting with a single component to get something working
 Then maybe split out a few bits to create a Header and Footer component 
 example of component tree :
 App
├── Header
├── Form
├── Flashcards
│ └── Flashcard
└── Footer
Enable Editing Existing Flashcards: Allow users to go back and edit the questions or answers on their flashcards.
Add Labels or Categories to Flashcards: Introduce a way for users to organize their flashcards by topic, difficulty, or any other category they find useful.
Create a Shuffle Feature: Introduce the ability to shuffle the order of flashcards.
Implement a Search Function: Add the ability for users to quickly search for specific flashcards.
Incorporate a Daily Review Limit: Set up a feature that allows users to limit how many new flashcards they review each day, promoting a steady learning pace and preventing burnout.