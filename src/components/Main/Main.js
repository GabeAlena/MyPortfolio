import Search from './Search/Search';
import About from './About/About';

function Main() {
    return (
        <main className="content">
            <section className="search">
                <Search />
            </section>
            <section className="about">
                <About />
            </section>
        </main>    
    )
}

export default Main;