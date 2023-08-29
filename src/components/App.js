import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

const MainPage = lazy(() => import("../pages/MainPage"));
const AccommodationPage = lazy(() => import("../pages/AccommodationPage"));
const RoomPage = lazy(() => import("../pages/RoomPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));
const FoodPage = lazy(() => import("../pages/FoodPage"));
const FaqPage = lazy(() => import("../pages/FaqPage"));
const ServicesPage = lazy(() => import("../pages/ServicesPage"));
const SpecialOffersPage = lazy(() => import("../pages/SpecialOffersPage"));
const WeddingsPage = lazy(() => import("../pages/WeddingsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/accommodation" element={<AccommodationPage />} />
        <Route path="/accommodation/:roomId" element={<RoomPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/special-offers" element={<SpecialOffersPage />} />
        <Route path="/weddings" element={<WeddingsPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/not-found" replace={true} />} />
      </Route>
    </Routes>
  );
}

export default App;
