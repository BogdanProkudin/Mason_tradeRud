import ContactUs from "./components/contactUs/contactUs";
import Details from "./components/details/details";
import Header from "./components/header/header";
import Modules from "./components/modules/modules";
import ProductInfo from "./components/productInfo/productInfo";
import Reviews from "./components/reviews/reviews";
import Tariffs from "./components/tariffs/tariffs";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
        rel="stylesheet"
      ></link>
      <Header />
      <Modules />
      <ProductInfo />
      <Details />
      <Tariffs />
      <ContactUs />
      <Reviews />
    </div>
  );
}

export default App;
