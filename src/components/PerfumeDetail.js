import products from "../json/products.json"
import { Row, Col } from "antd";
import ProductItem from "./ProductItem";
import { useContext } from "react";
import { StoreContext } from "../store"


export default function PerfumeDetail() {
    const { dispatch } = useContext(StoreContext);
    return (
        <content className="content"> 
        <hr className="hr-line-productdetail" />
        <div className="perfume-title-bg">
        </div>
        <p className="perfume-title">PERFUMES</p>
        <div className="perfume-detail">
            <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/product-word.png?raw=true" className="product-word"/>
            <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/jo-malone-london-blossoms-yuja-cologne.png?raw=true" className="product-img" />
            
            <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/up-arrow.png?raw=true"className="arrow-icon"/>
            
        </div>
        <div>
        <Row gutter={[0,8]}>
            {products.map(product => (
                <Col 
                key={product.id} 
                sm={{ span: 12 }} 
                lg={{ span: 8 }}
                xl={{ span: 7 }}
                xxl={{ span: 2 }}
                >
                <ProductItem product={product}/>
                </Col>
            ))}
        </Row>
        </div>
       </content>
    );
 }

 