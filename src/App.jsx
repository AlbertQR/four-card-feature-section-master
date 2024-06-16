import './App.css';
import { Card } from './components/Card.jsx';
import supervisor from './assets/icon-supervisor.svg';
import builder from './assets/icon-team-builder.svg';
import karma from './assets/icon-karma.svg';
import calculator from './assets/icon-calculator.svg';

const Cards = [
  {
    borderColor: 'hsl(180, 62%, 55%)',
    gridArea: 'card-1',
    img: supervisor,
    title: 'Supervisor',
    text: 'Monitors activity to identify project roadblocks'
  },
  {
    borderColor: 'hsl(0, 78%, 62%)',
    gridArea: 'card-2',
    img: builder,
    title: 'Team Builder',
    text: 'Scans our talent network to create the optimal team for your project'
  },
  {
    borderColor: "hsl(34, 97%, 64%)",
    gridArea: "card-4",
    img: karma,
    title: "Karma",
    text: "Regularly evaluates our talent to ensure quality"
  },
  {
    borderColor: "hsl(212, 86%, 64%)",
    gridArea: "card-3",
    img: calculator,
    title: "Calculator",
    text: "Uses data from past projects to provide better delivery estimates"
  }
];

function App() {
  return (
    <main className="App">
      <h3 className="App__h3">
        Reliable, efficient delivery
      </h3>
      <h2 className="App__h2">Powered by Technology</h2>
      <p className="App__p">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
      <section className="App__grid">
        {Cards.map(card => <Card {...card} key={card.gridArea}/>)}
      </section>
    </main>
  );
}

export default App;
