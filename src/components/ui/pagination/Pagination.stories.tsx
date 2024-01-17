import { useState } from 'react'

import { Pagination, PaginationProps } from '@/components/ui/pagination/Pagination'
import { options } from '@/pages/decks/decksBody/selectorConstants.types'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  argTypes: {},
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
}

export default meta
type Story = StoryObj<typeof meta>
export const PaginationComponent: Story = (args: PaginationProps) => {
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState(10)

  return (
    <>
      <Pagination
        {...args}
        availablePageSizes={options}
        currentPage={page}
        onChangePageSize={pageSize => setPageSize(+pageSize)}
        onPageChange={page => setPage(+page)}
        pageSize={pageSize}
        siblingCount={2}
        totalCount={10000}
      />
    </>
  )
}
