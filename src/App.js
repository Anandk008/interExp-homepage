import NavBar from "./components/NavBar.jsx";
import SmallIntro from "./components/smallIntro";
import CompanyList from "./components/companyList";
import RecentArticle from "./components/recentArticles";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <NavBar />
      <SmallIntro />
      <CompanyList />
      <RecentArticle />
      <Footer />
    </>
  );
}

export default App;
