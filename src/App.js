import NavBar from './components/navBar.jsx'
import SmallIntro from './components/smallIntro'
import CompanyList from './components/companyList'
import RecentArticle from './components/recentArticles'
import Footer from './components/footer'
import './App.css';

function App() {
  return (
    <div>
    <NavBar />
    <SmallIntro />
    <CompanyList />
    <RecentArticle />
    <Footer />
    </div>
  );
}

export default App;
