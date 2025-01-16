
const Page = () => {
  return (
    <div className='w-screen h-screen overflow-hidden'>
        {/* <Image src={'/newImages/title.png'} height={1024} width={1024} className="h-full w-1/2"/> */}
        <div className='w-1/2 h-full bg-white py-8 px-16 font-semibold text-[120px] relative flex flex-col'>
           <div className='flex text-8xl font-bold pt-14 text-black'>
              Structural<br/>Health<br/>Monitoring<br/>System
           </div>
           <div className='h-2 w-3/4 bg-black rounded-3xl my-10'/>
            <div className='text-4xl font-light capitalize'>
                machine learning technique (KNN)
            </div>
        </div>
    </div>
  )
}

export default Page;
