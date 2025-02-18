import CategoryTable from '@/components/categoryTable/CategoryTable'
import ComponentCard from '@/components/common/ComponentCard'
import PageBreadcrumb from '@/components/common/PageBreadCrumb'
import OrdersTable from '@/components/orders/ordersTable/OrdersTable'
import React from 'react'

const page = () => {
  return (
    <div>
      <PageBreadcrumb pageTitle="Orders List" />
      <div className="space-y-6">
        <ComponentCard title="Orders">
          <OrdersTable />
        </ComponentCard>
      </div>
    </div>
  )
}

export default page
