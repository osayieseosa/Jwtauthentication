import {useState} from 'react';
import axios from '../api/axios';

const FULLNAME_REGEX = /^[a-z ,.'-]+$/i

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const useRegister = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
    });

    const [isLoading, setIsLoading] = useState(false)
    const [errMsg, setErrMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

    const handleChange = (e) => {
        const  {name, value} = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        setIsLoading(true)
        e.preventDefault()

        try {
        if(!FULLNAME_REGEX.test(formData.fullname)){
          setIsLoading(false)
          setErrMsg("Please Enter Your Full Name e.g John Doe")
        }else if(!EMAIL_REGEX.test(formData.email)){
          setIsLoading(false)
          setErrMsg("Enter valid Email Address")
        }else{
            
          await axios.post('/register',formData,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          })
          
          setFormData({
              fullname: '',
              email: '',
              password: ''
          })
  
          setIsLoading(false)
          setSuccessMsg('Registration successfull please check your email to activate your account')
        }

        } catch (error) {
            setIsLoading(false);
      if (!error?.response) {
        setErrMsg("Check Internet Connection");
      } else if (error.response?.status === 400) {
        setErrMsg("Please fill out all fields");
      } else if (error.response?.status === 409) {
        setErrMsg("Account already exists with this email");
      }else {
        setErrMsg("sign up Failed");
      }
        }

    }

    return {
        isLoading,
        errMsg,
        successMsg,
        formData,
        handleChange,
        handleSubmit
    }
}

export default useRegister;