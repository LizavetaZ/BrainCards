import { useState } from 'react'

import { Pagination } from '@/components/ui/pagination/Pagination'
import { options } from '@/pages/decks/decksBody/selectorConstants.types'
import { Meta } from '@storybook/react'

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta

export const Defalut = {
  render: () => {
    const [pageSize, setPageSize] = useState(10)
    const [currentPage, setCurrentPage] = useState<number>(1)

    return (
      <>
        <Pagination
          availablePageSizes={options}
          currentPage={currentPage}
          onChangePageSize={pageSize => setPageSize(+pageSize)}
          onPageChange={(currentPage: number | string) => setCurrentPage(+currentPage)}
          pageSize={pageSize}
          siblingCount={2}
          totalCount={10000}
        />
      </>
    )
  },
}
