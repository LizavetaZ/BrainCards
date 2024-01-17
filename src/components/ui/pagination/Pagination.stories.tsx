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

type DefaultPaginationArgs = {
  availablePageSizes: number[]
  currentPage: number
  onChangePageSize: () => void
  onPageChange: () => void
  pageSize: number
  siblingCount: number
  totalCount: number
}

type DefaultPaginationComponentStory = StoryObj<PaginationProps>
export const PaginationComponent: DefaultPaginationComponentStory = (
  args: DefaultPaginationArgs
) => {
  const [page, setPage] = useState<number>(args.currentPage)
  const [pageSize, setPageSize] = useState(args.pageSize)

  return (
    <>
      <Pagination
        {...args}
        availablePageSizes={args.availablePageSizes}
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

PaginationComponent.args = {
  availablePageSizes: options,
  currentPage: 1,
  onChangePageSize: () => {},
  onPageChange: () => {},
  pageSize: 10,
  siblingCount: 2,
  totalCount: 10000,
}
