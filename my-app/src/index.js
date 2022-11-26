// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import vaibhavPhoto from './pics/pic1.jpg'

//Applying css to jsx
const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}

// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Day 3 of React basics'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Vaibhav',
  lastName: 'Singh',
}
const date = 'Nov 25, 2022'

// JSX element, header
const header = (
  <header style={headerStyles}>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 2002
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

// const imageStyles = {
//   maxWidth: '60%',
//   borderRadius: '30 px'
// }

const user = (
  <div style={{borderRadius: 50}}>
    <img src={vaibhavPhoto} alt='vaibhav' />
  </div>
)

// Applying css to main 
const mainStyles = {
  backgroundColor: '#F3F0F5',
}
// JSX element, main
const main = (
  <main style={mainStyles}>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
)

const copyRight = 'Copyright 2022'

//Applying css to footer s
const footerStyles = {
  backgroundColor: '#61DBFB',
}

// JSX element, footer
const footer = (
  <footer style={footerStyles}>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)