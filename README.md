# Personal Portfolio Website

A beautiful and professional personal portfolio website built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- Modern, minimal, and professional design
- Light/Dark mode toggle
- Smooth scroll animations using Framer Motion
- Fully responsive design (mobile-first)
- Contact form with backend email integration
- Sections: Hero, About, Skills, Projects, Contact

## Tech Stack

### Frontend
- React (with Vite)
- Framer Motion (animations)
- React Icons
- Axios
- CSS3 with custom properties

### Backend
- Node.js
- Express.js
- Nodemailer (for contact form)
- CORS

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd MyProtfolio
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../backend
npm install
```

### Configuration

#### Backend Configuration

1. Navigate to the `backend` folder
2. Copy `.env.example` to `.env`
3. Update the `.env` file with your email credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECEIVER_EMAIL=shrutild67@gmail.com
PORT=5000
```

**Note:** For Gmail, you'll need to create an [App Password](https://support.google.com/accounts/answer/185833):
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password for "Mail"
4. Use that password in `EMAIL_PASS`

#### Frontend Configuration

If your backend runs on a different port, update the API URL in:
- `frontend/src/components/Contact.jsx` (line with `axios.post`)

### Running the Application

#### Development Mode

1. Start the backend server:
```bash
cd backend
npm run dev
```
The backend will run on `http://localhost:5000`

2. In a new terminal, start the frontend:
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5173`

3. Open `http://localhost:5173` in your browser

#### Production Build

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Start the backend:
```bash
cd backend
npm start
```

## Project Structure

```
MyProtfolio/
├── frontend/
│   ├── public/
│   │   └── resume.pdf          # Your resume PDF
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx        # Hero section
│   │   │   ├── About.jsx       # About section
│   │   │   ├── Skills.jsx      # Skills section
│   │   │   ├── Projects.jsx    # Projects section
│   │   │   ├── Contact.jsx     # Contact form
│   │   │   ├── Navbar.jsx      # Navigation bar
│   │   │   └── Footer.jsx      # Footer
│   │   ├── context/
│   │   │   └── ThemeContext.jsx # Theme management
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   └── package.json
├── backend/
│   ├── server.js               # Express server
│   ├── .env                    # Environment variables
│   └── package.json
└── README.md
```

## Customization

### Personal Information

Update your personal information in:
- `frontend/src/components/Hero.jsx` - Name, title, tagline
- `frontend/src/components/About.jsx` - Bio, education, location
- `frontend/src/components/Projects.jsx` - Project details
- `frontend/src/components/Contact.jsx` - Social links

### Projects

To add or modify projects, edit the `projects` array in `frontend/src/components/Projects.jsx`:

```javascript
{
  id: 1,
  title: 'Project Name',
  description: 'Project description...',
  techStack: ['React', 'Node.js', 'MongoDB'],
  liveDemo: 'https://your-demo-link.com',
  github: 'https://github.com/your-repo',
  image: '🎨', // Emoji or image path
}
```

### Resume

Replace `frontend/public/resume.pdf` with your actual resume PDF file.

### Theme Colors

Customize colors in `frontend/src/App.css`:
- Light theme: `:root` section
- Dark theme: `[data-theme="dark"]` section

## Deployment

### Frontend (Vercel)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Set the root directory to `frontend`
5. Deploy

### Backend (Render)

1. Push your code to GitHub
2. Go to [Render](https://render.com)
3. Create a new Web Service
4. Connect your repository
5. Set the root directory to `backend`
6. Add environment variables from your `.env` file
7. Deploy

**Important:** After deployment, update the backend API URL in `frontend/src/components/Contact.jsx`

## Features Breakdown

### Hero Section
- Animated greeting with waving hand
- Name and title with gradient effect
- Social media links
- Resume download button
- Scroll indicator

### About Section
- Personal bio
- Education details
- Location information

### Skills Section
- Organized by categories (Frontend, Backend, Database, Tools, Currently Learning)
- Interactive skill cards with hover effects
- Technology icons with colors

### Projects Section
- Project cards with descriptions
- Technology stack tags
- Live demo and GitHub links
- Responsive grid layout

### Contact Section
- Contact form with validation
- Direct contact links (Email, GitHub, LinkedIn)
- Resume download option
- Success/error message handling

### Additional Features
- Dark/Light mode toggle
- Smooth scroll navigation
- Responsive mobile menu
- Animated sections on scroll
- Custom scrollbar styling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Shruti Lal Das
- Email: shrutild67@gmail.com
- GitHub: [@Shrutii-ti](https://github.com/Shrutii-ti)
- LinkedIn: [Shruti Lal Das](https://www.linkedin.com/in/shruti-lal-das/)

---

Built with ❤️ by Shruti Lal Das
