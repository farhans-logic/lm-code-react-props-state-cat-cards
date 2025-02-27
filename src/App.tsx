import {useState} from 'react'
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Cat from './data/cat';
import catData from './data/cat-data';
import CatCard from "./components/cat_card";


function App(): JSX.Element {

    // JavaScript/TypeScript code can be inserted here!
    const [ cats, setCats ] = useState<Array<Cat>>(catData);
    console.log("Our pretties 😻: ", cats)

    const catCount: number = cats.length;
    return (
        <>
            <Navbar/>
            <Header catCount={catCount}/>

            <main>
                <div className='cards__wrapper'>
                    {cats.map((cat, index) => (
                        <CatCard
                            key={cat.id} 
                            name={cat.name}
                            species={cat.species}
                            favFoods={cat.favFoods}
                            birthYear={cat.birthYear}
                            catIndex={index}
                        />
                    ))}
                </div>
            </main>

            <Footer/>
        </>
    );
}

export default App;
