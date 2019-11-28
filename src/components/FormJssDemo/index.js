import { Form } from '@sitecore-jss/sitecore-jss-react-forms';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { sitecoreApiHost, sitecoreApiKey } from '../../temp/config';

const FormJssDemo = ({ fields, history }) => (
  <Form
    form={fields}
    sitecoreApiHost={sitecoreApiHost}
    sitecoreApiKey={sitecoreApiKey}
    onRedirect={(url) => history.push(url)}
  />
);

export default withRouter(FormJssDemo);

// import React from 'react';
// //import { SitecoreForm } from '@sitecore-jss/sitecore-jss-forms';

// export default function Form(props) {
//   /** @type {SitecoreForm} */
//   const form = props.fields;

//   // dump the form data out to the page
//   return <code>{JSON.stringify(form, null, 2)}</code>;
// }