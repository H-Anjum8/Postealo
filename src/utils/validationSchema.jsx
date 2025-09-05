import * as Yup from 'yup';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;

export const getValidationSchema = formType => {
  switch (formType) {
    case 'signup':
      return Yup.object().shape({
        fullName: Yup.string().required('Full name required'),
        email: Yup.string().email('Invalid email').required('Email required'),
        phone: Yup.string().required('Phone number required'),
        password: Yup.string()
          .min(6, 'Minimum 6 characters')
          .required('Password required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm your password'),
      });
    case 'login':
      return Yup.object().shape({
        email: Yup.string()
          .required('Phone number or email is required')
          .test(
            'email-or-phone',
            'Enter a valid email or phone number',
            value =>
              !!value &&
              (Yup.string().email().isValidSync(value) ||
                /^[0-9]{10,14}$/.test(value)),
          ),
        password: Yup.string()
          .min(6, 'Minimum 6 characters')
          .required('Password required'),
      });
    case 'personalInfo':
      return Yup.object().shape({
        fullName: Yup.string().required('Full name is required'),
        phone: Yup.string().required('Phone number is required'),
        education: Yup.string().required('Education is required'), // 👈 added
        experience: Yup.string().required('Experience is required'),
        skills: Yup.string().required('Skills are required'),
        preferredLocation: Yup.string().required(
          'Preferred location is required',
        ),
      });
    case 'emailUpdate':
      return Yup.object().shape({
        email: Yup.string()
          .email('Invalid email')
          .required('Email is required'),
      });
    case 'verifyotp':
      return Yup.object().shape({
        otp: Yup.array()
          .of(Yup.string().length(1, 'Must be 1 digit'))
          .min(5, 'OTP must be 5 digits')
          .max(5, 'OTP must be 5 digits')
          .test('all-filled', 'Enter all 5 digits', value =>
            value.every(v => v !== ''),
          ),
        otp: Yup.string()
          .length(5, 'Enter 5 digit code')
          .required('OTP is required'),
      });
    case 'add_email':
      return Yup.object().shape({
        email: Yup.string()
          .transform(value => value.trim()) // Apply trim during validation
          .matches(emailRegex, 'Invalid email format')
          .required('Email is required'),
      });
    case 'signup_verify_otp':
      return Yup.object().shape({
        otp: Yup.array()
          .of(
            Yup.string().required(''), // Empty string means no per-digit error
          )
          .test('all-filled', 'Please enter all 6 digits', value => {
            if (!value) return false;
            return value.every(v => v !== '');
          }),
      });
    case 'newpassword':
      return Yup.object().shape({
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required'),
      });
    case 'personal_information':
      return Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
          .email('Enter a valid email')
          .required('Email is required'),
        phone: Yup.string()
          .matches(
            /^\d{3}[-–]\d{3}[-–]\d{4}$/,
            'Phone must be in 111–111–1111 format',
          )
          .required('Phone number is required'),
      });

    default:
      return Yup.object();
  }
};
