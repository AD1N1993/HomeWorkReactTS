import './App.css';
import React from "react";
import Message from "./components/Message/Message";

function App() {
    return (
        <div className="App">
            <Message nickName={"Artem"}
                     text={"npm start нажимал?"}
                     avatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4XSv8zvv1XvIvvz8PFg8hRwUTQJjbis-CJg&usqp=CAU"}
                     hours={20}
                     minutes={0}
        />
</div>
)
    ;
}

export default App;
