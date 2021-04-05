import React from 'react';
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

const App = () => {

  return (

    <>
      <ImageGallery />
      <RandomPractice />
      <OrderedList />
      <Greeting />
      <Heading />
      <Unorderedlist />
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
    </>


  );

}
export default App;

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