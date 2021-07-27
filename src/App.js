
import { useState } from 'react'
import Container from './components/Container';
import Header from './components/Header'
import OutputData from './logic/OutputData';
import InputUrl from './components/InputUrl'




function App() {

  const [url, setUrl] = useState('')

  const getUrl = url => {
    console.log('URL in App is:', url)
    setUrl(url)
  }


  return (
    <>
      <Header />
      <Container color="grey">
        <InputUrl getUrl={getUrl} />
      </Container>
      <Container color="#eee">
        <OutputData url={url} />
      </Container>
    </>
  );
}



export default App;
