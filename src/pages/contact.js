import * as React from "react";
import { graphql } from "gatsby";
import { FormiumForm } from "@formium/react";
import { formium } from "../lib/formium";

const ContactPage = ({ data }) => {
  const [success, setSuccess] = React.useState(false);

  if (success) {
    return <div>Thank you! Your response has been recorded.</div>;
  }

  return (
    <FormiumForm
      data={data.formiumForm}
      onSubmit={async (values) => {
        // Send form values to Formium
        await formium.submitForm("contact", values);
        setSuccess(true);
      }}
    />
  );
};

export default ContactPage;

export const query = graphql`
  {
    formiumForm(slug: { eq: "contact" }) {
      id
      createAt
      name
      projectId
      schema
      slug
      updateAt
      version
    }
  }
`;
