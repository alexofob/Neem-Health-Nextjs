// imported modules
import PharmNavbar from './pharmNavbar';
import PharmHeader from './pharmHeader';
import TopPharmacies from './topPharmacies';
import PharmHowItWorks from './pharmHowItWorks';
import PharmCallToAction from './pharmCallToAction';


const HomePage = () => (
  <div>
    <main>
      <PharmNavbar />
      <PharmHeader />
      <PharmHowItWorks />
      <div className="separator"><hr /></div>
      <TopPharmacies />
      <PharmCallToAction />
    </main>

    <footer>
      © Neem Health
    </footer>

    <style jsx>{`
      .separator {
        opacity: 0.38;
        width: 70%;
        margin: 0 auto;
      }
    `}</style>

  </div>
);

export default HomePage;
