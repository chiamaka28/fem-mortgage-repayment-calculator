'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from '../ui/Radiogroup';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type TMortgageType = 'Repayment' | 'Interest Only';

type FormValues = {
  mortgageAmount: string;
  mortgageTerm: string;
  interestRate: string;
  mortgageType: TMortgageType;
};

const schema = yup.object().shape({
  mortgageAmount: yup.string().required('This field is required'),
  mortgageTerm: yup.string().required('This field is required'),
  interestRate: yup.string().required('This field is required'),
  mortgageType: yup
    .string()
    .oneOf(['Repayment', 'Interest Only'], 'Please select a query type.')
    .required('This field is required'),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormValues) => {
    console.log('yessss');
    console.log(data);
  };
  return (
    <div className='md:w-[740px] lg:w-[800px] md:flex md:rounded-2xl overflow-hidden md:bg-white'>
      <div className='w-[90%] md:w-[50%] md:bg-white mx-auto py-3 md:p-8'>
        <div className='md:flex md:justify-between md:items-center'>
          <h2 className='text-Slate900 text-xl'>Mortgage Calculator</h2>
          <button className='border-none underline text-Slate700 text-sm '>
            Clear All
          </button>
        </div>
        <form className='my-3' onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='amount' className='text-Slate700 text-sm'>
            Mortgage Amount
          </label>
          <div className='relative overflow-hidden mt-2 '>
            <input
              type='text'
              id='amount'
              {...register('mortgageAmount')}
              className={` ${
                errors.mortgageAmount
                  ? 'border-red mb-0'
                  : 'border-Slate700 mb-4'
              } w-full block h-10 rounded-md px-14 text-Slate900 border border-Slate700 focus:outline-none focus:border-lime`}
            />
            <span
              className={` ${
                errors.mortgageAmount
                  ? 'bg-red text-white'
                  : 'bg-Slate100 text-Slate700'
              } bg-Slate100 custom-span  text-Slate700 w-10 h-[38px] absolute left-[1px] top-[1px] flex justify-center items-center rounded-l-md`}
            >
              £
            </span>
          </div>
          <span className='text-xs text-red mb-6'>
            {errors.mortgageAmount?.message}
          </span>
          <div className='md:flex md:justify-between md:gap-4'>
            <div>
              <label htmlFor='term' className='text-Slate700 text-sm'>
                Mortgage Term
              </label>
              <div className='relative mt-2'>
                <input
                  type='text'
                  id='term'
                  {...register('mortgageTerm')}
                  className={` ${
                    errors.mortgageTerm ? 'border-red' : 'border-Slate700'
                  } w-full block h-10 rounded-md px-3 text-Slate900 border border-Slate700 focus:outline-none focus:border-lime`}
                />
                <span
                  className={` ${
                    errors.mortgageTerm
                      ? 'bg-red text-white'
                      : 'bg-Slate100 text-Slate700'
                  } custom-span bg-Slate100 text-Slate700  px-2 h-[38px] absolute right-[1px] top-[1px] flex justify-center items-center rounded-r-md`}
                >
                  years
                </span>
              </div>
              <span className='text-xs text-red mb-6'>
                {errors.mortgageTerm?.message}
              </span>
            </div>
            <div>
              <label htmlFor='rate' className='text-Slate700 text-sm'>
                Mortgage Rate
              </label>
              <div
                className='relative mt-2 
               '
              >
                <input
                  type='text'
                  id='rate'
                  {...register('interestRate')}
                  className={`${
                    errors.interestRate ? 'border-red' : 'border-Slate700'
                  } w-full block h-10 rounded-md px-3 text-Slate900 border border-Slate700 focus:outline-none focus:border-lime`}
                />
                <span
                  className={`${
                    errors.interestRate
                      ? 'bg-red text-white'
                      : 'bg-Slate100 text-Slate700'
                  }  custom-span bg-Slate100 text-Slate700 w-10 h-[38px] absolute right-[1px] top-[1px] flex justify-center items-center rounded-r-md`}
                >
                  %
                </span>
              </div>
              <span className='text-xs text-red mb-6'>
                {errors.interestRate?.message}
              </span>
            </div>
          </div>
          {/* <fieldset className='text-Slate900 flex flex-col gap-2'>
            <legend className='text-Slate700 text-sm'>Mortgage Type</legend>
            <div className='border border-Slate700 hover:border-lime h-10 rounded-md flex items-center gap-2 px-3 mt-2'>
              <div className='relative'>
                <input
                  type='radio'
                  value='repayment'
                  id='repayment'
                  className='peer hidden'
                  {...register('mortgageType')}
                />
                <div className='w-4 h-4 bg-white border border-Slate700 peer-checked:border-lime peer-checked:bg-white rounded-full'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white peer-checked:bg-lime  rounded-full peer-checked:border peer-checked:border-lime'></div>
              </div>

              <label htmlFor='repayment'>Repayment</label>
            </div>
            <div className='border border-Slate700 hover:border-lime h-10 rounded-md flex items-center gap-2 px-3'>
              <div className='relative'>
                <input
                  type='radio'
                  value='interest'
                  id='interest'
                  className='peer hidden'
                  {...register('mortgageType')}
                />
                <div className='w-4 h-4 bg-white border border-Slate700 peer-checked:border-lime peer-checked:bg-white rounded-full'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white peer-checked:bg-lime  rounded-full peer-checked:border peer-checked:border-lime'></div>
              </div>
              <label htmlFor='interest'>Interest Only</label>
            </div>
          </fieldset> */}
          <fieldset className='mt-3'>
            <legend className='text-Slate700 text-sm'>Mortgage Type</legend>
            <RadioGroup
              className='mt-2'
              onValueChange={(value) => {
                setValue('mortgageType', value as TMortgageType);
              }}
            >
              <label
                className={`inline-flex w-full  h-10 items-center rounded-lg border border-Slate700  px-4 py-1`}
                htmlFor='general'
              >
                <RadioGroupItem
                  className='mx-1'
                  id='general'
                  value='Repayment'
                />
                <span className='text-Slate900 '>Repayment</span>
              </label>
              <label
                className={`inline-flex w-full  h-10 items-center rounded-lg border border-Slate700  px-4 py-1`}
                htmlFor='support'
              >
                <RadioGroupItem
                  className='mx-1'
                  id='support'
                  value='Interest Only'
                />
                <span className='text-Slate900 '>Interest Only</span>
              </label>
              <span className='text-xs text-red '>
                {errors.mortgageType?.message}
              </span>
            </RadioGroup>
          </fieldset>
          <div className='flex justify-center md:justify-start my-4 md:mt-10'>
            <button className='bg-lime text-Slate900 flex justify-center items-center gap-2 h-10 w-full md:w-60 rounded-3xl'>
              <img src='/icon-calculator.svg' alt='calculator-icon' />
              Calculate Repayments
            </button>
          </div>
        </form>
      </div>
      <div className='bg-Slate900 text-white flex flex-col items-center md:justify-center gap-3 px-6 py-6 md:w-[50%] md:rounded-bl-[80px]'>
        <div>
          <img src='/illustration-empty.svg' alt='' />
        </div>
        <h4>Results shown here</h4>
        <p className='text-center text-sm max-w-72'>
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>
      </div>
    </div>
  );
};

export default Form;
