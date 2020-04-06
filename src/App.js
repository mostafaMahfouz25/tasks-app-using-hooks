import React from 'react';
import './css/App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Header from './components/Header';
import TaskContextProvider from './context/TaskListContext';


function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <div className="container">
            <div className="app-wrapper">
                <Header />
                <div className="main">
                    <TaskForm />
                    <TaskList />
                </div>
            </div>
        </div>
      </TaskContextProvider>
    </div>
  );
}

export default App;
