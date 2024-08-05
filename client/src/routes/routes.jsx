import DefaultPageLayout from '../page layouts/DefaultPageLayout';
import LandingPageLayout from '../page layouts/LandingPageLayout';
import Landing from '../pages/Landing';
import DataCollectionOver from '../pages/DataCollectionOver';
import Error from '../pages/Error';
import Consent from '../pages/Consent';
import Questionnaire from '../pages/Questionnaire';
import Thankyou from '../pages/Thankyou';
import DemoLanding from '../pages/Demo/DemoLanding';
import DemoConsent from '../pages/Demo/DemoConsent';
import DemoQuestionnaire from '../pages/Demo/DemoQuestionnaire';
import DemoThankyou from '../pages/Demo/DemoThankyou';
import MailingList from '../pages/MailingList';
import MailingThankyou from '../pages/MailingThankyou';

// Handle when data collection is over
const finished = true;

const routes = [
  {
    path: "/",
    element: <LandingPageLayout>{finished ? <DataCollectionOver/> : <Landing/>}</LandingPageLayout>,
    errorElement: <DefaultPageLayout><Error/></DefaultPageLayout>,
  },
  {
    path: "/consent",
    element: <DefaultPageLayout><Consent/></DefaultPageLayout>,
  },
  {
    path: "/questionnaire",
    element: <DefaultPageLayout><Questionnaire/></DefaultPageLayout>,
  },
  {
    path: "/thankyou",
    element: <DefaultPageLayout><Thankyou/></DefaultPageLayout>,
  },
  {
    path: "/demo",
    element: <DefaultPageLayout><DemoLanding/></DefaultPageLayout>,
  },
  {
    path: "/demo-consent",
    element: <DefaultPageLayout><DemoConsent/></DefaultPageLayout>,
  },
  {
    path: "/demo-questionnaire",
    element: <DefaultPageLayout><DemoQuestionnaire/></DefaultPageLayout>,
  },
  {
    path: "/demo-thankyou",
    element: <DefaultPageLayout><DemoThankyou/></DefaultPageLayout>,
  },
  {
    path: "/mailing-list",
    element: <DefaultPageLayout><MailingList/></DefaultPageLayout>,
  },
  {
    path: "/mailing-thankyou",
    element: <DefaultPageLayout><MailingThankyou/></DefaultPageLayout>,
  },
];

export default routes;
