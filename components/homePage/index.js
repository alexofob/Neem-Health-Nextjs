import { observer } from 'mobx-react';
import { ViewStore } from '../../store/viewStore';

// imported modules
import HomeNavbar from './homeNavbar';
import IntroHeader from './introHeader';
import DrugSearch from './drugSearch';
import FeaturedPharmacies from './featuredPharmacies';
import HowItWorks from './howItWorks';
import CallToAction from './callToAction';

type Props = {
  store: ViewStore,
}

const HomePage = ({ store }: Props) => (
  <div>
    <main>
      <section>
        <HomeNavbar
          store={store}
        />
        <IntroHeader />
      </section>
      <DrugSearch />
      <FeaturedPharmacies />
      <div className="separator"><hr /></div>
      <HowItWorks />
      <CallToAction />
    </main>

    <footer>
      © Neem Health
    </footer>

    <style jsx>{`
      section {
        background-image: linear-gradient(-90deg, #F7FDFB, #7BB2B7);
      }
      .separator {
        opacity: 0.38;
        width: 70%;
        margin: 0 auto;
      }
    `}</style>

  </div>
);

export default observer(['store'], HomePage);
