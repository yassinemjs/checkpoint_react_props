
import './App.css';
import Profile from './profile/Profile'
import Picture from './profile/Picture'
import myphoto from './profile/myphoto.jpg'

function alertName (name) { alert( "hello " + name)}


function App() {
  const styleObj ={ color :"red",  fontSize: '25px' ,margin:'20px' ,padding :'20px'  };
  const styleImg ={padding :'50px'}
  return (
    <div style ={styleObj} className="App">
       <div className="data">
         <Profile 
         handleName ={alertName}
         name ="Yassine Mohamed"
         bio="Software engineer with extensive experience and management skills and works for minister of youth and sport .the minister has implemented the radio and tv web technologies in the youth clubs , so I m responsible of installing materials and training concerned people how to use plateforme radio."
         profession ="Computer Engineer"  />
      </div>
      <div style ={styleImg} className='photo'>
         <Picture src={myphoto} height="200px" width ="200px">
               this is my photo
         </Picture>
      </div>
       
    </div>
  );
}

export default App;
