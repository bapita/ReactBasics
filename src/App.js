import React, { createContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Heading from './Heading';
import Unorderedlist from './Unorderedlist';
import Greeting from './Greeting';
import OrderedList from './OrderedList';
import ImageGallery from './ImageGallery';
import RandomPractice from './RandomPractice';
import Card from './Card';
import Sdata from './Sdata';
import Slot from './Slot';
import './index.css';
import HooksExp from './HooksExp';
import HooksChallenge from './HooksChallenge';
import EventsExp from './EventsExp';
import FormsExp from './FormsExp';
import LoginForm from './LoginForm';
import SpreadOperator from './SpreadOperator';
import ToDoList from './ToDoList';
import BootstrapMiniProj from './BootstrapMiniProj';
import GoogleKeepApp from './GoogleKeepApp';
import ContextApiCompA from './ContextApiCompA';
import UseEffectComp from './UseEffectComp';
import PokemonAxios from './PokemonAxios';
import CommonPage from './CommonPage';
import Error from './Error';
import Services from './Services';
import Navbar from './Navbar';

const ContextName = createContext(); // Context API
const ContextSecondName = createContext();
const App = () => {

  return (

    <>
      <ImageGallery />
      <RandomPractice />
      <OrderedList />
      <Greeting />
      <Heading />
      <Unorderedlist />
      <BootstrapMiniProj />
      <h1 className="heading_style">Top Netflix Series List</h1>
      <div className="back">
        {// using map function Sdata.map(ncard) to iterate the (value, index, array) from Sdata array of objects
          //Sdata.map(function ncard(val) { eliminating with Fat arrow function
            Sdata.map((val) => {
            return (
              <Card
                key={val.key}
                imgsrc={val.imgsrc}
                spanname={val.spanname}
                cardtitle={val.cardtitle}
                href={val.href} />
            );
          })

        }
      </div>
      <Slot />
      <HooksExp />
      <HooksChallenge />
      <EventsExp />
      <FormsExp />
      <LoginForm />
      <SpreadOperator />
      <ToDoList />
      <GoogleKeepApp />
        <ContextName.Provider value= {'Context API'}>
          <ContextSecondName.Provider value = {'concept'}>
            <ContextApiCompA />
          </ContextSecondName.Provider>
        </ContextName.Provider>
      <UseEffectComp />
      <PokemonAxios />
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <CommonPage name="About" />} />
        {/* If need to pass props then use render method. If only calling a page, then use Component */}
        <Route path="/contact" component={() => <CommonPage name="Contact"/>} />
        <Route path="/services/:technology/:subtech" component={Services} />
        <Route component={Error} />
      </Switch>
    </>


  );

}
export default App;
export { ContextName,ContextSecondName }; 

// to pass as props
/*
  <Card
      imgsrc="https://wallpapercave.com/wp/wp6329516.jpg"
      spanname="A NetFlix Original Series"
      cardtitle="EXTRA CURRICULAR"
      href="https://netflix.com/in/title/80990668?source=35"
  />
*/

// to pass as props from array of objects
/*
  <Card
        imgsrc={val.imgsrc}
        spanname={val.spanname}
        cardtitle={val.cardtitle}
        href={val.href} />
*/