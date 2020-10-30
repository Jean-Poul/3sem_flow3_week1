import logo from './logo.svg';
import './App.css';
import upper, {text1, text2, text3} from './file1';
import person, {males, females} from './file2';
import { Welcome, MultiWelcome, WelcomePerson } from './file3';
import { persons } from './file2';


const list = [...males, ...females];
console.log(list);

const { firstName, email } = person;

const lists = [...males, "Kurt", "Helle", ...females, "Tina"];
console.log(lists);

const personV2 = [{ ...person, friends:list, phone:'123456' }];
console.log(personV2)

function App() {
  return (
    <div className="App">
      <h2>Ex 1</h2> 
      <p>{upper("please uppercase me")}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <h2>Ex 2</h2>
      <p>First name: {firstName} <br />Email: {email}</p>
      <h2>Ex 3 </h2>
      <Welcome name = 'Jean-Poul'/>
      <MultiWelcome />
      
      <WelcomePerson person={persons[0]}/>
      <WelcomePerson person={persons[1]}/>
      <WelcomePerson person={persons[2]}/>
      <WelcomePerson person={persons[3]}/>
      
    </div>
  );
}

export default App;
