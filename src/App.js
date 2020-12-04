import {useState, useRef} from 'react'
import './App.css';

function App() {
    const ref = useRef('');
    const [list, setList] = useState([]);

    function onDeleteElement(index){
        let newList = [...list];
        newList.splice(index, 1);
        setList([...newList])
    }

    function onCompleteElement(index){
        console.log(list[index])
        let newEl = list[index];
        newEl.isComp = true;
        let newList = [...list];
        newList[index] = newEl;
        setList([...newList])
    }

    function onSubmitForm(e){
        e.preventDefault();
        if(ref.current.value === ''){
            return
        }

        if(list.length===13){
            alert('Лист заполнен уважаемый пользователь!')
            return
        }

        setList([...list, {val: ref.current.value, isComp: false}])
        ref.current.value = ''
    }

  return (
    <div className="App">
        <div className="app">
            <div>
                <h2>ToDo App</h2>
                <div className="app__content">
                    <div>
                        <form onSubmit={onSubmitForm} className="app__form">
                            <input ref={ref} type="text" placeholder="Write some todo"/>
                            <button  type="submit">Add</button>
                        </form>
                        <hr/>
                        <ul>
                            {
                                list.map((el, index) => {
                                    return (
                                    <div key={index} className="list__el">
                                        <li style={el.isComp===true ? {textDecoration:"line-through"} : {textDecoration:"none"}} key={index}>{el.val}</li>
                                        <div className="buttons">
                                            <button onClick={() => onDeleteElement(index)} className="delButton">del</button>
                                            <button onClick={() => onCompleteElement(index)} className="compButton">comp</button>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <button onClick={() => {
                        setList([])
                        ref.current.value = ''
                    }} className="clearButton"><strong>Clear</strong></button>
                </div>
            </div>

        </div>
    </div>
  );
}

export default App;
