import { Route, Routes } from "react-router-dom";
import { MainLayout } from "@/components/layout/main-layout";
import { RouteAnalytics } from "@/components/routing/route-analytics";
import { ScrollToTop } from "@/components/routing/scroll-to-top";
import { AboutPage } from "@/pages/about-page";
import { HomePage } from "@/pages/home-page";
import { LessonPage } from "@/pages/lesson-page";
import { LessonsPage } from "@/pages/lessons-page";

export default function App() {
  return (
    <>
      <RouteAnalytics />
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lessons" element={<LessonsPage />} />
          <Route path="/lessons/:slug" element={<LessonPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </MainLayout>
    </>
  );
}
