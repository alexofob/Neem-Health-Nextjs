import Dialog from 'material-ui/Dialog';
import { inject, observer } from 'mobx-react';

// imported modules
import HomeNavbar from './homeNavbar';
import IntroHeader from './introHeader';
import DrugSearch from './drugSearch';
import FeaturedPharmacies from './featuredPharmacies';
import HowItWorks from './howItWorks';
import CallToAction from './callToAction';
import PwdLessLogin from '../account/pwdlessLogin';

import { ViewStore } from '../../store/viewStore';

const styles = {
  dialogContent: {
    width: '90%',
    maxWidth: 420,
  },
};

type Props = {
  viewStore: ViewStore,
}

const dialogContent = {
  login: { node: <PwdLessLogin />, title: "Let's get started." },
};

const HomePage = ({ viewStore }: Props) => (
  <div>
    <main>
      <section>
        <HomeNavbar />
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

    <Dialog
      title="Let's get started."
      modal={false}
      open={viewStore.dialogOpen}
      onRequestClose={viewStore.closeDialog}
      contentStyle={styles.dialogContent}
      autoScrollBodyContent
    >
      {dialogContent[viewStore.dialogContent].node}
    </Dialog>

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


export default inject('viewStore')(observer(HomePage));
