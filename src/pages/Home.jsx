import React, { useEffect, useState } from "react";
import group from "../assets/Group.svg";
import alert from "../assets/alert-circle 1.svg";
import "./Home.css";
import SearchBar from "../components/searchBar/SearchBar";
import Navbar from "../components/navbar/Navbar";
import Carousel from "../components/carouselSection/Carousel";
import logo1 from "../assets/Logo-1.png";
import logo2 from "../assets/Logo-2.png";
import logo3 from "../assets/Logo-3.png";
import logo4 from "../assets/Logo-4.png";
import Footer from "../components/footer/Footer";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let reqObj = {
      method: "GET",
      redirect: "follow",
    };
    const getProductData = async () => {
      try {
        const resp = await fetch(
          "https://dev-api.conqt.com/api/product/Get-All-Products",
          reqObj
        );
        const { data } = await resp.json();
        // console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductData();
  }, []);
  return (
    <section className="parent">
      <header className="header">
        <p>
          <i class="bi bi-check text-white"></i> Free shipping on all orders
          over $50
        </p>
        <div className="header-part">
          <p>
            Eng <img src={group} alt="" />
          </p>
          <p>Faqs</p>
          <p>
            <img src={alert} alt="" /> Need help{" "}
          </p>
        </div>
      </header>
      {/* search bar here............. */}
      <SearchBar />

      {/* navbar here.............. */}
      <Navbar />

      {/* carousel here----- */}
      <Carousel />

      {/* products logo here */}
      <div className="logos">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
      </div>

      {/* products here */}

      <div className="product-list">
        <h4>Featured Products</h4>
        <div className="row">
          {products?.slice(0, 4)?.map((item) => (
            <div className=" col-md-4 col-lg-3 ">
              <img src={item?.image_url} height={200} alt="" />
              <h4>{item?.brand_name}</h4>
              <p>{"50$"}</p>
            </div>
          ))}
        </div>

        {/* our product list  */}
      </div>
      <div className="product-list mt-5">
        <h4>Our Products</h4>
        <p>
          <ul>
            <li>All</li>
            <li>Newest</li>
            <li>Trending</li>
            <li>Rest Seller</li>
            <li>Featured</li>
          </ul>
        </p>
        <div className="row">
          {products?.slice(0, 12)?.map((item) => (
            <div className=" col-md-4 col-lg-3 ">
              <img src={item?.image_url} height={200} alt="" />
              <h4>{item?.brand_name}</h4>
              <p>{"50$"}</p>
            </div>
          ))}
        </div>
      </div>

      {/* footer here */}
      <hr className="mt-5" />
      <Footer />
    </section>
  );
}
