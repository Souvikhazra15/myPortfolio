# 🎨 Assets Required for Portfolio

This document lists all the image and icon assets needed for your portfolio website. Place all assets in the `/public` folder.

## 📦 Required Assets

### **Grid Background & Patterns**
- `grid.svg` - Background grid pattern for Bento grid section
- `bg.png` - Background image for project cards
- `footer-grid.svg` - Grid pattern for footer background

### **Bento Grid Icons** (used in Grid section)
- `b1.svg` - Icon for grid item 1 (Hardware/Software bridge)
- `b4.svg` - Icon for grid item 4 (Tech enthusiast)
- `b5.svg` - Icon for grid item 5 (The Inside Scoop)

### **Project Preview Images** (4 projects)
- `p1.svg` - Smart Home Automation System preview
- `p2.svg` - MERN Stack Sensor Dashboard preview
- `p3.svg` - C++ Microcontroller Library preview
- `p4.svg` - 3D IoT Visualizer preview

### **Tech Stack Icons** (for projects)
Each project uses these tech stack icons as circular badges:

**Common Icons:**
- `re.svg` - React
- `node.svg` - Node.js
- `mongo.svg` - MongoDB
- `express.svg` - Express.js
- `tail.svg` - Tailwind CSS
- `ts.svg` - TypeScript
- `c.svg` - C/C++
- `three.svg` - Three.js
- `framer.svg` - Framer Motion
- `git.svg` - Git

**Hardware Icons:**
- `arduino.svg` - Arduino
- `esp32.svg` - ESP32

### **Work Experience Icons** (4 experiences)
- `exp1.svg` - Full-Stack Developer icon
- `exp2.svg` - IoT Engineer icon
- `exp3.svg` - Embedded Systems Developer icon
- `exp4.svg` - Freelance Web Developer icon

### **Social Media Icons**
- `git.svg` - GitHub (reuse from tech stack)
- `link.svg` - LinkedIn
- `twit.svg` - Twitter

---

## 🎯 Quick Setup Guide

### Option 1: Create Simple SVG Placeholders
Run this PowerShell script in the `/public` folder to create placeholder SVGs:

```powershell
# Background patterns
@"
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#grid)" />
</svg>
"@ | Out-File -Encoding utf8 "grid.svg"

# Copy for footer
Copy-Item "grid.svg" "footer-grid.svg"

# Simple colored circles as icon placeholders
$colors = @{
  "b1"="#8B5CF6"; "b4"="#8B5CF6"; "b5"="#8B5CF6";
  "p1"="#3B82F6"; "p2"="#3B82F6"; "p3"="#3B82F6"; "p4"="#3B82F6";
  "exp1"="#10B981"; "exp2"="#10B981"; "exp3"="#10B981"; "exp4"="#10B981";
  "re"="#61DAFB"; "node"="#339933"; "mongo"="#47A248"; "express"="#000000";
  "tail"="#06B6D4"; "ts"="#3178C6"; "c"="#00599C"; "three"="#000000";
  "framer"="#0055FF"; "git"="#F05032"; "arduino"="#00979D"; "esp32"="#E7352C";
  "link"="#0A66C2"; "twit"="#1DA1F2"
}

foreach ($icon in $colors.Keys) {
  @"
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" fill="$($colors[$icon])" />
  <text x="50" y="55" font-size="12" fill="white" text-anchor="middle" font-family="Arial">$icon</text>
</svg>
"@ | Out-File -Encoding utf8 "$icon.svg"
}

# Create a simple bg.png placeholder (you'll need to replace this with actual PNG)
Write-Host "Note: bg.png needs to be created manually or downloaded"
```

### Option 2: Download Quality Icons

**Recommended Sources:**
- **Tech Stack Icons**: [DevIcon](https://devicon.dev/) or [Simple Icons](https://simpleicons.org/)
- **Social Icons**: [Feather Icons](https://feathericons.com/)
- **Custom Icons**: [Flaticon](https://www.flaticon.com/) or [Icons8](https://icons8.com/)

### Option 3: Use Your Own Assets

Replace the placeholder icons with:
1. Project screenshots/mockups for `p1-p4.svg`
2. Custom designed icons for experiences `exp1-exp4.svg`
3. Brand-consistent tech stack icons
4. Professional social media icons

---

## 📝 Asset Specifications

- **Format**: SVG preferred (scalable, small file size)
- **Size**: Icons should be square (e.g., 100x100, 200x200)
- **Background**: Transparent or matching theme
- **Colors**: Should complement the purple (#8B5CF6) theme
- **Optimization**: Run through [SVGO](https://jakearchibald.github.io/svgomg/) for smaller file sizes

---

## 🔍 Current Asset Usage

| Asset | Used In | Purpose |
|-------|---------|---------|
| `grid.svg` | Grid.tsx | Background pattern for Bento grid |
| `b1.svg, b4.svg, b5.svg` | BentoGrid items | Visual icons for grid cards |
| `p1-p4.svg` | RecentProjects.tsx | Project preview images |
| Tech stack icons | RecentProjects.tsx | Technology badges on project cards |
| `exp1-exp4.svg` | Experience.tsx | Work experience thumbnails |
| Social icons | Footer.tsx | Social media links |
| `footer-grid.svg` | Footer.tsx | Footer background pattern |
| `bg.png` | RecentProjects.tsx | Project card background |

---

## ✅ Next Steps

1. Create placeholder SVGs using the script above
2. Replace placeholders with actual branded icons
3. Add project screenshots for `p1-p4`
4. Test the site at `http://localhost:3000`
5. Optimize all SVGs before production deployment

---

*Need help creating custom icons? Consider using [Figma](https://figma.com) or [Canva](https://canva.com) for quick icon design.*
