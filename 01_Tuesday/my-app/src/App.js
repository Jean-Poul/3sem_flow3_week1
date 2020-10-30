//import logo from './logo.svg';
import './App.css';
import Demo from './demo';
import Table from './namesTable';
import ClassTable from './classTable';


const names = [
  {'fname':'Anders','lname':'Henriksen'},
  {'fname':'Britta','lname':'Albertsen'},
  {'fname':'Kalle','lname':'Fredborg'}
];


function App() {
  return (
    <div className="App">
    <Table names={names} />
     <Demo />
     <ClassTable names={names} />
    </div>
  );
}

export default App;
