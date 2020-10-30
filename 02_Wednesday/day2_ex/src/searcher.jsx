import React, { useState, useEffect } from "react";

export default function SearchResults() {

    const [todo, setTodo] = useState({ title: "" });
    const [id, setId] = useState(1);

    const [joke, setJoke] = useState({ title: "" });
    const [chuckSelector, setchuckSelector] = useState(false);

    const [timeJoke, setTimeJoke] = useState({ title: "" });
    const [jokeSelector, setJokeSelector] = useState(false);

    function makeOptions(method, body) {
        method = method ? method : 'GET';
        const opts =  {
          method: method,
          headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
          }
        }
        if(body){
          opts.body = JSON.stringify(body);
        }
        return opts;
     }
     
  
    useEffect(() => {
      function fetchTodo() {
        console.log("Fetching")
        fetch('https://jsonplaceholder.typicode.com/todos/'+id)
        .then(res=>res.json())
        .then(data =>  setTodo(data))  
        .catch(err => console.log("Ups Todo Error"+err))
      }
      fetchTodo();
    },[id]);

    useEffect(() => {
        function fetchChuckNorris() {
          console.log("Fetching")
          fetch('https://api.chucknorris.io/jokes/random')
          .then(res=>res.json())
          .then(joke =>  setJoke(joke))  
          .catch(err => console.log("Ups Chuck Error"+err))
        }
        fetchChuckNorris()
  
      },[chuckSelector]);

      useEffect(() => {
        function fetchJoke(method, body) {
        const options = makeOptions(method, body);
                
          console.log("Fetching")
          fetch('https://icanhazdadjoke.com/', options)
          .then(res=>res.json())
          .then(timeJoke =>  setTimeJoke(timeJoke))  
          .catch(err => console.log("Ups Joke Error"+err))
        }

        const interval = setInterval(() => {
            fetchJoke();
        }, 10000)
        return () => {
            clearInterval(interval)
            alert('Hov, du er på  vej væk')
        }
  
      },[jokeSelector]);
      
  
    return (
      <div>

        <input value={id} onChange={e => setId(e.target.value)} />
        <button onClick={ () => setchuckSelector(!chuckSelector)}>Get Chuck Norris Joke</button> 
        <button onClick={ () => setJokeSelector(!jokeSelector)}>Get Random Joke</button> 

        <p> Name: {todo.title} </p>

        <p> Chuck Norris joke: {joke.value} </p>

        <p> Random joke: {timeJoke.joke} </p>
       
      </div>
    );
  }