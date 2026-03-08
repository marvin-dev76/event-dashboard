import Layout from "@/components/Layout";
import { Route, Routes } from "react-router-dom";
import EventListPage from "./pages/EventListPage";
import EventFormPage from "./pages/EventFormPage";
import EventDetailPage from "./pages/EventDetailPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<EventListPage />} />
        <Route path="/events/new" element={<EventFormPage />} />
        <Route path="/events/:id" element={<EventDetailPage />} />
        <Route path="/events/:id/edit" element={<EventFormPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
