import React, { useState } from "react"
import { Formik, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Flex, DivWrapper, Button, Text } from "../../components"
import { Input, FieldStyled } from "./styled"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Firebase from "../../config/firebaseConfig"

const FormContact = () => {
  const [submit, setSubmit] = useState({
    isShow: true,
    isLoading: false,
    name: ""
  })
  const schema = Yup.object().shape({
    name: Yup.string().required("Please input your name"),
    email: Yup.string()
      .email()
      .required("Please input your email"),
    message: Yup.string().required("Please input your message")
  })
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: ""
        }}
        validationSchema={schema}
        onSubmit={(obj, { resetForm }) => {
          setSubmit(prevState => ({ ...prevState, isLoading: true }))
          setTimeout(function() {
            Firebase.database()
              .ref()
              .child("mail")
              .push(obj)
              .then(
                setSubmit(prevState => ({
                  ...prevState,
                  isShow: false,
                  name: obj.name
                }))
              )
              .then(resetForm)
          }, 2000)
        }}
      >
        {({ touched, errors, values, setFieldValue, setFieldTouched }) => (
          <DivWrapper width='100%'>
            {submit.isShow ? (
              <Form>
                <Flex
                  flexDirection='column'
                  alignItems='flex-start'
                  width='100%'
                >
                  <DivWrapper className='form-group' width='100%'>
                    <Input
                      type='text'
                      name='name'
                      placeholder='Name'
                      maxLength='50'
                      width='100%'
                      className={`form-control ${touched.name &&
                        errors.name &&
                        "is-invalid"}`}
                    />
                    <ErrorMessage
                      component='div'
                      name='name'
                      className='invalid-feedback'
                    />
                  </DivWrapper>

                  <DivWrapper className='form-group' width='100%'>
                    <Input
                      type='email'
                      name='email'
                      placeholder='Email'
                      className={`form-control ${touched.email &&
                        errors.email &&
                        "is-invalid"}`}
                    />
                    <ErrorMessage
                      component='div'
                      name='email'
                      className='invalid-feedback'
                    />
                  </DivWrapper>
                  <DivWrapper className='form-group' width='100%'>
                    <FieldStyled
                      component='textarea'
                      name='message'
                      placeholder='Message | Maximum 200 letter'
                      maxLength='200'
                      rows='5'
                      className={`form-control ${touched.message &&
                        errors.message &&
                        "is-invalid"}`}
                    ></FieldStyled>
                    <ErrorMessage
                      component='div'
                      name='message'
                      className='invalid-feedback'
                    />
                  </DivWrapper>
                  <Button
                    border='1px solid #F09819'
                    bgColor='#F09819'
                    fontcolor='white'
                    hoverBgColor='white'
                    hoverFontcolor='#F09819'
                    margin='1em 0'
                    padding='0.25em 1em'
                  >
                    {submit.isLoading ? (
                      <div>
                        <FontAwesomeIcon
                          className='fa-spin mr-2 ml-2'
                          icon={faSpinner}
                        />
                        SUBMITTING
                      </div>
                    ) : (
                      "SUBMIT"
                    )}
                  </Button>
                </Flex>
              </Form>
            ) : (
              <Flex flexDirection='column'>
                <Text.H5>
                  Thank you {submit.name}. I'll get back to you as soon as
                  possible.
                </Text.H5>
                <Button
                  border='1px solid #F09819'
                  bgColor='#ffff'
                  fontcolor='#F09819'
                  hoverBgColor='#F09819'
                  hoverFontcolor='#ffff'
                  margin='1em 0'
                  padding='0.25em 1em'
                  onClick={() =>
                    setSubmit({
                      isShow: true,
                      isLoading: false,
                      name: ""
                    })
                  }
                >
                  Back
                </Button>
              </Flex>
            )}
          </DivWrapper>
        )}
      </Formik>
    </React.Fragment>
  )
}

export default FormContact
