import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FileSearch from './components/FileSearch';
import FileList from './components/FileList';
import defaultFiles from './utils/defaultFiles';

function App() {
  return (
    <div className="App container-fluid">
      <div className='row'>
        <div className='col-3 bg-light left-panel'>
          <FileSearch title='我的Markdown' onFileSearch={()=>{}}/>
          <FileList 
            files={defaultFiles}
            onFileClick={(id) => {console.log(id);}}
            onFileDelete={(id) => {console.log('deleting',id);}}
            onSaveEdit={(id,value) => {console.log(id,value);}}
          />
        </div>
        <div className='col-9 bg-primary right-panel'>
          <h1>This is the right</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
