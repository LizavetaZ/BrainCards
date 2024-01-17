import { useState } from 'react'

import { Pagination, PaginationProps } from '@/components/ui/pagination/Pagination'
import { options } from '@/pages/decks/decksBody/selectorConstants.types'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const PaginationComponent: Story = (args: PaginationProps) => {
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState(10)
  // const options: OptionsType[] = [
  //   { title: '10', value: 'z10' },
  //   { title: '20', value: '20' },
  //   { title: '30', value: '30' },
  //   { title: '50', value: '50' },
  //   { title: '100', value: '100' },
  // ]

  return (
    <>
      <Pagination
        {...args}
        availablePageSizes={options}
        currentPage={page}
        onChangePageSize={pageSize => setPageSize(+pageSize)}
        onPageChange={(page: number | string) => setPage(+page)}
        pageSize={pageSize}
        siblingCount={2}
        totalCount={10000}
      />
    </>
  )
}
