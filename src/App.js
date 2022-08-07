import "./App.css";
import ContactMe from "./Screens/ContactMe/ContactMe";
import HomeScreen from "./Screens/Home/HomeScreen";
import Librarys from "./Screens/LibrarysWorkedon/Librarys";
import Skills from "./Screens/Skills/Skills";

function App() {
  return (
    <div>
      <HomeScreen />
      <Skills />
      <Librarys />
      <ContactMe />
    </div>
  );
}

export default App;
