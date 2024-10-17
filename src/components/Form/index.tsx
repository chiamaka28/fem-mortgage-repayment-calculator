'use client';

import React from 'react';
import { RadioGroup, RadioGroupItem } from '../ui/Radiogroup';

const Form = () => {
  const handleSubmit = () => {
    console.log('submitted');
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
        <form onSubmit={handleSubmit} className='my-3'>
          <label htmlFor='amount' className='text-Slate700 text-sm'>
            Mortgage Amount
          </label>
          <div className='relative overflow-hidden mt-2 mb-4'>
            <input
              type='text'
              id='amount'
              className='w-full block h-10 rounded-md px-14 text-Slate900 border border-Slate700 focus:outline-none'
            />
            <span className='bg-Slate100 text-Slate700 w-10 h-[38px] absolute left-[1px] top-[1px] flex justify-center items-center rounded-l-md'>
              £
            </span>
          </div>
          <div className='md:flex md:justify-between md:gap-4'>
            <div>
              <label htmlFor='term' className='text-Slate700 text-sm'>
                Mortgage Term
              </label>
              <div className='relative mt-2 mb-4'>
                <input
                  type='text'
                  id='term'
                  className='w-full block h-10 rounded-md px-3 text-Slate900 border border-Slate700 focus:outline-none'
                />
                <span className='bg-Slate100 text-Slate700  px-2 h-[38px] absolute right-[1px] top-[1px] flex justify-center items-center rounded-r-md'>
                  years
                </span>
              </div>
            </div>
            <div>
              <label htmlFor='rate' className='text-Slate700 text-sm'>
                Mortgage Rate
              </label>
              <div
                className='relative mt-2 mb-4
               '
              >
                <input
                  type='text'
                  id='rate'
                  className='w-full block h-10 rounded-md px-3 text-Slate900 border border-Slate700 focus:outline-none'
                />
                <span className='bg-Slate100 text-Slate700 w-10 h-[38px] absolute right-[1px] top-[1px] flex justify-center items-center rounded-r-md'>
                  %
                </span>
              </div>
            </div>
          </div>
          <fieldset className='text-Slate900 flex flex-col gap-2'>
            <legend className='text-Slate700 text-sm'>Mortgage Type</legend>
            <div className='border border-Slate700 hover:border-lime h-10 rounded-md flex items-center gap-2 px-3 mt-2'>
              <input type='radio' name='' id='repayment' />
              <label htmlFor='repayment'>Repayment</label>
            </div>
            <div className='border border-Slate700 hover:border-lime h-10 rounded-md flex items-center gap-2 px-3'>
              <input type='radio' name='' id='interest' />
              <label htmlFor='interest'>Interest Only</label>
            </div>
          </fieldset>
          {/* <RadioGroup className='mt-2'>
            <label
              className={`inline-flex w-full  h-11 items-center rounded-lg border border-grey-500  px-4 py-1`}
              htmlFor='general'
            >
              <RadioGroupItem
                className='mx-1'
                id='general'
                value='General Enquiry'
              />
              <span className='text-[13px] text-grey-900 '>Repayment</span>
            </label>
            <label
              className={`inline-flex w-full  h-11 items-center rounded-lg border border-grey-500  px-4 py-1`}
              htmlFor='support'
            >
              <RadioGroupItem
                className='mx-1'
                id='support'
                value='Support Request'
              />
              <span className='text-[13px] text-grey-900'>Interest Only</span>
            </label>
          </RadioGroup> */}
          <div className='flex justify-center md:justify-start my-4'>
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
