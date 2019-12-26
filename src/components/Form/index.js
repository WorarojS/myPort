import React from "react"
import { Formik, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Flex, DivWrapper, Button } from "../../components"
import { Input, FieldStyled } from "./styled"
const FormContact = () => {
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
        onSubmit={obj => {
          alert(JSON.stringify(obj))
        }}
      >
        {({ touched, errors, values, setFieldValue, setFieldTouched }) => (
          <DivWrapper width='100%'>
            {
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
                      placeholder='Please leave you message (maximum 200 letter)'
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
                    SUBMIT
                  </Button>
                </Flex>
              </Form>
            }
          </DivWrapper>
        )}
      </Formik>
    </React.Fragment>
  )
}

export default FormContact
