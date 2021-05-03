import { Layout } from 'antd';
import { useContext , useEffect} from "react"; 
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import { setProductDetail } from "../actions";
import { StoreContext } from "../store"


const { Header, Content,Footer } = Layout;

function Product({ match }) {
   const { dispatch } = useContext(StoreContext);
   useEffect(() => {
      setProductDetail(dispatch, match.params.productId, 0, match.params.category)
      }, [])
   
   return (
      <Layout className="container main-layout">
         <Layout className="bg-gray">
            <NavBar />
         </Layout>
         <Layout className="bg-gray">
         <Header className="layout-header">
            <AppHeader title="Freesia" />
         </Header>
            <Content className="layout-content">
               <ProductDetail />
            </Content>
            <Footer className="layout-footer">
               <AppFooter/>
            </Footer>
         </Layout>
      </Layout>
   );
}

export default Product;
