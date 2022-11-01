import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';


function App() {
  const product =[
    {
price:99999,
name:"Iphone 10s max",
quantity:0 ,
    },
    {

      price:9999,
      name:"redmi 10s max",
      quantity:0 ,
    }
  ]
  return (
    <>
    <Navbar/>
<ProductList product={product}/>
{/* <Footer/> */}
    </>
  );
}

export default App;
