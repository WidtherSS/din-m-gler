import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Register from "./pages/Register";
import GripHorizontal from "./pages/GripHorizontal";
import Home01 from "./pages/Home01";
import ContactUs from "./pages/ContactUs";
import ErrorPage from "./pages/ErrorPage";
import AgentsDetails from "./pages/AgentsDetails";
import Agents2 from "./pages/Agents2";
import PropertyDetailsOverlayI from "./pages/PropertyDetailsOverlayI";
import PropertyDetailsOverlayM from "./pages/PropertyDetailsOverlayM";
import PropertyDetailsOverlayF from "./pages/PropertyDetailsOverlayF";
import PropertyDetails from "./pages/PropertyDetails";
import NavigationBar from "./pages/NavigationBar";
import Footer from "./pages/Footer";
import FrameComponent from "./pages/FrameComponent";
import Favorites from "./pages/Favorites";
import PropertyList from "./pages/PropertyList";
import Login from "./pages/Login";
import Frame from "./pages/Frame";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/griphorizontal":
        title = "";
        metaDescription = "";
        break;
      case "/home-01":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/error-page":
        title = "";
        metaDescription = "";
        break;
      case "/agents-details":
        title = "";
        metaDescription = "";
        break;
      case "/agents-2":
        title = "";
        metaDescription = "";
        break;
      case "/property-details-overlay-image-gallery":
        title = "";
        metaDescription = "";
        break;
      case "/property-details-overlay-map":
        title = "";
        metaDescription = "";
        break;
      case "/property-details-overlay-floorplan":
        title = "";
        metaDescription = "";
        break;
      case "/property-details":
        title = "";
        metaDescription = "";
        break;
      case "/navigation-bar":
        title = "";
        metaDescription = "";
        break;
      case "/footer":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1":
        title = "";
        metaDescription = "";
        break;
      case "/favorites":
        title = "";
        metaDescription = "";
        break;
      case "/propertylist":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/frame":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Register />} />

      <Route path="/griphorizontal" element={<GripHorizontal />} />

      <Route path="/home-01" element={<Home01 />} />

      <Route path="/contact-us" element={<ContactUs />} />

      <Route path="/error-page" element={<ErrorPage />} />

      <Route path="/agents-details" element={<AgentsDetails />} />

      <Route path="/agents-2" element={<Agents2 />} />

      <Route
        path="/property-details-overlay-image-gallery"
        element={<PropertyDetailsOverlayI />}
      />

      <Route
        path="/property-details-overlay-map"
        element={<PropertyDetailsOverlayM />}
      />

      <Route
        path="/property-details-overlay-floorplan"
        element={<PropertyDetailsOverlayF />}
      />

      <Route path="/property-details" element={<PropertyDetails />} />

      <Route path="/navigation-bar" element={<NavigationBar />} />

      <Route path="/footer" element={<Footer />} />

      <Route path="/frame-1" element={<FrameComponent />} />

      <Route path="/favorites" element={<Favorites />} />

      <Route path="/propertylist" element={<PropertyList />} />

      <Route path="/login" element={<Login />} />

      <Route path="/frame" element={<Frame />} />
    </Routes>
  );
}
export default App;
