import { useFormik } from "formik"
import * as Yup from "yup";
import Button from "./ButtonComponent";

const validationSchema = Yup.object({
    sender: Yup.string().required("Sender Name is required"),
    receiver: Yup.string().required("Reciever Name is required"),
    sourceLocation: Yup.string().required("Source location is required"),
    destinationLocation: Yup.string().required("Destination location is required")
})
const AddPackageForm =()=>{
    
    const formik =useFormik({
        initialValues: {
            sender: '',
            receiver: '',
            sourceLocation: '',
            destinationLocation: ''
        },
        validationSchema,
        onSubmit: values => {
            console.log(values)
        },
     
    })
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
          <h2 className="text-lg font-bold mb-4">Add New Package</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Sender Name</label>
                <input
                  type="text"
                  name="sender"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.sender}
                  className="p-2 border rounded w-full"
                />
                {formik.touched.sender && formik.errors.sender && (
                  <p className="text-red-500 text-sm">{formik.errors.sender}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Receiver Name</label>
                <input
                  type="text"
                  name="receiver"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.receiver}
                  className="p-2 border rounded w-full"
                />
                {formik.touched.receiver && formik.errors.receiver && (
                  <p className="text-red-500 text-sm">{formik.errors.receiver}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Source Location</label>
                <input
                  type="text"
                  name="source"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.source}
                  className="p-2 border rounded w-full"
                />
                {formik.touched.source && formik.errors.source && (
                  <p className="text-red-500 text-sm">{formik.errors.source}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Destination Location</label>
                <input
                  type="text"
                  name="destination"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.destination}
                  className="p-2 border rounded w-full"
                />
                {formik.touched.destination && formik.errors.destination && (
                  <p className="text-red-500 text-sm">{formik.errors.destination}</p>
                )}
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button onClick={handleSubmit} type="submit" className="bg-green-500 text-white" buttonText={'Save'}/>
            </div>
          </form>
        </div>
      </div>
    )
}
export default AddPackageForm