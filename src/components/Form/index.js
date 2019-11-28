import React from 'react';
// import { Text } from '@sitecore-jss/sitecore-jss-react';
//import { SitecoreForm } from '@sitecore-jss/sitecore-jss-forms';

// const Form = (props) => (
//   <div>
//     <p>Form Component</p>
//     <Text field={props.fields.heading} />
//   </div>
// );

// export default Form;

export default function Form(props) {
  /** @type {SitecoreForm} */
  const form = props.fields;

  // dump the form data out to the page
  return <code>{JSON.stringify(form, null, 2)}</code>;
}