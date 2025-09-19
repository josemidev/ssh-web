import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const validation = Yup.object().shape({
    zip: Yup.string().required("Zip code is required"),
    language: Yup.string().required("Language is required"),
    help: Yup.string().required("Select an option"),
    property: Yup.string().required("Select an option"),
    name: Yup.string().required("Name is required"),
    email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    altPhone: Yup.string(),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
    conditions: Yup.boolean()
        .oneOf([true], "You must accept the conditions")
        .required("Conditions is required"),
});

export default function QuoteForm() {
  const [formSuccess, setFormSuccess] = useState(false);

  async function _handleSubmit(
    values: {
        zip: string;
        language: string;
        help: string;
        property: string;
        name: string;
        email: string;
        phone: string;
        altPhone: string;
        address: string;
        city: string;
        state: string;
        country: string;
        conditions: boolean;
    },
    { resetForm }: { resetForm: () => void }
  ) {
    const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    });

    const result = await response.json();

    if (!result.success) {
        console.error("Error sending email:", result.error);
        return;
    }

    setFormSuccess(true);
    resetForm();
    setTimeout(() => setFormSuccess(false), 5000);
  }

    return (
        <Formik
            initialValues={{
                zip: "",
                language: "",
                help: "",
                property: "",
                name: "",
                email: "",
                phone: "",
                altPhone: "",
                address: "",
                city: "",
                state: "",
                country: "",
                conditions: false,
            }}
            onSubmit={_handleSubmit}
            validationSchema={validation}
        >
            {() => (
                <Form className="lg:w-[600px] bg-white text-black border border-black/10 p-6 col gap-7 lg:gap-6">
                    <h2 className="text-[26px] leading-[30px] font-semibold">
                        Shop, Price and pick the best  <br />
                        prices on your area.
                    </h2>

                    <div className="col gap-5 lg:gap-3.5">
                        <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-x-[12px] lg:gap-y-3.5">
                            <div className="col">
                                <label>Zip Code</label>
                                <Field
                                    name="zip"
                                    type="text"
                                    className="input-main"
                                    placeholder="Type Here"
                                />
                                <ErrorMessage name="zip" component="span" className="err" />
                            </div>

                            <div className="col">
                                <label>Do you speak English or spanish ?</label>
                                <Field
                                    as="select"
                                    name="language"
                                    className="input-main"
                                >   
                                    <option value="">Select</option>
                                    <option value="English">English</option>
                                    <option value="spanish">spanish</option>
                                </Field>
                                <ErrorMessage name="language" component="span" className="err" />
                            </div>
                        </div>

                        {/* Radios */}
                        <div className="col">
                            <label>Which on the following utilities do you need help?</label>
                            <label htmlFor="help-1" className="row gap-2 items-start lg:items-center">
                                <Field
                                    id='help-1'
                                    name="help"
                                    type="radio"
                                    value="Electricity and natural gas utilities"
                                    className="mt-1 lg:mt-0"
                                />
                                <span className="text-radio">Electricity and natural gas utilities</span>
                            </label>
                            <label htmlFor="help-2" className="row gap-2 items-start lg:items-center">
                                <Field
                                    id='help-2'
                                    name="help"
                                    type="radio"
                                    value="Internet and cable bills"
                                    className="mt-1 lg:mt-0"
                                />
                                <span className="text-radio">Internet and cable bills</span>
                            </label>
                            <label htmlFor="help-3" className="row gap-2 items-start lg:items-center">
                                <Field
                                    id="help-3"
                                    name="help"
                                    type="radio"
                                    value="Home warranty or security"
                                    className="mt-1 lg:mt-0"
                                />
                                <span className="text-radio">Home warranty or security</span>
                            </label>
                            <label htmlFor="help-4" className="row gap-2 items-start lg:items-center">
                                <Field
                                    id="help-4"
                                    name="help"
                                    type="radio"
                                    value="Im a new homeowner and I need to set up my utilities"
                                    className="mt-1 lg:mt-0"
                                />
                                <span className="text-radio">Im a new homeowner and I need to set up my utilities</span>
                            </label>
                            <ErrorMessage name="help" component="span" className="err" />
                        </div>

                        <div>
                            <label>Do you own a home or live in a rented property ?</label>
                            <Field 
                                as="select"
                                name="property"
                                className="input-main"
                            >
                                <option value="">Select</option>
                                <option value="I own a house">I own a house</option>
                                <option value="I live in a rented property">I live in a rented property</option>
                            </Field>
                            <ErrorMessage name="property" component="span" className="err" />
                        </div>

                        <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-3 lg:gap-x-[12px] lg:gap-y-3.5">
                            <div className="col">
                                <label>Name</label>
                                <Field
                                    name="name"
                                    type="text"
                                    className="input-main"
                                    placeholder="Type Here"
                                />
                                <ErrorMessage name="name" component="span" className="err" />
                            </div>

                            <div className="col">
                                <label>Your email</label>
                                <Field
                                    name="email"
                                    type="email"
                                    className="input-main"
                                    placeholder="Type Here"
                                />
                                <ErrorMessage name="email" component="span" className="err" />
                            </div>

                            <div className="col">
                                <label>Phone</label>
                                <Field
                                    name="phone"
                                    type="text"
                                    className="input-main"
                                    placeholder="Type Here"
                                />
                                <ErrorMessage name="phone" component="span" className="err" />
                            </div>

                            <div className="col">
                                <label>Alt Phone</label>
                               <Field
                                    name="altphone"
                                    type="text"
                                    className="input-main"
                                    placeholder="Type Here"
                                />
                                <ErrorMessage name="altPhone" component="span" className="err" />
                            </div>

                            <div className="col">
                                <label>Address</label>
                                <Field
                                    name="address"
                                    type="text"
                                    className="input-main"
                                    placeholder="Type Here"
                                />
                                <ErrorMessage name="address" component="span" className="err" />
                            </div>

                            <div className="col">
                                <label>City</label>
                               <Field
                                    name="city"
                                    type="text"
                                    className="input-main"
                                    placeholder="Type Here"
                                />
                                <ErrorMessage name="city" component="span" className="err" />
                            </div>

                            <div className="col">
                                <label>State</label>
                                <Field
                                    name="state"
                                    type="text"
                                    className="input-main"
                                    placeholder="Type Here"
                                />
                                <ErrorMessage name="state" component="span" className="err" />
                            </div>

                            <div className="col">
                                <label>Country</label>
                               <Field
                                    name="country"
                                    type="text"
                                    className="input-main"
                                    placeholder="Type Here"
                                />
                                <ErrorMessage name="country" component="span" className="err" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="conditions" className="row gap-2 items-start cursor-pointer !mb-0">
                            <Field 
                                id="conditions"
                                name="conditions"
                                type="checkbox"
                            />
                            <p className="text-sm leading-[16px] text-[#828282]">I agree to be contacted about utility services and offers. My consent is not a condition of purchase.</p>
                        </label>
                        <ErrorMessage name="conditions" component="span" className="err" />
                    </div>

                    {formSuccess && (
                        <div className="text-center text-green-600 bg-green-100 text-sm font-medium py-2">
                            Your request was sent successfully!
                        </div>
                    )}

                    <button type="submit" className="button-main !py-3 ml-auto">
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
}
