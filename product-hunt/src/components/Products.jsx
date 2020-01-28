import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import moment from "moment";

export default function Sandbox() {
  const [products, setProducts] = useState([]);
  const [dates, setDates] = useState([]);
  const [fmtdDates, setFormatedDates] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.producthunt.com/v1/posts/all?access_token=` +
          process.env.REACT_APP_PH_TOKEN
      )
      .then(res => {
        console.log(res.data.posts);
        const orderedProducts = res.data.posts.sort((a, b) => {
          if (a.votes_count > b.votes_count) return -1;
          else if (a.votes_count < b.votes_count) return 1;
          else return 0;
        });
        setProducts(orderedProducts);

        const days = [...dates];
        const formatedDays = [];
        res.data.posts.forEach(post => {
          if (!days.includes(post.day)) {
            days.push(post.day);
          }
        });
        days.sort((a, b) => {
          if (a > b) return -1;
          else if (a < b) return 1;
          else return 0;
        });
        setDates(days);

        days.forEach(day => {
          var formatedDate = moment(day).calendar(null, {
            sameDay: "[Today]",
            nextDay: "[Tomorrow]",
            nextWeek: "dddd",
            lastDay: "[Yesterday]",
            lastWeek: "dddd",
            sameElse: "DD/MM/YYYY"
          });
          formatedDays.push(formatedDate);
        });
        setFormatedDates(formatedDays);
      })
      .catch(Err => {
        console.log(Err);
      });
  }, []);

  return (
    <div className="main">
      {dates.map((date, i) => (
        <div className="day">
          <h3>{fmtdDates[i]}</h3>

          <ul className="products-container">
            {products
              .filter(product => product.day === date)
              .map((product, i) => (
                <div>
                  <Product key={i} product={product}  />
                </div>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
