# 🐾 Adopt a Pet - Codecademy React Project (Modernized)

A modern React-based pet adoption platform rebuilt from Codecademy's "Adopt a Pet" React Router project. This is a complete rewrite using current React Router v6+ practices and modern React patterns, as the original course materials were outdated.

## 📋 Project Overview

**Original Project:** Codecademy's "Adopt a Pet" React Router Course Project  
**Status:** Modernized & Rebuilt with React Router v6+

This application provides an intuitive interface for browsing pets available for adoption. Users can filter pets by type (Dogs, Cats, Rabbits, Birds), search by name, and view detailed information about each pet.

> **Note:** This project was originally part of Codecademy's React curriculum. However, due to outdated code patterns (React Router v5, deprecated hooks, and old React practices), I rebuilt the entire project from scratch using modern approaches. I also learned additional concepts from YouTube tutorials and documentation to implement current best practices.

### Key Features

- 🔍 **Search Functionality** - Search for pets by name
- 🏷️ **Type Filtering** - Filter pets by animal type (Dog, Cat, Rabbit, Bird)
- 📱 **Responsive Design** - Mobile-friendly interface
- 🎨 **Clean Navigation** - Intuitive navigation with active state indicators
- 📄 **Pet Details Page** - Comprehensive information about each pet including photos, breed, age, and attributes.

## 🛠️ Technologies Used

- **React** - Frontend framework
- **React Router v6** - Client-side routing with loaders and URL parameters
- **JSON Server** - Mock REST API for pet data
- **CSS3** - Styling
- **JavaScript (ES6+)** - Core programming language

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/mideyharyor/adoptthepet.git
   cd adoptthepet
```

2. **Install dependencies**
```bash
   npm install
```

3. **Start the JSON Server** (in a separate terminal)
```bash
   npx json-server --watch data.json --port 8000
```
   
   This will start the mock API server at `http://localhost:8000`
   
   > **Important:** The JSON Server must be running for the application to fetch pet data.

4. **Start the React development server**
```bash
   npm start
```
   
   The app will open at `http://localhost:5173` (or another port if 5173 is busy)


## 📝 Learning Outcomes

This project demonstrates proficiency in:
- Modern React patterns and hooks
- React Router v6 features (loaders, nested routes, URL state management)
- RESTful API integration and data fetching
- Component composition and reusability
- Form handling with `useNavigate`
- Search and filter functionality with URL parameters
- Responsive web design
- State management strategies
- JSON Server for mock API development

## 🎓 Learning Resources Used

Beyond the Codecademy course materials:
- React Router v6 Official Documentation
- GreatStack — React Router Complete Tutorial (YouTube)
- MDN Web Docs for JavaScript ES6+ features
- React Official Documentation

## 🤝 Contributing

This is a learning project, but suggestions and improvements are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- **Codecademy** - Original "Adopt a Pet" project concept and learning platform
- **Petfinder API** - Data structure inspiration
- **GreatStack — React Router Complete Tutorial (YouTube)
- Built as part of my web development learning journey


**Note:** This project is a student work based on Codecademy's curriculum but completely rebuilt with modern practices. It is not affiliated with or endorsed by Codecademy.

---

⭐ If you found this project helpful for learning React Router v6, please consider giving it a star!
