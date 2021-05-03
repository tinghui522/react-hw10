import { useContext, useEffect } from "react"; 
import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import { StoreContext } from "../store";
import FixDetail from "../components/FixDetail";
import { setProductDetail } from "../actions";

const { Header ,Content ,Footer} = Layout;

function Perfume({ match }) {
  const { dispatch } = useContext(StoreContext);
  useEffect(() => setProductDetail(dispatch, match.params.productId, 0), [])

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
            <FixDetail />
        </Content>
        <Footer className="layout-footer">
          <AppFooter/>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Perfume;
