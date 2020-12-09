import React, {useState} from 'react';
import {useFormik} from 'formik';
// import RegisterPharmacy from './forms/register-pharmacy';
// import RegisterPharmacyDetail from './forms/register-pharmacy-detail';
// import RegisterPharmacyConfirm from './forms/register-pharmacy-confirm';
import * as Yup from 'yup';
import Mandatory from './steps/mandatory';
import Complementary from './steps/complementary';
import Confirmation from './steps/confirmation';

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
        fullName: '',
        medicId: '',
        placeName: '',
        placePhone: '',
        city: 'Tehran',
        district: 'TehranD1',
        fullAddress: '',
        isBoarding: true,
        openingHour: 8,
        closingHour: 20,
        photo: 0
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
                .min(2, 'نام کوتاه است!')
                .required("فیلد اجباری است"),
      medicId: Yup.number()
               .typeError("فقط از اعداد استفاده کنید")
               .required("فیلد اجباری است"),
      placeName: Yup.string()
                 .required("فیلد اجباری است"),
      placePhone: Yup.number()
                  .required("فیلد اجباری است"),
      city: Yup.string()
            .required("فیلد اجباری است"),
      district: Yup.string()
                .required("فیلد اجباری است"),
      fullAddress: Yup.string()
                   .required("فیلد اجباری است"),
      isBoarding: Yup.boolean()
                  .required("فیلد اجباری است"),
      openingHour: Yup.number()
                  .typeError("فقط اعداد")
                  .min(0, "حداقل 0")
                  .max(24, "حداکثر 24")
                  .required("فیلد اجباری است"),
      closingHour: Yup.number()
                  .typeError("فقط اعداد")
                  .required("فیلد اجباری است"),
    }),
    onSubmit: values => alert(JSON.stringify(values)),
});
  const [step, setStep] = useState(0);

  const nextStep = (step) => {
    step = step >= 2 || step < 0
           ? 2
           : step+1;
    return(setStep(step));
  }

  const prevStep = (step) => {
    step = step > 2 || step <= 0
           ? 0
           : step-1;
    return(setStep(step));
  }
  const stepZero = (step) => {
    step = 0;
    return(setStep(step));
  }



    switch (step) {
      case 0:
        return(<Mandatory
          formik={formik}
          nextStep={() => nextStep(step)}
          prevStep={() => prevStep(step)}/>);
      case 1:
        return(<Complementary
          formik={formik}
          nextStep={() => nextStep(step)}
          prevStep={() => prevStep(step)}/>);
      case 2:
        return(<Confirmation
          formik={formik}
          nextStep={() => nextStep(step)}
          prevStep={() => prevStep(step)}
          stepZero={() => stepZero(step)}/>);
      default:
        return(<Mandatory
          formik={formik}
          nextStep={() => nextStep(step)}
          prevStep={() => prevStep(step)}/>);
        };
      }
  

export default RegisterForm;