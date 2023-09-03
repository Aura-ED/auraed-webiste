import Home from "./Components/Home/Home";
import Footer from "./Layout/Footer";
import Navbar from "./Layout/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Albums from "./Components/Albums/Albums";
import Events from "./Components/Events/Events";
import Donate from "./Components/Donate/Donate";
import FreeCourse from "./Components/FreeCourse/FreeCourse";
import Test from "./Components/FreeCourse/Test";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="font-quicksand">
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/albums" element={<Albums />} />
            <Route exact path="/events" element={<Events />} />
            <Route exact path="/donate" element={<Donate />} />
            <Route exact path="/freecourse" element={<FreeCourse />} />
            <Route exact path="/test" element={<Test />} />
      {/* Add the route for the 'Test' component with the 'id' parameter */}
      <Route exact path="/test/:id" element={<Test />} />
          </Routes>
          <Footer />
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
