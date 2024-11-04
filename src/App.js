import Footer from "./component/footer";
import Header from "./component/header";
import Generation from "./component/header/generation";
import { Search, Evolution, Logo, TypeEffect } from "./component/home";
const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Header />
      <Search />
      <Evolution />
      <Logo />
      <TypeEffect />
      <Footer />
    </div>
  );
};

export default App;
