import CategoryTable from '@/components/categoryTable/CategoryTable'
import ComponentCard from '@/components/common/ComponentCard'
import PageBreadcrumb from '@/components/common/PageBreadCrumb'
import React from 'react'

const CategoryList = () => {
  return (
    <div>
      <div>
      <PageBreadcrumb pageTitle="Categories List" />
      <div className="space-y-6">
        <ComponentCard title="Categories">
          <CategoryTable />
        </ComponentCard>
      </div>
    </div>
    </div>
  )
}

export default CategoryList
