import "./styles.css";
import {useEffect, useState} from "react";

export default function App() {

  let [search,setSearch] = useState("");
  let [data, setData] = useState([]);
  let [results, setResults] = useState([]);

  useEffect(()=>{
    const arr = data.filter((el)=>{
      if (search)
      {return el.title.toLowerCase().includes(search.toLowerCase())}
      return null
      
    })
    setResults(arr);
    
  },[search,data])

  useEffect(()=>{
    fetch("https://64133698c469cff60d5c7742.mockapi.io/books")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      // console.log(data);
      setData(data)
    })
  },[])

  let function1 = (e)=>{
    setSearch(e.target.value);
  }
  return (
    <div className="App">
      <h1>Shop Books</h1>
      <p>{search}</p>
      <input type = "text" onChange = {function1}/>
      <p>{results.length ? results.map((el)=>{
        return (<p>{el.title}</p>)
      }) : "no results found"}</p>
      
    </div>
  );
}
