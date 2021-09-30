import './App.css';
import React, { Component } from 'react'
import Section from './components/Section/Section.jsx';
import Notification from './components/Notification/Notification';
import FeedBackOpt from './components/FeedBackOpt/FeedBackOpt';
import Statistics from './components/Statistics/Statistics';
const initialState = {
    good: 0,
  neutral: 0,
  bad: 0
}
export default class App extends Component {
  state = initialState
  
  onHandleClick = (e) => {
    const name = e.target.name
    console.log(name)
    this.setState((prev) => ({
      ...prev,
      [name]:this.state[name]+1,
    }))
  }

  totalAmount = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

    positivePercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.totalAmount()) * 100);
    };
  
  onReset = (e) => {
    this.setState({...initialState})
  }

  render() {
    const arrFeedback = Object.keys(this.state)
    const { good, neutral, bad } = this.state;

    console.log(`arrFeedback`, arrFeedback)
    return (
      <>
        <Section title='Please leave feedback'>
          <FeedBackOpt onLeaveFeedback={this.onHandleClick} btnNames={arrFeedback} reset={this.onReset}/>
        </Section>
        <Section title='Statistics'>
          {this.totalAmount() ? (<Statistics good={good} neutral={neutral} bad={bad} total={this.totalAmount()} positive={this.positivePercentage()}/>)
            : (<Notification notice='No feedback given' />
)}
        </Section>
      </>
    )
  }
}

