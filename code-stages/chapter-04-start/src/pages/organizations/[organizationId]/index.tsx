import { Heading, Stack } from '@chakra-ui/react';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import React, { ReactElement } from 'react';

import { NotFound } from '@/components/not-found';
import { Seo } from '@/components/seo';
import { JobList, Job } from '@/components/features/jobs';
import { OrganizationInfo } from '@/features/organizations';
import { PublicLayout } from '@/components/layouts/public-layout';
import {
  getJobs,
  getOrganization,
} from '@/testing/test-data';

type PublicOrganizationPageProps =
  InferGetServerSidePropsType<typeof getServerSideProps>;

const PublicOrganizationPage = ({
  organization,
  jobs,
}: PublicOrganizationPageProps) => {
  if (!organization) {
    return <NotFound />;
  }

  return (
    <>
      <Seo title={organization.name} />
      <Stack
        spacing="4"
        w="full"
        maxW="container.lg"
        mx="auto"
        mt="12"
        p="4"
      >
        <OrganizationInfo organization={organization} />
        <Heading size="md" my="6">
          Open Jobs
        </Heading>
        <JobList
          jobs={jobs}
          organizationId={organization.id}
          type="public"
        />
      </Stack>
    </>
  );
};
