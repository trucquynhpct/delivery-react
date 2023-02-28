import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Routes, Route, Navigate } from 'react-router-dom';

class Main extends Component {
   constructor(props) {
      super(props);
      
      this.state = {
         dishes: DISHES,
         comments: COMMENTS,
         promotions: PROMOTIONS,
         leaders: LEADERS
      }
   }
   
   render() {
    const HomePage = () => {
    return (
    <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} promotion={this.state.promotions.filter((promo) => promo.featured)[0]} leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>
    );
    }
      
      const DishWithId = ({match}) => {
         return (
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
         );
      }
   
      return (
         <div>
            <Header />
            <Routes>
           <Route path="/home" element={<HomePage />} />
           <Route path="/aboutus" element={<About leaders={this.state.leaders} />} />
           <Route path="/menu" element={<Menu dishes={this.state.dishes} />} />
           <Route path="/menu/:dishId" element={<DishWithId />} />
           <Route path="/contactus" element={<Contact />} />
           <Route path="/" element={<Navigate to="/home" />} />
           </Routes>             
            <Footer />
         </div>
      );
   }
}

export default Main;
