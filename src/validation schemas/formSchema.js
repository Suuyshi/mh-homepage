import * as Yup from "yup";

export default Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name should be 3 characters or more"),
  email: Yup.string()
    .required("Email is required")
    .min(3, "Email should be 3 characters or more"),
  phoneNumber: Yup.string()
    .required("Phone is required")
    .min(11, "Phone is invalid"),
  budget: Yup.string().required("Budget is required"),
  message: Yup.string().required("Message is required"),
  consent: Yup.bool().oneOf(
    [true],
    "You need to agree to the processing of personal data"
  ),
});
