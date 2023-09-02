import { useState } from 'react'

//Unicafe Exercise Submitted By Shafique Hussain Shah
//48 Hours Spent On Making This 

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const Statisticline = ({text,value}) => <p>{text}{value}</p>
const Increament = (state, setState) => () => setState(state +1)

const Statistics = ({good,neutral,bad}) => {
const all = good + neutral + bad
const average = good-bad/all
const positive = good/all*100
  if(all === 0){
    return(
      <div>
        <table>
          <thead>
            <tr>
              <td>
                <h1>Statistics</h1>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  No Feedback Given
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  return(   
    <div>
      <table>
        <thead>
        <tr>
          <td>
            <h1>Statistics</h1>
          </td>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td> <Statisticline  text="good"/> </td>
          <td> <Statisticline value={good}/> </td>
      </tr>

      <tr>
          <td> <Statisticline text="neutral"/>  </td>
          <td> <Statisticline value={neutral}/> </td>
      </tr>

      <tr>
          <td> <Statisticline text= "bad"/> </td>
          <td> <Statisticline value={bad}/> </td>
      </tr>

      <tr>
          <td> <Statisticline text= "all"/> </td>
          <td> <Statisticline value={all}/> </td>
      </tr>

      <tr>
          <td> <Statisticline text= "average"/> </td>
          <td> <Statisticline value={average}/> </td>
      </tr>

      <tr>
          <td> <Statisticline text= "positive"/> </td>
          <td> <Statisticline value={positive}/> </td>
      </tr>

      </tbody>
      </table>      
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [Selected, setSelected] = useState(0)
  return (

    <div>
      <h1>give feedback</h1>
      <Button onClick={Increament(good, setGood)} text= 'Good'/>
      <Button onClick={Increament(neutral, setNeutral)} text= 'Neutral'/>
      <Button onClick={Increament(bad, setBad)} text= 'Bad'/> 
      <br />
      <Statistics good={good} neutral={neutral} bad= {bad}/> 
    </div>

           )
}

export default App
