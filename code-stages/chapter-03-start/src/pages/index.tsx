import React from 'react';
import { Button } from '@/components/button/button';
import { InputField } from '@/components/form';
import { Link } from '@/components/link';

const LandingPage = () => {
  return (
    <>
      <Button variant="solid" type="button">
        Click me
      </Button>
      <br />
      <InputField />
      <br />
      <Link />
    </>
  );
};

export default LandingPage;
