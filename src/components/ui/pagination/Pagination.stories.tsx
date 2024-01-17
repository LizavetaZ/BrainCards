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
  onChangePageSize: (pageSize: number | string) => void
  onPageChange: (page: number | string) => void
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

  const onChangePageSize = (pageSize: number | string) => {
    setPageSize(+pageSize)
  }

  const onPageChange = (page: number | string) => {
    setPage(+page)
  }

  return (
    <>
      <Pagination
        availablePageSizes={args.availablePageSizes}
        currentPage={page}
        onChangePageSize={onChangePageSize}
        onPageChange={onPageChange}
        pageSize={pageSize}
        siblingCount={args.siblingCount}
        totalCount={args.totalCount}
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
