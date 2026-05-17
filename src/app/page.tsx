"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeLargeTitles"
        background="noise"
        cardStyle="subtle-shadow"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Features", id: "features" },
        { name: "Pricing", id: "pricing" },
        { name: "FAQ", id: "faq" },
      ]}
      brandName="DocMaster AI"
      button={{ text: "Get Started", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Turn Every Story Into a Cinematic Masterpiece"
      description="Automate your documentary production workflow with AI. From script generation to motion design, create professional long-form content in minutes."
      buttons={[{ text: "Start Building", href: "#contact" }]}
      imageSrc="http://img.b2bpic.net/free-photo/school-supplies-arrangement-children-room_23-2148666105.jpg"
      imageAlt="Cinematic documentary workspace"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/man-filming-with-professional-camera_23-2149066314.jpg", alt: "Professional filmmaker" },
        { src: "http://img.b2bpic.net/free-photo/positive-traveler-female-holds-digital-photo-camera-tripod_613910-9779.jpg", alt: "Digital content creator" },
        { src: "http://img.b2bpic.net/free-photo/portrait-redhead-bearded-freelancer-photographer-holds-digital-camera-grey-background_613910-1558.jpg", alt: "Creative photographer" },
        { src: "http://img.b2bpic.net/free-photo/close-up-cameraman-doing-his-job_23-2149037887.jpg", alt: "Camera operator" },
        { src: "http://img.b2bpic.net/free-photo/young-woman-holding-cinema-tape-white-high-quality-photo_114579-63270.jpg", alt: "Media professional" },
      ]}
      avatarText="Trusted by 5,000+ creators"
    />
  </div>

  <div id="problem" data-section="problem">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Documentary Production, Redefined"
      description="Stop wasting hundreds of hours on manual editing. Our AI platform handles the heavy lifting, allowing you to focus on the story that matters."
      bulletPoints={[
        { title: "Script Automation", description: "AI-powered storytelling hooks and deep chapter breakdowns." },
        { title: "Visual Rendering", description: "Automated motion graphics and scene-by-scene animation." },
        { title: "Cinematic Polish", description: "Netflix-quality voiceovers and sound design at your fingertips." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/neon-lights-swirling_23-2147785920.jpg"
      imageAlt="AI data workflow"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        { title: "Scene Breakdown", description: "5-10s automated scenes with visual instructions.", imageSrc: "http://img.b2bpic.net/free-photo/young-adult-holding-smart-phone-typing-message-generated-by-ai_188544-31075.jpg" },
        { title: "Motion Graphics", description: "Zoom, pan, and parallax transitions handled by AI.", imageSrc: "http://img.b2bpic.net/free-photo/artistic-blurry-colorful-wallpaper-background_58702-10373.jpg" },
        { title: "Human-Like Voice", description: "Deep, dramatic, and emotionally resonant narration.", imageSrc: "http://img.b2bpic.net/free-photo/3d-render-abstract-landscape-flowing-dots_1048-13342.jpg" },
      ]}
      title="God-Level Features"
      description="Everything you need to produce feature-length documentaries."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        { id: "p1", brand: "Module", name: "Script Engine", price: "AI-Driven", rating: 5, reviewCount: "1.2k", imageSrc: "http://img.b2bpic.net/free-photo/dedicated-businessman-working-late-laptop-dark-office_169016-54965.jpg" },
        { id: "p2", brand: "Module", name: "Voice Synthesis", price: "ElevenLabs", rating: 5, reviewCount: "2k", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-music-making-studio_23-2149199978.jpg" },
        { id: "p3", brand: "Module", name: "Motion Engine", price: "Auto-Pan", rating: 4, reviewCount: "800", imageSrc: "http://img.b2bpic.net/free-vector/fitness-mobile-app-infographic-template_23-2148237058.jpg" },
        { id: "p4", brand: "Module", name: "Asset Library", price: "100k+ assets", rating: 5, reviewCount: "5k", imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-still-life-printer-toners-assortment_23-2149120689.jpg" },
        { id: "p5", brand: "Module", name: "Color Grader", price: "Cinematic", rating: 4, reviewCount: "900", imageSrc: "http://img.b2bpic.net/free-photo/remotely-working-company-financial-advisor-analyzing-statistical-graphs_482257-92945.jpg" },
        { id: "p6", brand: "Module", name: "Final Render", price: "4K Output", rating: 5, reviewCount: "3k", imageSrc: "http://img.b2bpic.net/free-photo/grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_24972-2299.jpg" },
      ]}
      title="Platform Tools"
      description="Comprehensive suite for professional documentary creation."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Netflix", "YouTube", "National Geographic", "PBS", "Vice", "Discovery", "Hulu"]}
      title="Trusted by Filmmakers"
      description="Join creators and studios pushing the boundaries of documentary production."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        { id: "basic", tag: "Starter", price: "$99", period: "/mo", description: "Perfect for individual creators.", button: { text: "Get Started" }, featuresTitle: "Includes:", features: ["10h Content/mo", "Basic Motion Graphics", "Standard AI Voice"] },
        { id: "pro", tag: "Professional", price: "$299", period: "/mo", description: "Designed for professional production studios.", button: { text: "Choose Pro" }, featuresTitle: "Includes:", features: ["Unlimited Content", "Advanced Motion Library", "Premium AI Voices", "Priority Render"] },
      ]}
      title="Choose Your Plan"
      description="Start creating your next documentary masterpiece today."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Sarah J.", imageSrc: "http://img.b2bpic.net/free-photo/traveler-photographer-studio-portrait-handsome-bearded_613910-1606.jpg" },
        { id: "t2", name: "Michael C.", imageSrc: "http://img.b2bpic.net/free-photo/smart-blonde-female-photographer-trendy-clothes-posing-while-leaning-professional-camera-with-tripod-studio-looks-camera-isolated-dark-background_613910-20980.jpg" },
        { id: "t3", name: "Emily R.", imageSrc: "http://img.b2bpic.net/free-photo/business-man-working-late-office_23-2148991380.jpg" },
        { id: "t4", name: "David K.", imageSrc: "http://img.b2bpic.net/free-photo/successful-businesswoman-holding-papers_23-2148452649.jpg" },
        { id: "t5", name: "Alex B.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-young-woman-holding-cup_23-2148452709.jpg" },
      ]}
      cardTitle="Filmmakers' Choice"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "Is the app for beginners?", content: "Absolutely! Our AI workflows help beginners achieve professional-grade results." },
        { id: "q2", title: "Can I edit after rendering?", content: "Yes, we support exports to popular editing software like Premiere Pro." },
        { id: "q3", title: "What tools are integrated?", content: "We integrate with ElevenLabs, Runway, and various motion graphic suites." },
      ]}
      title="Frequently Asked Questions"
      description="Got questions? We've got answers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      tag="Contact Us"
      useInvertedBackground={false}
      background={{ variant: "animated-grid" }}
      title="Ready to Start?"
      description="Join the waitlist or contact our team for a personalized demo."
      imageSrc="http://img.b2bpic.net/free-photo/flash-blue_23-2147786027.jpg"
      imageAlt="Cinematic abstract backdrop"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="DocMaster AI"
      columns={[
        { title: "Platform", items: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }] },
        { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms", href: "#" }] },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}