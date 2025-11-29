# Souvik's Portfolio

A modern, responsive portfolio website showcasing expertise in **Electronics & Communication Engineering**, **MERN Stack Development**, and **IoT/Embedded Systems**.

## 🚀 Features

- **Hero Section** with spotlight effects and animated text
- **Bento Grid Layout** showcasing skills and tech stack
- **Project Showcase** featuring IoT and web development projects
- **Work Experience** section highlighting professional background
- **Responsive Design** optimized for all devices
- **Modern Animations** using Framer Motion
- **3D Elements** powered by Three.js

## 🛠️ Tech Stack

### Frontend
- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Three.js** - 3D graphics

### Showcased Skills
- **Web**: MERN Stack (MongoDB, Express.js, React, Node.js)
- **Embedded**: Arduino, ESP32, Raspberry Pi
- **Languages**: C/C++, JavaScript, TypeScript
- **Database**: MongoDB, SQL
- **Domain**: IoT, Embedded Systems

## 📋 Project Structure

```
myportfolio/
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── BentoGrid.tsx
│   │   ├── Spotlight.tsx
│   │   ├── TextGenerateEffect.tsx
│   │   └── MagicButton.tsx
│   ├── Hero.tsx
│   ├── Grid.tsx
│   ├── RecentProjects.tsx
│   ├── Experience.tsx
│   └── Footer.tsx
├── data/                  # Portfolio content
│   └── index.ts          # Projects, experience, skills data
├── lib/                   # Utility functions
│   └── utils.ts
├── public/               # Static assets
└── .github/
    └── copilot-instructions.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd myportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🎨 Customization

### Update Personal Information

Edit `data/index.ts` to customize:

- **Projects**: Add your IoT/web projects
- **Work Experience**: Update your professional background
- **Skills**: Modify your tech stack
- **Social Links**: Update GitHub, LinkedIn, Twitter URLs

### Modify Styling

- **Colors**: Edit `tailwind.config.ts` for theme colors
- **Animations**: Customize in `app/globals.css`
- **Components**: Update individual components in `components/`

### Add Assets

Place your project images and icons in the `public/` folder:
- Project thumbnails: `/p1.svg`, `/p2.svg`, etc.
- Experience icons: `/exp1.svg`, `/exp2.svg`, etc.
- Tech stack icons: `/mongo.svg`, `/re.svg`, `/node.svg`, etc.

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click!

### Deploy to Other Platforms

This Next.js app can be deployed to:
- **Netlify**
- **AWS Amplify**
- **Azure Static Web Apps**
- **Railway**

## 🎯 Key Sections

### 1. Hero Section
Captivating introduction with spotlight effect and animated tagline highlighting your unique position as an ECE Engineer who bridges hardware and software.

### 2. About (Bento Grid)
Modern layout presenting your skills, tech stack, and what makes you unique in the IoT/embedded systems space.

### 3. Projects
Showcase of your best work:
- IoT Smart Home Automation
- Air Quality Monitoring System
- Smart Agriculture Platform
- Energy Consumption Tracker

### 4. Work Experience
Professional background highlighting your expertise in:
- Embedded Systems Engineering
- MERN Stack Development
- IoT Solutions
- Hardware-Software Integration

### 5. Contact
Easy way for recruiters and collaborators to reach you.

## 🔧 Technologies Demonstrated

This portfolio itself demonstrates proficiency in:
- Modern React patterns (hooks, composition)
- TypeScript for type safety
- Responsive design principles
- Performance optimization
- SEO best practices
- Clean code architecture

## 📫 Contact

Update the contact information in `components/Footer.tsx`:
- Email: `your.email@example.com`
- GitHub: Link in `data/index.ts`
- LinkedIn: Link in `data/index.ts`
- Twitter: Link in `data/index.ts`

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Architecture inspired by [adrianhajdin/portfolio](https://github.com/adrianhajdin/portfolio)
- UI components from Aceternity UI
- Icons from React Icons

---

**Built with ❤️ by an ECE Engineer passionate about bridging hardware and software**
