export const Error = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center mr-3 rounded-md p-3 mb-3 font-bold uppercase '>
        <p>{children}</p>
    </div>
  )
}
