import {useState} from 'react';
const ToDo = () => {  
    let [tasks,setTasks] = useState([]);
    let [num,setNum] = useState(1);
    let [taskDet,setTaskDet] = useState('');


    let clickHandler = () => {
     
        let taskObj = {"sno":num,"details":taskDet};
        tasks.push(taskObj);
        setTasks(tasks);
        num++;
        setNum(num);
    }


    let onChangeHandler = (e) => {
        //console.log(e.target.value);
        setTaskDet(e.target.value);
       // console.log(taskDet)
    }


    return (
        <div className='container-fluid'>
            Should see the table below
                <div className="table-responsive">
                    <table className="table table-primary table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Task</th>
                            </tr>
                        </thead>
                        <tbody>                                                      
                            {
                                tasks.map( (elem) => {
                                    return(
                                    <tr key={elem.sno}>
                                        <td> {elem.sno}</td>
                                        <td>{elem.details}</td>
                                    </tr>
                                    )
                                })
                            }
                           
                        </tbody>
                    </table>
                </div>
                Task details <input type="text" onChange={onChangeHandler} />
                <button onClick ={clickHandler}  className="bg-primary"> Add </button>


        </div>
     );
}
 
export default ToDo;
