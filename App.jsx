import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IntroPhilosophy from "./components/IntroPhilosophy";
import CraftHubSection from "./components/CraftHubSection";
import TransformationSection from "./components/TransformationSection";
import GallerySection from "./components/GallerySection";
import ReviewsSection from "./components/ReviewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import ImageLightbox from "./components/ImageLightbox";
import ServicesPopout from "./components/ServicesPopout";
import PackagesPopout from "./components/PackagesPopout";
import MobileQuickBar from "./components/MobileQuickBar";
import ScissorsLoader from "./components/ScissorsLoader";
import "./styles.css";

export default function App() {
  const [showScissorsLoader, setShowScissorsLoader] = useState(true);
  const [pagePopped, setPagePopped] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [servicesPopoutOpen, setServicesPopoutOpen] = useState(false);
  const [packagesPopoutOpen, setPackagesPopoutOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [bookingDefaultService, setBookingDefaultService] = useState("");

  const handleScissorsComplete = () => {
    setPagePopped(true);
    setShowScissorsLoader(false);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenBooking = (serviceName = "") => {
    setBookingDefaultService(typeof serviceName === "string" ? serviceName : "");
    setBookingOpen(true);
  };

  return (
    <>
      {showScissorsLoader && <ScissorsLoader onComplete={handleScissorsComplete} />}

      {/* Main Page Scroll Canvas */}
      <div className={`app-canvas ${pagePopped ? "popout-active" : "popout-initial"}`}>
        <div className="noise" />

        <Navbar
          onOpenBooking={() => handleOpenBooking("")}
          onScrollTo={scrollTo}
          onOpenServices={() => setServicesPopoutOpen(true)}
          onOpenPackages={() => setPackagesPopoutOpen(true)}
        />

        <main>
          <Hero
            onOpenBooking={() => handleOpenBooking("")}
            onScrollTo={scrollTo}
            onOpenServices={() => setServicesPopoutOpen(true)}
            onOpenPackages={() => setPackagesPopoutOpen(true)}
          />
          <IntroPhilosophy onScrollTo={scrollTo} />
          
          {/* Streamlined Interactive Gateway */}
          <CraftHubSection
            onOpenServices={() => setServicesPopoutOpen(true)}
            onOpenPackages={() => setPackagesPopoutOpen(true)}
          />

          <TransformationSection />
          <GallerySection onPreviewImage={(img) => setPreviewImage(img)} />
          <ReviewsSection />
          <ContactSection onOpenBooking={() => handleOpenBooking("")} />
        </main>

        <Footer
          onOpenBooking={() => handleOpenBooking("")}
          onScrollTo={scrollTo}
          onOpenServices={() => setServicesPopoutOpen(true)}
          onOpenPackages={() => setPackagesPopoutOpen(true)}
        />

        {/* Floating Thumb Quick Action Bar for Mobile & Tablet */}
        <MobileQuickBar onOpenBooking={() => handleOpenBooking("")} />
      </div>

      {/* ALL MODALS RENDERED AT ROOT LEVEL (OUTSIDE APP-CANVAS) TO PREVENT POSITION:FIXED BREAKING */}
      <ServicesPopout
        isOpen={servicesPopoutOpen}
        onClose={() => setServicesPopoutOpen(false)}
        onSelectService={(serviceTitle) => handleOpenBooking(serviceTitle)}
      />

      <PackagesPopout
        isOpen={packagesPopoutOpen}
        onClose={() => setPackagesPopoutOpen(false)}
        onSelectCombo={(comboTitle) => handleOpenBooking(comboTitle)}
      />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultService={bookingDefaultService}
      />

      <ImageLightbox
        image={previewImage}
        onClose={() => setPreviewImage(null)}
      />
    </>
  );
}
