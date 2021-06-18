import './Portfolio.css';
import HeadWords from '../HeadsWords/HeadsWords'
import Card from '../Card/Card';


const Portfolio = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5 text-center mb-5 pt-3">
                <HeadWords name="Portfolio" id="name"/>
                </div>
                <div className="col-xs-12 col-md-6  col-lg-4  mt-1 mb-5 pt-3">
                    <Card name="WEB DESIGN" color="#f2b7bd" textColor ="#fff"/>
                </div>
                <div className="col-xs-12 col-md-6  col-lg-4  mt-1  mb-5 pt-3">
                    <Card name="MOBILE DESIGN"  color="black" textColor ="#fff"/>
                </div>
                <div className="col-xs-12 col-md-6  col-lg-4  mt-1 mb-5 pt-3">
                    <Card name="LOGO DESIGN" color="#f2b7bd" textColor ="#fff"/>
                </div>
                <div className="col-xs-12 col-md-6  col-lg-4  mt-1 mb-5 pt-3">
                    <Card name="WEB APPLICATION DEVELOPMENT "  color="black" textColor ="#fff"/>
                </div>
                <div className="col-xs-12 col-md-6  col-lg-4  mt-1 mb-5 pt-3">
                    <Card name="MOBILE APPLICATION DEVELOPMENT " color="#f2b7bd" textColor ="#fff"/>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4  mt-1 mb-5 pt-3">
                    <Card name="PWA APPLICATION DEVELOPMENT " color="black" textColor ="#fff"/>
                </div>
                
            </div>
        </div>
    )
}

export default Portfolio;

