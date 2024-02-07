import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MovieList from "./components/cine/MovieList";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default App;
