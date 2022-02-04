import './App.css';
import React, {useState, useCallback} from 'react';
import CreateTask from './components/NewTask/CreateTask';
import Task from './components/Task/Task';
import Paginations from "./Pagination";
import './Pagination.css';

function App() {
	
	
	
	
	const [tasks, setTasks] = useState([
            {
                title: "Do the Yoga",
                completed: true,
				isFavourite: false
            },
            {
                title: "Make Breakfast",
                completed: true,
				isFavourite: false
            },
            {
                title: "Ready for Office",
                completed: false,
				isFavourite: false
            }
        ]);
    
        const addTask = title => {
            const newTasks = [...tasks, { title, completed: false, isFavourite: false }];
            setTasks(newTasks);
			setNoOfRecords(newTasks.length);
			console.log(NUM_OF_RECORDS);
        };
    
        const completeTask = index => {
            const newTasks = [...tasks];
            newTasks[index].completed = true;
            setTasks(newTasks);
			setNoOfRecords(newTasks.length);
        };
    
        const removeTask = index => {
            const newTasks = [...tasks];
            newTasks.splice(index, 1);
            setTasks(newTasks);
			setNoOfRecords(newTasks.length);
        };	
		
		const favTask = index => {
            const newTasks = [...tasks];
			if( false == newTasks[index].isFavourite ) {
				newTasks[index].isFavourite = true;
			} else {
				newTasks[index].isFavourite = false;
			}
            
			newTasks.sort((a, b) => b.isFavourite - a.isFavourite);
			console.log(newTasks);
            setTasks(newTasks);
			setNoOfRecords(newTasks.length);
        };	
		
		const [currentPage, setCurrentPage] = useState(1);
	const [NUM_OF_RECORDS, setNoOfRecords] = useState(tasks.length);
		
		let LIMIT = 4;
		
		const onPageChanged = useCallback(
			(event, page) => {
			  event.preventDefault();
			  setCurrentPage(page);
			},
			[setCurrentPage]
		  );
		  const currentData = tasks.slice(
			(currentPage - 1) * LIMIT,
			(currentPage - 1) * LIMIT + LIMIT
		  );
		
		
	
  return (
   <div className="todo-container">
                <div className="header">TODO - ITEMS</div>
				<div className="create-task" >
                    <CreateTask addTask={addTask} />
                </div>
                <div className="tasks">
				
                    {currentData.map((task, index) => (
                        <Task
                        task={task}
                        index={index}
                        completeTask={completeTask}
                        removeTask={removeTask}
						favTask={favTask}
                        key={index}
                        />
                    ))}
                </div>
				<div className="pagination-wrapper">
				  <Paginations
					totalRecords={NUM_OF_RECORDS}
					pageLimit={LIMIT}
					pageNeighbours={2}
					onPageChanged={onPageChanged}
					currentPage={currentPage}
				  />
				</div>
                
            </div>
  );
}

export default App;