import { useEffect, useState } from "react";
import axios from "axios"


function App() {


  const [enterdvalue,setevalue] = useState("")
  const [fruit,setfruit] = useState([])

  useEffect(function(){
    axios.get("http://localhost:5000/fruitlist").then(function(data){
      setfruit(data.data)
    })
  },[])




  function handlevalue(evt)
  {
    setevalue(evt.target.value)
  }

  function add()
  {
    axios.post("http://localhost:5000/addfruit",{newfruit:enterdvalue})


    setfruit([...fruit,{name:enterdvalue}])
    setevalue("")
  }




  return (
    <div>
      <input onChange={handlevalue}></input>

      <button onClick={add}>Add</button>

      {fruit.map(function(item,index){
        return <h1 key={index}>{item.name}</h1>
      })}
    </div>
  );
}

export default App;
