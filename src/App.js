import NavBar from './components/navBar.jsx'
import SmallIntro from './components/smallIntro'
import CompanyList from './components/companyList'
import RecentArticle from './components/recentArticles'
import './App.css';

function App() {
  return (
    <div>
    <NavBar />
    <SmallIntro />
    <CompanyList />
    <RecentArticle />
    </div>
  );
}

export default App;
