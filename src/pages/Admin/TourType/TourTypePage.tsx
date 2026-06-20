/* eslint-disable @typescript-eslint/no-explicit-any */
import { DeleteAlert } from '@/components/DeleteAlert'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import {
  useDeleteTourTypeMutation,
  useGetAllTourTypeQuery
} from '@/redux/features/tour/tour.api'
import { Edit } from 'lucide-react'

const TourTypePage = () => {
  const { data: tourTypes } = useGetAllTourTypeQuery(undefined)
  const [deleteTour] = useDeleteTourTypeMutation()
  const handleDeleteTour = async (id: string) => {
    await deleteTour(id)
  }
  return (
    <div>
      <div className='max-w-5xl mx-auto mt-10'>
        <div className='flex justify-between items-center'>
          <h2 className='mb-4 font-semibold text-2xl'>Add Tour Type</h2>
          <Button className='mb-4'>Add Tour Type</Button>
        </div>
        <Table className='border'>
          <TableHeader className='bg-muted'>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className='text-right'>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tourTypes?.data.map((tourType: any) => (
              <TableRow>
                <TableCell
                  key={tourType.id}
                  className='font-medium'>
                  {tourType.name}
                </TableCell>
                <TableCell className='text-end gap-2 flex justify-end'>
                  <Button
                    variant='outline'
                    className='rounded-sm cursor-pointer'
                    size='icon'>
                    <Edit />
                  </Button>
                  <DeleteAlert
                    onConfirm={() => handleDeleteTour(tourType._id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
export default TourTypePage
