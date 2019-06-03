import React from 'react';
import { HashRouter as Router, Route, NavLink as Link } from "react-router-dom"; // HashRouter
import { Rating, Container, Card, Button, Icon, Image, Header, Grid } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';

// <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />

const NavCard = ({title,text,button,icon,link}) => { 
  console.log(link)
  return (
  <Card centered={true}>
     <Card.Content textAlign='center'>
       <Icon name={icon} size="massive"/>
     </Card.Content>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Description>
        {text}
      </Card.Description>
    </Card.Content>
    <Card.Content extra textAlign='center'>
      <Button positive>{link.toLowerCase().startsWith('http') ?  <a href={link}>{button}</a> : <Link to={link}>{button}</Link>}</Button>
    </Card.Content>
  </Card>
)
}

const Home = () => (
    <Container>
     	<Header as='h2' icon textAlign='center'>
	      <Icon name='world' circular />
	      <Header.Content>Get Started With Graphs</Header.Content>
	    </Header>
	    <Card.Group>
		<NavCard title="Use My Data" text="Use your own data to populate your graph, coming from databases, spreadsheets or web apis" button="Load Data" icon="upload" link="/my-data"/>
		<NavCard title="Example Data" text="Use our guided examples to learn about graphs" button="Choose your Example" icon="graduation" link="/example-data"/>
		<NavCard title="Blank Slate" text="Draw your graph interactively" button="Draw your graph" icon="pencil" link="/blank-slate"/>
		</Card.Group>
     </Container>
)
const Routes = () => (
	  <Router>
   		  <Route exact path="/" component={Home} />
     	  <Route path="/my-data" component={MyData} />
		<Route path="/example-data" component={ExampleData} /> 
		<Route path="/blank-slate" component={Home} />
		<Route path="/load-json" component={LoadJson} />
   	  </Router>
)
const ExampleData = () => (
    <Container>
     	<Header as='h2' icon textAlign='center'>
	      <Icon name='graduation' circular />
	      <Header.Content>Example Data</Header.Content>
	    </Header>
	    <Card.Group itemsPerRow={4}>
		<NavCard title="Recommendations" text="Explore different recommendation queries on the movie-lens dataset." button="Get Started" icon="film" link="https://neo4j.com/sandbox-v2/movies"/>
		<NavCard title="Network Management" text="Learn how to model a Datacenter Network." button="Get Started" icon="server" link="https://neo4j.com/sandbox-v2/network-management"/>
		<NavCard title="Crime Investigations" text="Learn how to use a graph to connect people, objects, locations and events" button="Get Started" icon="find" link="https://neo4j.com/sandbox-v2/pole"/>
		<NavCard title="Offshore Leaks" text="Learn how journalists investigated shell companies" button="Get Started" icon="newspaper outline" link="https://neo4j.com/sandbox-v2/panama-papers"/>
		</Card.Group>
    </Container>
)

const MyData = () => (
    <Container>
     	<Header as='h2' icon textAlign='center'>
	      <Icon name='cogs' circular />
	      <Header.Content>Use My Data</Header.Content>
	    </Header>
	    <Card.Group itemsPerRow={4}>
		<NavCard title="Relational DB" text="Load Data from your Relational Database with the Neo4j-ETL Tool" button="Import Tables" icon="database" link="https://neo4j.com/developer/neo4j-etl"/>
		<NavCard title="Spreadsheet" text="Load Data from a Google Spreadsheet" button="Import Sheets" icon="table" link="https://neo4j.com/sandbox-v2/spreadsheet"/>
		<NavCard title="JSON" text="Load JSON from a Web API or Text" button="Import JSON" icon="code" link="/json"/>
		<NavCard title="Twitter" text="Use your own twitter data to analyze a social network and its communication" button="Get Started" icon="twitter" link="https://neo4j.com/sandbox-v2/twitter"/>
		</Card.Group>
    </Container>
)


const LoadJson = () => (
    <Container>
     	<Header as='h2' icon textAlign='center'>
	      <Header.Content>Load JSON</Header.Content>
	    </Header>
	    <Button>Import</Button>
    </Container>
)


function App() {
  return (
	<Routes/>
  );
}

export default App;
