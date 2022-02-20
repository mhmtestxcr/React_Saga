// import {TodoListPage} from './components/TodoListPage'
import './App.css';
import Counter  from './components/Counter';
import UserListPage from './components/UserListPage';
import {Routes,Route,Link} from 'react-router-dom';



function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserListPage/>}></Route>
        <Route path='Counter' element={<Counter/>}></Route>
      </Routes>
      <Link className='link-user' to='/'>UserListPage Sayfası </Link>
      <Link className='link-count' to='/Counter'> Counter Sayfası</Link>
    </div>
  );
}

export default App;

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }
