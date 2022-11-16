import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FileSearch from './components/FileSearch';
import FileList from './components/FileList';
import defaultFiles from './utils/defaultFiles';
import BottonBtn from './components/BottonBtn';
import {faPlus, faFileImport} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App container-fluid px-0">
      <div className='row g-0'>
        <div className='col-3 bg-light left-panel'>
          <FileSearch title='我的Markdown' onFileSearch={()=>{}}/>
          <FileList 
            files={defaultFiles}
            onFileClick={(id) => {console.log(id);}}
            onFileDelete={(id) => {console.log('deleting',id);}}
            onSaveEdit={(id,value) => {console.log(id,value);}}
          />
          <div className='row g-0'>
            <div className='col'>
              <BottonBtn 
                text='新建'
                colorClass='btn-primary'
                icon={faPlus}
              />
            </div>
            <div className='col'>
              <BottonBtn 
                text='导入'
                colorClass='btn-success'
                icon={faFileImport}
              />
            </div>
          </div>
        </div>
        <div className='col-9 bg-primary right-panel'>
          <h1>This is the right</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
