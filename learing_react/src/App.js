import logo from './logo.svg';
import './App.css';

function Header() {
  return <header><h1><a href='/'>WWW</a></h1></header>
}
function Nav(props){
  console.log(props.data);
  const list = props.data.map((e) => {
    return <li key={e.id}><a href={'/read/'+e.id}>{e.title}</a></li>
  });
  // const list = [
  //   <li><a href='/read/1'>html</a></li>,
  //   <li><a href='/read/2'>css</a></li>
  // ]
  return <nav>
        <ol>
          {list}
        </ol>
      </nav>
}
function Article(props){
  console.log('props', props.title);
  return <article>
    <h2>{props.title}</h2>
    Hello, WEB!
  </article>
}

function App() {
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'}
  ];
  return (
    <div>
      <Header></Header>
      <Nav data={topics}></Nav>
      <Article title="HI" body="Hello, WEB!"></Article>
    </div>
  );
}

export default App;
