// app/about/page.tsx

// import AboutBanner from "@/components/AboutUs/AboutBanner";
// import AboutUsContent from "@/components/AboutUs/AboutUsContent";
// import CollectionSection from "@/components/Collection/CollectionSection";
import ContactForm from '@/components/ContactUs/ContactForm';
import ContactUsSection from '@/components/ContactUs/ContactUsSection';
import MapSection from '@/components/ContactUs/MapSection';

export default function ContactUsPage() {
  return (
    <main>
      <ContactUsSection />
      <ContactForm />
      <MapSection />
    </main>
  );
}
