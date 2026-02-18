🎯 Project Overview
Business: Premium mobile IV therapy and wellness service platform
Brand Name: PureFlow
Tagline: "Medical-Grade Wellness, Delivered to Your Door"
Tech Stack: React + Vite + Tailwind CSS + React Router

🎨 Design System & Styling
Color Palette
Primary Dark: #1E1B4B (Deep Indigo) - Trust, professionalism
Primary Purple: #8B5CF6 (Light Purple) - Wellness, brand accent
Secondary Gray: #F5F7FA - Background sections
Secondary Gold: #D4AF37 - Premium badges, VIP elements
Secondary Red: #E63946 - Alerts, urgency
Typography
Headings: Montserrat (Bold/SemiBold)
Body Text: Open Sans
Font Sizes: Responsive scaling (32px-72px for H1)
Design Patterns
Gradient overlays on hero sections
Card-hover effects with elevation
Glassmorphism (backdrop-blur)
Smooth scroll anchors
Auto-rotating carousels
📄 Page Structure
1. Homepage (HomePage.jsx)
10 Sections in Order:

Hero - Split-screen layout with animated sequence
TrustBar - Social proof, certifications
ProductSlider - Horizontal scrolling IV treatments (10 products)
WellnessOptions - Category highlights
ServiceGrid - Featured treatments (3 cards)
HowItWorks - 3-step process visualization
Membership - 3 pricing tiers (Essential/Premium/Elite)
Locations - 9 cities served + expansion notice
FAQ - 6 expandable questions
Testimonials - Auto-rotating slider (3 reviews)
2. Booking Page (BookingPage.jsx)
Multi-step wizard (Treatment → Date/Time → Details)
Auto-populates treatment from URL params
HIPAA compliance badges
Success confirmation screen
🧩 Component Architecture
Layout Components (2)
Navbar.jsx - Sticky navigation with smooth scroll anchors
Footer.jsx - 4-column layout (Brand, Services, Company, Contact)
Section Components (10)
All feature responsive design, hover states, and accessibility:

Hero.jsx - Sticky scroll with animated sequence
TrustBar.jsx - Partner/cert logos
ProductSlider.jsx - Horizontal scroll with 10 IV treatments
WellnessOptions.jsx - Category cards
ServiceGrid.jsx - Treatment cards with modal details
HowItWorks.jsx - 3-step process (Book → Visit → Recover)
Membership.jsx - Pricing cards with hover scaling
Locations.jsx - City grid (9 locations)
FAQ.jsx - Accordion component
Testimonials.jsx - Auto-carousel with 5-star ratings
UI Components (3)
Button.jsx - Primary/Secondary/Outline variants
Input.jsx - Form inputs with validation states
Modal.jsx - Treatment details overlay
💼 Business Features
Treatments Offered (10)
All-Inclusive - $399
Myers Cocktail - $199
Immune Boost - $229
Stomach Flu - $249
The Hangover - $199
Beauty Glow - $259
Athletic Performance - $279
NAD+ Boost - $599
Prenatal Relief - $189
Migraine Relief - $219
Membership Tiers
Essential: $99/mo (1 treatment, 10% discount)
Premium: $189/mo (2 treatments, 15% discount, free B12)
Elite: $279/mo (4 treatments, 20% discount, VIP concierge)
Service Areas
Los Angeles, San Francisco, San Diego, Miami, New York, Austin, Phoenix, Las Vegas, Chicago

⚡ Key Features
✅ Implemented:

Client-side routing (React Router)
Responsive mobile-first design
Smooth scroll navigation
URL parameter handling (treatment/plan selection)
Auto-rotating testimonials
Expandable FAQ accordion
Multi-step booking wizard
Modal overlays for treatment details
Social proof elements
Trust badges (Licensed nurses, HSA/FSA accepted)
❌ Not Yet Implemented:

Backend API integration
Payment processing (Stripe)
Real booking calendar
User authentication/dashboard
CMS for dynamic content
Form validation library (Zod mentioned but not used)
Email/SMS notifications
Analytics tracking
SEO optimization (meta tags, schema markup)
🔒 Compliance & Legal
Mentioned in Documentation:

HIPAA compliance (forms, data encryption)
Medical disclaimers (footer)
Age verification (18+)
Terms of Service
Cookie consent (GDPR/CCPA)
SSL/HTTPS required
Current Status: Placeholder text only - no actual implementation

📱 User Flows
Booking Flow:
Select treatment (homepage or product slider)
Redirected to /book?treatment=ID
Choose date/time
Enter location details
Complete contact form
Confirmation screen
Membership Flow:
View pricing tiers
Click "Choose [Plan]"
Redirected to /book?plan=NAME
(Backend flow not implemented)
🎯 Brand Positioning
Personality:

Trustworthy (medical professionals)
Aspirational (premium pricing, high-end imagery)
Convenient (on-demand, 45-min arrival)
Empowering (proactive health)
Voice & Tone:

Second person ("You deserve...")
Confident but not pushy
Educational without jargon
Results-focused ("Feel better in 30-60 minutes")
📊 Performance Considerations
Optimizations Needed:

Image optimization (currently using placeholder paths)
Code splitting (ready with Vite)
Lazy loading
Core Web Vitals monitoring
Current Setup:

Vite for fast development
Tailwind for minimal CSS bundle
React for component reusability
This is a MVP-stage website with strong UI/UX foundations but requires backend integration, payment processing, and compliance features before production launch. The design system is well-documented and consistently applied across all components.
## Tech Stack

-   React
-   Tailwind CSS
-   Vite
-   Lucide React
