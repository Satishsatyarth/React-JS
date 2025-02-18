import './NetflixIndexComponent.css';
import NetflixHeaderComponent from './NetflixHeaderComponent';
import NetflixMainComponent from './NetflixMainComponent';


export default function NetflixRegisterComponent(){
    return(
    <div className="container-fluid">
        <div className="box">
            <header>
            <NetflixHeaderComponent/>
            </header>
            <section className="d-flex justify-content-center align-items-center ">
                <main>
                    <NetflixMainComponent/>
                    <NetflixRegisterComponent/>
                </main>
            </section>
        </div>
    </div>
    )
}