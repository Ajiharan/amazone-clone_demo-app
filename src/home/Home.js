import React from 'react';
import './Home.css';
import Product from '../product/Product';

const Home = () => {
    console.log("Home component");
    return (
        <div className="home">       
            <img className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg" alt="banner"/>
            <div className="home__row">
                <Product
                    id="1"
                    title="Roku Express HD Streaming Media Player 2019"
                    price={100}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41Sj6WWOXtL._AC_US160_.jpg"
                />
                <Product
                    id="2"
                    title="WD 2TB Elements Portable External Hard Drive - USB 3.0 - WDBU6Y0020BBK"
                    price={530}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L._AC_US160_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="3"
                    title="HP 63 | Ink Cartridge | Black | F6U62AN"
                    price={480}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/41xdIrw9Z9L._AC_US160_.jpg"
                />
                <Product
                    id="4"
                    title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
                    price={310.55}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41m+krxXiBL._AC_US160_.jpg"
                />
                  <Product
                    id="5"
                    title="Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)"
                    price={200}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-244373AC9B3C4612._V533746474_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="6"
                    title="HP 61 | Ink Cartridge | Black | CH561WN"
                    price={220}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UL320_.jpg"
                />
               
            </div>
        </div>
    );
};

export default React.memo(Home);