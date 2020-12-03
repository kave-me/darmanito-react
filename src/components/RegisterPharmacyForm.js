import React, {useState} from 'react';
import {useFormik} from 'formik';
import RegisterPharmacy from './forms/RegisterPharmacy';
import RegisterPharmacyDetail from './forms/RegisterPharmacyDetail';
import RegisterPharmacyConfirm from './forms/RegisterPharmacyConfirm';
import * as Yup from 'yup';

const RegisterPharmacyForm = () => {
  const [info, setInfo] = useState(
    {
      step:0,
    });
    const formik = useFormik({
      initialValues: {
          fullName: '',
          medicId: '',
          placeName: '',
          placePhone: '',
          city: '',
          district: '',
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
      }),
      onSubmit: values => alert(JSON.stringify(values)),
  });

    const nextStep = (state) => {
      let {step} = state;
      step = step >= 2 || step < 0
             ? 2
             : step+1;
      return(setInfo({...state, step:step}));
    }

    const prevStep = (state) => {
      let {step} = state;
      step = step > 2 || step <= 0
             ? 0
             : step-1;
      return(setInfo({...state, step:step}));
    }
    const stepZero = (state) => {
      let {step} = state;
      step = 0;
      return(setInfo({...state, step:step}));
    }

    switch (info.step) {
      case 0:
        return(<RegisterPharmacy
          formik={formik}
          nextStep={() => nextStep(info)}
          prevStep={() => prevStep(info)}/>);
      case 1:
        return(<RegisterPharmacyDetail
          formik={formik}
          nextStep={() => nextStep(info)}
          prevStep={() => prevStep(info)}/>);
      case 2:
        return(<RegisterPharmacyConfirm
          formik={formik}
          nextStep={() => nextStep(info)}
          prevStep={() => prevStep(info)}
          stepZero={() => stepZero(info)}/>);
      default:
        return(<RegisterPharmacy
          formik={formik}
          nextStep={() => nextStep(info)}
          prevStep={() => prevStep(info)}/>);
    }
};

export default RegisterPharmacyForm;