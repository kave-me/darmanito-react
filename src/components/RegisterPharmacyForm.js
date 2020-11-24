import React, {useState} from 'react';
import {useFormik} from 'formik';
import RegisterPharmacy from './forms/RegisterPharmacy';
import RegisterPharmacyDetail from './forms/RegisterPharmacyDetail';
import RegisterPharmacyConfirm from './forms/RegisterPharmacyConfirm';

const RegisterPharmacyForm = () => {
  const [info, setInfo] = useState(
    {
      step:0,
    });
    const formik = useFormik({
      initialValues: {
          fullName: '',
          medicId: 0,
          placeName: '',
          placePhone: '',
          city: '',
          district: '',
          fullAddress: '',
          isBoarding: false,
          openingHour: 8,
          closingHour: 20,
          photo: null
      },
      // validationSchema: {},
      onSubmit: values => {alert(JSON.stringify(values));},
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
          prevStep={() => prevStep(info)}/>);
      default:
        return(<RegisterPharmacy
          formik={formik}
          nextStep={() => nextStep(info)}
          prevStep={() => prevStep(info)}/>);
    }
};

export default RegisterPharmacyForm;