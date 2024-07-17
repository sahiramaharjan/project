import React, {useState} from 'react'
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Confirm from './Confirm';

const RegisterForm = () => {
    const [step, setStep] = useState(1);
    const [formValues, setFormValues] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      event: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);
  
    const submit = () => {
      console.log('Form submitted:', formValues);
      alert("Form successfully submitted")
    };
  
    switch (step) {
      case 1:
        return <Form1 nextStep={nextStep} handleChange={handleChange} values={formValues} />;
      case 2:
        return <Form2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formValues} />;
      case 3:
        return <Form3 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formValues} />;
      case 4:
        return <Confirm prevStep={prevStep} submit={submit} values={formValues} />;
      default:
        return <Form1 nextStep={nextStep} handleChange={handleChange} values={formValues} />;
    }
  };
  

export default RegisterForm