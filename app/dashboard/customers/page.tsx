import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import React from 'react';

export default async function CustomerPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query ?? '';
  const customers = await fetchFilteredCustomers(query);
  return <CustomersTable customers={customers} />;
}
