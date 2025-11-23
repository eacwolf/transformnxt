import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
}

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        return value.trim() === '' ? `${name === 'firstName' ? 'First' : 'Last'} name is required` : undefined;
      case 'dateOfBirth':
        return value === '' ? 'Date of Birth is required' : undefined;
      case 'email':
        return !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? 'Please enter a valid email address' : undefined;
      case 'phoneNumber':
        return !value.match(/^\+?[\d\s-]{10,}$/) ? 'Please enter a valid phone number' : undefined;
      case 'password':
        return !value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/)
          ? 'Password must be 8-16 characters and include at least one uppercase letter, lowercase letter, number, and special character'
          : undefined;
      case 'confirmPassword':
        return value !== formData.password ? 'Passwords do not match' : undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    setFormErrors(prev => ({
      ...prev,
      [name]: validateField(name as keyof FormData, value)
    }));

    // Validate confirm password when password changes
    if (name === 'password' && formData.confirmPassword) {
      setFormErrors(prev => ({
        ...prev,
        confirmPassword: formData.confirmPassword !== value ? 'Passwords do not match' : undefined
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errors: FormErrors = {};
    
    Object.keys(formData).forEach((key) => {
      if (key !== 'message') {
        const error = validateField(key as keyof FormData, formData[key as keyof FormData]);
        if (error) errors[key as keyof FormErrors] = error;
      }
    });

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8 space-y-8">
        <div>
          <div className="mx-auto mb-3 flex items-center justify-center">
            <img
              src="/assets/logo/transform-logo.png"
              alt="TransformNXT"
              className="h-10 w-auto opacity-95"
              style={{ filter: 'grayscale(20%)', borderRadius: 6 }}
            />
          </div>
          <h2 className="mt-1 text-center text-2xl font-bold text-zinc-900">
            {isLogin ? 'Welcome back' : 'Create your account'}
          </h2>
          <p className="mt-2 text-center text-sm text-zinc-600">
            {isLogin ? 'Sign in to your account' : 'Sign up for TransformNXT'}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {!isLogin && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-zinc-700">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm py-2 px-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500"
                    />
                    {formErrors.firstName && <p className="mt-1 text-sm text-red-600">{formErrors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-zinc-700">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm py-2 px-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500"
                    />
                    {formErrors.lastName && <p className="mt-1 text-sm text-red-600">{formErrors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-zinc-700">
                    Date of Birth *
                  </label>
                  <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    required
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm py-2 px-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500"
                  />
                  {formErrors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{formErrors.dateOfBirth}</p>}
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-zinc-700">
                    Phone Number *
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm py-2 px-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500"
                    placeholder="+91 91234 56789"
                  />
                  {formErrors.phoneNumber && <p className="mt-1 text-sm text-red-600">{formErrors.phoneNumber}</p>}
                </div>
              </>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                Email address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm py-2 px-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500"
                placeholder="you@company.com"
              />
              {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-700">
                Password *
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm py-2 px-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500"
                placeholder="••••••••"
              />
              {formErrors.password && <p className="mt-1 text-sm text-red-600">{formErrors.password}</p>}
            </div>

            {!isLogin && (
              <>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-zinc-700">
                    Confirm Password *
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm py-2 px-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500"
                    placeholder="••••••••"
                  />
                  {formErrors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.confirmPassword}</p>
                  )}
                </div>

                {/* Message field removed per request */}
              </>
            )}
          </div>

          {isLogin && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-zinc-700">
                  Remember me
                </label>
              </div>
              <button type="button" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
                Forgot password?
              </button>
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
            >
              {isLogin ? 'Sign in' : 'Sign up'}
            </button>
          </div>
        </form>

        <div className="text-center">
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setFormData({
                firstName: '',
                lastName: '',
                dateOfBirth: '',
                email: '',
                phoneNumber: '',
                password: '',
                confirmPassword: '',
                message: ''
              });
              setFormErrors({});
            }}
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
          >
            {isLogin 
              ? "Don't have an account? Sign up" 
              : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}
