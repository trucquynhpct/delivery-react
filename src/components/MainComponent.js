import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { Routes, Route, useNavigate } from "react-router-dom";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const Main = (props) => {

  const navigate = useNavigate();

  const HomePage = () => {
    return (
      <Home
        dish={props.dishes.filter((dish) => dish.featured)[0]}
        promotion={props.promotions.filter((promo) => promo.featured)[0]}
        leader={props.leaders.filter((leader) => leader.featured)[0]}
      />
    );
  };

  const DishWithId = ({ match }) => {
    return (
      <DishDetail
        dish={
          props.dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        comments={props.comments.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
      />
    );
  };

  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/aboutus' element={<About leaders={props.leaders} />} />
          <Route path='/menu' element={<Menu dishes={props.dishes} />} />
          <Route path='/menu/:dishId' element={<DishWithId />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='*' element={() => navigate('/home')} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default connect(mapStateToProps)(Main);