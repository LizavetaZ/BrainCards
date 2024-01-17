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
export const DefaultPagination: Meta = {
  argTypes: {
    onChangePageSize: { action: 'onChangePageSize' },
    onPageChange: { action: 'onPageChange' },
  },
  args: {
    availablePageSizes: options,
    currentPage: 1,
    onChangePageSize: () => {},
    onPageChange: () => {},
    pageSize: 10,
    siblingCount: 2,
    totalCount: 10000,
  },
  component: Pagination,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  render: args => {
    const [pageSize, setPageSize] = useState(args.pageSize)
    const [currentPage, setCurrentPage] = useState<number>(args.currentPage)

    const handlePageSizeChange = (pageSize: number | string) => {
      setPageSize(+pageSize)
    }

    const handlePageChange = (page: number | string) => {
      setCurrentPage(+page)
    }

    return (
      <>
        <Pagination
          availablePageSizes={args.availablePageSizes}
          currentPage={currentPage}
          onChangePageSize={handlePageSizeChange}
          onPageChange={handlePageChange}
          pageSize={pageSize}
          siblingCount={args.siblingCount}
          totalCount={args.totalCount}
        />
      </>
    )
  },
  tags: ['autodocs'],
  title: 'Components/Pagination',
}
