import Dialog from 'material-ui/Dialog';
import { inject, observer } from 'mobx-react';

// imported modules
import PharmNavbar from './pharmNavbar';
import PharmHeader from './pharmHeader';
import TopPharmacies from './topPharmacies';
import PharmHowItWorks from './pharmHowItWorks';
import PharmCallToAction from './pharmCallToAction';
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
      .separator {
        opacity: 0.38;
        width: 70%;
        margin: 0 auto;
      }
    `}</style>

  </div>
);

export default inject('viewStore')(observer(HomePage));
