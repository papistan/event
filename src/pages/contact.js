import React from "react"
import { useField, useForm } from "react-form"
import "../styles/form.scss"

function Field({ name, type }) {
  const {
    value = "",
    meta: { error, isTouched },
    getInputProps,
  } = useField(name, {
    validate: value => {
      if (!value) {
        return `${name} is required.`
      }
      if (name === "email") {
        if (!validateEmail(value)) {
          return "Please enter a valid email addresss"
        }
      }
      return false
    },
  })

  return (
    <>
      <input type={type || "text"} {...getInputProps()} value={value} />
      {isTouched && error ? <span>{error}</span> : null}
    </>
  )
}

function ContactForm() {
  const {
    Form,
    meta: { isSubmitted },
  } = useForm({
    onSubmit: async (values, instance) => {},
  })

  return (
    <>
      {isSubmitted ? (
        <p>Thanks!</p>
      ) : (
        <Form className="contact-form">
          <label>
            First: <Field name={"first"} />
          </label>
          <label>
            Last: <Field name={"last"} />
          </label>
          <label>
            Email: <Field name={"email"} type={"email"} />
          </label>
          <label>
            Phone: <Field name={"phone"} type={"tel"} />
          </label>

          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </>
  )
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export default ContactForm
